import { Component, OnInit } from '@angular/core';
import { MakehomeService } from '../makehome.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  category: any;
  constructor(private jbs: MakehomeService) { }

  ngOnInit(): void {
    this.jbs.getAllCategories().subscribe((data: any) => {
      console.log(data);
      this.category = data;
    });
  }
  delete(c_id: number) {
    console.log(c_id);
    confirm("Are Sure want to delete ?");
    this.jbs.deleteCategories(c_id).subscribe((data: any) => {
      this.category = data;
    })
  }
}
