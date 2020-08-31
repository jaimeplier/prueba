import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( public router: Router, private activatedRoute: ActivatedRoute) {}
  canActivate(): boolean {
    console.log(this.router);
    console.log(this.activatedRoute.snapshot.url);
    // if (this.router.url != '/empleados' && this.router.url != '/grupos') {
    //   this.router.navigate(['/home']);
    //   return false;
    // }
    return true;
  }
}
