import { Component, EventEmitter, OnInit } from '@angular/core';
import { Office } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
office:any
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.office= this.data.getoffice()
    console.log(this.office);
    this.data.officeChange.subscribe((office:Office[])=>{
      this.office= office
      console.log(office);
      
    })
    
  }

}
