import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApplicationFormService {
  url: string = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  applicationForm(applicationForm: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(
      `${environment.apiBaseUrl}/ApplicationForm`,
      JSON.stringify(applicationForm),
      httpOptions
    );
  }
  refreshList() {
    return this.http.get(`${environment.apiBaseUrl}/Users/register`); 
  }
}
