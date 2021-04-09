import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PageOneComponent } from './page-one.component';


const routes: Routes = [
  {
    path: '',
    component:
      PageOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneRoutingModule { }
