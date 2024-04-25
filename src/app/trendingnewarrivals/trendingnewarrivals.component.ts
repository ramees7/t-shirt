import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-trendingnewarrivals',
  templateUrl: './trendingnewarrivals.component.html',
  styleUrls: ['./trendingnewarrivals.component.css']
})
export class TrendingnewarrivalsComponent implements OnInit {

  productsData: any;
  newArrivalsData: any;
  // trendingData: any;
  BASE_URL:any;
  categoryKidsData:any;
  constructor(private api: ApiService) {

  }

  ngOnInit() {
    this.getAllProductsData()
    this.BASE_URL=this.api.BASE_URL
  }

  getAllProductsData() {
    this.api.getAllProductsApi().subscribe({
      next: (res: any) => {
        this.productsData = res
        console.log(this.productsData, " products")
        this.newArrivalsData = this.productsData.filter((item: any) => item.newarrival== "Yes").slice(0,4)
        console.log(this.newArrivalsData,"new arrivals");
        this.categoryKidsData = this.productsData.filter((item: any) => item.category == "KIDS").slice(-4)
        console.log(this.categoryKidsData,"kids");
      }
    })
  }

}
