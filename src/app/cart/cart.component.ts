import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartProducts:any=[]
  BASE_URL:any
  constructor(private api:ApiService ,private toastr:ToastrService){}

  ngOnInit() {
    this.getCart()
    this.BASE_URL=this.api.BASE_URL
    console.log(this.cartProducts);
    
  }

  getCart(){
    this.api.getCartApi().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.cartProducts=res
      },
      error:(err)=>{
        console.log(err); 
      }
    })
  }

  handleEmptyCart(){
    this.api.emptyCartApi().subscribe({
      next:(res:any)=>{
        this.toastr.success("All Cart Items Removed")
        console.log(res)
        this.getCart()
      },
      error:(err:any)=>{
        this.toastr.error("Something Went Wrong!")
        console.log(err)
      }
    })
  }

  
  handleRemoveFromCart(id:any){
    this.api.removeFromCartApi(id).subscribe({
      next:(res:any)=>{
        this.toastr.success("Item Remove From cart")
        console.log(res)
        this.getCart()
        this.api.getCartCountApi()
      },
      error:(err:any)=>{
        this.toastr.error("Something Went Wrong!")
        console.log(err)
      }
    })
  }

  handleQuantityIncrease(id:any){
    this.api.increaseCartQuantityApi(id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.getCart()
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

  handleQuantityDecrease(id:any){
    this.api.decreaseCartQuantityApi(id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.getCart()
      },
      error:(err:any)=>{
        console.log(err)
        
      }
    })
  }
}
