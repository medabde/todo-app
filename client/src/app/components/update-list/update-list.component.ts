import { Component, OnInit } from '@angular/core';
import {List} from 'src/app/models/List';
import {ListsService} from 'src/app/services/lists.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.css']
})
export class UpdateListComponent implements OnInit {
  list:List=new List();
  constructor(private listservice:ListsService,   private router: Router,    private activatedRoute: ActivatedRoute,
    ) {
   this.listservice.getList(this.activatedRoute.snapshot.params.id).subscribe(data => this.list = data);
   }

  ngOnInit(): void {
  }
 Update():void{
   this.listservice.updateList(this.list).subscribe(data => this.list = data);
   console.log('goood job');
 }
}
