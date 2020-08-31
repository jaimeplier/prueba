import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiProvider } from 'src/app/api';
import * as M from 'materialize-css/dist/js/materialize';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit, AfterViewInit {
  results;
  empleados;
  paginas;
  nuevoUsuario;

  constructor(public api: ApiProvider, private fb: FormBuilder) { }

  ngOnInit() {
    this.actualizarEmpleados();
    this.nuevoUsuario = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      last_name: ['', [Validators.required, Validators.maxLength(30)]],
      birthday: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
    const elems = document.querySelectorAll('.datepicker');
    const instances = M.Datepicker.init(elems, {
      format: 'yyyy-mm-dd',
      onSelect: (date) => {
          this.formatDate(date);
        }
  });
  }

  getPage(page: number) {
    const el = page * 10;
    this.empleados = this.results.slice(el, el + 10);
  }

  getNumberPages() {
     const num = Math.ceil(this.results.length / 10);
     this.paginas = Array(num).fill(0).map((x, i) => i);
  }

  actualizarEmpleados() {
    this.api.getData().subscribe( (res: any) => {
      this.results = res.response.data.employees;
      console.log(this.results);
      this.getPage(0);
      this.getNumberPages();
    });
  }

  postUser() {
    console.log(this.nuevoUsuario.value);
    this.api.sendData(this.nuevoUsuario.value).subscribe( (res: any) => {
      console.log(res);
      this.actualizarEmpleados();
    });
  }

  formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    this.nuevoUsuario.patchValue({birthday: [year, month, day].join('/')});
  }
}
