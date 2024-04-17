import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  splash:any=false
  // accountSplash:any=false

  // showFirstImage = true;
  // showSecondImage = false;
  // imagePairs = [
  //   { showFirstImage: true, showSecondImage: false },
  //   { showFirstImage: true, showSecondImage: false },
  // ]

  constructor(){}

  ngOnInit() {
    this.handlesplash()
    // this.handleAccountSplash()

  }
  handlesplash(){
    setTimeout(() => {
      this.splash=true
      console.log(this.splash);
      
    }, 1000);
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
