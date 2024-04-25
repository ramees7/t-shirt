import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newarrivalproductsview',
  templateUrl: './newarrivalproductsview.component.html',
  styleUrls: ['./newarrivalproductsview.component.css']
})
export class NewarrivalproductsviewComponent implements OnInit{

  newarrivalAllProducts:any;
  BASE_URL:any;
  yes:string="Yes"
  searchText:any=""
  trendingAllProducts:any;

  constructor(private api:ApiService , private aRoute:ActivatedRoute){
  }

  ngOnInit() {
    this.getProducts()
    this.BASE_URL=this.api.BASE_URL
  }
  getProducts(){
    this.api.getAllProductsApi().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.newarrivalAllProducts=res.filter((item:any)=>item.newarrival=="Yes")
        console.log(this.newarrivalAllProducts,"newarr")
        this.trendingAllProducts = res.filter((item: any) => item.trending == "Yes")
        console.log(this.trendingAllProducts, "trend")
      }
    })
  }

  sortPriceLowToHigh() {
    this.newarrivalAllProducts.sort((p1: any, p2: any) => p1.offerprice - p2.offerprice)
  }

  sortPriceHighToLow() {
    this.newarrivalAllProducts.sort((p1: any, p2: any) => p2.offerprice - p1.offerprice)
  }
}
