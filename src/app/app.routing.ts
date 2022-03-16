import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: DashboardLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./dashboard-layout/dashboard-layout.module').then(m => m.DashboardLayoutModule)
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
