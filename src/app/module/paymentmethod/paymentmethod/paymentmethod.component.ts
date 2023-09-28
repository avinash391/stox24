import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiDataService } from 'src/app/services/dataservice/api-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-bank-detail',
  templateUrl: '../paymentmethod/paymentmethod.component.html',
  styleUrls: ['../paymentmethod/paymentmethod.component.scss'],
})
export class PaymentDeposite implements OnInit {
  Ammount: any;
  informationUpdateForm: any = FormGroup;
  selectedFile: any;
  get f() {
    return this.informationUpdateForm.controls;
  }
  constructor(
    private formBuilder: FormBuilder,
    private services: ApiDataService
  ) {}

  ngOnInit(): void {
    this.Ammount = localStorage.getItem('amount');
    this.informationUpdateForm = this.formBuilder.group({
      amount: [localStorage.getItem('amount'), [Validators.required]],
      transaction_date: ['', [Validators.required]],
      payment_type: ['', [Validators.required]],
      screenshot: ['', [Validators.required]],
    });
  }

  onFileSelected(event: any) {
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
    }
  }

  onFormSubmit() {
    if (this.informationUpdateForm) {
      const token = localStorage.getItem('token')|| '';

      // Create a FormData object
      const formData = new FormData();

      // Create HttpHeaders with the token
      // const headers = new HttpHeaders({
      //   Authorization: `Bearer ${token}`,
      //   'Content-Type': 'application/json', // Adjust content type as needed
      // });

      // const formValues = this.informationUpdateForm.value;
      // console.log('Form submitted with values:', formValues);
      // let updatedFormValues = {
      //   ...formValues,
      //   screenshot: this.selectedFile,
      // };

      //console.log('Form submitted updatedFormValues:', updatedFormValues);

      // Append form values to FormData
      formData.append(
        'amount',
        this.informationUpdateForm.get('amount')?.value
      );
      formData.append(
        'transaction_date',
        this.informationUpdateForm.get('transaction_date')?.value
      );
      formData.append(
        'payment_type',
        this.informationUpdateForm.get('payment_type')?.value
      );

      // Append the file information to FormData
      if (this.selectedFile) {
        formData.append(
          'screenshot',
          this.selectedFile,
          this.selectedFile.name
        );
      }

            // Call the ApiService to submit the FormData
            this.services.submitFormData(formData, token).subscribe(
              (response) => {
                // Handle the response from the API
                console.log('Response from server:', response);
              },
              (error) => {
                // Handle any errors
                console.error('Error:', error);
              }
            );

      // this.services.getDeposite(updatedFormValues, headers).subscribe((data) => {
      //   console.log('this is new data', data);
      // });
    } else {
    }
  }
}
