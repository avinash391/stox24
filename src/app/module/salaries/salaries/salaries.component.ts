import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiDataService } from 'src/app/services/dataservice/api-data.service';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-bank-detail',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.scss'],
})
export class SalariesDetails {
    SalariesList : any;
    currentbalance  : any;
    CurrentSatate  : any; 
    chart: any;
  
  
    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private services: ApiDataService
    ) {}

    
  

    ngOnInit(): void {
      this.SalariesListSummary()
      this.CurrentSatate = 'one-year'
      console.log('CurrentSatateCurrentSatate' ,this.CurrentSatate)
      this.createChart();

    }
    SalariesListSummary(){
      const token = localStorage.getItem('token');
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        });
      this.services.SalaryDetails(headers).subscribe((data : any) => {
        this.SalariesList = data.data;
        console.log('this.SalariesList ' ,this.SalariesList)
        this.SalariesList.filter((val : any, index :any) => {
         const current_val =  parseFloat(val.profit_loss_amount + val.profit_loss_amount)
         this.currentbalance = current_val
         console.log(current_val)
        })
        localStorage.setItem('returnsPrice' ,this.currentbalance)
      })
    }
    handelChange(event : any){
      console.log('thisis the event' , event.target.value)
      this.CurrentSatate = event.target.value
    }

   
createChart() {
  this.chart = new Chart('MyChart', {
    type: 'bar', //this denotes tha type of chart

    data: {
      // values on X-Axis
      labels: [
        '2022-05-10',
        '2022-05-11',
        '2022-05-12',
        '2022-05-13',
        '2022-05-14',
        '2022-05-15',
        '2022-05-16',
        '2022-05-17',
      ],
      datasets: [
        {
          label: 'Sales',
          data: ['467', '576', '572', '79', '92', '574', '573', '576'],
          backgroundColor: 'blue',
        },
        {
          label: 'Profit',
          data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
          backgroundColor: 'limegreen',
        },
      ],
    },
    options: {
      aspectRatio: 2.5,
    },
  });
}
}
 