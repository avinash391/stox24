import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { OrderHsitoryRoutingModule } from './orderhistory.routing.module';
import { OrderHistory } from './orderhistory/orderhistory.component';


@NgModule({
  declarations: [
    OrderHistory
  ],
  imports: [
    CommonModule,
    OrderHsitoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class orderDetailsModule { }
