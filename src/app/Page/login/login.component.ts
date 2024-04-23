import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginServiceService } from '../../services/login-service.service';
import { FormsModule } from '@angular/forms';
import { EMPTY, catchError, identity } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HomeComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  public service: LoginServiceService = inject(LoginServiceService);
  public router: Router = inject(Router);
  login = {
    Email: '',
    Password: ''
  };
  ngOnInit(): void {
    this.service.refreshList();
  }
  loginSave() {
    // console.log(this.registration);
    this.service
      .login(this.login)
      .pipe(
        catchError((err) => {
          console.error(err);
          return EMPTY;
        })
      )
      .subscribe();
 
  }

  if(){
    this.router.navigate(['/home']).then();
  }elseif(){

  }
}
