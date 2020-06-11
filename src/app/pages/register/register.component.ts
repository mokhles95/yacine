import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services/UserService';
import { Router } from '@angular/router';
import { User } from 'src/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.css']
})
export class RegisterComponent implements OnInit {
  register : FormGroup;
    user :User = new User();
    image : File

  constructor(private formBuilder: FormBuilder, private us: UserService, public router: Router) { }

  ngOnInit(): void {
  }
  onCreateConfirm(): void {
    window.confirm('you are registred') 
  }
  onFileSelect(event,f) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file)
      this.formData.set('image',file);
    }
  }
   formData = new FormData();
  onRegisterFormSubmit(){
    
    this.formData.set('Email',this.user.email);
    this.formData.set('Password',this.user.Password );
    this.formData.set('Login', this.user.Login);
   
    this.formData.set('Addresse', this.user.Addresse);
    this.formData.set('Role', this.user.Role);
    console.log(this.image)
    console.log( this.formData)
    
      this.us.register(this.formData).subscribe(
          result=> {
            },
            e=> {
              console.log(e)
          },
          ()=> {
            console.log("added successfully");
            this.onCreateConfirm()
            this.router.navigate(['/login'])
          }
      )
   }
}
