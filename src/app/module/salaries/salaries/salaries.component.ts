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
  investorData: YearData[] = [
    {
      "Year": 2021,
      "Quarters": [
        {
          "Quarter": "Q1",
          "Months": [
            {
              "Month": "January",
              "InitialInvestment": 80,
              "QuarterlyProfitLossPercentage": -2,
              "ProfitLossAmount": -1.6,
              "InvestmentAfterQuarter": 78.4
            },
            {
              "Month": "February",
              "InitialInvestment": 78.4,
              "QuarterlyProfitLossPercentage": 12,
              "ProfitLossAmount": 9.408,
              "InvestmentAfterQuarter": 87.808
            },
            {
              "Month": "March",
              "InitialInvestment": 87.808,
              "QuarterlyProfitLossPercentage": -5,
              "ProfitLossAmount": -4.3904,
              "InvestmentAfterQuarter": 83.4176
            }
          ]
        },
        {
          "Quarter": "Q2",
          "Months": [
            {
              "Month": "April",
              "InitialInvestment": 83.4176,
              "QuarterlyProfitLossPercentage": 14,
              "ProfitLossAmount": 11.698464,
              "InvestmentAfterQuarter": 95.116064
            },
            {
              "Month": "May",
              "InitialInvestment": 95.116064,
              "QuarterlyProfitLossPercentage": -2,
              "ProfitLossAmount": -1.90232128,
              "InvestmentAfterQuarter": 93.21374272
            },
            {
              "Month": "June",
              "InitialInvestment": 93.21374272,
              "QuarterlyProfitLossPercentage": 8,
              "ProfitLossAmount": 7.457099376,
              "InvestmentAfterQuarter": 100.6708421
            }
          ]
        },
        {
          "Quarter": "Q3",
          "Months": [
            {
              "Month": "July",
              "InitialInvestment": 100.6708421,
              "QuarterlyProfitLossPercentage": 3,
              "ProfitLossAmount": 3.020125263,
              "InvestmentAfterQuarter": 103.6909674
            },
            {
              "Month": "August",
              "InitialInvestment": 103.6909674,
              "QuarterlyProfitLossPercentage": 7,
              "ProfitLossAmount": 7.257276518,
              "InvestmentAfterQuarter": 110.9482439
            },
            {
              "Month": "September",
              "InitialInvestment": 110.9482439,
              "QuarterlyProfitLossPercentage": 4,
              "ProfitLossAmount": 4.437929756,
              "InvestmentAfterQuarter": 115.3861737
            }
          ]
        },
        {
          "Quarter": "Q4",
          "Months": [
            {
              "Month": "October",
              "InitialInvestment": 115.3861737,
              "QuarterlyProfitLossPercentage": 6,
              "ProfitLossAmount": 6.922170422,
              "InvestmentAfterQuarter": 122.3083441
            },
            {
              "Month": "November",
              "InitialInvestment": 122.3083441,
              "QuarterlyProfitLossPercentage": 3,
              "ProfitLossAmount": 3.669250323,
              "InvestmentAfterQuarter": 125.9775944
            },
            {
              "Month": "December",
              "InitialInvestment": 125.9775944,
              "QuarterlyProfitLossPercentage": 5,
              "ProfitLossAmount": 6.29887972,
              "InvestmentAfterQuarter": 132.2764741
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
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "February",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "March",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
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
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "May",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "June",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
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
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "August",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "September",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
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
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "November",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "December",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
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
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "February",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "March",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
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
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "May",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "June",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
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
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "August",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "September",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
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
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "November",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
              "InvestmentAfterQuarter": 0
            },
            {
              "Month": "December",
              "InitialInvestment": 0,
              "QuarterlyProfitLossPercentage": 0,
              "ProfitLossAmount": 0,
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
      this.displayedData = yearData.Quarters.flatMap((q) => q.Months);
    } else {
      this.displayedData = [];
    }
  }

  filterDataByQuarter(quarter: string) {
    this.displayedData = this.investorData.flatMap((year) => {
      const quarterData = year.Quarters.find((q) => q.Quarter === quarter);
      return quarterData ? quarterData.Months : [];
    });
  }

  filterDataByMonth(month: string) {
    this.displayedData = this.investorData.flatMap((year) =>
      year.Quarters.flatMap((q) => {
        const monthData = q.Months.find((m) => m.Month === month);
        return monthData ? [monthData] : [];
      })
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
