import { Component, OnInit, inject } from '@angular/core';
import { RegisterServiceService } from '../../services/register-service.service';
import { FormsModule } from '@angular/forms';
import { EMPTY, catchError, identity } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  public service: RegisterServiceService = inject(RegisterServiceService);
  registration = {
    name: '',
    surname: '',
    email: '',
    password: '',
    phoneNumber: '',
    passportNumber: '',
    identityNumber: ''
  };
  ngOnInit(): void {
    this.service.refreshList();
  }
  save() {
    // console.log(this.registration);
    this.service
      .register(this.registration)
      .pipe(
        catchError((err) => {
          console.error(err);
          alert('email exists');
          return EMPTY;
        })
      )
      .subscribe();
  }
}
