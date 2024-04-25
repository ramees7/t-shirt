import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-brandsview',
  templateUrl: './brandsview.component.html',
  styleUrls: ['./brandsview.component.css']
})
export class BrandsviewComponent implements OnInit{

  BASEURL:any;
  brandData:any;

  constructor(private api:ApiService ){}

  ngOnInit() {
    this.getBrandsData()
    this.BASEURL=this.api.BASE_URL
  }
  getBrandsData(){
    this.api.getAllBrandsApi().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.brandData=res
      }
    })
  }
}
