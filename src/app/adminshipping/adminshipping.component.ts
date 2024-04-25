import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminshipping',
  templateUrl: './adminshipping.component.html',
  styleUrls: ['./adminshipping.component.css']
})
export class AdminshippingComponent implements OnInit{

  orderData:any;
  BASE_URL:any;
  orderId:any
  No:any="No"


  constructor(private api:ApiService ,private aRouter:ActivatedRoute ,private toastr:ToastrService){
    aRouter.params.subscribe({
      next:(res:any)=>{
        this.orderId=res.id
      }
    })
  }


  ngOnInit() {
    this.getOrderData()
    this.BASE_URL=this.api.BASE_URL

  }
  getOrderData(){
    this.api.getOrderDataAdminApi().subscribe({
      next:(res:any)=>{
        this.orderData=res.filter((item:any)=>item._id==this.orderId)[0]
        console.log(this.orderData ,"ord")

      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

  handleUpdateShipping(){
    console.log(this.orderData,"kok");
    this.api.updateShippingApi(this.orderId,this.orderData).subscribe({
      next:(res:any)=>{
        this.toastr.success("Shipping Data Updated")
        console.log(res)
      },
      error:(err:any)=>{
        console.log(err)
        this.toastr.error("Something Went Wrong!")
      }
    })
  }
}
