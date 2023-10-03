import { Component, OnInit } from '@angular/core';

interface MonthData {
  Month: string;
  InitialInvestment: number;
  QuarterlyProfitLossPercentage: number;
  ProfitLossAmount: number;
  InvestmentAfterQuarter: number;
}

interface QuarterData {
  Quarter: string;
  Months: MonthData[];
}

interface YearData {
  Year: number;
  Quarters: QuarterData[];
}

@Component({
  selector: 'app-bank-detail',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.scss'],
})
export class SalariesDetails {
    SalariesList : any;
    currentbalance  : any;
    CurrentSatate  : any;


    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private services: ApiDataService
    ) {}

    ngOnInit(): void {
      this.SalariesListSummary()
      this.CurrentSatate = 'one-year'
      console.log('CurrentSatateCurrentSatate' ,this.CurrentSatate)
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
}
