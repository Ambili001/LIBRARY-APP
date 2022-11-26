import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiservice:ApiService) { }
 
  ngOnInit(): void {
    this.getData();
  }
books:any=[]
getData() {
  this.apiservice.viewBooks().subscribe(res => {
    this.books = res
  })
}

  DeleteBook(id:any){
    this.apiservice.deleteBook(id).subscribe(res=>{
      this.books = res;
      alert("Deleted successfully");
    })
  }
 UpdateBook(id:any){
    this.apiservice.updateBook().subscribe(res=>{
      this.books = res
    })
  }

}
