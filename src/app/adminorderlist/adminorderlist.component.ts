import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminorderlist',
  templateUrl: './adminorderlist.component.html',
  styleUrls: ['./adminorderlist.component.css']
})
export class AdminorderlistComponent implements OnInit{

  orderData:any;
  BASE_URL:any;
  orderDataStatus:boolean=false
 

  constructor(private api:ApiService , private toastr:ToastrService){}

  ngOnInit() {
    this.getOrderData()
    this.BASE_URL=this.api.BASE_URL
  }

  getOrderData(){
    this.api.getOrderDataAdminApi().subscribe({
      next:(res:any)=>{
        this.orderData=res
        console.log(this.orderData ,"ord")
        this.orderDataStatus=true
        this.sortLatest()
      },
      error:(err:any)=>{
        console.log(err)
        this.orderDataStatus=false
      }
    })
  }

  sortLatest() {
    this.orderData.sort((p1: any, p2: any) => p2.orderNo - p1.orderNo)
  }
  sortEarliest() {
    this.orderData.sort((p1: any, p2: any) => p1.orderNo - p2.orderNo)
  }
}
