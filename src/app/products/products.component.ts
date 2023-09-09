import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MakehomeService } from '../makehome.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  sales: any;
  sb: any;
  product:any;

  constructor(private ser:MakehomeService,private routr:Router) {
    this.sales = "";
    this.product = {
      id: "",
      name: "",
      price: "",
      quantity: "",
      image: "",
      dsc: "",
      pcid: "",
      brand: ""
      

    }
   }

  ngOnInit(): void {
    this.ser.getAllProduct().subscribe((data:any)=>
    {
      this.sales=data;
      console.log(data);
    })
  }
  ShowAll(){
  this.ser.getAllProduct().subscribe((data:any)=>
  {
    this.product=data;
    console.log(data);

  })
}

 

  delete(id: number) {
    console.log(id);
    confirm("Are Sure want to delete Y/N");
    this.ser.delete(id).subscribe(() =>{
      this.routr.navigate(['product']);
    });
  }
  update(u: any) {
    this.product = u;
  };
  editproduct(u1: any) {
    this.ser.Update(u1).subscribe((data: any) => {
      console.log(data);
    });
  }
  search(value: any) {
    console.log(value.search);
    this.ser.searchpi(value.search).subscribe((data: any) => {
      console.log(data);
      this.product = data;
    });
  }
  

}





 
