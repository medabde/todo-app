import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name : string = '';

  constructor(private router : Router, private usersService:UsersService) {
    if(!localStorage.getItem('profile'))this.router.navigate(['login']);
     this.name = JSON.parse(localStorage.getItem('profile')|| "").result.name;

    const decodedToken:any = decode(JSON.parse(localStorage.getItem('profile')|| "").token);
    
    if(decodedToken.exp * 1000 < new Date().getTime()) this.dec();


   }

  ngOnInit(): void {
  }

  dec():void{
    this.usersService.logOut();
    this.router.navigate(['login']);
  }

}
