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
import { SearchComponent } from './search/search.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdmineditproductComponent } from './admineditproduct/admineditproduct.component';
import { AdminaddbrandcategoryComponent } from './adminaddbrandcategory/adminaddbrandcategory.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegComponent},
  {path:'cartexpand',component:CartComponent},
  {path:'products',component:ProductcardComponent},
  {path:'contact',component:ContactComponent},
  {path:'productsview/:id',component:ViewproComponent},
  {path:'sizechart',component:SizechartComponent},
  {path:'search',component:SearchComponent},
  {path:'checkout',component:CheckoutComponent},

  {path:'adminhome',component:AdminHomeComponent},
  {path:'admineditproduct/:id',component:AdmineditproductComponent},
  {path:'adminaddproduct',component:AddproductComponent},
  {path:'adminaddbrandcategory',component:AdminaddbrandcategoryComponent},

  {path:'**',redirectTo:"/"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
