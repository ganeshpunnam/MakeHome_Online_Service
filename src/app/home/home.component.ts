import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MakehomeService } from '../makehome.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList: any;
  searchKey:string ="";
  public searchTerm : string=' ';
  public totalItem:number=0;
  public filterCategory:any;
  


  constructor(private rs: MakehomeService,private userservice:UserServiceService) { }

  ngOnInit(): void {
    this.userservice.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
    this.userservice.getproducts().subscribe(res=>{
      this.totalItem=res.length;
    })

    this.rs.getAllProduct().subscribe((data: any) => {
      console.log(data);
      this.productList = data;
      this.filterCategory=data;
      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    });
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,

    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  addtocart(item:any){
  this.userservice.addtoCart(item);
  alert("Products Added successful...!!!");
  
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.userservice.search.next(this.searchTerm);
  }
  filter(category:string){
this.filterCategory=this.productList.filter((a:any)=>{
  if(a.pcid==category || category==''){
  return a;
  }
})
  }
}
  

  


