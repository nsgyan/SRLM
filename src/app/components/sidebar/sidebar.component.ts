import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/schemeMaster', title: 'Scheme Master',  icon: 'dashboard', class: '' },
    { path: '/officeMaster', title: 'Office Master',  icon:'person', class: '' },
    { path: '/designationMaster', title: 'Designation Master',  icon:'content_paste', class: '' },
    { path: '/officerMaster', title: 'Officer Master',  icon:'library_books', class: '' },
    { path: '/vendorMaster', title: 'Vendor Master',  icon:'bubble_chart', class: '' },
    { path: '/vendorTypeMaster', title: 'Vendor Type Master',  icon:'location_on', class: '' },
    { path: '/vendorServiceMaster', title: 'Vendor Service Master',  icon:'notifications', class: '' },
    { path: '/agencyComponentMaster', title: 'Agency Master',  icon:'unarchive', class: '' },
    { path: '/beneficiaryMaster', title: 'Beneficiary Master',  icon: 'dashboard', class: '' },
    { path: '/setLimits', title: 'Set Limits',  icon:'person', class: '' },
    { path: '/demandRequests', title: 'Demand Requests',  icon:'content_paste', class: '' },
    { path: '/bankMaster', title: 'Bank Master',  icon:'library_books', class: '' },
    { path: '/ifscMaster', title: 'IFSC Master',  icon:'bubble_chart', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
