
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EncryptionService } from '../encryption.service';
import { MakehomeService } from '../makehome.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users:any;
  myimage:string="assets/er.jpg"
  thisUser: any;
  constructor(private service:MakehomeService,private route:Router, private EncrDecr:EncryptionService) { }

  ngOnInit(): void {
    this.service.getAllUserData().subscribe((data:any)=>{
      this.users=data;
    })
    
  }
  count:any;

  submitUser(userForm:any){
    //console.log(this.users)
    for(let i of this.users)
    {
      this.count=0;
      if(userForm.u_gmail==i.u_gmail)
      {
        alert("Username already registered this gmail");
        this.route.navigate(['userRegister/rest']) 
        this.count=this.count+1;
        break;
      }
    }
    //console.log(this.count);

      if(this.count==0)
      {
        var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', userForm.u_password);
        userForm.u_password=encrypted;
        this.service.insertData(userForm).subscribe((data)=>{
          console.log(data);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Register Successfully',
            showConfirmButton: false,
            timer: 1500
          });
          
          alert("registration successful...!!!");
          
          this.route.navigate(['login']);
          
        })
    }
     
  }
}