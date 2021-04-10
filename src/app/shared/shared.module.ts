import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { BaseComponent } from './base-component/base-component';
@NgModule({
  declarations: [
    PrincipalComponent, BaseComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    PrincipalComponent
  ],
})
export class SharedModule { }
