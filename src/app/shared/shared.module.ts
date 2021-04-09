import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
@NgModule({
  declarations: [
    PrincipalComponent],
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
