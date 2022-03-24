import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { DataService } from 'src/app/shared/data.service';
import { Office } from 'src/app/shared/data.model';

@Component({
  selector: 'app-add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.css']
})
export class AddOfficeComponent implements OnInit {
  officeForm.value: FormGroup;


  constructor(private formBuilder:FormBuilder,
    private  data:DataService,
    private location: Location) {
    this.officeForm.value = this.formBuilder.group({
      officeType: [''],
      officeName: [''],
      officeDescription: [''],
      constactNumber: [''],
      highestOfficer: [''],
      officerDesignation: [''],
      officerEmail: [''],
      officerMobile: [''],
      gstNumber: [''],
      pan: [''],
  });
   }

  ngOnInit(): void {
 
  }

  onSubmit() {
    console.log(this.officeForm.value.value);
   let newoffice= new Office(
      this.officeForm.value.officeType,
      this.officeForm.value.officeName,
      this.officeForm.value.officeDescription,
      this.officeForm.value.constactNumber,
      this.officeForm.value.highestOfficer,
      this.officeForm.value.officerDesignation,
      this.officeForm.value.officerEmail,
      this.officeForm.value.officerMobile,
      this.officeForm.value.gstNumber,
      this.officeForm.value.pan)
      this.data.addnewOffice(newoffice);
    // this.location.back()
    
    // this.submitted = true;

    // // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //     return;
    // }

    // // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}


}
