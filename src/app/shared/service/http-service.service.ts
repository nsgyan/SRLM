import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Globals } from './global.constant';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient:HttpClient,
    ) { }
  login(data:any){
   return this.httpClient.post(Globals.route.login,data)
  }
}