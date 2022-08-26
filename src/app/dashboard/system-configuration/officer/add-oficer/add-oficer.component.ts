import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Officer } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';
import { HttpServiceService } from 'src/app/shared/service/http-service.service';
import { ToasterService } from 'src/app/shared/toaster.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-oficer',
  templateUrl: './add-oficer.component.html',
  styleUrls: ['./add-oficer.component.css']
})
export class AddOficerComponent implements OnInit {
  officerForm: FormGroup;
stateData:any
districtData:any
submited:boolean=false
  constructor(private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router,
    private toster: ToasterService,
    private httpService:HttpServiceService) {
      this.httpService.getState().subscribe((data)=>{
       this.stateData=data
      })
      this.officerForm = this.formBuilder.group({
        firstName: ['',Validators.required],
        middleName: [''],
        lastName: ['',Validators.required],
        dob: ['',Validators.required],
        gender: ['',Validators.required],
        fatherName: ['',Validators.required],
        aadhaarNo: ['',[Validators.required,Validators.pattern('^[0-9]{4}[ -]?[0-9]{4}[ -]?[0-9]{4}$')]],
        panNo: ['',[Validators.required,Validators.pattern('^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$')]],
        mobileNumber: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
        email: ['',[Validators.required,Validators.email]],
        designation: ['',Validators.required],
        address1:['',Validators.required],
        address2:[''],
        state:['',Validators.required],
        district:['',Validators.required],
        pincode:['',[Validators.required,Validators.pattern('^[1-9][0-9]{5}$'),Validators.minLength(6),Validators.maxLength(6)]]

      })

  }

  ngOnInit(): void {

  }
  onSubmit() {
    console.log(this.officerForm.valid)
if(this.officerForm.valid){
  this.httpService.addNewOfficer({
 firstName:this.officerForm.value.firstName,
    lastName:this.officerForm.value.lastName,
    middleName:this.officerForm.value.middleName,
    mobileNumber:this.officerForm.value.mobileNumber,
    email:this.officerForm.value.email,
    DOB:this.officerForm.value.dob,
    gender:this.officerForm.value.gender,
    aadhaarNumber:this.officerForm.value.aadhaarNo,
    panNumber:this.officerForm.value.panNo,
    father_husbandName:this.officerForm.value.fatherName,
    designation:this.officerForm.value.designation,
    address1:this.officerForm.value.address1,
    address2:this.officerForm.value.address2,
    state:this.officerForm.value.state,
    district:this.officerForm.value.district,
    pincode:this.officerForm.value.pincode,
  }).subscribe((item:any) => {
    Swal.fire('',item.message, 'success')
     this.router.navigate(['/dashboard/system-configuration/officer'])

  },(err)=>{

    Swal.fire(
      'Error!',
      err.error,
      'error'
    )
  })
}
else{
  this.submited=true
  console.log(this.officerForm)
}
  }
  onSubmitNew() {
    console.log(this.officerForm.valid)
if(this.officerForm.valid){
  this.httpService.addNewOfficer({
 firstName:this.officerForm.value.firstName,
    lastName:this.officerForm.value.lastName,
    middleName:this.officerForm.value.middleName,
    mobileNumber:this.officerForm.value.mobileNumber,
    email:this.officerForm.value.email,
    DOB:this.officerForm.value.dob,
    gender:this.officerForm.value.gender,
    aadhaarNumber:this.officerForm.value.aadhaarNo,
    panNumber:this.officerForm.value.panNo,
    father_husbandName:this.officerForm.value.fatherName,
    designation:this.officerForm.value.designation,
    address1:this.officerForm.value.address1,
    address2:this.officerForm.value.address2,
    state:this.officerForm.value.state,
    district:this.officerForm.value.district,
    pincode:this.officerForm.value.pincode,
  }).subscribe((item:any) => {
    Swal.fire('',item.message, 'success')
    this.officerForm.reset()
    this.submited=false
    //  this.router.navigate(['/dashboard/system-configuration/officer'])

  },(err)=>{

    Swal.fire(
      'Error!',
      err.error,
      'error'
    )
  })
}
else{
  this.submited=true
  console.log(this.officerForm)
}
  }


  keyPressNumbers(event: { which: any; keyCode: any; preventDefault: () => void; }) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
  cancel() {
    this.router.navigate(['/dashboard/system-configuration/officer'])

  }
  keyPresschar(evt: any) {
    evt = (evt) ? evt : event;
    const charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
      ((evt.which) ? evt.which : 0));
    if (charCode > 31 && (charCode < 65 || charCode > 90) &&
      (charCode < 97 || charCode > 122)) {
      return false;
    }
    return true;
  }
  getDistrict(event:any){

    this.stateData.map((item:any)=>{
      if(item.state===this.officerForm.value.state){
this.districtData=item.districts
      }
    })

  }

}
