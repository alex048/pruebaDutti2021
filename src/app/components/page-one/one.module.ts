import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PageOneComponent } from './page-one.component';
import { OneRoutingModule } from './one-routing.module';
@NgModule({
  declarations: [PageOneComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    OneRoutingModule,
  ]
})
export class OneModule { }
