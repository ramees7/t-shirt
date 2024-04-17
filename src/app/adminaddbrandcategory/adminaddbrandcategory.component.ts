import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminaddbrandcategory',
  templateUrl: './adminaddbrandcategory.component.html',
  styleUrls: ['./adminaddbrandcategory.component.css']
})
export class AdminaddbrandcategoryComponent {

  brandImage: string = "https://static.thenounproject.com/png/187803-200.png"
  CategoryImage: string = "https://static.thenounproject.com/png/187803-200.png"
  brandImageFile:any;
  categoryImageFile:any;
  constructor(private api: ApiService, private fb: FormBuilder, private toastr: ToastrService) {
  }

  addBrandForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    image: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(10)]],
  })
  addCategoryForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    image: ['', [Validators.required]],
  })
  
  getFilBrand(event: any) {
    const file:File = event.target.files[0]
    console.log(file)
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = (event: any) => {
      console.log(event.target.result);
      this.brandImage = event.target.result
      // this.addBrandData.image=event.target.result
      // this.addBrandForm.get('image')?.setValue(file)
      this.brandImageFile=file
    }
  }




  handleAddBrand() {
    console.log(this.addBrandForm.value.image)
    const formData = new FormData()
    formData.append("name",`${this.addBrandForm.value.name}`),
    formData.append("image",this.brandImageFile),
    formData.append("description",`${this.addBrandForm.value.description}`)
    console.log(formData,"formdata");
    console.log(this.brandImageFile);
    
    this.api.adminAddBrandApi(formData).subscribe({
      next: (res: any) => {
        this.toastr.success("New Brand Added Successfully")
        console.log(res);
        this.brandImage = "https://static.thenounproject.com/png/187803-200.png"
        this.onRefreshBrandData()
      },
      error: (err: any) => {
        this.toastr.error(err.error)
        console.log(err);

      }
    })
  }
  onRefreshBrandData() {
    this.addBrandForm.get('image')?.setValue("")
    this.addBrandForm.get('name')?.setValue("")
    this.addBrandForm.get('description')?.setValue("")
  }


  getFilCategory(event: any) {
    const file:File = event.target.files[0]
    console.log(file ,"file")
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = (event: any) => {
      console.log(event.target.result);
      this.CategoryImage = event.target.result
      // this.addBrandData.image=event.target.result
      // this.addCategoryForm.get('image')?.setValue(file)
      this.categoryImageFile=file
    }
  }

  handleAddCategory() {
    console.log(this.addCategoryForm.value)
    const formData = new FormData()
    formData.append("name",`${this.addCategoryForm.value.name}`),
    formData.append("image",this.categoryImageFile),
    console.log(formData,"formdata");
    console.log(this.categoryImageFile);
    this.api.adminAddCategoryApi(formData).subscribe({
      next: (res: any) => {
        this.toastr.success("New Brand Added Successfully")
        console.log(res);
        this.CategoryImage = "https://static.thenounproject.com/png/187803-200.png"
        this.onRefreshCategoryData()
      },
      error: (err: any) => {
        this.toastr.error(err.error)
        console.log(err);

      }
    })
  }
  onRefreshCategoryData() {
    this.addCategoryForm.get('image')?.setValue("")
    this.addCategoryForm.get('name')?.setValue("")
  }
}

