import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { HttpServiceService } from 'src/app/shared/service/http-service.service';
import { ToasterService } from 'src/app/shared/toaster.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-officer-edit',
  templateUrl: './officer-edit.component.html',
  styleUrls: ['./officer-edit.component.css']
})
export class OfficerEditComponent implements OnInit {

  officerForm: FormGroup;
  stateData:any
  districtData:any
  submited:boolean=false
  id:any
  officeData:any
    constructor(private formBuilder: FormBuilder,
      private data: DataService,
      private router: Router,
      private toster: ToasterService,
      private httpService:HttpServiceService,
      private activeRoute: ActivatedRoute) {
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
        this.httpService.getState().subscribe((data)=>{
         this.stateData=data
        })
        this.id=this.activeRoute.snapshot.paramMap.get('id')
        this.httpService.getOfficerById(this?.id).subscribe((data:any)=>{
this.officeData=data?.officerData
this.updateForm(this.officeData)

        })
        // this.officerForm = this.formBuilder.group({
        //   firstName: [this.officeData?.firstName ?this.officeData?.firstName: '',Validators.required],
        //   middleName: [this.officeData?.middleName ?this.officeData?.middleName: ''],
        //   lastName: [this.officeData?.lastName ?this.officeData?.lastName: '',Validators.required],
        //   dob: [this.officeData?.DOB ?this.officeData?.DOB: '',Validators.required],
        //   gender: [this.officeData?.gender ?this.officeData?.gender: '',Validators.required],
        //   fatherName: [this.officeData?.father_husbandName ?this.officeData?.father_husbandName: '',Validators.required],
        //   aadhaarNo: [this.officeData?.aadhaarNumber ?this.officeData?.aadhaarNumber: '',[Validators.required,Validators.pattern('^[0-9]{4}[ -]?[0-9]{4}[ -]?[0-9]{4}$')]],
        //   panNo: [this.officeData?.panNumber ?this.officeData?.panNumber: '',[Validators.required,Validators.pattern('^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$')]],
        //   mobileNumber: [this.officeData?.mobileNumber ?this.officeData?.mobileNumber: '',[Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
        //   email: [this.officeData?.email ?this.officeData?.email: '',[Validators.required,Validators.email]],
        //   designation: [this.officeData?.designation ?this.officeData?.designation: '',Validators.required],
        //   address1:[this.officeData?.address1 ?this.officeData?.address1: '',Validators.required],
        //   address2:[this.officeData?.address2 ?this.officeData?.address2: ''],
        //   state:[this.officeData?.state ?this.officeData?.state: '',Validators.required],
        //   district:[this.officeData?.district ?this.officeData?.district: '',Validators.required],
        //   pincode:[this.officeData?.pincode ?this.officeData?.pincode: '',[Validators.required,Validators.pattern('^[1-9][0-9]{5}$'),Validators.minLength(6),Validators.maxLength(6)]]
        // })

        this.officerForm.updateValueAndValidity()
    }

    ngOnInit(): void {

    }
    onSubmit() {
      console.log(this.officerForm.valid)
  if(this.officerForm.valid){
    this.httpService.updateOfficer(this.id,{
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
    updateForm(data:any){
      console.log(data)
      this.officerForm.get('firstName')?.setValue(data?.firstName)
      this.officerForm.get('middleName')?.setValue(data?.middleName)
      this.officerForm.get('lastName')?.setValue(data?.lastName)
      this.officerForm.get('dob')?.setValue(data?.DOB)
      this.officerForm.get('gender')?.setValue(data?.gender)
      this.officerForm.get('fatherName')?.setValue(data?.father_husbandName)
      this.officerForm.get('mobileNumber')?.setValue(data?.mobileNumber)
      this.officerForm.get('aadhaarNo')?.setValue(data?.aadhaarNumber)
      this.officerForm.get('panNo')?.setValue(data?.panNumber)
      this.officerForm.get('email')?.setValue(data?.email)
      this.officerForm.get('designation')?.setValue(data?.designation)
      this.officerForm.get('address1')?.setValue(data?.address1)
      this.officerForm.get('address2')?.setValue(data?.address2)
      this.officerForm.get('state')?.setValue(data?.state)
      this.stateData.map((item:any)=>{
        if(item.state===data?.state){
  this.districtData=item.districts
        }
      })
      this.officerForm.get('district')?.setValue(data?.district)
      this.officerForm.get('pincode')?.setValue(data?.pincode)

      this.officerForm.updateValueAndValidity()

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

