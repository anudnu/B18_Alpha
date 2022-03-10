import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  public Productlist:any=[];
  public empty:string="";
  constructor(private data  : ApiService, private router : Router) { }
  
  ngOnInit(): void {
    
  }
  searchiteam:string="";
  

  getTotalBooks(){
    this.data.getTotalBooks().subscribe((data=>{
      this.Productlist=data 
    }))
  }

 

 
  searching(event:any){
    this.searchiteam = (event.target as HTMLInputElement).value;
    console.log(this.searchiteam);
    this.data.search.next(this.searchiteam);
  }



  cancelSearch(){
    debugger;
    this.data.search.next(this.empty);
    // this.router.navigate(['/books']);
  }
  }


  


