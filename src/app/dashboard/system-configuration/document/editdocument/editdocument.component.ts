import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { HttpServiceService } from 'src/app/shared/service/http-service.service';
import { ToasterService } from 'src/app/shared/toaster.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editdocument',
  templateUrl: './editdocument.component.html',
  styleUrls: ['./editdocument.component.css']
})
export class EditdocumentComponent implements OnInit {

  documentForm:FormGroup;
  submited:boolean=false
  id:any
  documentData:any
  constructor(private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router,
    private toster: ToasterService,
    private httpService:HttpServiceService,
    private activeRoute:ActivatedRoute) {
this.id=this.activeRoute.snapshot.paramMap.get('id')
this.documentForm= this.formBuilder.group({
  documentName:['',Validators.required],
  documentDescription:['']

})
this.httpService.getDocumentByIdById(this.id).subscribe((data:any)=>{
this.documentData=data.Document
this.documentForm.get('documentName')?.setValue(this.documentData.documentName)
this.documentForm.get('documentDescription')?.setValue(this.documentData.documentDescription)
this.documentForm.updateValueAndValidity()
})

  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.documentForm.valid){
this.httpService.updateDocument(this.id,{
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

  cancel() {
    this.router.navigate(['/dashboard/system-configuration/documentName'])
  }

}
