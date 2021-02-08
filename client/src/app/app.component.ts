import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { List } from './models/List';
import { ListsService } from './services/lists.service';
import { UsersService } from './services/users.service';
import {Router} from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  lists:List[] = [];
  //list:List = new List();
 
  
  constructor(private listsService:ListsService,private usersService:UsersService){
    // usersService.signIn("fafa@fafa.com","fafa");
    //usersService.signUp("abir@gmail.com","abir","abir","abir","abir");
    //listsService.createList(this.list); 
  }

  // getLists(){
  //   this.listsService.getLists().subscribe(data => this.lists = data);
    
  // }

  

}
