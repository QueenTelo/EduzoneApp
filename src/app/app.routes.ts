import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Page/register/register.component';
import { LoginComponent } from './Page/login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './Page/home/home.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', component: PagenotfoundComponent },
];

