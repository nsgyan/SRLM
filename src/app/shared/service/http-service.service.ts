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

  addNewScheme(scheme: any) { return this.httpClient.post(Globals.route.addNewScheme, scheme) }

checkSchemeCode(schemeCode:any){
  return this.httpClient.post(Globals.route.checkSchemeCode,schemeCode)
}
  getScheme(){
    return this.httpClient.get(Globals.route.scheme)
  }
  updateScheme(id:any,formdata:any){
    return this.httpClient.patch(`${Globals.route.scheme}/${id}`,formdata)
  }
  getSchemeById(id:string){
return this.httpClient.get(`${Globals.route.schemeById}/${id}`)
  }
  deleteScheme(id:string){
    return this.httpClient.delete(`${Globals.route.deleteScheme}/${id}`)
  }



  addNewschemeType(scheme: any) { return this.httpClient.post(Globals.route.addNewschemeType, scheme) }

  checkSchemeType(schemeCode:any){
    return this.httpClient.post(Globals.route.checkSchemeType,schemeCode)
  }
    getSchemetype(){
      return this.httpClient.get(Globals.route.schemeType)
    }
    updateSchemetype(id:any,formdata:any){
      return this.httpClient.patch(`${Globals.route.schemeType}/${id}`,formdata)
    }
    getSchemeTypeById(id:string){
  return this.httpClient.get(`${Globals.route.schemeTypeById}/${id}`)
    }
    deleteSchemeType(id:string){
      return this.httpClient.delete(`${Globals.route.deleteSchemeType}/${id}`)
    }
}
