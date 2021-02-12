import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {List} from '../models/List';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  private header:HttpHeaders;

  constructor(private http:HttpClient) {
    this.header =  new HttpHeaders();
   }

  getLists():Observable<List[]>{
    this.header =  new HttpHeaders({
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('profile')||"{}").token
    });
    return this.http.get<List[]>("/api/lists",{headers:this.header});
  }

  getList(_id:string):Observable<List>{
    this.header =  new HttpHeaders({
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('profile')||"{}").token
    });
    return this.http.get<List>(`/api/lists/${_id}`,{headers:this.header});
  }

  createList(list:List):Observable<List>{
    this.header =  new HttpHeaders({
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('profile')||"{}").token
    });
    return this.http.post<List>('/api/lists',list,{headers:this.header});
  }
  updateList(newList:List):Observable<List>{
    this.header =  new HttpHeaders({
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('profile')||"{}").token
    });
    return this.http.patch<List>(`/api/lists/${newList._id}`,newList,{headers:this.header});
  }
  deleteList(_id:any):Observable<List>{
    this.header =  new HttpHeaders({
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('profile')||"{}").token
    });
    return this.http.delete<List>(`/api/lists/${_id}`,{headers:this.header});
  }
}
