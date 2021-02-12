import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    constructor(private http:HttpClient,private router:Router) {
    
    }

    signIn(email:string,password:string):Observable<any>{  
        return this.http.post('/api/user/signin',{email,password});            
    }
    signUp(email:string,password:string,confirmPassword:string,firstname:string,lastname:string):Observable<any>{
        return this.http.post('/api/user/signup',{email,password,confirmPassword,firstname,lastname});
    }
    logOut():void{
        localStorage.clear();
    }


  
}
