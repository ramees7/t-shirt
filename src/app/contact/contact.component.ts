import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private fb: FormBuilder, private toastr: ToastrService ,private router:Router) {

  }

  contactForm = this.fb.group({
    useremail: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    message: ['', [Validators.required]],
  })

  handleMessage() {
    this.toastr.success("Message Sent")
    this.router.navigateByUrl('/')
  }
}
