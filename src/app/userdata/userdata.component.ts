import { Component, OnInit } from '@angular/core';
import { MakehomeService } from '../makehome.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  user:any;
  constructor(private jbs: MakehomeService) { }

  ngOnInit(): void {
    this.jbs.getAllUserData().subscribe((data:any)=>{
      console.log(data);
      this.user=data;
    });
  }
  delete(u_id:number){
    console.log(u_id);
    confirm("Are Sure want to delete ?");
    this.jbs.deleteUserData(u_id).subscribe((data:any)=>{
    this.user=data;
    });
  }
  search(value: any) {
    console.log(value.search);
    this.jbs.searchud(value.search).subscribe((data: any) => {
      console.log(data);
      this.user = data;
    });
  }

}
