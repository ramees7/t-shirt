import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{
  
  categoryData: any;
  productsData: any;
  BASEURL:any;

  constructor(private api:ApiService ,private toastr:ToastrService){}

  ngOnInit() {
    this.getCategoryData()
    this.getAllProductsData()
    this.BASEURL=this.api.BASE_URL
  }

  getCategoryData() {
    this.api.getAllCategoriesApi().subscribe({
      next: (res: any) => {
        console.log(res);
        this.categoryData = res
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  getAllProductsData(){
    this.api.getAllProductsApi().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.productsData=res
      }
    })
  }

  handleDeletProduct(id:any){
    this.api.deleteProductApi(id).subscribe({
      next:(res:any)=>{
        this.toastr.success("Product Deleted")
        console.log(res)
        this.getAllProductsData()
      },
      error:(err:any)=>{
        this.toastr.error("Something Went Wrong!")
        console.log(err)
      }
    })
  }
}
