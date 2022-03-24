import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  addoffice(){
    this.router.navigate(['/dashboard/system-configuration/designation/add'])
  }

}
