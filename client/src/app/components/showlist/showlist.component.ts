import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {List} from 'src/app/models/List';
import {ListsService} from 'src/app/services/lists.service';
import { NgForm } from '@angular/forms';
import {Todo} from 'src/app/models/Todo';
import {TodosService} from 'src/app/services/todos.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'showlists',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css']
})
export class ShowListComponent implements OnInit {
  error : string ='';
    Todo:Todo={
        todo: '',
        isDone : false
      };
Todos : Todo []=[];
listId : string = '';

    constructor(private ListService: ListsService, private todosService: TodosService, private activateRoute: ActivatedRoute, private router: Router) {
        this.activateRoute.params.subscribe(
            (params: Params) => {
           if (params.listId) {
             this.todosService.getTodos(activateRoute.snapshot.params.listId).subscribe(data => this.Todos = data);
              console.log(this.activateRoute.snapshot.params.listId);
              console.log(this.Todos);
              this.listId = this.activateRoute.snapshot.params.listId;
              
           } else {
           }
         }
       )
    }
  ngOnInit(){ 
    
}
createTodo():void  {
if(this.Todo.todo=='')this.error = "All fields are required";
else{
    this.todosService.createTodo(this.listId,this.Todo).subscribe(data => {this.Todos.unshift(data) ; this.Todo.todo = ''});
    this.router.navigate(['/task', this.listId]);
     // this.router.navigate(['/task'], { relativeTo: this.activateRoute });
  }}
  delete(_id : any,i : any):void{
    console.log(_id);
    this.todosService.deleteTodo(this.listId,_id).subscribe(res=>{
      this.Todos.splice(i, 1);
    });
  }
 

  toggle(todo: Todo) {
    todo.isDone = !todo.isDone;
    this.todosService.updateTodo(this.listId,todo).subscribe(data => console.log({data}));
  }
  
 
  
}
