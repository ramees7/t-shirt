import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brandsproductsview',
  templateUrl: './brandsproductsview.component.html',
  styleUrls: ['./brandsproductsview.component.css']
})
export class BrandsproductsviewComponent implements OnInit{

  brandName:any;
  brandProducts:any;
  BASE_URL:any;
  yes:string="Yes"
  brandImg:any;
  searchText:any=""
  trendingAllProducts:any;
  brandsDescription:any;
  isAdmin:boolean=false

  constructor(private api:ApiService, private aRoute:ActivatedRoute){
    this.aRoute.params.subscribe({
      next:(res:any)=>{
        this.brandName=res.id
        console.log(this.brandName)
      }
    })
  }
  ngOnInit() {
    this.getBrandProducts()
    this.BASE_URL=this.api.BASE_URL
    if(sessionStorage.getItem("role")=="Admin"){
      this.isAdmin=true
    }
  }

  getBrandProducts(){
    this.api.getAllProductsApi().subscribe({
      next:(res:any)=>{
        this.brandProducts=res.filter((item:any)=>item.brand==this.brandName)
        console.log(this.brandProducts)
        this.trendingAllProducts = res.filter((item: any) => item.trending == "Yes")
        console.log(this.trendingAllProducts, "trend")
      }
    })
    this.api.getAllBrandsApi().subscribe({
      next:(res:any)=>{
        console.log(res,"jjo");
        this.brandImg=res.filter((item:any)=>item.name==this.brandName)[0].image
        console.log(this.brandImg);
        this.brandsDescription=res.filter((item:any)=>item.name==this.brandName)[0].description
        console.log(this.brandsDescription ,"desc");
      }
    })
  }


  sortPriceLowToHigh() {
    this.brandProducts.sort((p1: any, p2: any) => p1.offerprice - p2.offerprice)
  }

  sortPriceHighToLow() {
    this.brandProducts.sort((p1: any, p2: any) => p2.offerprice - p1.offerprice)
  }
}
