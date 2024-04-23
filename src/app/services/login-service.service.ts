import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  url: string = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  register(register: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(
      `${environment.apiBaseUrl}/Users`,
      JSON.stringify(register),
      httpOptions
    );
  }
}
