import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MakehomeService } from '../makehome.service';
import Swal from 'sweetalert2';
import { NgToastService } from 'ng-angular-popup';

import { EncryptionService } from '../encryption.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LOginComponent implements OnInit {
  signin: any;
  myimage:string="assets/er.jpg"

  constructor(private route:Router, private rs:MakehomeService, private toast:NgToastService,private EncrDecr:EncryptionService) {
    this.signin=null;
   }

  ngOnInit(): void {
    this.rs.getAllUserData().subscribe((data: any) => {  
      this.signin = data;
      console.log(data)
    });
  }
  login(loginForm: any) {
    console.log(loginForm);
   
    if(loginForm.un=="Admin" && loginForm.pwd=="Admin"){
      this.route.navigate(['Admin'])
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Successfully',
        showConfirmButton: false,
        timer: 1500
      });
      
    }else{


    let i = 0;
    for (i = 0; i < this.signin.length; i++) {
      if (loginForm.un == this.signin[i].u_gmail && loginForm.pwd == this.EncrDecr.get('123456$#@$^@1ERF',this.signin[i].u_password) ){
      
          this.rs.userLogged = true;
          this.toast.success({detail:"success Message", summary:"WELCOME "+ this.signin[i].u_gmail +" TO MAKEHOME",duration:5000})
          Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Login Successfully',
                  showConfirmButton: false,
                  timer: 1500
                });
          this.toast.success({detail:"success Message", summary:"WELCOME "+ this.signin[i].u_gmail +" TO MAKEHOME",duration:5000})
         this.rs.setUser(this.signin[i])
          this.route.navigate(['userlogin']);
          break;
        } 

        } 
        
    
    if (i == this.signin.length)
       alert("invalid !");
     
     // this.toast.error({detail:"ERROR MESSAGE", summary:"LOGIN FAILED", duration:15000});
  }}

}