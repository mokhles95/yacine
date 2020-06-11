import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../Models/User';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = "/api";
  result = "";
  userUrl = "/api/user"
  private options = { headers: new HttpHeaders({'Content-Type': "multipart/form-data"}) };
  constructor(private http: HttpClient) { }

  register(postD) {
    return this.http.post(this.baseUrl+"/user/Signup", postD);
  }
  tryLogin(u){
    return this.http.post(this.baseUrl+"/user/login", u);
  }

}