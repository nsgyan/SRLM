import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { ToasterService } from 'src/app/shared/toaster.service';

@Component({
  selector: 'app-addscheme-component',
  templateUrl: './addscheme-component.component.html',
  styleUrls: ['./addscheme-component.component.css']
})
export class AddschemeComponentComponent implements OnInit {
  schemeForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router,
    private toster: ToasterService) {
    this.schemeForm = this.formBuilder.group({
      schemeCode: [''],
      schemeName: [''],
      schemeComponentName: [''],
      schemeClassification: [''],
      schemeClassificationHeads: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.schemeForm);

    // const designation = [new Designation(
    //   this.schemeForm.value.designationName,
    //   this.schemeForm.value.reportingTo,
    // )]
    // console.log(designation);
    // this.data.addnewdesignation(designation)
    this.toster.showSuccess('New Scheme Successfully Added')
    this.router.navigate(['/dashboard/system-configuration/schemeComponent'])
  }
  cancel() {
    this.router.navigate(['/dashboard/system-configuration/schemeComponent'])
  }

}
