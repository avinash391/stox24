import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { SalariesDetailsRoutingModule } from './salaires.routing.module';
import { SalariesDetails } from './salaries/salaries.component';


@NgModule({
  declarations: [
    SalariesDetails
  ],
  imports: [
    CommonModule,
    SalariesDetailsRoutingModule,
    ReactiveFormsModule
  ]
})
export class BankDetailModule { }
