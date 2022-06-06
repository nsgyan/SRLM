import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from '../shared/service/http-service.service';
import { LocalstorageService } from '../shared/service/localstorage.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  captcha: any;
  submited!:boolean
  constructor(private fb:FormBuilder,
    private httpService:HttpServiceService,
    private localStorage:LocalstorageService,
    private routes:Router) {
      this.localStorage.clearLocalStorage()
    this.loginForm=this.fb.group({
      username:['',[Validators.required]],
      password:['',Validators.required]
    })
  }



  ngOnInit(): void {
    
  }
  resolved(captchaResponse: any) {
    this.captcha = captchaResponse;
  }
  login(){ 
if(this.loginForm.valid&& this.captcha){
this.httpService.login({username:this.loginForm.value.username,
password:this.loginForm.value.password}).subscribe((data:any)=>{
  this.localStorage.set('token', data.token)
this.routes.navigate(['dashboard'])

})}
else if(!this.captcha){
  this.submited=true
  Swal.fire(
    'Error!',
    'Please verify that you are not a robot.',
    'error'
  )
}
else{
  this.submited=true
  Swal.fire(
    'Error!',
    'Please Fill Required Field',
    'error'
  )
}
   
  }






}
