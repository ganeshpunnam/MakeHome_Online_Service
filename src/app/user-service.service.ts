import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public cartItemList:any=[]
public productlist=new BehaviorSubject<any>([]);
public search = new BehaviorSubject<string>("");


  constructor() { }
  

getproducts(){
  return this.productlist.asObservable();
}
setproducts(product :any){
this.cartItemList.push(...product);
this.productlist.next(product);
}
addtoCart(product:any){
 this.cartItemList.push(product);
 this.productlist.next(this.cartItemList);
 this.getTotalPrice();
 console.log(this.cartItemList)

}
getTotalPrice(): number{
  let grandTotal=0;
  this.cartItemList.map((a:any)=>{
    grandTotal += a.total;
  })
  return grandTotal;
}
removeCartItem(products:any){
  this.cartItemList.map((a:any,index:any)=>{
    if(products.id==a.id){
      this.cartItemList.splice(index,1);
    }
  })
}
removeAllCart(){
  this.cartItemList=[];
  this.productlist.next(this.cartItemList);
}


}