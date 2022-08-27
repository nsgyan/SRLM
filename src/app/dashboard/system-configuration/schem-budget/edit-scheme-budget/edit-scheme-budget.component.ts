import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { HttpServiceService } from 'src/app/shared/service/http-service.service';
import { ToasterService } from 'src/app/shared/toaster.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-scheme-budget',
  templateUrl: './edit-scheme-budget.component.html',
  styleUrls: ['./edit-scheme-budget.component.css']
})
export class EditSchemeBudgetComponent implements OnInit {
  schemeBudgetForm: FormGroup;
  stateData:any
  schemeData:any
  schemeTypeData:any
  districtData:any
  sampleVerificationDocument:any;
  submited:boolean=false
  officer: any;
  id:any;
  schemeBudgetData:any;
  vendorType: any;
    constructor(private formBuilder: FormBuilder,
      private data: DataService,
      private router: Router,
      private toster: ToasterService,
      private httpService:HttpServiceService,
      private activedRoute:ActivatedRoute) {
this.id=this.activedRoute.snapshot.paramMap.get('id')
this.schemeBudgetForm = this.formBuilder.group({
  schemeCode: ['',Validators.required],
  schemeName: ['',Validators.required],
  schemeType: ['',Validators.required],
  schemeAliasName:['',Validators.required],
  schemeAliasNameDescription:['',Validators.required],
  schemeConditions: ['',Validators.required],
  officerName: ['',Validators.required],
  vendorType: ['',[Validators.required]],
  sampleVerificationDocument: ['',[Validators.required]],
  documentList: ['',[Validators.required]],
  budgetCode: ['',[Validators.required]],
  budgetDescription: ['',Validators.required],
  limit:[''],
  dateFrom:['',Validators.required],
  dateTo:['',[Validators.required]]

})
this.httpService.getSchemeBudgetById(this.id).subscribe((data:any)=>{
this.schemeBudgetData=data.schemeBudget
this.schemeBudgetForm.get('schemeCode')?.setValue(this.schemeBudgetData?.schemeCode),
this.schemeBudgetForm.get('schemeName')?.setValue(this.schemeBudgetData?.schemeName),
this.schemeBudgetForm.get('schemeType')?.setValue(this.schemeBudgetData?.schemeType),
this.schemeBudgetForm.get('schemeAliasName')?.setValue(this.schemeBudgetData?.schemeAliasName),
this.schemeBudgetForm.get('schemeAliasNameDescription')?.setValue(this.schemeBudgetData?.schemeAliasNameDescription),
this.schemeBudgetForm.get('schemeConditions')?.setValue(this.schemeBudgetData?.schemeConditions),
this.schemeBudgetForm.get('officerName')?.setValue(this.schemeBudgetData?.officerName),
this.schemeBudgetForm.get('vendorType')?.setValue(this.schemeBudgetData?.vendorType),
this.schemeBudgetForm.get('sampleVerificationDocument')?.setValue(this.schemeBudgetData?.sampleVerificationDocument),
this.schemeBudgetForm.get('documentList')?.setValue(this.schemeBudgetData?.documentList),
this.schemeBudgetForm.get('budgetCode')?.setValue(this.schemeBudgetData?.budgetCode),
this.schemeBudgetForm.get('budgetDescription')?.setValue(this.schemeBudgetData?.budgetDescription)
this.schemeBudgetForm.get('limit')?.setValue(this.schemeBudgetData?.limit),
this.schemeBudgetForm.get('dateFrom')?.setValue(this.schemeBudgetData?.dateFrom),
this.schemeBudgetForm.get('dateTo')?.setValue(this.schemeBudgetData?.dateTo),
this.schemeBudgetForm.updateValueAndValidity()
this.sampleVerificationDocument= environment.download +this.schemeBudgetData?.sampleVerificationDocument
})


    }

