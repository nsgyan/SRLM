import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicDateService } from '../shared/dynamic-date.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  time$: Observable<any>;
 

  constructor(private dynamicDate: DynamicDateService) {
    this.time$ = this.dynamicDate.getDate();
  }
  ngOnInit(): void {
  }

 
}
