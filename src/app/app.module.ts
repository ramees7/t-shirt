import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { CartComponent } from './cart/cart.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductcardComponent } from './productcard/productcard.component';
import { ContactComponent } from './contact/contact.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { ViewproComponent } from './viewpro/viewpro.component';
import { TrendingnewarrivalsComponent } from './trendingnewarrivals/trendingnewarrivals.component';
import { StarRatingModule } from 'angular-star-rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SizechartComponent } from './sizechart/sizechart.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminfooterComponent } from './adminfooter/adminfooter.component';
import { AdmineditproductComponent } from './admineditproduct/admineditproduct.component';
import { AdminaddbrandcategoryComponent } from './adminaddbrandcategory/adminaddbrandcategory.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgOptimizedImage } from '@angular/common';
import { BrandsviewComponent } from './brandsview/brandsview.component';
import { BrandsproductsviewComponent } from './brandsproductsview/brandsproductsview.component';
import { NewarrivalproductsviewComponent } from './newarrivalproductsview/newarrivalproductsview.component';
import { TrendingproductsviewComponent } from './trendingproductsview/trendingproductsview.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchPipe } from './pipes/search.pipe';
import { AllcategoryComponent } from './allcategory/allcategory.component';
import { ShippingComponent } from './shipping/shipping.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminorderlistComponent } from './adminorderlist/adminorderlist.component';
import { AdminshippingComponent } from './adminshipping/adminshipping.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegComponent,
    CartComponent,
    ProductcardComponent,
    ContactComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    ViewproComponent,
    TrendingnewarrivalsComponent,
    SizechartComponent,
    AddproductComponent,
    AdminfooterComponent,
    AdmineditproductComponent,
    AdminaddbrandcategoryComponent,
    CheckoutComponent,
    BrandsviewComponent,
    BrandsproductsviewComponent,
    NewarrivalproductsviewComponent,
    TrendingproductsviewComponent,
    ProfileComponent,
    SearchPipe,
    AllcategoryComponent,
    ShippingComponent,
    OrdersComponent,
    AdminorderlistComponent,
    AdminshippingComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    StarRatingModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
