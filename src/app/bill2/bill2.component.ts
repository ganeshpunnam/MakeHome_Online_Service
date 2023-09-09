import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MakehomeService } from '../makehome.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-bill2',
  templateUrl: './bill2.component.html',
  styleUrls: ['./bill2.component.css']
})
export class Bill2Component implements OnInit {

  myimage:string="assets/er1.png"
    paymentHandler: any = null;
    public orders:any;
    public grandTotal :any; 
    thisUser:any;
    constructor(private  userservice:UserServiceService, private rs:MakehomeService) { 
      this.grandTotal=0;}
    ngOnInit() {
      this.invokeStripe();
      this.thisUser=this.rs.getUser();
      this.rs.getproducts(this.thisUser.u_id).subscribe((data:any)=>{
       this.orders=data;
       this.grandTotal=0;
        console.log(this.orders);
       this.orders.forEach((element:any)=>{
         this.grandTotal+=element.price;
         Object.assign(element,{quantity:1,total:element.price})
       });
  
      })
    }
    makePayment(amount: any) {
      const paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51MCfyqSBuqUzzMg21W2O4jkdGxdGWoxWX3bkTZZsBRFDeNiE2bloNjfReD55hGDOpUx7X3uFEjAlY6y3nWS2vEZr00UWiIRhkg',
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log(stripeToken);
          alert('Stripe token generated!');
        },
      });
      paymentHandler.open({
        name: 'makeHome',
        description: '3 widgets',
        amount: amount * 100,
      });
    }
    invokeStripe() {
      if (!window.document.getElementById('stripe-script')) {
        const script = window.document.createElement('script');
        script.id = 'stripe-script';
        script.type = 'text/javascript';
        script.src = 'https://checkout.stripe.com/checkout.js';
        script.onload = () => {
          this.paymentHandler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_51MCfyqSBuqUzzMg21W2O4jkdGxdGWoxWX3bkTZZsBRFDeNiE2bloNjfReD55hGDOpUx7X3uFEjAlY6y3nWS2vEZr00UWiIRhkg',
            locale: 'auto',
            token: function (stripeToken: any) {
            
                
             
              console.log(stripeToken);
             
            //   alert('Payment has been successfull!');
            //   Swal.fire({
            //     position: 'center',
            //     icon: 'success',
            //     title: 'Product Added',
            //     showConfirmButton: false,
            //     timer: 1500
                
            //  });
            },
          });
        };
        window.document.body.appendChild(script);
      }
    }
  }