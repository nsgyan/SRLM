import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { HttpServiceService } from 'src/app/shared/service/http-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addscheme-type',
  templateUrl: './addscheme-type.component.html',
  styleUrls: ['./addscheme-type.component.css']
})
export class AddschemeTypeComponent implements OnInit {
  schemeForm: FormGroup;
  type:any;
  submited:boolean=false
  constructor(private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router,
    private httpService: HttpServiceService
  ) {
    this.schemeForm = this.formBuilder.group({

      schemeType: ['', Validators.required],
      schemeDescription: ['', Validators.required],


    })
  }

  ngOnInit(): void {
  }

  checkschemeType(event:any){
    const schemeType = event.target.value ? event.target.value.toUpperCase() : this.schemeForm.get('schemeType')?.value
    this.httpService.checkSchemeType({schemeType:schemeType}).subscribe((data:any)=>{
      this.schemeForm.get('schemeType')?.clearValidators()
      this.schemeForm.get('schemeType')?.setValidators(Validators.required)
      this.schemeForm.get('schemeType')?.updateValueAndValidity()

    },err=>{
      this.schemeForm.get('schemeType')?.setErrors({isExist:true})


    })
  }


  onSubmit() {

    if(this.schemeForm.valid)
   {
    this.submited=false
    this.httpService.addNewschemeType({

      schemeType: this.schemeForm.value.schemeType,
      schemeDescription: this.schemeForm.value.schemeDescription,


    }).subscribe((item:any) => {
      Swal.fire('',item.message, 'success')
       this.router.navigate(['/dashboard/system-configuration/schemeType'])

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
    this.router.navigate(['/dashboard/system-configuration/schemeType'])
  }
  onSaveNew(){
    if(this.schemeForm.valid)
    {
     this.submited=false
     this.httpService.addNewschemeType({
       schemeType: this.schemeForm.value.schemeType,
       schemeDescription: this.schemeForm.value.schemeDescription,


     }).subscribe((item:any) => {
       Swal.fire('',item.message, 'success')
       this.schemeForm.reset()
        // this.router.navigate(['/dashboard/system-configuration/scheme'])

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
  }


  toggle(type:string){
this.type=type;
  }

}
