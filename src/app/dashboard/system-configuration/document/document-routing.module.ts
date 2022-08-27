import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddocumentComponent } from './adddocument/adddocument.component';
import { DocumentlistComponent } from './documentlist/documentlist.component';
import { EditdocumentComponent } from './editdocument/editdocument.component';

const routes: Routes = [ { path: '', component: DocumentlistComponent },
{ path: 'add', component: AdddocumentComponent },
{ path: 'edit/:id', component: EditdocumentComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
