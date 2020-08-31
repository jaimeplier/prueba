import { HttpClient } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Inject, Injectable, HostListener} from '@angular/core';

// import {HttpClient, } from '';
import {Observable} from 'rxjs/internal/Observable';

import {environment} from '../environments/environment';
import {zip} from 'rxjs';
import {of as observableOf} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProvider {

  constructor(
    public http: HttpClient
  ) {

  }

  handleError(error) {
    switch (error.status) {
      case 0:
        this.handleOfflineError(error);
        break;
      case 500:
        this.handleInternalError(error);
        break;
    }

    throw error;

    // return Observable.empty();
  }

  handleInternalError(error) {
    this.presentErrorAlert('Ocurrio un error interno. Intente de nuevo.');
  }


  handleOfflineError(error ) {
    this.presentErrorAlert('Verifique conexión a internet!');
  }

  private presentErrorAlert(message: string) {
    alert(message);
  }


  public getData() {

    const url = new URL(`${environment.ENDPOINT}`);
    console.log(environment.ENDPOINT);
    return this.http.get(environment.ENDPOINT).pipe(
      map((response) => {
        return {
          response
        };
      }));
  }
  public sendData(data) {

    const url = new URL(`${environment.ENDPOINT}`);
    console.log(environment.ENDPOINT);
    return this.http.post(environment.ENDPOINT, data).pipe(
      map((response) => {
        return {
          response
        };
      }));
  }

}