    ngOnInit(): void {
      this.httpService.getScheme().subscribe((scheme:any)=>{
        this.schemeData =scheme.schemes
      })
      this.httpService.getSchemetype().subscribe((scheme:any)=>{
        this.schemeTypeData =scheme.Schemetype
      })
      this.httpService.getOfficer().subscribe((data:any)=>{
        data.officer.map((item:any)=>{
          item.name=item.firstName+' '+item.middleName+' '+item.lastName
        })
        this.officer=data.officer
        })
        this.httpService.getvendorType().subscribe((vendorType:any)=>{
          this.vendorType =vendorType.vendorType
        })
    }
    onSubmit() {
      console.log(this.schemeBudgetForm.valid)
  if(this.schemeBudgetForm.valid){
    this.httpService.updateSchemeBudget(this.id,{
      schemeCode:this.schemeBudgetForm.value.schemeCode,
      schemeName:this.schemeBudgetForm.value.schemeName,
      schemeType:this.schemeBudgetForm.value.schemeType,
      schemeAliasName:this.schemeBudgetForm.value.schemeAliasName,
      schemeAliasNameDescription:this.schemeBudgetForm.value.schemeAliasNameDescription,
      schemeConditions:this.schemeBudgetForm.value.schemeConditions,
      officerName:this.schemeBudgetForm.value.officerName,
      vendorType:this.schemeBudgetForm.value.vendorType,
      sampleVerificationDocument:this.schemeBudgetForm.value.sampleVerificationDocument,
      documentList:this.schemeBudgetForm.value.documentList,
      budgetCode:this.schemeBudgetForm.value.budgetCode,
      budgetDescription:this.schemeBudgetForm.value.budgetDescription,
      limit:this.schemeBudgetForm.value.limit,
      dateFrom:this.schemeBudgetForm.value.dateFrom,
      dateTo:this.schemeBudgetForm.value.dateTo,
    }).subscribe((item:any) => {
      Swal.fire('',item.message, 'success')
       this.router.navigate(['/dashboard/system-configuration/schemeBudget'])

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
    console.log(this.schemeBudgetForm)
  }
    }
    onSubmitNew() {
      console.log(this.schemeBudgetForm.valid)
  if(this.schemeBudgetForm.valid){
    this.httpService.addNewSchemeBudget({
      schemeCode:this.schemeBudgetForm.value.schemeCode,
      schemeName:this.schemeBudgetForm.value.schemeName,
      schemeType:this.schemeBudgetForm.value.schemeType,
      schemeAliasName:this.schemeBudgetForm.value.schemeAliasName,
      schemeAliasNameDescription:this.schemeBudgetForm.value.schemeAliasNameDescription,
      schemeConditions:this.schemeBudgetForm.value.schemeConditions,
      officerName:this.schemeBudgetForm.value.officerName,
      vendorType:this.schemeBudgetForm.value.vendorType,
      sampleVerificationDocument:this.schemeBudgetForm.value.sampleVerificationDocument,
      documentList:this.schemeBudgetForm.value.documentList,
      budgetCode:this.schemeBudgetForm.value.budgetCode,
      budgetDescription:this.schemeBudgetForm.value.budgetDescription,
      limit:this.schemeBudgetForm.value.limit,
      dateFrom:this.schemeBudgetForm.value.dateFrom,
      dateTo:this.schemeBudgetForm.value.dateTo,
    }).subscribe((item:any) => {
      Swal.fire('',item.message, 'success')
      this.schemeBudgetForm.reset()
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
    console.log(this.schemeBudgetForm)
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
      this.router.navigate(['/dashboard/system-configuration/schemeBudget'])

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
        if(item.state===this.schemeBudgetForm.value.state){
  this.districtData=item.districts
        }
      })

    }
    getSchemeName(event:any){
      this.schemeData.map((item:any)=>{
        if(item.schemeCode===this.schemeBudgetForm.value.schemeCode){
          this.schemeBudgetForm.get('schemeName')?.setValue(item.schemeName)
          this.schemeBudgetForm.updateValueAndValidity()
        }
      })
    }




    //uploads
    uploads($event: any) {
      let file = $event.target.files;

        if (parseInt(file[0].size) > 5097152) {
          // this.registrationForm.get(form)?.reset()
          // this.registrationForm.get(form)?.updateValueAndValidity()
          // this.toast.error('file to large')

      Swal.fire(
        'Error!',
        'file to large',
        'error'
      )
        }
        else {
          this.httpService.upload(file[0]).subscribe((data: any) => {
            // this.financialDoccument=data?.body;
            this.schemeBudgetForm.get('sampleVerificationDocument')?.setValue(data?.body)
            this.schemeBudgetForm.updateValueAndValidity()
          })

        }

    }
    deletesampleVerificationDocument(){
      this.schemeBudgetData=null
      this.schemeBudgetForm.get('schemeBudgetData')?.reset()
      this.schemeBudgetForm.updateValueAndValidity()
    }
  }
