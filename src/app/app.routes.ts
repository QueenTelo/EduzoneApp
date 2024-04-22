import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Page/register/register.component';
import { LoginComponent } from './Page/login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './Page/home/home.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', component: PagenotfoundComponent },
];

