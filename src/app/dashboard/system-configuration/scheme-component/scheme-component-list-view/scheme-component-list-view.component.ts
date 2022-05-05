import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Scheme } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-scheme-component-list-view',
  templateUrl: './scheme-component-list-view.component.html',
  styleUrls: ['./scheme-component-list-view.component.css']
})
export class SchemeComponentListViewComponent implements OnInit {

  scheme: any
  constructor(private data: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.scheme = this.data.getscheme()
    console.log(this.scheme);
    this.data.schemeChange.subscribe((scheme: Scheme[]) => {
      this.scheme = scheme
      console.log(scheme);

    })
  }
  addScheme() {
    this.router.navigate(['/dashboard/system-configuration/schemeComponent/add'])
  }



}