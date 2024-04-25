import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {

  constructor(private fb: FormBuilder, private api: ApiService, private toastr: ToastrService, private router: Router) {

  }
  regForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9_]*')]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9!@#]*'), Validators.minLength(6), Validators.maxLength(10)]],
    confirmpassword: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9!@#]*'), Validators.minLength(6), Validators.maxLength(10)]]
  })

  getRegFromData() {
    console.log(this.regForm.value)
    this.api.userRegistrationApi(this.regForm.value).subscribe({
      next: (res: any) => {
        this.toastr.success("Registration Success")
        this.router.navigateByUrl("/login")
      },
      error: (err: any) => {
        this.toastr.error("Use Unique Data")
        console.log(err)
      }
    })
  }
}
