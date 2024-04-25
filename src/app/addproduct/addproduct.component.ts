import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  categoryData: any;
  brandData: any;
  thumbnailImage: any = "/assets/images/add-img.png"
  image_1_Image: any = "/assets/images/add-img.png"
  imgae_2_image: any = "/assets/images/add-img.png"
  image_3_image: any = "/assets/images/add-img.png"
  image_4_image: any = "/assets/images/add-img.png"

  thumbnailImgFile: any;
  image_1ImgFile: any;
  image_2ImgFile: any;
  image_3ImgFile: any;
  image_4ImgFile: any;

  constructor(private api: ApiService, private toastr: ToastrService, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.getCategoryData()
    this.getBrandsData()
  }

  addProductForm = this.fb.group({
    thumbnail: ['', [Validators.required]],
    image_1: ['', [Validators.required]],
    image_2: ['', [Validators.required]],
    image_3: [''],
    image_4: [''],
    category: ['', [Validators.required]],
    brand: ['', [Validators.required]],
    mrp: ['', [Validators.required]],
    offerprice: ['', [Validators.required]],
    color: ['', [Validators.required]],
    size_small: ['', [Validators.required]],
    size_medium: ['', [Validators.required]],
    size_large: ['', [Validators.required]],
    size_XL: ['', [Validators.required]],
    newarrival: ['', [Validators.required]],
    trending: ['', [Validators.required]],
  })

  getCategoryData() {
    this.api.getAllCategoriesApi().subscribe({
      next: (res: any) => {
        this.categoryData = res
        console.log(this.categoryData);
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  getBrandsData() {
    this.api.getAllBrandsApi().subscribe({
      next: (res: any) => {
        this.brandData = res
        console.log(this.brandData)
      }
    })
  }

  getThumbnailFile(event: any) {
    const file: File = event.target.files[0]
    console.log(file, "thumbnail file")
    const fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onload = (event: any) => {
      // console.log(event.target.result)
      this.thumbnailImage = event.target.result
      // console.log("thumbnail image , ", this.thumbnailImage)
      this.thumbnailImgFile = file
    }
  }
  getImage_1File(event: any) {
    const file: File = event.target.files[0]
    console.log(file, "image-1 file")
    const fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onload = (event: any) => {
      // console.log(event.target.result)
      this.image_1_Image = event.target.result
      // console.log("image-1 , ", this.image_1_Image)
      this.image_1ImgFile = file
    }
  }
  getImage_2File(event: any) {
    const file: File = event.target.files[0]
    console.log(file, "image-2 file")
    const fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onload = (event: any) => {
      // console.log(event.target.result)
      this.imgae_2_image = event.target.result
      // console.log("image-2 image , ", this.imgae_2_image)
      this.image_2ImgFile = file
    }
  }
  getImage_3File(event: any) {
    const file: File = event.target.files[0]
    console.log(file, "image-3 file")
    const fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onload = (event: any) => {
      // console.log(event.target.result)
      this.image_3_image = event.target.result
      // console.log("image-3 , ", this.image_3_image)
      this.image_3ImgFile = file
    }
  }
  getImage_4File(event: any) {
    const file: File = event.target.files[0]
    console.log(file, "image_4 file")
    const fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onload = (event: any) => {
      // console.log(event.target.result)
      this.image_4_image = event.target.result
      // console.log("image-4 , ", this.image_4_image)
      this.image_4ImgFile = file
    }
  }

  handleAddProduct() {
    console.log(this.addProductForm.value);
    const formData = new FormData()
    formData.append("category", `${this.addProductForm.value.category}`),
      formData.append("brand", `${this.addProductForm.value.brand}`),
      formData.append("mrp", `${this.addProductForm.value.mrp}`),
      formData.append("color", `${this.addProductForm.value.color}`),
      formData.append("offerprice", `${this.addProductForm.value.offerprice}`),
      formData.append("size_small", `${this.addProductForm.value.size_small}`),
      formData.append("size_medium", `${this.addProductForm.value.size_medium}`),
      formData.append("size_large", `${this.addProductForm.value.size_large}`),
      formData.append("size_XL", `${this.addProductForm.value.size_XL}`),
      formData.append("newarrival", `${this.addProductForm.value.newarrival}`),
      formData.append("trending", `${this.addProductForm.value.trending}`),
      formData.append("thumbnail", this.thumbnailImgFile),
      formData.append("image_1", this.image_1ImgFile),
      formData.append("image_2", this.image_2ImgFile),
      formData.append("image_3", this.image_3ImgFile),
      formData.append("image_4", this.image_4ImgFile)
    console.log(formData, "formdata")
    console.log(this.image_1ImgFile, "img-file");
    this.api.adminAddProductApi(formData).subscribe({
      next: (res: any) => {
        this.toastr.success("New Product Added Successfully !")
        console.log(res)
        this.thumbnailImage="/assets/images/add-img.png"
        this.image_1_Image="/assets/images/add-img.png"
        this.imgae_2_image="/assets/images/add-img.png"
        this.image_3_image="/assets/images/add-img.png"
        this.image_4_image="/assets/images/add-img.png"
        this.onRefreshForm()
      },
      error: (err: any) => {
        this.toastr.error("Failed To Add Product")
        console.log(err);
      }
    })

  }


  onRefreshForm() {
    this.thumbnailImage="/assets/images/add-img.png"
    this.image_1_Image="/assets/images/add-img.png"
    this.imgae_2_image="/assets/images/add-img.png"
    this.image_3_image="/assets/images/add-img.png"
    this.image_4_image="/assets/images/add-img.png"

    this.addProductForm.get('category')?.setValue("")
    this.addProductForm.get('brand')?.setValue("")
    this.addProductForm.get('color')?.setValue("")
    this.addProductForm.get('size_small')?.setValue("")
    this.addProductForm.get('size_medium')?.setValue("")
    this.addProductForm.get('size_large')?.setValue("")
    this.addProductForm.get('size_XL')?.setValue("")
    this.addProductForm.get('trending')?.setValue("")
    this.addProductForm.get('newarrival')?.setValue("")
    this.addProductForm.get('mrp')?.setValue("")
    this.addProductForm.get('offerprice')?.setValue("")
    this.addProductForm.get('thumbnail')?.setValue("")
    this.addProductForm.get('image_1')?.setValue("")
    this.addProductForm.get('image_2')?.setValue("")
    this.addProductForm.get('image_3')?.setValue("")
    this.addProductForm.get('image_4')?.setValue("")
  }

}