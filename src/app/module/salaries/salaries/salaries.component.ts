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
export class SalariesDetails implements OnInit {
  investorData: YearData[] =[
    {
      "Year": 2021,
      "Quarters": [
        {
          "Quarter": "Q1",
          "Months": [
            {
              "Month": "January",
              "InitialInvestment": 80,
              "QuarterlyProfitLossPercentage": 2, // Changed from -2 to 2
              "ProfitLossAmount": 1.6, // Changed from -1.6 to 1.6
              "InvestmentAfterQuarter": 81.6 // Adjusted accordingly
            },
            {
              "Month": "February",
              "InitialInvestment": 81.6,
              "QuarterlyProfitLossPercentage": 12,
              "ProfitLossAmount": 9.792, // Adjusted accordingly
              "InvestmentAfterQuarter": 91.392 // Adjusted accordingly
            },
            {
              "Month": "March",
              "InitialInvestment": 91.392,
              "QuarterlyProfitLossPercentage": 5, // Changed from -5 to 5
              "ProfitLossAmount": 4.5696, // Adjusted accordingly
              "InvestmentAfterQuarter": 95.9616 // Adjusted accordingly
            }
          ]
        },
        {
          "Quarter": "Q2",
          "Months": [
            {
              "Month": "April",
              "InitialInvestment": 95.9616,
              "QuarterlyProfitLossPercentage": 14,
              "ProfitLossAmount": 13.43424, // Adjusted accordingly
              "InvestmentAfterQuarter": 109.39584 // Adjusted accordingly
            },
            {
              "Month": "May",
              "InitialInvestment": 109.39584,
              "QuarterlyProfitLossPercentage": 2, // Changed from -2 to 2
              "ProfitLossAmount": 2.18792, // Adjusted accordingly
              "InvestmentAfterQuarter": 111.58376 // Adjusted accordingly
            },
            {
              "Month": "June",
              "InitialInvestment": 111.58376,
              "QuarterlyProfitLossPercentage": 8,
              "ProfitLossAmount": 8.9267, // Adjusted accordingly
              "InvestmentAfterQuarter": 120.51046 // Adjusted accordingly
            }
          ]
        },
        {
          "Quarter": "Q3",
          "Months": [
            {
              "Month": "July",
              "InitialInvestment": 120.51046,
              "QuarterlyProfitLossPercentage": 3,
              "ProfitLossAmount": 3.61531, // Adjusted accordingly
              "InvestmentAfterQuarter": 124.12577 // Adjusted accordingly
            },
            {
              "Month": "August",
              "InitialInvestment": 124.12577,
              "QuarterlyProfitLossPercentage": 7,
              "ProfitLossAmount": 8.6898, // Adjusted accordingly
              "InvestmentAfterQuarter": 132.81557 // Adjusted accordingly
            },
            {
              "Month": "September",
              "InitialInvestment": 132.81557,
              "QuarterlyProfitLossPercentage": 4,
              "ProfitLossAmount": 5.31262, // Adjusted accordingly
              "InvestmentAfterQuarter": 138.12819 // Adjusted accordingly
            }
          ]
        },
        {
          "Quarter": "Q4",
          "Months": [
            {
              "Month": "October",
              "InitialInvestment": 138.12819,
              "QuarterlyProfitLossPercentage": 6,
              "ProfitLossAmount": 8.28727, // Adjusted accordingly
              "InvestmentAfterQuarter": 146.41546 // Adjusted accordingly
            },
            {
              "Month": "November",
              "InitialInvestment": 146.41546,
              "QuarterlyProfitLossPercentage": 3,
              "ProfitLossAmount": 4.39246, // Adjusted accordingly
              "InvestmentAfterQuarter": 150.80792 // Adjusted accordingly
            },
            {
              "Month": "December",
              "InitialInvestment": 150.80792,
              "QuarterlyProfitLossPercentage": 5,
              "ProfitLossAmount": 7.5404, // Adjusted accordingly
              "InvestmentAfterQuarter": 158.34832 // Adjusted accordingly
            }
          ]
        }
      ]
    },
    {
      "Year": 2022,
      "Quarters": [
        {
          "Quarter": "Q1",
          "Months": [
            {
              "Month": "January",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 10, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "February",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 8, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "March",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 5, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            }
          ]
        },
        {
          "Quarter": "Q2",
          "Months": [
            {
              "Month": "April",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 12, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "May",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 6, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "June",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 7, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            }
          ]
        },
        {
          "Quarter": "Q3",
          "Months": [
            {
              "Month": "July",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 9, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "August",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 5, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "September",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 8, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            }
          ]
        },
        {
          "Quarter": "Q4",
          "Months": [
            {
              "Month": "October",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 6, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "November",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 7, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "December",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 4, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            }
          ]
        }
      ]
    },
    {
      "Year": 2023,
      "Quarters": [
        {
          "Quarter": "Q1",
          "Months": [
            {
              "Month": "January",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 3, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "February",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 6, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "March",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 4, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            }
          ]
        },
        {
          "Quarter": "Q2",
          "Months": [
            {
              "Month": "April",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 5, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "May",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 8, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "June",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 4, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            }
          ]
        },
        {
          "Quarter": "Q3",
          "Months": [
            {
              "Month": "July",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 7, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "August",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 3, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "September",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 5, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            }
          ]
        },
        {
          "Quarter": "Q4",
          "Months": [
            {
              "Month": "October",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 6, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "November",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 4, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "December",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 8, // Example profit percentage
              "ProfitLossAmount": 0, // Adjusted to 0
              "InvestmentAfterQuarter": 0
            }
          ]
        }
      ]
    }
  ];

