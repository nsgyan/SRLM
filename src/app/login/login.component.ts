import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from '../shared/service/http-service.service';
import { LocalstorageService } from '../shared/service/localstorage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  captcha: any;
 
  constructor(private fb:FormBuilder,
    private httpService:HttpServiceService,
    private localStorage:LocalstorageService,
    private routes:Router) {
      this.localStorage.clearLocalStorage()
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.required]],
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
this.httpService.login({username:this.loginForm.value.email,
password:this.loginForm.value.password}).subscribe((data:any)=>{
  this.localStorage.set('token',data.data.token)
this.routes.navigate(['dashboard'])
})}

    
  }






}
