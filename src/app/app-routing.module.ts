import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { AdminComponent } from './admin/admin.component';
import { BillComponent } from './bill/bill.component';
import { Bill2Component } from './bill2/bill2.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LOginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';

import { UserHeaderComponent } from './user-header/user-header.component';
import { UserdataComponent } from './userdata/userdata.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LOginComponent},
  {path:'userRegister/rest',component:RegisterComponent},
 {path:'Admin/login',component:LOginComponent},
  {path:'userRegister',component:RegisterComponent},
  {path:'Admin/rest',component:ProductsComponent},//AddProducts//Admin/rest/Admin
  {path:'userlogin',component:UserHeaderComponent},
  {path:'product',component:ProductsComponent},
  {path:'AddProducts',component:AddproductsComponent},//updateProducts//userhead/login
  {path:'login/userhead',component:UserHeaderComponent},
  {path:'user',component:UserHeaderComponent},
  {path:'login/userRegister',component:RegisterComponent},//categories
  {path:'Admin/orders',component:CartComponent},
  {path:'Admin/userdata',component:UserdataComponent},
  {path:'categories',component:CategoriesComponent},
   {path:'Admin',component:AdminComponent},
  {path:'adtocart',component:AddToCartComponent},
  {path:'bill',component:BillComponent},
  {path:'bill2',component:Bill2Component},
  {path:'ckout',component:CheckoutComponent},



  {path:"updateproduct/:id",component:UpdateComponent},
  // {path:'',component:LOginComponent},
  // {path:'Admin',component:AdminComponent},
  // {path:'Admin/rest',component:ProductsComponent},
  // {path:'Admin/AddProducts',component:AddproductsComponent},
  // {path:'userhead',component:UserHeaderComponent},
  // {path:'userhead/orders',component:CartComponent},
  // {path:'adtocart',component:AddToCartComponent},
  // {path:'userRegister',component:RegisterComponent},


 



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
