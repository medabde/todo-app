import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Todo} from '../models/Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private header:HttpHeaders;

  constructor(private http:HttpClient) {
    this.header =  new HttpHeaders();
   }
  getTodos(listId:string):Observable<Todo[]>{
    this.header =  new HttpHeaders({
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('profile')||"{}").token
    });
    return this.http.get<Todo[]>(`/api/todos/${listId}`,{headers:this.header});
  }

  getTodo(listId:string,_id:string):Observable<Todo>{
    this.header =  new HttpHeaders({
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('profile')||"{}").token
    });
    return this.http.get<Todo>(`/api/todos/${listId}/${_id}`,{headers:this.header});
  }

  createTodo(listId:any,todo:Todo):Observable<Todo>{
    this.header =  new HttpHeaders({
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('profile')||"{}").token
    });
    return this.http.post<Todo>(`/api/todos/${listId}`,todo,{headers:this.header});
  }

  updateTodo(listId:string,newTodo:Todo):Observable<Todo>{
    this.header =  new HttpHeaders({
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('profile')||"{}").token
    });
    return this.http.patch<Todo>(`/api/todos/${listId}/${newTodo._id}`,newTodo,{headers:this.header});
  }

  deleteTodo(listId:string,_id:string):Observable<Todo>{
    this.header =  new HttpHeaders({
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('profile')||"{}").token
    });
    return this.http.delete<Todo>(`/api/todos/${listId}/${_id}`,{headers:this.header});
  }


}
