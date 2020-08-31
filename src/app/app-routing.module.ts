import { GruposComponent } from './grupos/grupos.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './utils/auth-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'empleados', component: EmpleadosComponent, canActivate: [AuthGuard] },
  { path: 'grupos', component: GruposComponent, canActivate: [AuthGuard]},
  { path: '**' , redirectTo: '/home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
