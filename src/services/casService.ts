import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../Models/User';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class CasService {
  baseUrl = "/api";
  result = "";
  userUrl = "/api/user"
  u= JSON.parse(localStorage.getItem('user'))
 private options = { headers: new HttpHeaders({'token': this.u.token }) };
  constructor(private http: HttpClient) { }
  addCas(c) {
    return this.http.post(this.baseUrl+"/cas/createCas", c);
  }
  getAll(){
    return this.http.get(this.baseUrl+"/cas/ListeCas");
  }
}