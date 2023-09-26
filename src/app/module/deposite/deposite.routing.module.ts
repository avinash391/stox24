import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BankDetailComponent } from './bank-detail/bank-detail.component';
import { DepositeDetails } from './deposite/deposite.component';

const routes: Routes = [{path:"", component:DepositeDetails}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositeDetailsRoutingModule { }
