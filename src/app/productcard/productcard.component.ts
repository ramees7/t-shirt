import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {

  productCategory: any;
  categoryAllProducts: any;
  allProducts: any;
  trendingAllProducts: any;
  newarrivalAllProducts: any;
  BASE_URL: any;
  yes: string = "Yes"
  searchText:any=""

  constructor(private api: ApiService, private aRoute: ActivatedRoute) {
    this.aRoute.params.subscribe({
      next: (res: any) => {
        this.productCategory = res.id
        console.log(this.productCategory);
      }
    })
  }

  ngOnInit() {
    this.getProductsData()
    this.BASE_URL = this.api.BASE_URL
  }

  getProductsData() {
    this.api.getAllProductsApi().subscribe({
      next: (res: any) => {
        console.log(res)
        this.allProducts = res
        this.categoryAllProducts = res.filter((item: any) => item.category == this.productCategory)
        console.log(this.categoryAllProducts, "cat")

        this.trendingAllProducts = res.filter((item: any) => item.trending == "Yes")
        console.log(this.trendingAllProducts, "trend")

        this.newarrivalAllProducts = res.filter((item: any) => item.newarrival == "Yes")
        console.log(this.newarrivalAllProducts, "newarr")
      }
    })
  }

  sortPriceLowToHighAll() {
    this.allProducts.sort((p1: any, p2: any) => p1.offerprice - p2.offerprice)
  }

  sortPriceHighToLowAll() {
    this.allProducts.sort((p1: any, p2: any) => p2.offerprice - p1.offerprice)
  }

  sortPriceLowToHighCate() {
    this.categoryAllProducts.sort((p1: any, p2: any) => p1.offerprice - p2.offerprice)
  }

  sortPriceHighToLowCate() {
    this.categoryAllProducts.sort((p1: any, p2: any) => p2.offerprice - p1.offerprice)
  }

  
}
