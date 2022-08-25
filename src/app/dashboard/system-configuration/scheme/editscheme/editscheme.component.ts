import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { HttpServiceService } from 'src/app/shared/service/http-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editscheme',
  templateUrl: './editscheme.component.html',
  styleUrls: ['./editscheme.component.css']
})
export class EditschemeComponent implements OnInit {
  schemeForm: FormGroup;
  type:any;
  submited:boolean=false
  id: any;
  schemeData:any
  constructor(private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router,
    private httpService: HttpServiceService,
    private activeRoute:ActivatedRoute
  ) {
    this.schemeForm = this.formBuilder.group({
      schemeCode: [this.schemeData?.schemeCode ?this.schemeData?.schemeCode :'', Validators.required],
      schemeName: ['', Validators.required],
      schemeDescription: ['', Validators.required],
    })
    this.id=this.activeRoute.snapshot.paramMap.get('Id')
    this.httpService.getSchemeById(this.id).subscribe((data:any)=>{
console.log(data.schemeData)
this.schemeData=data.schemeData
// console.log(this.schemeData,'scheme data')
    this.schemeForm.get('schemeCode')?.setValue(this.schemeData?.schemeCode)
    this.schemeForm.get('schemeCode')?.updateValueAndValidity()
    this.schemeForm.get('schemeName')?.setValue(this.schemeData?.schemeName)
    this.schemeForm.get('schemeName')?.updateValueAndValidity()
    this.schemeForm.get('schemeDescription')?.setValue(this.schemeData?.schemeDescription)
    this.schemeForm.get('schemeDescription')?.updateValueAndValidity()
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
    this.httpService.updateScheme(this.id,{
      schemeCode: this.schemeForm.value.schemeCode,
      schemeName: this.schemeForm.value.schemeName,
      schemeDescription: this.schemeForm.value.schemeDescription,


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
