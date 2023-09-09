import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MakehomeService } from '../makehome.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  myimage:string="assets/er.jpg"

  constructor(private ser:MakehomeService,private route:Router) { }

  ngOnInit(): void {
  }
  register(regForm:any){
    alert(regForm);
    console.log(regForm);
    this.ser.insert(regForm).subscribe(()=>
    {
      this.route.navigate(['Admin']);
    });
  }

}
