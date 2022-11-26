import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addBook=(data:any)=>{
    return this.http.post('http://localhost:3000/api/bookadd',data)
  }
deleteBook=(id:any)=>{
  return this.http.post('http://localhost:3000/api/bookdelete',id)
}
  viewBooks=()=>{
    return this.http.post('http://localhost:3000/api/booklist','')
  }
  updateBook=()=>{
    return this.http.post('http://localhost:3000/api/bookupdate','')
  }
  userSignup=(data:any)=>{
    return this.http.post('http://localhost:3000//api/usersignup',data)
  }
}
