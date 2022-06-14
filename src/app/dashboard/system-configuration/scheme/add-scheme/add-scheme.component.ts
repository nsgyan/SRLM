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

  constructor(private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router,
    private httpService: HttpServiceService
  ) {
    this.schemeForm = this.formBuilder.group({
      schemeCode: ['', Validators.required],
      schemeName: ['', Validators.required],
      schemeClassification: ['', Validators.required],
      bankDetails: this.formBuilder.group({
        agencyName: ['', Validators.required],
        bankName: ['', Validators.required],
        accountNo: ['', Validators.required],
        branchName: ['', Validators.required],
        branchAddress: ['', Validators.required],
      })

    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.schemeForm);
    if(this.schemeForm.valid)

   { this.httpService.addNewScheme({
      schemeCode: this.schemeForm.value.schemeCode,
      schemeName: this.schemeForm.value.schemeName,
      schemeClassification: this.schemeForm.value.schemeClassification,
      bankDetails: this.schemeForm.value.bankDetails,

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
  toggle(type:string){
this.type=type;
  }

}
