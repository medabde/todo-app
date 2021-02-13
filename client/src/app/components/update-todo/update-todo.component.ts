import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {List} from 'src/app/models/List';
import {ListsService} from 'src/app/services/lists.service';
import { NgForm } from '@angular/forms';
import {Todo} from 'src/app/models/Todo';
import {TodosService} from 'src/app/services/todos.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {
  listId: string;
  todo:Todo = new Todo();
  constructor(private ListService: ListsService, private todosService: TodosService, private activateRoute: ActivatedRoute, private router: Router) { 
    this.listId = '';
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      (params: Params) => {
        this.listId = this.activateRoute.snapshot.params.listId;
        this.todosService.getTodo(this.listId,this.activateRoute.snapshot.params.todoId).subscribe(data => {this.todo = data });
      }
    )
  }
  updateTodo():void {
      this.todosService.updateTodo(this.listId,this.todo).subscribe(() => {
        this.router.navigate(['/task', this.listId]);
      })
    }

}
