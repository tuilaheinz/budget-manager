import { Component } from '@angular/core';
import { Currency } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'budget-manager';
  budget = 1000;
  currencies: Currency[] = [
    { code: 'US', symbol: '$' },
    { code: 'UK', symbol: '£' },
  ];
  selectedCurrency: Currency;

  constructor() { }

  ngOnInit(): void {
    this.selectedCurrency = this.currencies[0];
  }

  onChange(value: Currency) {
    this.selectedCurrency = value;
  }

  debit(value: number) {
    this.budget -= value;
  }

  credit(value: number) {
    this.budget += value;
  }
}
