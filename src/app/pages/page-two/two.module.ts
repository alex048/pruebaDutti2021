import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PageTwoComponent } from './page-two.component';
import { TwoRoutingModule } from './two-routing.module';
@NgModule({
  declarations: [PageTwoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TwoRoutingModule,
  ]
})
export class TwoModule { }
