import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  BASE_URL = "http://localhost:3000"

  constructor(private http:HttpClient) { }


   //function for setting header with token
 appendToeknToHeader() {
  const token = sessionStorage.getItem("token")
  let headers = new HttpHeaders()
  if (token) {
    headers = headers.append("Authorization", `bearer ${token}`)
  }
  return { headers }
}

  userRegistrationApi(data:any){
    return this.http.post(`${this.BASE_URL}/registeruser`,data)
  }

  userLoginApi(data:any){
    return this.http.post(`${this.BASE_URL}/login`,data)
  }

  adminAddProductApi(data:any){
    return this.http.post(`${this.BASE_URL}/addproduct`,data,this.appendToeknToHeader())
  }

  adminAddBrandApi(data:any){
    return this.http.post(`${this.BASE_URL}/addbrand`,data,this.appendToeknToHeader())
  }

  adminAddCategoryApi(data:any){
    return this.http.post(`${this.BASE_URL}/addcategory`,data,this.appendToeknToHeader())
  }

  getAllProductsApi(){
    return this.http.get(`${this.BASE_URL}/getallproducts`,this.appendToeknToHeader())
  }

  getAllBrandsApi(){
    return this.http.get(`${this.BASE_URL}/getbrands`,this.appendToeknToHeader())
  }

  getAllCategoriesApi(){
    return this.http.get(`${this.BASE_URL}/getcategories`,this.appendToeknToHeader())
  }

}


