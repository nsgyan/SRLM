import { EventEmitter, Injectable } from '@angular/core';
import { Designation, Office, Officer } from './data.model';


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
  officerChange = new EventEmitter<Officer[]>()
  private officer: Officer[] = [
    new Officer('Mr. Aakav Joshi', '03/02/1967', 'Male', 'Shri Vivek Chandra Joshi', 911645623009, 'ABCTY1234D', 9090909090, 'test@gmail.com'),
    new Officer('Shri  Aakesh  Yadav ', '03/15/1987', 'Male', 'Shri Satyaprakash Yadav', 911745623010, 'BCDXA2133S', 8181818181, 'test1@gmail.com'),
    new Officer('Mr.Aarav Gupta', '04/25/1989', 'Male', 'Shri Om Anand Gupta', 911845623011, 'ABCTY1234e', 6056239841, 'test2@gmail.com'),
    new Officer('Shri Advik Joshi', '02/05/1987', 'Male', 'Shri Balram Dev', 911945623012, 'BPDXA2133S', 7512369840, 'test3@gmail.com'),
    new Officer('Dr. Chaitanya Singh', '06/19/1978', 'Male', 'Shri Monu Singh', 912045623013, 'ABCTY5634D', 8632597410, 't1@gmail.com')

]
designationChange= new EventEmitter<Designation[]>()
private designation:Designation[]=[
  new Designation('Managing Director', 'Shri Rampal Singh'),
  new Designation('Chief Financial Officer', 'Shri Mayank Gaur'),
  new Designation('Accounts Officer', 'Shrimati Anuradha Singh'),
  new Designation('Administration Head', 'Shri Ganesh Sharma'),
  new Designation('District Officer', 'Shri Hassan Khan'),
  new Designation('Block Officer', 'Shri Gurdeep Singh'),
  new Designation('Shri Gurdeep Singh', 'Shri Gurdeep Singh'),
  new Designation('Manager', 'Shri Rajneesh Singh'),
  new Designation('Shri Rajneesh Singh', 'Shrimati Rajni'),
  new Designation('HR', 'Shri Veer Singh'),
  new Designation('neAccountantw', 'Shri Rohan Pal')
]

  constructor() { }
  getdesignation(){
    return this.designation.slice();
  }
  addnewdesignation(designation:Designation[]){

    this.designation = designation.concat(this.designation)
    console.log(this.designation); 
    this.designationChange.emit(this.designation.slice());
  }
  getoffice(){
    return this.office.slice();
  }
  addnewOffice(office:Office[]){
    this.office = office.concat(this.office)
    console.log(this.office); 
    this.officeChange.emit(this.office.slice());
  }
  getofficer() {
    return this.officer.slice();
  }
  addnewOfficer(officer: Officer[]) {
    this.officer = officer.concat(this.officer)
    console.log(this.office);
    this.officerChange.emit(this.officer.slice());
  }
}
