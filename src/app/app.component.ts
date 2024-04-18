import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './Page/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'EduzoneApp';

  }

