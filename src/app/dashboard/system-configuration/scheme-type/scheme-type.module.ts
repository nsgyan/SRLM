import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchemeTypeRoutingModule } from './scheme-type-routing.module';
import { SchemeTypeListComponent } from './scheme-type-list/scheme-type-list.component';
import { AddschemeTypeComponent } from './addscheme-type/addscheme-type.component';
import { EditschemeTypeComponent } from './editscheme-type/editscheme-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { SchemeRoutingModule } from '../scheme/scheme-routing.module';


@NgModule({
  declarations: [
    SchemeTypeListComponent,
    AddschemeTypeComponent,
    EditschemeTypeComponent
  ],
  imports: [
    CommonModule,
    SchemeTypeRoutingModule,
    CommonModule,
    SchemeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ]
})
export class SchemeTypeModule { }
