import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { HttpServiceService } from 'src/app/shared/service/http-service.service';
import { ToasterService } from 'src/app/shared/toaster.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-designation',
  templateUrl: './edit-designation.component.html',
  styleUrls: ['./edit-designation.component.css']
})
export class EditDesignationComponent implements OnInit {

  designationForm:FormGroup;
  submited:boolean=false
  id:any
  designationData:any
  constructor(private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router,
    private toster: ToasterService,
    private httpService:HttpServiceService,
    private activeRoute:ActivatedRoute) {
this.id=this.activeRoute.snapshot.paramMap.get('id')
this.designationForm= this.formBuilder.group({
  designation:['',Validators.required],
  department:['']

})
this.httpService.getDesignationByIdById(this.id).subscribe((data:any)=>{
this.designationData=data.Designation
this.designationForm.get('designation')?.setValue(this.designationData.designation)
this.designationForm.get('department')?.setValue(this.designationData.department)
this.designationForm.updateValueAndValidity()
})

  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.designationForm.valid){
this.httpService.updateDesignation(this.id,{
  designation:this.designationForm.value.designation,
  department:this.designationForm.value.department
}).subscribe((item:any)=>{
  Swal.fire('',item.message, 'success')
  this.router.navigate(['/dashboard/system-configuration/designation'])
},(err=>{
  Swal.fire(
    'Error!',
    err.error,
    'error'
  )
}))
    }else{
      this.submited=true
      Swal.fire(
        'Error!',
        'Please Fill Required Field',
        'error'
      )
    }
  }
  onSubmitSave() {
    if(this.designationForm.valid){
this.httpService.addNewDesignation({
  designation:this.designationForm.value.designation,
  department:this.designationForm.value.department
}).subscribe((item:any)=>{
  Swal.fire('',item.message, 'success')
  this.designationForm.reset()
  // this.router.navigate(['/dashboard/system-configuration/designation'])
},(err=>{
  Swal.fire(
    'Error!',
    err.error,
    'error'
  )
}))
    }else{
      this.submited=true
      Swal.fire(
        'Error!',
        'Please Fill Required Field',
        'error'
      )
    }
  }
  cancel() {
    this.router.navigate(['/dashboard/system-configuration/designation'])
  }

}
