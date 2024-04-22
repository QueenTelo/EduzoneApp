import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RegisterServiceService {
  url: string = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  register(register: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(
      `${environment.apiBaseUrl}/Register`,
      JSON.stringify(register),
      httpOptions
    );
  }

  refreshList() {
    return this.http.get(`${environment.apiBaseUrl}/Register`); //.subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }
}
