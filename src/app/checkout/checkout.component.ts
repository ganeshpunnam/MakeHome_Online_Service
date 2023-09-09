import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { MakehomeService } from '../makehome.service';
import { UserServiceService } from '../user-service.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  myimage:string="assets/er1.png"

  public orders:any;
  public grandTotal :any; 
  thisUser:any;
  items: any;
 
  constructor(private  userservice:UserServiceService, private rs:MakehomeService,private toast:NgToastService) { 
    this.grandTotal=0;
  }
  
  ngOnInit(): void {
    this.thisUser=this.rs.getUser();
     this.rs.getproducts(this.thisUser.u_id).subscribe((data:any)=>{
      this.orders=data;
      this.grandTotal=0;
       console.log(this.orders);
      this.orders.forEach((element:any)=>{
        this.grandTotal+=(element.price*element.qty);
        // Object.assign(element,{quantity:1,total:element.price})
      });
      this.grandTotal=this.grandTotal.toFixed(2);
 
     })
  }
  qtyupdate(f:any){
    this.rs.updateCart(f).subscribe((data:any)=>{
      this.ngOnInit();
    })
       
      }
 
  
  options = {
   
      "key": "rzp_test_7HdkaZ1xFGPomB",
      "amount": "50000",
      "currency": "INR",
      "name": "Cafe",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": "",
      "callback_url": "http://goodluckhours.com/payment-successful/",//https://eneqd3r9zrjok.x.pipedream.net/,http://localhost:4200/success
      "prefill": {
        "name": "pavan kalyan",
        "email": "gaurav.kumar@example.com",
        "contact": "8639982861"
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
  
};
rzp1:any;
pay(total:any){
  this.options.amount=total;
  this.rzp1 = new this.rs.nativeWindow.Razorpay(this.options);

  this.rzp1.open(); 
 
}

}