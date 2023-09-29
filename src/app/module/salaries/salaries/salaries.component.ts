import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiDataService } from 'src/app/services/dataservice/api-data.service';
@Component({
  selector: 'app-bank-detail',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.scss'],
})
export class SalariesDetails {
    SalariesList : any;

  
    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private services: ApiDataService
    ) {}


    ngOnInit(): void {
      this.SalariesListSummary()
    }

    SalariesListSummary(){
      const token = localStorage.getItem('token');
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        });
      this.services.SalaryDetails(headers).subscribe((data : any) => {
        this.SalariesList = data.data;
        // console.log('this.SalariesList ' ,this.SalariesList)
      })
    }
}
