import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ApplicationFormComponent } from '../application-form/application-form.component';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [HomeComponent, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  
}
