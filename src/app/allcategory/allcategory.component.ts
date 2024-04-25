import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-allcategory',
  templateUrl: './allcategory.component.html',
  styleUrls: ['./allcategory.component.css']
})
export class AllcategoryComponent {

  BASEURL:any;
  categoryData:any;

  constructor(private api:ApiService ){}

  ngOnInit() {
    this.getBrandsData()
    this.BASEURL=this.api.BASE_URL
  }
  getBrandsData(){
    this.api.getAllCategoriesApi().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.categoryData=res
      }
    })
  }
}
