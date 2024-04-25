import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private api:ApiService , private toastr:ToastrService , private fb:FormBuilder ,private router:Router){}

  loginForm=this.fb.group({
    phone:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9!@#]*'),Validators.minLength(6),Validators.maxLength(10)]]
  })

  getLoginData(){
    console.log(this.loginForm.value);
    this.api.userLoginApi(this.loginForm.value).subscribe({
      next:(res:any)=>{
        console.log(res);
        sessionStorage.clear()
        if(res.existingUser){
          sessionStorage.setItem("Existing User",JSON.stringify(res.existingUser))
          sessionStorage.setItem("role",(res.role))
          sessionStorage.setItem("token",(res.token))
          this.toastr.success("User Login Success")
          this.api.getCartCountApi()
          this.router.navigateByUrl('/')
        }
        else{
          sessionStorage.setItem("Existing Admin",JSON.stringify(res.existingAdmin))
          sessionStorage.setItem("role",(res.role))
          sessionStorage.setItem("token",(res.token))
          this.toastr.success("Admin Login Success")
          this.router.navigateByUrl('/adminhome')
        }
      },
      error:(err:any)=>{
        this.toastr.error("Login Failed")
      }
    })
  }
}
