import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {

  constructor(private api:ApiService ,private router:Router , private toastr:ToastrService){}

  handleLogout(){
    sessionStorage.clear()
    this.toastr.success("Logout Success")
    this.router.navigateByUrl('/')
  }
}
