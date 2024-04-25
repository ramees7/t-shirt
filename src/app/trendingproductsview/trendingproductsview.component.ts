import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-trendingproductsview',
  templateUrl: './trendingproductsview.component.html',
  styleUrls: ['./trendingproductsview.component.css']
})
export class TrendingproductsviewComponent implements OnInit {

  trendingAllProducts: any;
  BASE_URL: any;
  yes: string = "Yes"
  searchText: any = ""
  newarrivalAllProducts: any;

  constructor(private api: ApiService, private aRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.getAllTrendingProducts()
    this.BASE_URL = this.api.BASE_URL
  }

  getAllTrendingProducts() {
    this.api.getAllProductsApi().subscribe({
      next: (res: any) => {
        console.log(res);
        this.trendingAllProducts = res.filter((item: any) => item.trending == "Yes")
        console.log(this.trendingAllProducts, "trend");
        this.newarrivalAllProducts = res.filter((item: any) => item.newarrival == "Yes")
        console.log(this.newarrivalAllProducts, "newarr")
      }
    })
  }

  sortPriceLowToHigh() {
    this.trendingAllProducts.sort((p1: any, p2: any) => p1.offerprice - p2.offerprice)
  }

  sortPriceHighToLow() {
    this.trendingAllProducts.sort((p1: any, p2: any) => p2.offerprice - p1.offerprice)
  }
}
