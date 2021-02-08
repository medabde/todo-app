import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
    this.usersService.signUp(this.user.email,this.user.password,this.user.confirmPassword,this.user.firstname,this.user.lastname);
    
  }

  login():void{
    this.usersService.signIn(this.user.email,this.user.password);
    
  }

  changeIsSignIn():void{
    this.isSignIn = !this.isSignIn;
  }

}
