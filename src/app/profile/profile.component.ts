import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // userDataStorage:any
  userData: any
  userImage: any = "/assets/images/profile-icon.png"
  userImgFile: any
  BASE_URL: any;
  constructor(private api: ApiService, private toastr: ToastrService, private router: Router) {

  }
  ngOnInit() {
    this.BASE_URL = this.api.BASE_URL
    if (sessionStorage.getItem("token")) {
      const userDataStorage: any = sessionStorage.getItem("Existing User")
      this.userData = JSON.parse(userDataStorage)
      console.log(this.userData)
      if (this.userData.user_image) {
        this.userImage = `${this.BASE_URL}/upload/${this.userData.user_image}`
      }
    }
    this.getUser()
  }

  getUser() {
    this.api.getUserApi().subscribe({
      next: (res: any) => {
        console.log(res);

      }
    })
  }

  getUserImageFile(event: any) {
    const file: File = event.target.files[0]
    console.log(file)
    const fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onload = (event: any) => {
      this.userImage = event.target.result
      // console.log(this.userImage);
      this.userImgFile = file
    }
  }

  handleUserUpdate() {
    console.log(this.userData);
    console.log(this.userImgFile);

    const formData = new FormData()
    formData.append("firstname", this.userData.firstname)
    formData.append("lastname", this.userData.lastname)
    formData.append("username", this.userData.username)
    formData.append("phone", this.userData.phone)
    formData.append("gender", this.userData.gender)
    formData.append("email", this.userData.email)
    formData.append("pincode", this.userData.pincode)
    formData.append("user_image", this.userImgFile ? this.userImgFile : this.userData.user_image)
    formData.append("address", this.userData.address)
    formData.append("street", this.userData.street)
    console.log(formData);

    this.api.userUpdateApi(this.userData._id, formData).subscribe({
      next: (res: any) => {
        this.toastr.success("Profile Updated")
        console.log(res);
        sessionStorage.clear()
        this.router.navigateByUrl('/login')
      },
      error: (err: any) => {
        console.log(err)
        this.toastr.error("Something Went Wrong!")
      }
    })
  }

  handleDeleteProfile() {
    this.api.deleteUserApi().subscribe({
      next: (res: any) => {
        console.log(res)
        this.toastr.success("Profile Deleted")
        sessionStorage.clear()
        this.router.navigateByUrl('/')
      },
      error: (err: any) => {
        this.toastr.error("Something Went Wrong!")
        console.log(err)
      }
    })
  }

}
