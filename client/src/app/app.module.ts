import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { UpdateListComponent } from './components/update-list/update-list.component';
import { TestComponent } from './components/test/test.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    AddListComponent,
    UpdateListComponent,
    TestComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
