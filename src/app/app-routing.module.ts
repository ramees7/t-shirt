import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { CartComponent } from './cart/cart.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { ContactComponent } from './contact/contact.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewproComponent } from './viewpro/viewpro.component';
import { SizechartComponent } from './sizechart/sizechart.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdmineditproductComponent } from './admineditproduct/admineditproduct.component';
import { AdminaddbrandcategoryComponent } from './adminaddbrandcategory/adminaddbrandcategory.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BrandsviewComponent } from './brandsview/brandsview.component';
import { BrandsproductsviewComponent } from './brandsproductsview/brandsproductsview.component';
import { TrendingproductsviewComponent } from './trendingproductsview/trendingproductsview.component';
import { NewarrivalproductsviewComponent } from './newarrivalproductsview/newarrivalproductsview.component';
import { ProfileComponent } from './profile/profile.component';
import { adminGuard } from './guards/admin.guard';
import { userGuard } from './guards/user.guard';
import { AllcategoryComponent } from './allcategory/allcategory.component';
import { ShippingComponent } from './shipping/shipping.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminorderlistComponent } from './adminorderlist/adminorderlist.component';
import { AdminshippingComponent } from './adminshipping/adminshipping.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegComponent},
  {path:'cartexpand',component:CartComponent},
  {path:'products',component:ProductcardComponent},
  {path:'category/:id',component:ProductcardComponent},
  {path:'contact',component:ContactComponent},
  {path:'productsview/:id',component:ViewproComponent},
  {path:'sizechart',component:SizechartComponent},
  {path:'checkout',canActivate:[userGuard],component:CheckoutComponent},
  {path:'brands',component:BrandsviewComponent},
  {path:'brandproducts/:id',component:BrandsproductsviewComponent},
  {path:'trendings',component:TrendingproductsviewComponent},
  {path:'newarrivals',component:NewarrivalproductsviewComponent},
  {path:'allcategory',component:AllcategoryComponent},
  {path:'track/:id',component:ShippingComponent},
  {path:'orders',component:OrdersComponent},
  {path:'profile',canActivate:[userGuard],component:ProfileComponent},

  {path:'adminhome',canActivate:[adminGuard],component:AdminHomeComponent},
  {path:'admineditproduct/:id',canActivate:[adminGuard],component:AdmineditproductComponent},
  {path:'adminaddproduct',canActivate:[adminGuard],component:AddproductComponent},
  {path:'adminaddbrandcategory',canActivate:[adminGuard],component:AdminaddbrandcategoryComponent},
  {path:'adminorderlist',canActivate:[adminGuard],component:AdminorderlistComponent},
  {path:'adminshipping/:id',canActivate:[adminGuard],component:AdminshippingComponent},

  {path:'**',redirectTo:"/"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
