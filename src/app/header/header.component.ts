import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  userImage:any= "/assets/images/profile-icon.png"
  BASE_URL:any;
  image1:any;
  cartProducts:any;
  cartCount:any=0
  loginStatus:boolean=false

  constructor(private api:ApiService , private router:Router ,private toastr:ToastrService ){}

  ngOnInit() {
    this.BASE_URL=this.api.BASE_URL
    console.log(this.cartProducts , "cartp");
    
    if(sessionStorage.getItem("token")){
      this.loginStatus=true
      const image:any=sessionStorage.getItem("Existing User")
      this.image1=JSON.parse(image)
      console.log(this.image1 , "imge1");
      if(this.image1.user_image){
        this.userImage=`${this.BASE_URL}/upload/${JSON.parse(image).user_image}`
      }
    }
    
    this.api.cartCount.subscribe((res:any)=>{
      this.cartCount=res
      this.getCart()
    })
  }

  getCart(){
    this.api.getCartApi().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.cartProducts=res

      },
      error:(err)=>{
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
        this.toastr.error("Something Went Wrong!!")
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
  
  handleLogout(){
      sessionStorage.clear()
      this.cartCount=0
      this.api.getCartCountApi()
      this.loginStatus=false
      this.router.navigateByUrl('/')
      this.getCart()
    }
 
}
