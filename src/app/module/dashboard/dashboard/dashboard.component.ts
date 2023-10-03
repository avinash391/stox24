import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiDataService } from 'src/app/services/dataservice/api-data.service';
import { GlobalService } from 'src/app/services/global.service';
import { SharedDataService } from 'src/app/services/sharedData/shared-data.service';

// import { MyListingService } from '../your-service-path/my-listing.service'; // Replace with the correct path

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  investmentData: any;
  investmentLooser: any = undefined;
  investmentgetainers:any = undefined;
  investedMoney : any = undefined;
  portfolioData: any;

  constructor(private services: ApiDataService) { }

  ngOnInit(): void {
    this.getInvestment();
    this.getTopLoosers();
    this.getTopgainersApi();
    this.dashboardSummarydata()
    this.getPortfolioData()
  }

  getPortfolioData() {
    this.services.portfolio().subscribe(
      (data: any) => {
        this.portfolioData = data;
        console.log(this.portfolioData, "this is portfolio data");
      },
      (error) => {
        console.error('Error fetching portfolio data', error);
      }
    );
  }


  getInvestment() {
    this.services.getInvestment().subscribe((data: any) => {
      this.investmentData = data;
      console.log(this.investmentData, "this is data I'm getting");
    });
  }
  getTopLoosers() {
    this.services.getTopLooser().subscribe((data: any) => {
      this.investmentLooser = data;
      console.log(this.investmentLooser, "this is looser data I'm getting");
    });
  }
  getTopgainersApi() {
    this.services.getTopgainers().subscribe((data: any) => {
      this.investmentgetainers = data;

      console.log(this.investmentgetainers, "this is gainer data I'm getting");
    });
  }
  dashboardSummarydata(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    this.services.dashboardSummary(headers).subscribe((data:any) => {
      this.investedMoney = data.data;
      console.log('this.dashboardData ' ,this.investedMoney)
    })
  }

}

