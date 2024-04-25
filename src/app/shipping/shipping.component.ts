import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {

  
  orderData:any;
  BASE_URL:any;
  orderId:any
  shippedStatus:boolean=false
  deliveryStatus:boolean=false

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
    this.api.getOrderDataApi().subscribe({
      next:(res:any)=>{
        this.orderData=res.filter((item:any)=>item._id==this.orderId)[0]
        console.log(this.orderData ,"ord")
        if(this.orderData){
          if(this.orderData.statusShipped=="Yes"){
            this.shippedStatus=true            
          }
          if(this.orderData.statusDelivered=="Yes"){
            this.deliveryStatus=true
            this.shippedStatus=true            
          }
        }
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }
}
