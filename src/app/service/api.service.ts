import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Details } from './details';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  api = 'https://fringuante-chaise-26476.herokuapp.com/movie';
  // api = 'https://localhost:4000/movie';

  getdatas() {
    return this.http.get(this.api + '/' + 'getmovies');
  }
  postmovie(moviedetails: Details) {
    return this.http.post(this.api + '/postmovies', moviedetails);
  }
}
