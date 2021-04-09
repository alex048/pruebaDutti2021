import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PageTwoComponent } from './page-two.component';


const routes: Routes = [
  {
    path: '',
    component:
      PageTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwoRoutingModule { }
