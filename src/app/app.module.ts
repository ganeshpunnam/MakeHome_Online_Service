// import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { LOginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { ProductsComponent } from './products/products.component';
// import { HttpClientModule } from '@angular/common/http';
// import { UserHeaderComponent } from './user-header/user-header.component';
// import { AddproductsComponent } from './addproducts/addproducts.component';
// import { NgModule } from '@angular/core';

// import { SearchComponent } from './search/search.component';
// import { ImgComponent } from './img/img.component';
// import { UpdateComponent } from './update/update.component';
// import { CartComponent } from './cart/cart.component';
// import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
// import { UserdataComponent } from './userdata/userdata.component';
// import { CategoriesComponent } from './categories/categories.component';
// // import { AdminComponent } from'./admin/admin.component';
// import { FilterPipe } from './filter.pipe';
// import { NgToastModule } from 'ng-angular-popup';
// import { CarouselModule } from 'ngx-owl-carousel-o';
// import { BillComponent } from './bill/bill.component';
// import { HomeComponent } from './home/home.component';
// import { Bill2Component } from './bill2/bill2.component';
// import { TotalPipe } from './total.pipe';
// import { CheckoutComponent } from './checkout/checkout.component';

// import { FormsModule } from '@angular/forms';
// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     LOginComponent,
//     RegisterComponent,
//     ProductsComponent,
//     UserHeaderComponent,
//     AddproductsComponent,
//     UpdateComponent,
//     SearchComponent,
//     ImgComponent,
//     CartComponent,
//     AddToCartComponent,
//     UserdataComponent,
//     CategoriesComponent,
//     // AdminComponent,
//     FilterPipe,
//     BillComponent,
//     HomeComponent,
//     Bill2Component,
//     TotalPipe,
//     CheckoutComponent,
//     FormsModule,
    

  

//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     RouterModule,
//     FormsModule,
//     HttpClientModule,
//     ReactiveFormsModule,
//     NgToastModule,
//     CarouselModule,
//     NgToastModule,
//     RouterModule,
//     FormsModule

    
    

//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// });
// export class AppModule { }
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LOginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { UserHeaderComponent } from './user-header/user-header.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { SearchComponent } from './search/search.component';
import { ImgComponent } from './img/img.component';
import { UpdateComponent } from './update/update.component';
import { CartComponent } from './cart/cart.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { UserdataComponent } from './userdata/userdata.component';
import { CategoriesComponent } from './categories/categories.component';
import { FilterPipe } from './filter.pipe';
import { NgToastModule } from 'ng-angular-popup';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BillComponent } from './bill/bill.component';
import { HomeComponent } from './home/home.component';
import { Bill2Component } from './bill2/bill2.component';
import { TotalPipe } from './total.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LOginComponent,
    RegisterComponent,
    ProductsComponent,
    UserHeaderComponent,
    AddproductsComponent,
    UpdateComponent,
    SearchComponent,
    ImgComponent,
    CartComponent,
    AddToCartComponent,
    UserdataComponent,
    CategoriesComponent,
    FilterPipe,
    BillComponent,
    HomeComponent,
    Bill2Component,
    TotalPipe,
    CheckoutComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule,
    CarouselModule,
    FormsModule, // Import FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
