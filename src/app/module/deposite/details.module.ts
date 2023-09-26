import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { DepositeDetails } from './deposite/deposite.component';
import { DepositeDetailsRoutingModule } from './deposite.routing.module';


@NgModule({
  declarations: [
    DepositeDetails
  ],
  imports: [
    CommonModule,
    DepositeDetailsRoutingModule,
    ReactiveFormsModule
  ]
})
export class BankDetailModule { }
