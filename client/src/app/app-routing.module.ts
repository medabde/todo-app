import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import {AddListComponent} from './components/add-list/add-list.component';
import { UpdateListComponent} from './components/update-list/update-list.component';
import { ShowListComponent  } from './components/showlist/showlist.component';
import { UpdateTodoComponent } from './components/update-todo/update-todo.component'
const routes: Routes = [
  {path:"login",component:LoginComponent},
  { path: 'list', component: ListComponent },
  { path: 'Addlist', component: AddListComponent },
  {path:'update/:id', component:UpdateListComponent},
  { path: 'task/:listId', component: ShowListComponent },
  { path : 'update/:listId/:todoId', component: UpdateTodoComponent},
  { path: '',   redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
