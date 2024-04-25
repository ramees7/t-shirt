import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  BASE_URL = "https://tshirt-server-o98n.onrender.com"
  // BASE_URL = "http://localhost:3000"
  user: any = "User"
  admin: any = "Admin"
  cartCount = new BehaviorSubject(0)

  constructor(private http: HttpClient) {
    if(sessionStorage.getItem("token") && sessionStorage.getItem("role")=="User"){
      this.getCartCountApi()
    }
  }


  //function for setting header with token
  appendTokenToHeader() {
    const token = sessionStorage.getItem("token")
    let headers = new HttpHeaders()
    if (token) {
      headers = headers.append("Authorization", `bearer ${token}`)
    }
    return { headers }
  }

  isAdminLoggedGuard() {
    return !!sessionStorage.getItem("token") && sessionStorage.getItem("role") == this.admin
  }
  isUserLoggedGuard() {
    return !!sessionStorage.getItem("token") && sessionStorage.getItem("role") == this.user
  }

  userRegistrationApi(data: any) {
    return this.http.post(`${this.BASE_URL}/registeruser`, data)
  }

  userLoginApi(data: any) {
    return this.http.post(`${this.BASE_URL}/login`, data)
  }

  adminAddProductApi(data: any) {
    return this.http.post(`${this.BASE_URL}/addproduct`, data, this.appendTokenToHeader())
  }

  adminAddBrandApi(data: any) {
    return this.http.post(`${this.BASE_URL}/addbrand`, data, this.appendTokenToHeader())
  }

  adminAddCategoryApi(data: any) {
    return this.http.post(`${this.BASE_URL}/addcategory`, data, this.appendTokenToHeader())
  }

  getAllProductsApi() {
    return this.http.get(`${this.BASE_URL}/getallproducts`)
  }

  getAllBrandsApi() {
    return this.http.get(`${this.BASE_URL}/getbrands`)
  }

  getAllCategoriesApi() {
    return this.http.get(`${this.BASE_URL}/getcategories`)
  }

  getEditProductApi(id: any) {
    return this.http.get(`${this.BASE_URL}/getoneproductedit/${id}`, this.appendTokenToHeader())
  }

  getOneProductApi(id: any) {
    return this.http.get(`${this.BASE_URL}/getoneproduct/${id}`, this.appendTokenToHeader())
  }

  userUpdateApi(id: any, data: any) {
    return this.http.put(`${this.BASE_URL}/user/updateprofile/${id}`, data, this.appendTokenToHeader())
  }

  productUpdateApi(id: any, data: any) {
    return this.http.put(`${this.BASE_URL}/editproduct/${id}`, data, this.appendTokenToHeader())
  }

  getUserApi() {
    return this.http.get(`${this.BASE_URL}/userfind`, this.appendTokenToHeader())
  }

  addToCartApi(data: any) {
    return this.http.post(`${this.BASE_URL}/addtocart`, data, this.appendTokenToHeader())
  }

  getCartApi() {
    return this.http.get(`${this.BASE_URL}/getcart`, this.appendTokenToHeader())
  }

  deleteProductApi(id: any) {
    return this.http.delete(`${this.BASE_URL}/deleteproduct/${id}`, this.appendTokenToHeader())
  }

  getCartCountApi() {
    this.http.get(`${this.BASE_URL}/getcart`, this.appendTokenToHeader()).subscribe((res: any) => {
      this.cartCount.next(res.length)
    })
  }

  removeFromCartApi(id: any) {
    return this.http.delete(`${this.BASE_URL}/removefromcart/${id}`, this.appendTokenToHeader())
  }

  emptyCartApi() {
    return this.http.delete(`${this.BASE_URL}/emptycart`, this.appendTokenToHeader())
  }

  increaseCartQuantityApi(id:any){
    return this.http.get(`${this.BASE_URL}/increasequantity/${id}`, this.appendTokenToHeader())
  }

  decreaseCartQuantityApi(id:any){
    return this.http.get(`${this.BASE_URL}/decreasequantity/${id}`, this.appendTokenToHeader())
  }

  deleteUserApi(){
    return this.http.delete(`${this.BASE_URL}/deleteuser`,this.appendTokenToHeader())
  }

  addToOrderApi(data: any) {
    return this.http.post(`${this.BASE_URL}/addtoorder`, data, this.appendTokenToHeader())
  }

  getOrderDataApi(){
    return this.http.get(`${this.BASE_URL}/orderslist`, this.appendTokenToHeader())
  }

  getOrderDataAdminApi(){
    return this.http.get(`${this.BASE_URL}/orderslistadmin`, this.appendTokenToHeader())
  }

  deleteOrderApi(id:any){
    return this.http.delete(`${this.BASE_URL}/deleteorder/${id}`,this.appendTokenToHeader())
  }

  updateShippingApi(id: any, data: any) {
    return this.http.put(`${this.BASE_URL}/updateshipping/${id}`, data, this.appendTokenToHeader())
  }


}


