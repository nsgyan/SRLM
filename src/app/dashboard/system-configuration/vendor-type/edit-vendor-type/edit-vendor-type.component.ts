import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { HttpServiceService } from 'src/app/shared/service/http-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-vendor-type',
  templateUrl: './edit-vendor-type.component.html',
  styleUrls: ['./edit-vendor-type.component.css']
})
export class EditVendorTypeComponent implements OnInit {
  vendorType: FormGroup
  submited: boolean=false;
  id: any;
  vendorData:any
  constructor(private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router,
    private httpService: HttpServiceService,
    private activeRoute:ActivatedRoute
  )  {
    this.vendorType = this.formBuilder.group({
      vendorTypeCode: ['',Validators.required],
      vendorTypeName: ['',Validators.required],
      vendorTypeDescription: ['',Validators.required]
    })
    this.id= this.activeRoute.snapshot.paramMap.get('id')
    this.httpService.getvendorTypeById(this.id).subscribe((data:any)=>{
this.vendorData=data.vendorType
this.vendorType.get('vendorTypeCode')?.setValue(this.vendorData?.vendorTypeCode)
this.vendorType.get('vendorTypeCode')?.updateValueAndValidity()
this.vendorType.get('vendorTypeName')?.setValue(this.vendorData?.vendorTypeName)
this.vendorType.get('vendorTypeName')?.updateValueAndValidity
this.vendorType.get('vendorTypeDescription')?.setValue(this.vendorData?.vendorTypeDescription)
this.vendorType.get('vendorTypeDescription')?.updateValueAndValidity
    })

  }

  ngOnInit(): void {
  }

  checkVendorType(event:any){
    const vendorTypeCode = event.target.value ? event.target.value.toUpperCase() : this.vendorType.get('vendorTypeCode')?.value
    this.httpService.checkVendorTypeCode({vendorTypeCode:vendorTypeCode}).subscribe((data:any)=>{
      this.vendorType.get('vendorTypeCode')?.clearValidators()
      this.vendorType.get('vendorTypeCode')?.setValidators(Validators.required)
      this.vendorType.get('vendorTypeCode')?.updateValueAndValidity()

    },err=>{
      if(!this.vendorData?.vendorTypeCode===vendorTypeCode){
      this.vendorType.get('vendorTypeCode')?.setErrors({isExist:true})}


    })
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

  onSubmit() {

    if(this.vendorType.valid)
   {
    this.submited=false
    this.httpService.updatevendorType(this.id,{
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
