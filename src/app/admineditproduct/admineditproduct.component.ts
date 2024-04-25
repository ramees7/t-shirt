import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admineditproduct',
  templateUrl: './admineditproduct.component.html',
  styleUrls: ['./admineditproduct.component.css']
})
export class AdmineditproductComponent implements OnInit{

  productsData: any={}
  pid:any;
  BASE_URL:any;
  thumbnailImg:any;
  thumbnailFile:any;

  constructor(private api:ApiService , private aRoute:ActivatedRoute , private fb:FormBuilder ,private toastr:ToastrService){
    this.aRoute.params.subscribe({
      next:(res:any)=>{
        console.log(res.id)
        this.pid=res.id
      }
    })
  }

  ngOnInit() {
    this.getEditProductsData()
    this.BASE_URL=this.api.BASE_URL 
  }
  getEditProductsData(){
    this.api.getEditProductApi(this.pid).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.productsData=res
        this.thumbnailImg=`${this.BASE_URL}/upload/${this.productsData.thumbnail}`
        console.log(this.thumbnailImg,"h");
      }
    })
  }

  getThumbnailFile(event:any){
    const file:File=event.target.files[0]
    console.log(file);
    const fr=new FileReader()
    fr.readAsDataURL(file)
    fr.onload=(event:any)=>{
      this.thumbnailImg=event.target.result
      // console.log(this.thumbnailImg);
      this.thumbnailFile=file
    }

    
  }

  handleEditProduct(){
    // console.log(this.productsData)
      const formData = new FormData()
      formData.append("category", this.productsData.category),
        formData.append("brand", this.productsData.brand),
        formData.append("mrp", this.productsData.mrp),
        formData.append("color", this.productsData.color),
        formData.append("offerprice", this.productsData.offerprice),
        formData.append("size_small", this.productsData.size_small),
        formData.append("size_medium", this.productsData.size_medium),
        formData.append("size_large", this.productsData.size_large),
        formData.append("size_XL", this.productsData.size_XL),
        formData.append("newarrival", this.productsData.newarrival),
        formData.append("trending", this.productsData.trending),
        formData.append("thumbnail", this.thumbnailFile? this.thumbnailFile :this.productsData.thumbnail),
        formData.append("image_1", this.productsData.image_1),
        formData.append("image_2", this.productsData.image_2),
        formData.append("image_3", this.productsData.image_3),
        formData.append("image_4", this.productsData.image_4)

        console.log(formData,"formdata");
        this.api.productUpdateApi(this.pid,formData).subscribe({
          next:(res:any)=>{
            console.log(res)
            this.toastr.success("Product Updated")
          },
          error:(err:any)=>{
            console.log(err)
            this.toastr.error("Something Went Wrong")
          }
        })
  }
}
