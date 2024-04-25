import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-viewpro',
  templateUrl: './viewpro.component.html',
  styleUrls: ['./viewpro.component.css']
})
export class ViewproComponent implements OnInit {

  productsData: any;
  pid: any;
  BASE_URL:any;
  size_small_available:any;
  size_medium_available:any;
  size_large_available:any;
  size_XL_available:any;
  constructor(private api: ApiService, private aRoute: ActivatedRoute , private toastr:ToastrService) {
    this.aRoute.params.subscribe({
      next: (res: any) => {
        console.log(res.id)
        this.pid = res.id
      }
    })
  }

  ngOnInit() {
    this.BASE_URL=this.api.BASE_URL
    this.getOneProductData()
  }

  getOneProductData(){
    this.api.getOneProductApi(this.pid).subscribe({
      next:(res:any)=>{
        this.productsData=res
        console.log(this.productsData)
        this.size_small_available=this.productsData?.size_small=="Yes"
        console.log(this.size_small_available)
        this.size_medium_available=this.productsData?.size_medium=="Yes"
        console.log(this.size_medium_available)
        this.size_large_available=this.productsData?.size_large=="Yes"
        console.log(this.size_large_available)
        this.size_XL_available=this.productsData?.size_XL=="Yes"
        console.log(this.size_XL_available)
        
      }
    })
  }

  handleAddtocart(productsData:any){
    const {productId,category,size,mrp,offerprice,quantity,totalprice,thumbnail} =productsData
    const product={productId:this.pid,category,size,mrp,offerprice,quantity:1,thumbnail}
    console.log(product)
    this.api.addToCartApi(product).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.api.getCartCountApi()
        this.toastr.success("Item Added to Cart")
      },
      error:(err:any)=>{
        console.log(err)
        this.toastr.error(err.error)
      }
    })
  }
}
