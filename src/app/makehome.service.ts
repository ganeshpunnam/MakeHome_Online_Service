import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './update/product';
import { Observable } from 'rxjs';
function _window() : any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class MakehomeService {
  get nativeWindow() : any {
    return _window();
 }
  

  // update(sb: any) {
  //   throw new Error('Method not implemented.');
  // }
  // loginuser: boolean;

  // constructor(private httpClient:HttpClient) { 
  //   this.loginuser=false;

  // }
  // setLoginUser(){
  //   this.loginuser=true;
  //  }
  //  getUserlogin(){
  //   return this.loginuser;
  //  }
  Value:any;
  userLogged: boolean;
  cart: any;
  userDetails: any;
  Array: any;
  constructor(private httpClient: HttpClient) {
    this.userLogged = false;
    this.cart = {
      o_id: 0,
      p_name: "",
      id: "",
      u_id: "",
  
      image: "",
      p_price: ""
      
    }
  }
  setuserLogged() {
    this.userLogged = true;
  }
  getuserLogged() {
    return this.userLogged;
  }
  setUser(userDetails:any){
    this.userDetails=userDetails;
  }
  getUser(){
    return  this.userDetails;
  }
   getAllProduct()
   {
    return this.httpClient.get("/market/Products");
   }
   delete(id:number){
    return this.httpClient.delete("/market/Products/"+id);
  }
  insert(Products:any){
    return this.httpClient.post("/market/Products",Products);
  }
  Update(product:any){
    return this.httpClient.put("/market/Products/",product);

  }
  updateProductById(product:Product){
    return this.httpClient.put('/market/Products/',product)

  }
  getprodByid(id:number){
    return this.httpClient.get('/market/Products/'+id);

  }
  getproducts(u_id:any){
    return this.httpClient.get("/market/ords/"+u_id);

  }
  doSearch(name:any){
    return this.httpClient.put("/market/search/",name);

  }
  insertUser(user1
    :any){
    return this.httpClient.get("/market/user",user1);

  }

AllUsers(){
  return this.httpClient.get("/market/user");
  
}
getAllCart(){
  return this.httpClient.get("/market/orders");
}
deleteCart(o_id:any){
  return this.httpClient.delete("/market/orders/"+o_id);
}
deleteAllCart(u_id:any){
  return this.httpClient.delete("/market/del_u/"+u_id);
}
searchpi(products: any) {
  console.log(products);
  return this.httpClient.get("/market/search/" + products);
}
getAllUserData() {
  return this.httpClient.get("/market/user");
}
// getAllUserData(u_id:any) {
//   return this.httpClient.get("/market/user/"+u_id);
// }
deleteUserData(u_id: number) {
  return this.httpClient.delete("/market/user/" + u_id);
}

insertData(userdata:any){
  return this.httpClient.post("/market/user",userdata)
}
searchud(userdata: any) {
  console.log(userdata);
  return this.httpClient.get("/market/user/" + userdata);
}
//Categories
getAllCategories() {
  return this.httpClient.get("/market/categories");
}
deleteCategories(c_id: number) {
  return this.httpClient.delete("/market/categories/" + c_id);
}
getAllproducts(){
  return this.httpClient.get("/market/Products");
}
// inserCart(item:any){
//   console.log(item);
//   this.cart.name=item.name;
//   this.cart.id=item.id;
//   this.cart.price=item.price;
//   console.log(this.userDetails.id)
//   console.log(this.userDetails)
//   this.cart.u_id=this.userDetails.u_id;
//   console.log(this.cart.u_id)
  // this.cart.u_name=this.userDetails.u_name;
  // this.cart.u_phone=this.userDetails.u_phone;
//   console.log(this.cart);
//   return this.httpClient.post("/market/orders",this.cart);
// }
insertOrder(item: any) {
  console.log(item);
  this.cart.o_id = item.o_id
  this.cart.id = item.id
  this.cart.price = item.price
  this.cart.name=item.name
  this.cart.u_id = this.userDetails.u_id
  this.cart.image = item.image
  this.cart.qty = 1
  // this.cart.dsc = item.dsc
 

  console.log(this.cart);
  return this.httpClient.post("/market/orders", this.cart)
}
getCount(u_id:any){
  return this.httpClient.get("/market/count1/"+u_id);
}
updateCart(cart:any){
  return this.httpClient.put("/market/orers",cart)
  }
// get nativeWindow():any{
//   return _windows();
// }





searchbyname(name: any) {
  return this.httpClient.get("/market/Search/" + name);
}
searchcategory(foods: any) {
  console.log(foods);
  return this.httpClient.get("/market/Searchca/" + foods);
}



}