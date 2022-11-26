import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {
  books:any=[];

 

  constructor(private apiservice:ApiService,
    private router:Router,
    private route:ActivatedRoute) { }
    data={
      name:'',
      author:'',
      publisher:'',
     pages:'',
      }
  ngOnInit(): void {
}
onSubmit(){
  this.apiservice.addBook(this.data).subscribe(res=>{
    this.books=res
    alert('successfully added');
    this.router.navigate(['/home'])
  })
}  
}
