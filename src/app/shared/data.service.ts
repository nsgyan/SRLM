import { EventEmitter, Injectable } from '@angular/core';
import { Office } from './data.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  officeChange= new EventEmitter<Office[]>()
private office:Office[]=[
  new Office('sfgdg','sfgdg','sfgdg','sfgdg','sfgdg','sfgdg','sfgdg','sfgdg','sfgdg','sfgdg')
]

  constructor() { }
  getoffice(){
    return this.office.slice();
  }
  addnewOffice(office:Office[]){
    this.office.push(...office);
    this.officeChange.emit(this.office.slice());

  }
}
