import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { PaymentDeposite } from './paymentmethod/paymentmethod.component';
import { PaymentDepositeRoutingModule } from './paymentmethod.routing.module';


@NgModule({
  declarations: [
    PaymentDeposite
  ],
  imports: [
    CommonModule,
    PaymentDepositeRoutingModule,
    ReactiveFormsModule
  ]
})
export class PaymentDepositeDetails { }