  displayedData: MonthData[] = [];
  showMonthlyData: boolean = false;
  showQuarterlyData: boolean = false;
  selectedMonth!: null;
  selectedQuarter!: null;
  selectedYear: any;

  constructor() {}

  ngOnInit() {
    // You can load additional data or perform initialization here if needed
  }

  filterDataByYear(year: number) {
    const yearData = this.investorData.find((data) => data.Year === year);
    if (yearData) {
      // Calculate the yearly summary
      const yearlySummary = {
        Month: 'Yearly',
        InitialInvestment: yearData.Quarters.reduce((total, quarter) => {
          return total + quarter.Months.reduce((quarterTotal, month) => {
            return quarterTotal + month.InitialInvestment;
          }, 0);
        }, 0),
        QuarterlyProfitLossPercentage: 0,
        ProfitLossAmount: yearData.Quarters.reduce((total, quarter) => {
          return total + quarter.Months.reduce((quarterTotal, month) => {
            return quarterTotal + month.ProfitLossAmount;
          }, 0);
        }, 0),
        InvestmentAfterQuarter: 0,
      };

      // Set the displayed data to the yearly summary
      this.displayedData = [yearlySummary];
    } else {
      this.displayedData = [];
    }
  }

  // filterDataByQuarter(quarter: string) {
  //   this.displayedData = this.investorData.flatMap((year) => {
  //     return year.Quarters.flatMap((q) =>
  //       q.Months.filter((month) =>
  //         ['March', 'June', 'September', 'December'].includes(month.Month)
  //       )
  //     );
  //   });
  // }
  filterDataByQuarter(quarter: string) {
    this.displayedData = this.investorData.flatMap((year) => {
      return year.Quarters.flatMap((q) =>
        q.Months.filter((month) =>
          ['March', 'June', 'September', 'December'].includes(month.Month) ||
          (month.Month === 'January' && quarter === 'Q1') ||
          (month.Month === 'April' && quarter === 'Q2') ||
          (month.Month === 'July' && quarter === 'Q3') ||
          (month.Month === 'October' && quarter === 'Q4')
        )
      );
    });
  }






  filterDataByMonth() {
    this.displayedData = this.investorData.flatMap((year) =>
      year.Quarters.flatMap((q) => q.Months)
    );
  }










// Function to toggle between monthly and quarterly data
toggleDataView(isMonthly: boolean, showQuarterlyData: boolean = false) {
  this.showMonthlyData = isMonthly;
  this.showQuarterlyData = showQuarterlyData;
  this.selectedMonth = null;
  this.selectedQuarter = null;
}

;

// Function to update displayed data based on selected options
updateDisplayedData() {
  if (!this.selectedYear) {
    this.displayedData = [];
    return;
  }

  const selectedYearData = this.investorData.find((data) => data.Year === this.selectedYear);

  if (!selectedYearData) {
    this.displayedData = [];
    return;
  }

  if (this.showMonthlyData) {
    if (this.selectedQuarter) {
      const selectedQuarterData = selectedYearData.Quarters.find((quarter) => quarter.Quarter === this.selectedQuarter);
      this.displayedData = selectedQuarterData ? selectedQuarterData.Months : [];
    } else {
      this.displayedData = selectedYearData.Quarters.flatMap((quarter) => quarter.Months);
    }
  } else if (this.showQuarterlyData) {
    // this.displayedData = selectedYearData.Quarters;
  }
}


}
