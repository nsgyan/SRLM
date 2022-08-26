import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchemBudgetRoutingModule } from './schem-budget-routing.module';
import { AddSchemeBudgetComponent } from './add-scheme-budget/add-scheme-budget.component';
import { EditSchemeBudgetComponent } from './edit-scheme-budget/edit-scheme-budget.component';
import { SchemeBudgetListComponent } from './scheme-budget-list/scheme-budget-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { CKEditorModule } from 'ckeditor4-angular';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    AddSchemeBudgetComponent,
    EditSchemeBudgetComponent,
    SchemeBudgetListComponent
  ],
  imports: [
    CommonModule,
    SchemBudgetRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    CKEditorModule,
    MatSelectModule
  ]
})
export class SchemBudgetModule { }
