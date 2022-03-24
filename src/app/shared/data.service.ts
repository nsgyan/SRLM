import { EventEmitter, Injectable } from '@angular/core';
import { Designation, Office } from './data.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  officeChange= new EventEmitter<Office[]>()
private office:Office[]=[
  new Office(
    'SMMU',
  'UPSRLM HO',
  'Head Office'
  ,9889783846,
  'Shri  Aakesh  Yadav',
  'Accounts Officer',
  'test1@gmail.com',
  9090909090,
  '09ABCDR4525J2QA',
  'SFSFW2456F',
  'Shri  Aakesh  Yadav',
  9090909090,
  'test1@gmail.com'),
  new Office(
    'DMMU',
  'UPSRLM DO',
  'Varanasi District Office '
  ,9869824698,
  'Mr. Chandran Singh ',
  'Accounts Officer',
  't1@gmail.com',
  6056239841,
  '09ABCDR4525J2QA',
  'SFSFW2456F',
  'Dr. Chaitanya Singh ',
  8632597410,
  't1@gmail.com'),
  new Office(
    'BMMU',
  'UPSRLM BO',
  'Varanasi Block Office'
  ,7863249965,
  'Mr. Chandran Singh ',
  'Administration Head',
  'test3@gmail.com',
  8181818181,
  '09ABCDR4525J2QA',
  'SFSFW2456F',
  'Dr. Darsh Gupta',
  7512369840,
  't4@gmail.com')
]
designationChange= new EventEmitter<Designation[]>()
private designation:Designation[]=[
  new Designation('new','sdsf')
]

  constructor() { }
  getdesignation(){
    return this.designation.slice();
  }
  addnewdesignation(designation:Designation[]){
    this.designation.push(...designation);
    console.log(this.designation); 
    this.designationChange.emit(this.designation.slice());
  }
  getoffice(){
    return this.office.slice();
  }
  addnewOffice(office:Office[]){
    this.office.push(...office);
    console.log(this.office); 
    this.officeChange.emit(this.office.slice());
  }
}
