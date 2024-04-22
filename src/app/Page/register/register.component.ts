import { Component, OnInit, inject } from '@angular/core';
import { RegisterServiceService } from '../../services/register-service.service';
import { FormsModule } from '@angular/forms';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
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
    Phonenumber: '',
    pass: '',
    idNo: '',
    
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
          return EMPTY;
        })
      )
      .subscribe();
  }
}
