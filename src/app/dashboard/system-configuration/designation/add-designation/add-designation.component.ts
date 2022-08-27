import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/shared/toaster.service';
import { Designation } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';
import { HttpServiceService } from 'src/app/shared/service/http-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrls: ['./add-designation.component.css']
})
export class AddDesignationComponent implements OnInit {
  designationForm:FormGroup;
  submited:boolean=false
  constructor(private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router,
    private toster: ToasterService,
    private httpService:HttpServiceService) {
    this.designationForm= this.formBuilder.group({
      designation:['',Validators.required],
      department:['']

    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.designationForm.valid){
this.httpService.addNewDesignation({
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
