import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BankDetailComponent } from './bank-detail/bank-detail.component';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderHistory } from './orderhistory/orderhistory.component';

const routes: Routes = [{path:"", component:OrderHistory}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderHsitoryRoutingModule { }
