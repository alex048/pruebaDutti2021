import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

;
import { ShipsComponent } from './ships.component';
import { ShipsRoutingModule } from './ships-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ShipsDetailsComponent } from './ships-details/ships-details.component';

@NgModule({
  declarations: [ShipsComponent, ShipsDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ShipsRoutingModule,
  ]
})
export class ShipsModule { }
