import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { AdddocumentComponent } from './adddocument/adddocument.component';
import { EditdocumentComponent } from './editdocument/editdocument.component';
import { DocumentlistComponent } from './documentlist/documentlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdddocumentComponent,
    EditdocumentComponent,
    DocumentlistComponent
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DocumentModule { }
