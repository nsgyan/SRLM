import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrls: ['./add-designation.component.css']
})
export class AddDesignationComponent implements OnInit {
  designationForm:FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    this.designationForm= this.formBuilder.group({
      designationName:['',Validators.required],
      reportingTo:['']

    })
  }

  ngOnInit(): void {
  }

}
