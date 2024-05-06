import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ApplicationFormService } from '../../services/application-form.service';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-application-form',
  standalone: true,
  imports: [ RouterLink, NavBarComponent, CommonModule, FormsModule],
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.css'
})
export class ApplicationFormComponent implements OnInit {

  public service: ApplicationFormService = inject(ApplicationFormService);
  public router: Router = inject(Router);

  ApplicantName: any;

  application = {
    ApplicantName : '',
    ApplicantSurname: '', 
    ApplicantDateOfBirth: '', 
    ApplicantGender : '',
    ApplicantPhoneNumber : '',
    ApplicantEmail : '',
    ApplicantIDNo : '',
    ApplicantPassPortNumber: '', 
    ApplicantAddressStreetName1: '',
    ApplicantAddressStreetName2: '', 
    ApplicantAddressPostZipCode: '', 
    ApplicantAddressCity: '', 
    ApplicantGradeLevel: '', 
    ApplicantSchoolYear: '', 
    ApplicantAge: ''
  }




  ngOnInit(): void {
    this.service.refreshList();
  }

 
  applicationSave() {
    // console.log(this.registration);
    this.service
      .applicationForm(this.application)
      .pipe(
        catchError((err) => {
          console.error(err);
          return EMPTY;
        })
      )
      .subscribe();
      this.router.navigate(['/home']).then();
 
  }

}
