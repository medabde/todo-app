import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {List} from 'src/app/models/List';
import {ListsService} from 'src/app/services/lists.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  error : string = '';
  list:List={
    title: '',
    name:'',
    creator:'',
    todos:[]
  };
  constructor(private listservice:ListsService,private router:Router) {
    //this.showStorage = localStorage.getItem("");
   if(!localStorage.getItem('profile'))this.router.navigate(['login']);//redirerct page login
   }

  ngOnInit(): void {
  }
  saveList():void {
    
    if(this.list.title==''|| this.list.name=='') this.error = "All fields are required";
    else{
    this.listservice.createList(this.list).subscribe(data =>{this.error='';});
    this.router.navigate(['list']);
    }
  }
  
}
