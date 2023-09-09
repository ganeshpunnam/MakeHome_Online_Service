
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MakehomeService } from '../makehome.service';
import { Product } from './product';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  
  id:any;
product:Product=new Product();
  constructor(private prdser:MakehomeService, private aroute:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.id=this.aroute.snapshot.params['id'];
    this.prdser.getprodByid(this.id).subscribe((data:Product)=>{
      this.product=data;
    }, error =>console.log(error));
  }
  onSubmit(){
    this.prdser.updateProductById(this.product).subscribe(data=>{
      this.route.navigate(['Admin']);
    })

}
}
