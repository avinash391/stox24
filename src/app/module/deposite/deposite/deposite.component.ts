import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiDataService } from 'src/app/services/dataservice/api-data.service';
@Component({
  selector: 'app-bank-detail',
  templateUrl: './deposite.component.html',
  styleUrls: ['./deposite.component.scss'],
})
export class DepositeDetails {
  ActivePoup: boolean = false;
  paymentForm: FormGroup | any;
  investedMoney: any = undefined;
  totalAmount : any = undefined
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private services: ApiDataService
  ) {
    this.paymentForm = this.formBuilder.group({
      amount: ['', [Validators.required, Validators.min(100000)]],
    });
  }
  // constructor() { }
  // ngOnInit(): void {
  //   this.getInvestment();
  //   this.getTopLoosers();
  //   this.getTopgainersApi();
  //   this.dashboardSummarydata()
  // }
  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      amount: [''], // You can set default values or validators here if needed.
    });
    this.investedMoneyDetails();
  }
  isAmountValid: boolean = false;

  validateAmount() {
    const amount = this.paymentForm.get('amount').value;
    // Check if the entered amount is at least ₹100,000
    this.isAmountValid = amount >= 100000;
  }
  onPayButtonClick() {
    if (this.isAmountValid) {
      // Access the input data when the "Pay" button is clicked.
      const amount = this.paymentForm.get('amount').value;
      localStorage.setItem('amount', amount);

      // Now 'amount' contains the value from the input field.
      console.log('Amount to pay:', amount);
      this.router.navigate(['/paymentupdate']);
      // You can perform further actions with the 'amount' value.

      // Clear the input field after payment
      this.paymentForm.reset();
    }
  }

  //

  investedMoneyDetails() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    this.services.depositeRequest(headers).subscribe((data: any) => {
      this.investedMoney = data.data;
      const sumOfApprovedValues = this.investedMoney
        .filter((obj : any) => obj.status === 'Approved') // Filter objects with status 'approved'
        .reduce(
          (accumulator : any, currentValue : any) => accumulator + parseFloat(currentValue.amount),
          0
        );
      console.log('this.dashboardData ', sumOfApprovedValues);
      this.totalAmount = sumOfApprovedValues
    });
  }

  onCancelButtonClick() {
    // Clear the input field when the "Cancel" button is clicked
    this.paymentForm.reset();
  }

  openDepositePopup() {
    this.ActivePoup = true;
  }

  closePopup() {
    this.ActivePoup = false;
  }
}
