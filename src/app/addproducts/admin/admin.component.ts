import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MakehomeService } from '../makehome.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // myimage:string="assets/img1.jpg"
  // foodList: any;
  // route: any;
  // constructor(private rs: MakehomeService) { }

  // ngOnInit(): void {
  //   this.rs.getAllproducts().subscribe((data: any) => {
  //     console.log(data);
  //     this.foodList = data;
  //   });
  // }
  products:any;
  isCollapsed:boolean=true;
  orderCollapsed:boolean=true;
  userCollapsed:boolean=true;
  waiter:any;
  users:any;

  deleteproduct: any;
  constructor(private pser:MakehomeService,private route:Router){}
   // private wser:WaiterService,private logser:PostmanService) { }

  ngOnInit(): void {
    this.getProducts();
    this. getAllorders();
    this.getuser();
    
  }
  showprod(){
    this.isCollapsed=!this.isCollapsed;
  }
  showorder(){
    this. orderCollapsed=!this. orderCollapsed;
  }
  showusers(){
    this.userCollapsed=!this.userCollapsed;
  }
  getProducts(){
    this.pser.getAllProduct().subscribe((data:any)=>{
      this.products=data;
      console.log(data);
    })
  }
  editprod(id:number){
    this.route.navigate(['updateproduct/'+id]);
  }
  getAllorders(){
    this.pser.getAllCart().subscribe((data:any)=>{
      this.waiter=data;
      console.log(data);
    })
  }
  getuser(){
    this.pser.getAllUserData().subscribe((data:any)=>{
      this.users=data;
      console.log(data);
    });
  }
  addprod(){
    this.route.navigate(['AddProducts']);

  }
  // delprod(id:number){
  //   this.pser.delete(id).subscribe((data:any)=>{
  //     console.log(data);
  //     // this.route.navigate(['/reload']);
  //     this.getProducts();
  //   })
  // }
  delete(id: number) {
    const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            );
      this.pser.delete(id).subscribe((data: any) => {
        this.deleteproduct = data;
        console.log(data);
        this.ngOnInit();
      }); 
     // this.ngOnInit();
        }
            else if (
                      result.dismiss === Swal.DismissReason.cancel
                    ) {
                      swalWithBootstrapButtons.fire(
                        'Cancelled',
                        'Your imaginary file is safe :)',
                        'error'
                      )
                    }
              })
            }


          }