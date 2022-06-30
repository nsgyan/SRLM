import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { SchemeRoutingModule } from './scheme-routing.module';
import { AddSchemeComponent } from './add-scheme/add-scheme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchemeComponent } from './scheme.component';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [SchemeComponent,
    AddSchemeComponent
  ],
  imports: [
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
export class SchemeModule { }
