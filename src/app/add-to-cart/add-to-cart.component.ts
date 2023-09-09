import { Component, OnInit } from '@angular/core';
import { MakehomeService } from '../makehome.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {




  public orders:any;
  public grandTotal :any; 
  thisUser:any;
  items: any;
 
  constructor(private  userservice:UserServiceService, private rs:MakehomeService) { 
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
  removeItem(item:any){
    this.rs.deleteCart(item.o_id).subscribe((data:any)=>{
      console.log(data);
    }); 
    this.ngOnInit();
  }
  emptycart(){
    this.rs.deleteAllCart(this.thisUser.u_id);
  }
  
qtyupdate(f:any){
  this.rs.updateCart(f).subscribe((data:any)=>{
    this.ngOnInit();
  })
     
    }
  
}