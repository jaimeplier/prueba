import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  // @ViewChild('carousel', { read: ElementRef, static: true }) elCarousel: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const elems = document.querySelectorAll('.carousel');
    const instances = M.Carousel.init(elems, );
  }

}
