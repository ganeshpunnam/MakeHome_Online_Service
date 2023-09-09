import { Component, OnInit } from '@angular/core';
import { MakehomeService } from '../makehome.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  order: any;

  constructor(private jbs:MakehomeService) { }

  ngOnInit(): void {
    this.jbs.getAllCart().subscribe((data:any)=>{
      console.log(data);
      this.order=data;
    });
  }
  delete(o_id:number){
    console.log(o_id);
    confirm("Are sure want to delete ?");
    this.jbs.deleteCart(o_id).subscribe((data:any)=>{
      this.order=data;
    });
  }

}
