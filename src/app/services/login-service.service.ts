import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  url: string = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  login(login: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(
      `${environment.apiBaseUrl}/Users/authenticate`,
      JSON.stringify(login),
      httpOptions
    );
  }

  refreshList() {
    return this.http.get(`${environment.apiBaseUrl}/Users/authenticate`); //.subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }
}

