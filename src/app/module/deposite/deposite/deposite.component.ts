import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bank-detail',
  templateUrl: './deposite.component.html',
  styleUrls: ['./deposite.component.scss']
})
export class DepositeDetails {
  ActivePoup: boolean = false;
  paymentForm: FormGroup |any;
  constructor(private formBuilder: FormBuilder) {
    this.paymentForm = this.formBuilder.group({
      amount: ['', [Validators.required, Validators.min(100000)]]
    });
  }

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      amount: [''], // You can set default values or validators here if needed.
    });
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
    localStorage.setItem('amount' , amount)

    // Now 'amount' contains the value from the input field.
    console.log('Amount to pay:', amount);

    // You can perform further actions with the 'amount' value.

    // Clear the input field after payment
    this.paymentForm.reset();
    }
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
