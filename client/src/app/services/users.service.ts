import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    constructor(private http:HttpClient,private router:Router) {
    
    }

    signIn(email:string,password:string):void{
        this.http.post('/api/user/signin',{email,password}).subscribe(data =>{localStorage.setItem('profile',JSON.stringify(data));this.router.navigate(['list']);});
    }
    signUp(email:string,password:string,confirmPassword:string,firstname:string,lastname:string):void{
        this.http.post('/api/user/signup',{email,password,confirmPassword,firstname,lastname}).subscribe(data =>{localStorage.setItem('profile',JSON.stringify(data));this.router.navigate(['list']);});
    }
    logOut():void{
        localStorage.clear();
    }


  
}
