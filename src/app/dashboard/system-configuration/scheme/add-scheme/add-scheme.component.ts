import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataService } from 'src/app/shared/data.service';
import { HttpServiceService } from 'src/app/shared/service/http-service.service';

@Component({
  selector: 'app-add-scheme',
  templateUrl: './add-scheme.component.html',
  styleUrls: ['./add-scheme.component.css']
})
export class AddSchemeComponent implements OnInit {
  schemeForm: FormGroup;
  type:any;
  submited:boolean=false
  constructor(private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router,
    private httpService: HttpServiceService
  ) {
    this.schemeForm = this.formBuilder.group({
      schemeCode: ['', [Validators.required,Validators.pattern('^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$')]],
      schemeName: ['', Validators.required],
      schemeDescription: ['', Validators.required],
      goiCode:['',Validators.required],
      grandNumber:['',Validators.required],
      budgetHead:['',Validators.required]


    })
  }

  ngOnInit(): void {
  }

  checkSchemeCode(event:any){
    const schemeCode = event.target.value ? event.target.value.toUpperCase() : this.schemeForm.get('schemeCode')?.value
    this.httpService.checkSchemeCode({schemeCode:schemeCode}).subscribe((data:any)=>{
      this.schemeForm.get('schemeCode')?.clearValidators()
      this.schemeForm.get('schemeCode')?.setValidators(Validators.required)
      this.schemeForm.get('schemeCode')?.updateValueAndValidity()

    },err=>{
      this.schemeForm.get('schemeCode')?.setErrors({isExist:true})
      // this.schemeForm.get('schemeCode')?.updateValueAndValidity()
      console.log( this.schemeForm.get('schemeCode')?.valid)
    })
  }


  onSubmit() {

    if(this.schemeForm.valid)
   {
    this.submited=false
    this.httpService.addNewScheme({
      schemeCode: this.schemeForm.value.schemeCode,
      schemeName: this.schemeForm.value.schemeName,
      schemeDescription: this.schemeForm.value.schemeDescription,
      goiCode: this.schemeForm.value.goiCode,
      grandNumber: this.schemeForm.value.grandNumber,
      budgetHead: this.schemeForm.value.budgetHead,


    }).subscribe((item:any) => {
      Swal.fire('',item.message, 'success')
       this.router.navigate(['/dashboard/system-configuration/scheme'])

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
    this.router.navigate(['/dashboard/system-configuration/scheme'])
  }
  onSaveNew(){
    if(this.schemeForm.valid)
    {
     this.submited=false
     this.httpService.addNewScheme({
       schemeCode: this.schemeForm.value.schemeCode,
       schemeName: this.schemeForm.value.schemeName,
       schemeDescription: this.schemeForm.value.schemeDescription,
       goiCode: this.schemeForm.value.goiCode,
       grandNumber: this.schemeForm.value.grandNumber,
       budgetHead: this.schemeForm.value.budgetHead,


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
