import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { HttpServiceService } from 'src/app/shared/service/http-service.service';
import { ToasterService } from 'src/app/shared/toaster.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adddocument',
  templateUrl: './adddocument.component.html',
  styleUrls: ['./adddocument.component.css']
})
export class AdddocumentComponent implements OnInit {

  documentForm:FormGroup;
  submited:boolean=false
  constructor(private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router,
    private toster: ToasterService,
    private httpService:HttpServiceService) {
    this.documentForm= this.formBuilder.group({
      documentName:['',Validators.required],
      documentDescription:['']

    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.documentForm.valid){
this.httpService.addNewDocument({
  documentName:this.documentForm.value.documentName,
  documentDescription:this.documentForm.value.documentDescription
}).subscribe((item:any)=>{
  Swal.fire('',item.message, 'success')
  this.router.navigate(['/dashboard/system-configuration/document'])
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
    if(this.documentForm.valid){
this.httpService.addNewDocument({
  documentName:this.documentForm.value.documentName,
  documentDescription:this.documentForm.value.documentDescription
}).subscribe((item:any)=>{
  Swal.fire('',item.message, 'success')
  this.documentForm.reset()
  // this.router.navigate(['/dashboard/system-configuration/document'])
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
    this.router.navigate(['/dashboard/system-configuration/document'])
  }

}

