import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BankDetailComponent } from './bank-detail/bank-detail.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PaymentDeposite } from './paymentmethod/paymentmethod.module';

const routes: Routes = [{path:"", component:PaymentDeposite}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentDepositeRoutingModule { }
