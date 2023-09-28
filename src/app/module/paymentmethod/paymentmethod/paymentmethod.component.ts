import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiDataService } from 'src/app/services/dataservice/api-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-bank-detail',
  templateUrl: '../paymentmethod/paymentmethod.component.html',
  styleUrls: ['../paymentmethod/paymentmethod.component.scss'],
})
export class PaymentDeposite {
  Ammount: any;
  informationUpdateForm: any = FormGroup;
  selectedFile: any;
  pdfUrl: any;
  pdfUrlpath: any;
  ImageScreenshot : any
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
      // amount : [localStorage.getItem('amount'), [Validators.required]],
      // transaction_date: ['', [Validators.required]],
      // payment_type: ['', [Validators.required]],
      // screenshot: ['', [Validators.required]],
      amount : [localStorage.getItem('amount'), [Validators.required]],
      transaction_date: ['', [Validators.required]],
      payment_type: ['', [Validators.required]],
      screenshot: ['', [Validators.required]],
    });
  }



  onFileSelected(event: any): void {
    this.removePDF();
    console.log('event.target.files' ,event.target.files)
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.pdfUrl = e.target.result;
        console.log('pdf url' ,this.pdfUrl)
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      this.pdfUrl = null;
    }
  }

  removePDF(){
    // this.uploadImgCont=false;
    // this.PANimg='';
  }


  onFormSubmit() {
    if (this.informationUpdateForm.valid) {
      const token = localStorage.getItem('token');

      // Create HttpHeaders with the token
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json', // Adjust content type as needed
      });
   
      const formValues = this.informationUpdateForm.value;
    
      console.log('Form submitted with values:', formValues);
      this.services.getDeposite(formValues ,headers).subscribe((data) => {
        console.log('this is new data', data);
      });
    } else {
    }
  }
}