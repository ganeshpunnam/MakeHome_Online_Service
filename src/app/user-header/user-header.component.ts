import { Component, OnInit } from '@angular/core';
import { MakehomeService } from '../makehome.service';
import { UserServiceService } from '../user-service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  productList: any;
  searchKey:string ="";
  public searchTerm : string=' ';
  public totalItem:number=0;
  public filterCategory:any;
  thisUser: any;

  


  constructor(private rs: MakehomeService,private userservice:UserServiceService,private router:Router,private route:ActivatedRoute,private toast:NgToastService) { }

  ngOnInit(): void {
    this.thisUser=this.rs.getUser();
   
    this.rs.getAllProduct().subscribe((data: any) => {
      console.log(data);
      this.productList = data;
   
  });
  this.rs.getCount(this.thisUser.u_id).subscribe((data:any)=>{
    this.totalItem=data;
  })
}
addtocart(item:any){
  console.log(item);
  this.rs.insertOrder(item).subscribe((data:any)=>{
  //   Swal.fire({
  //     position: 'center',
  //     icon: 'success',
  //     title: 'Product Added',
  //     showConfirmButton: false,
  //     timer: 1500
      
  //  });
    this.toast.success({detail:"success Message", summary:"Your Product Is Success Added  🤞"+this.thisUser.u_name+ "",duration:5000})
    //alert("Successfully Order");
  });
  this.rs.getCount(this.thisUser.u_id).subscribe((data:any)=>{
    this.totalItem=data;
  })
}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
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
  // addtocart(item:any){
  // this.userservice.addtoCart(item);
  // this.rs.inserCart(item).subscribe((data:any)=>{

  // })
  // alert("Products Added successful...!!!");
  
  // }
//   search(event:any){
//     this.searchTerm = (event.target as HTMLInputElement).value;
//     console.log(this.searchTerm);
//     this.userservice.search.next(this.searchTerm);
//   }
//   filter(category:string){
// this.filterCategory=this.productList.filter((a:any)=>{
//   if(a.pcid==category || category==''){
//   return a;
//   }
// })
  //}
  searchh(value:any){   
    console.log(value);
    this.rs.searchcategory(value).subscribe((data:any)=>{
     console.log(data);
     this.productList=data;
})
  }
  search(value: any) {
    console.log(value.search);
    this.rs.searchbyname(value.search).subscribe((data: any) => {
      console.log(data);
      this.productList = data;
});
}
reload() {
  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  this.router.onSameUrlNavigation = 'reload';
  this.router.navigate(['./'], { relativeTo: this.route });
}

}
  

  


