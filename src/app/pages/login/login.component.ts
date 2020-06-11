import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User';
import { UserService } from 'src/services/UserService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {

  constructor(private us: UserService, public router: Router) { }

  user : User = new User();

  ngOnInit(): void {
  }
  

  tryLogin(){
    var u ;
    var obj = {
      Email: this.user.email,
      Password : this.user.Password}
    
    this.us.tryLogin(obj).subscribe(
      result=> {
        u=result
        },
        e=> {
          alert("wrong email or password")
         this.user.email=""
         this.user.Password=""
      },
      ()=> {
        
          console.log("you are logged in");
         
          localStorage.setItem("user",JSON.stringify(u))
         
          this.router.navigate(['/dashboard'])
     
        console.log(u)
       
      }
  )
  }

}
