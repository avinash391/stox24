import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BankDetailComponent } from './bank-detail/bank-detail.component';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SalariesDetails } from './salaries/salaries.component';

const routes: Routes = [{path:"", component:SalariesDetails}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalariesDetailsRoutingModule { }
