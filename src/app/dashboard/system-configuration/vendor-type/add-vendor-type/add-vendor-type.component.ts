import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorType } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';
import { HttpServiceService } from 'src/app/shared/service/http-service.service';
import { ToasterService } from 'src/app/shared/toaster.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-vendor-type',
  templateUrl: './add-vendor-type.component.html',
  styleUrls: ['./add-vendor-type.component.css']
})
export class AddVendorTypeComponent implements OnInit {
  vendorType: FormGroup
  submited: boolean=false;
  constructor(private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router,
    private httpService: HttpServiceService
  )  {
    this.vendorType = this.formBuilder.group({
      vendorTypeCode: ['',Validators.required],
      vendorTypeName: ['',Validators.required],
      vendorTypeDescription: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  // onSubmit() {
  //   const newvendorType = [new VendorType(
  //     this.vendorType.value.vendorTypeCode,
  //     this.vendorType.value.vendorTypeName,
  //     this.vendorType.value.vendorTypeDescription,

  //   )]
  //   this.data.addnewVendorType(newvendorType)
  //   this.toster.showSuccess('New Vendor Type Successfully Added')
  //   this.router.navigate(['/dashboard/system-configuration/vendorType'])

  // }
  checkVendorType(event:any){
    const vendorTypeCode = event.target.value ? event.target.value.toUpperCase() : this.vendorType.get('vendorTypeCode')?.value
    this.httpService.checkVendorTypeCode({vendorTypeCode:vendorTypeCode}).subscribe((data:any)=>{
      this.vendorType.get('vendorTypeCode')?.clearValidators()
      this.vendorType.get('vendorTypeCode')?.setValidators(Validators.required)
      this.vendorType.get('vendorTypeCode')?.updateValueAndValidity()

    },err=>{
      this.vendorType.get('vendorTypeCode')?.setErrors({isExist:true})


    })
  }


  onSubmit() {

    if(this.vendorType.valid)
   {
    this.submited=false
    this.httpService.addNewVendorType({
      vendorTypeCode: this.vendorType.value.vendorTypeCode,
      vendorTypeName: this.vendorType.value.vendorTypeName,
      vendorTypeDescription: this.vendorType.value.vendorTypeDescription,


    }).subscribe((item:any) => {
      Swal.fire('',item.message, 'success')
      this.router.navigate(['/dashboard/system-configuration/vendorType'])

    },(err)=>{

      Swal.fire(
        'Error!',
        err.error,
        'error'
      )
    })}
    else{
      this.submited=true
      Swal.fire(
        'Error!',
        'Please Fill Required Field',
        'error'
      )

    }
    // const designation = [new Designation(
    //   this.schemeForm.value.designationName,
    //   this.schemeForm.value.reportingTo,
    // )]
    // console.log(designation);
    // this.data.addnewdesignation(designation)
    // this.toster.showSuccess('New Scheme Successfully Added')
    // this.router.navigate(['/dashboard/system-configuration/scheme'])
  }
  OnSaveNew(){
    if(this.vendorType.valid)
    {
     this.submited=false
     this.httpService.addNewVendorType({
       vendorTypeCode: this.vendorType.value.vendorTypeCode,
       vendorTypeName: this.vendorType.value.vendorTypeName,
       vendorTypeDescription: this.vendorType.value.vendorTypeDescription,


     }).subscribe((item:any) => {
       Swal.fire('',item.message, 'success')
     this.vendorType.reset()
     },(err)=>{

       Swal.fire(
         'Error!',
         err.error,
         'error'
       )
     })}
     else{
       this.submited=true
       Swal.fire(
         'Error!',
         'Please Fill Required Field',
         'error'
       )

     }
     // const designation = [new Designation(
     //   this.schemeForm.value.designationName,
     //   this.schemeForm.value.reportingTo,
     // )]
     // console.log(designation);
     // this.data.addnewdesignation(designation)
     // this.toster.showSuccess('New Scheme Successfully Added')
     // this.router.navigate(['/dashboard/system-configuration/scheme'])
  }

  cancel() {
    this.router.navigate(['/dashboard/system-configuration/vendorType'])
  }
}
