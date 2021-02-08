import { Component, OnInit } from '@angular/core';
import {List} from 'src/app/models/List';
import {ListsService} from 'src/app/services/lists.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 
  lists:List[] = [];
  //list:List = new List();
  
  
  constructor(private usersService:UsersService,private listService:ListsService,private router:Router) {
   // this.listService= JSON.parse(localStorage.getItem('listService') || '{}');
    if(!localStorage.getItem('profile'))this.router.navigate(['login']);

    this.listService.getLists().subscribe(data => this.lists = data);
   }
 
  delete(id:any,i:any):void{
    
    this.listService.deleteList(id).subscribe(res=>{
      this.lists.splice(i, 1);
    });
  }
  ngOnInit(): void {
  }
  dec():void{
    this.usersService.logOut();
    this.router.navigate(['login']);
  }

}
