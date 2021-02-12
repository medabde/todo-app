import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error : string ='';
  isSignIn:boolean;

  user:any = {
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confirmPassword:''
  }

  constructor(private usersService:UsersService,private router:Router) {
    if(localStorage.getItem('profile'))this.router.navigate(['list']);
    this.isSignIn = true;
   }

  ngOnInit(): void {
  }

  register():void{
    //this.usersService.signUp(this.user.email,this.user.password,this.user.confirmPassword,this.user.firstname,this.user.lastname);
    if(this.user.email==''|| this.user.password==''||this.user.confirmPassword==''||this.user.firstname==''||this.user.lastname=='')this.error = "All fields are required";
    else{
    this.usersService.signUp(this.user.email,this.user.password,this.user.confirmPassword,this.user.firstname,this.user.lastname).subscribe(data =>{localStorage.setItem('profile',JSON.stringify(data));this.router.navigate(['list']);},error =>{this.error=error.error.message;});
    }
  }

  login():void{
    //this.usersService.signIn(this.user.email,this.user.password);
    if(this.user.email==''||this.user.password=='') this.error = "All fields are required";
    else{
      this.usersService.signIn(this.user.email,this.user.password).subscribe(data =>{this.error='';localStorage.setItem('profile',JSON.stringify(data));this.router.navigate(['list']);},error =>{this.error=error.error.message;});

    }
    
  }

  changeIsSignIn():void{   
    this.error ='';
    this.user = {
      firstname:'',
      lastname:'',
      email:'',
      password:'',
      confirmPassword:''
    }
    this.isSignIn = !this.isSignIn;
  }

}
