import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AddformComponent } from './pages/addform/addform.component';
import { FormsModule } from '@angular/forms';
import { RouterModule ,Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ApiService } from './api.service';
 
const appRoutes:Routes=[
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"addform",component:AddformComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    AddformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
