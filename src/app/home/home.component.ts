import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  splash: any = false
  categoryData: any;
  BASEURL:any;


  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.handlesplash()
    this.getCategoryData()
    this.BASEURL=this.api.BASE_URL
  }
  handlesplash() {
    setTimeout(() => {
      this.splash = true
      console.log(this.splash);

    }, 1000);
  }


  getCategoryData() {
    this.api.getAllCategoriesApi().subscribe({
      next: (res: any) => {
        console.log(res);
        this.categoryData = res
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }
















  // handleAccountSplash(){
  //   setTimeout(() => {
  //     this.accountSplash=true

  //   }, 10000);
  // }


  // toggleImages() {
  //   this.showFirstImage = !this.showFirstImage;
  //   this.showSecondImage = !this.showSecondImage;
  // }
  // toggleImages(pairIndex: number) {
  //   this.imagePairs[pairIndex].showFirstImage = !this.imagePairs[pairIndex].showFirstImage;
  //   this.imagePairs[pairIndex].showSecondImage = !this.imagePairs[pairIndex].showSecondImage;
  // }
}
