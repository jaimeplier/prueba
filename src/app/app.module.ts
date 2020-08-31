import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FilterlistPipe } from './utils/filterlist.pipe';
import { GruposComponent } from './grupos/grupos.component';
import { AuthGuardService } from './utils/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpleadosComponent,
    FilterlistPipe,
    GruposComponent
  ],
  imports: [
    CommonModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
