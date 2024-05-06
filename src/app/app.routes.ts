import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Page/register/register.component';
import { LoginComponent } from './Page/login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './Page/home/home.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationFormComponent } from './Page/application-form/application-form.component';
import { NavBarComponent } from './Page/nav-bar/nav-bar.component';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'application-form', component: ApplicationFormComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pagenotfound', component: PagenotfoundComponent },
  { path: 'about', component: PagenotfoundComponent },
  { path: 'contact', component: PagenotfoundComponent },
  { path: 'payments', component: PagenotfoundComponent },
  { path: 'newsletter', component: PagenotfoundComponent },
];

