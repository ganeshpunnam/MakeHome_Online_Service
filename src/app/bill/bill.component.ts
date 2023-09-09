import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MakehomeService } from '../makehome.service';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  myimage:string="assets/er1.png"
  orderlist: any;
  sum: any;
  public orders:any;
  public grandTotal :any; 
  thisUser:any;
  items: any;
  constructor(private wser: UserServiceService, private rs: MakehomeService,private route:Router ,private Auth:AuthService) {
    this.sum = 0;
    

  }
  options = {
    "key": "rzp_test_7HdkaZ1xFGPomB",
    "amount": "50000",
    "currency": "INR",
    "name": "MakeHome",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "",
    "callback_url": "http://goodluckhours.com/payment-successful/",//https://eneqd3r9zrjok.x.pipedream.net/,http://localhost:4200/success
    "prefill": {
      "name": "Gaurav Kumar",
      "email": "gaurav.kumar@example.com",
      "contact": "9999999999"
    },
    "notes": {
      "address": "Razorpay Corporate Office"
    },
    "theme": {
      "color": "#3399cc"
    }
  };

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
  // orders(billForm: any) {
  //   console.log(billForm.orderno);
  //   this.wser.getOrderByOid(billForm.orderno).subscribe((data: any) => {
  //     console.log(data);
  //     this.orderlist = data;
  //     this.orderlist.forEach((element: any) => {
  //       this.sum = this.sum + (element.price * element.quantity);
  //     });
  //     console.log(this.sum);
  //   });


  // }
  pay(grandTotal: any) {
    grandTotal=grandTotal*100;
    this.options.amount = grandTotal;
    let rzp1 = new this.rs.nativeWindow.Razorpay(this.options);
    
    rzp1.open();
  }

  // payment(billForm:any,orders:any,sum:any){
  //   for(let i=0;i<orders.length;i++){
  //     orders[i].payement="success"
  //   }
  //   this.wser.updateStatus(billForm.orderno,orders).subscribe((data:any)=>{
  //     console.log(data);
  //   })
  //   sum=sum*100;
  //   this.options.amount = sum;
  //   let rzp1 = new this.raror.nativeWindow.Razorpay(this.options);
    
  //   rzp1.open();
  //   //alert('success')
  //   //this.route.navigate(['success'])
  }




