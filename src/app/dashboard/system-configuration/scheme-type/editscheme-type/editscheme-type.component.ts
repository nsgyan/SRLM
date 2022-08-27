import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { HttpServiceService } from 'src/app/shared/service/http-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editscheme-type',
  templateUrl: './editscheme-type.component.html',
  styleUrls: ['./editscheme-type.component.css']
})
export class EditschemeTypeComponent implements OnInit {
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
      schemeType: [this.schemeData?.schemeType ?this.schemeData?.schemeType :'', Validators.required],
      schemeDescription: ['', Validators.required],
    })
    this.id=this.activeRoute.snapshot.paramMap.get('Id')
    this.httpService.getSchemeTypeById(this.id).subscribe((data:any)=>{
console.log(data.schemeData)
this.schemeData=data.schemeType
// console.log(this.schemeData,'scheme data')
    this.schemeForm.get('schemeType')?.setValue(this.schemeData?.schemeType)
    this.schemeForm.get('schemeType')?.updateValueAndValidity()
    this.schemeForm.get('schemeDescription')?.setValue(this.schemeData?.schemeDescription)
    this.schemeForm.get('schemeDescription')?.updateValueAndValidity()
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
      if(!this.schemeData?.schemeType===schemeType){
      this.schemeForm.get('schemeType')?.setErrors({isExist:true})}


    })
  }

  onSubmit() {

    if(this.schemeForm.valid)
   {
    this.submited=false
    this.httpService.updateSchemetype(this.id,{
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



  toggle(type:string){
this.type=type;
  }

}
