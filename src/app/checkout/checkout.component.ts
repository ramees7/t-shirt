import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {
  IPayPalConfig,
  ICreateOrderRequest
} from 'ngx-paypal';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public payPalConfig?: IPayPalConfig;
  cartProducts: any;
  BASE_URL: any;
  totalAmount: any = 0
  mrpTotalAmount: any = 0
  totalCartPrice: any
  totalCartPricePaypal: any
  deliveryDate:any;

  constructor(private api: ApiService, private toastr: ToastrService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initConfig()
    this.getCart()
    this.BASE_URL = this.api.BASE_URL
    this.deliveryDate=new Date(new Date().setDate(new Date().getDate()+4)).toDateString()
  }

  checkOutForm: any = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    pincode: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    address: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
    phone: ['', [Validators.required, Validators.pattern('[0-9 ]*'), Validators.minLength(10), Validators.maxLength(10)]],
  })


  getCart() {
    this.api.getCartApi().subscribe({
      next: (res: any) => {
        console.log(res)
        this.cartProducts = res
        console.log(this.cartProducts, "jhgdhdhdsf");
        this.getTotalAmount()
        this.getTotalMrpAmount()
        this.getTotalCartPrice()
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  handleCheckoutOrder() {
    this.api.getCartApi().subscribe({
      next: (res: any) => {
        console.log(res)
        const orderNo: any = Date.now()
        const date=new Date()
        const data = { products:res, username: `${this.checkOutForm.get("name").value}`, phone: `${this.checkOutForm.get("phone").value}`, orderNo, address: `${this.checkOutForm.get("address").value}`, pincode: `${this.checkOutForm.get("pincode").value}`,totalOrderPrice:this.totalAmount ,date:date,deliveryDate:this.deliveryDate ,statusOrdered:"Yes",statusPlaced :"Yes",statusShipped:"No",statusDelivered :"No"}
        console.log(data, "data")

        this.api.addToOrderApi(data).subscribe({
          next: (res: any) => {
            console.log(res, "order")
            this.checkOutForm.get('name')?.setValue("")
            this.checkOutForm.get('pincode')?.setValue("")
            this.checkOutForm.get('address')?.setValue("")
            this.checkOutForm.get('phone')?.setValue("")
            this.handleEmptyCart()
            this.router.navigateByUrl('/')
          },
          error: (err: any) => {
            console.log(err, "ord err")
          }
        })
      },
      error: (err) => {
        console.log(err);
      }
    })


  }


  getTotalAmount() {
    if (this.cartProducts.length > 0) {
      this.totalAmount = Math.ceil(this.cartProducts.map((item: any) => item.totalprice * 1).reduce((p1: any, p2: any) => p1 + p2))
      console.log(this.totalAmount ,"total amt");
    }
    else {
      this.totalAmount = 0
    }
  }

  getTotalMrpAmount() {
    if (this.cartProducts.length > 0) {
      this.mrpTotalAmount = Math.ceil(this.cartProducts.map((item: any) => item.mrp * item.quantity).reduce((p1: any, p2: any) => p1 + p2))
      console.log(this.mrpTotalAmount,"mrp total");
    }
    else {
      this.totalAmount = 0
    }
  }

  getTotalCartPrice() {
    if (this.totalAmount >= 500) {
      this.totalCartPrice = this.totalAmount
      this.totalCartPricePaypal = Math.ceil(this.totalAmount / 82.59419375)
      console.log(this.totalCartPricePaypal,"paypal free")
    }
    else {
      console.log(this.totalAmount,"total amt");
      
      this.totalCartPrice = this.totalAmount + 49
      this.totalCartPricePaypal = Math.ceil(this.totalCartPrice / 82.59419375)
      console.log(this.totalCartPricePaypal,"paypal 49");
    }
  }

  handleEmptyCart() {
    this.api.emptyCartApi().subscribe({
      next: (res: any) => {
        console.log(res)
        this.getCart()
        this.api.getCartCountApi()
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }



  initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'sb',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'EUR',
            value: this.totalCartPricePaypal,
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: this.totalCartPricePaypal
              }
            }
          },
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        // this.showSuccess = true;
        this.toastr.success("Order Placed ")
        this.handleCheckoutOrder()
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
        this.toastr.warning("Transaction has been cancelled")
      },
      onError: err => {
        console.log('OnError', err);
        this.toastr.error("Transaction cancelled")
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
        // this.resetStatus();
      }
    };
  }
}
