import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
User={
  email:'',
  password:''
}
  constructor(private router:Router) { }

  ngOnInit(): void {
   
  }
  validate()
  {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passformat=/^[A-Za-z]\w{7,14}$/
    if(this.User.email.match(mailformat)||this.User.password.match(passformat)){
     
      return true;
    }
    else{
      alert("Invalid Login Credentials");
      return false;
    }
  }
userverify(){
  alert("Login Successful");
  this.router.navigateByUrl('/home');
}
}


