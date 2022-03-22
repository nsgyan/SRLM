import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanksRoutingModule } from './banks-routing.module';
import { AddBankComponent } from './add-bank/add-bank.component';


@NgModule({
  declarations: [
    AddBankComponent
  ],
  imports: [
    CommonModule,
    BanksRoutingModule
  ]
})
export class BanksModule { }
