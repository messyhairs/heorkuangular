import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  api = 'https://fringuante-chaise-26476.herokuapp.com';
  // api = 'https://localhost:8080';

  getdatas() {
    return this.http.get(this.api + '/' + 'getdatas');
  }
}
