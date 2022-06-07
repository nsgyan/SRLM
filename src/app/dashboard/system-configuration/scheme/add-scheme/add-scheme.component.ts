import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Designation } from 'src/app/shared/data.model';
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
      schemeCode: [''],
      schemeName: [''],
      schemeClassification: [''],
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

    this.httpService.addNewScheme({
      schemeCode: this.schemeForm.value.schemeCode,
      schemeName: this.schemeForm.value.schemeName,
      schemeClassification: this.schemeForm.value.schemeClassification,
      bankDetails: this.schemeForm.value.bankDetails,

    }).subscribe(item => {
      console.log(item);

    })
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
