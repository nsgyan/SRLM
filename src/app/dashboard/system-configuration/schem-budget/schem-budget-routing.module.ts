import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSchemeBudgetComponent } from './add-scheme-budget/add-scheme-budget.component';
import { EditSchemeBudgetComponent } from './edit-scheme-budget/edit-scheme-budget.component';
import { SchemeBudgetListComponent } from './scheme-budget-list/scheme-budget-list.component';

const routes: Routes = [
    { path: '', component: SchemeBudgetListComponent},
{ path: 'add', component: AddSchemeBudgetComponent},
{ path: 'edit/:id', component:EditSchemeBudgetComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemBudgetRoutingModule { }
