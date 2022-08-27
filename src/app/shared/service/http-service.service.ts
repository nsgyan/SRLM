import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

getState(){
return this.httpClient.get(Globals.route.getStateList)
}
  //scheme
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

//schemeType

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
 //vendorType
 addNewVendorType(vendor: any) { return this.httpClient.post(Globals.route.addNewVendorType, vendor) }

 checkVendorTypeCode(VendorTypeCode:any){
  return this.httpClient.post(Globals.route.checkVendorTypeCode,VendorTypeCode)
}
  getvendorType(){
    return this.httpClient.get(Globals.route.vendorType)
  }
  updatevendorType(id:any,formdata:any){
    return this.httpClient.patch(`${Globals.route.vendorType}/${id}`,formdata)
  }
  getvendorTypeById(id:string){
return this.httpClient.get(`${Globals.route.vendorTypeById}/${id}`)
  }
  deleteVendorType(id:string){
    return this.httpClient.delete(`${Globals.route.deleteVendorType}/${id}`)
  }

  //officer
  addNewOfficer(vendor: any) { return this.httpClient.post(Globals.route.addNewOfficer, vendor) }


  getOfficer(){
    return this.httpClient.get(Globals.route.officer)
  }
  updateOfficer(id:any,formdata:any){
    return this.httpClient.patch(`${Globals.route.officer}/${id}`,formdata)
  }
  getOfficerById(id:string){
return this.httpClient.get(`${Globals.route.officerById}/${id}`)
  }
  deleteOfficer(id:string){
    return this.httpClient.delete(`${Globals.route.deleteOfficer}/${id}`)
  }

//SchemeBudget

addNewSchemeBudget(scheme: any) { return this.httpClient.post(Globals.route.addNewSchemeBudget, scheme) }


  getSchemeBudget(){
    return this.httpClient.get(Globals.route.schemeBudget)
  }
  updateSchemeBudget(id:any,formdata:any){
    return this.httpClient.patch(`${Globals.route.schemeBudget}/${id}`,formdata)
  }
  getSchemeBudgetById(id:string){
return this.httpClient.get(`${Globals.route.schemeBudgetById}/${id}`)
  }
  deleteSchemeBudget(id:string){
    return this.httpClient.delete(`${Globals.route.deleteSchemeBudget}/${id}`)
  }
  //upload
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const request = new HttpRequest(
      'POST',
      Globals.route.upload,
      formData,
      {
        reportProgress: false,
        responseType: 'text',
      }
    );

    return this.httpClient.request(request);
  }

  //document
  addNewDocument(scheme: any) { return this.httpClient.post(Globals.route.addNewDocument, scheme) }


getDocument(){
  return this.httpClient.get(Globals.route.document)
}
updateDocument(id:any,formdata:any){
  return this.httpClient.patch(`${Globals.route.document}/${id}`,formdata)
}
getDocumentByIdById(id:string){
return this.httpClient.get(`${Globals.route.documentById}/${id}`)
}
deleteDocument(id:string){
  return this.httpClient.delete(`${Globals.route.deleteDocument}/${id}`)
}

  //Designation
  addNewDesignation(scheme: any) { return this.httpClient.post(Globals.route.addNewDesignation, scheme) }


getDesignation(){
  return this.httpClient.get(Globals.route.designation)
}
updateDesignation(id:any,formdata:any){
  return this.httpClient.patch(`${Globals.route.designation}/${id}`,formdata)
}
getDesignationByIdById(id:string){
return this.httpClient.get(`${Globals.route.designationById}/${id}`)
}
deleteDesignation(id:string){
  return this.httpClient.delete(`${Globals.route.deleteDesignation}/${id}`)
}
}
