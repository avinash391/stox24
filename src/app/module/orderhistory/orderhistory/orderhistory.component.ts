import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiDataService } from 'src/app/services/dataservice/api-data.service';
@Component({
  selector: 'app-bank-detail',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.scss'],
})
export class OrderHistory {
  Orderhistorylist : any = undefined;

  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private services: ApiDataService
  ) {}


  ngOnInit(): void {
    this.orderHistoryDetials()
  }

  orderHistoryDetials(){
    const token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      });
    this.services.OrderHistory(headers).subscribe((data : any) => {
      this.Orderhistorylist = data.data;
      console.log('this.OrderhistoryList ' ,this.Orderhistorylist)
    })
  }
}
