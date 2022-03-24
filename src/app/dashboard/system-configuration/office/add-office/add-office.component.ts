import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { DataService } from 'src/app/shared/data.service';
import { Office } from 'src/app/shared/data.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.css']
})
export class AddOfficeComponent implements OnInit {
  officeForm: FormGroup;


  constructor(private formBuilder:FormBuilder,
    private  data:DataService,
    private router:Router,
    private snackBar:MatSnackBar) {
    this.officeForm = this.formBuilder.group({
      officeType: [''],
      officeName: [''],
      officeDescription: [''],
      contactNumber: [''],
      highestOfficer: [''],
      officerDesignation: [''],
      officerEmail: [''],
      officerMobile: [''],
      gstNumber: [''],
      pan: [''],
      nodalOfficerMobile:[''],
      nodalOfficerEmail:[''],
      nodalOfficerName:[''],
  });
   }

  ngOnInit(): void {
 
  }

  onSubmit() {
    console.log(this.officeForm.value.value);
    const newoffice = [new Office(
      this.officeForm.value.officeType,
      this.officeForm.value.officeName,
      this.officeForm.value.officeDescription,
      this.officeForm.value.constactNumber,
      this.officeForm.value.highestOfficer,
      this.officeForm.value.officerDesignation,
      this.officeForm.value.officerEmail,
      this.officeForm.value.officerMobile,
      this.officeForm.value.gstNumber,
      this.officeForm.value.pan,
      this.officeForm.value.nodalOfficerName,
      this.officeForm.value.nodalOfficerMobile,
      this.officeForm.value.nodalOfficerEmail,
      )]
      console.log(newoffice);
      this.data.addnewOffice(newoffice)
        this.snackBar.open("successfully New  Officer Added", "Close",{
          duration:1* 1000,
        });
      
      this.router.navigate(['/dashboard/system-configuration/office'])
   
}


}
