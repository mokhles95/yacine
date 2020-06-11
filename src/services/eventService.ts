import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../Models/User';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseUrl = "/api";
  result = "";
  userUrl = "/api/user"
  u= JSON.parse(localStorage.getItem('user'))
 private options = { headers: new HttpHeaders({'token': this.u.token }) };
  constructor(private http: HttpClient) { }

  addEvent(e) {
    return this.http.post(this.baseUrl+"/event/CreatEvent", e,this.options);
  }
  getAll(){
    return this.http.get(this.baseUrl+"/event/ListeEvents");
  }
  update(id,e){
    return this.http.put(this.baseUrl+"/event/updateEvent/"+id,e)
  }
  delete (id){
    return this.http.delete(this.baseUrl+"/event/deleteEvent/"+id)
  }


}