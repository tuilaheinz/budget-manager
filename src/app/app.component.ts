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
  selectedCurrencyCode!: string;

  constructor() { }

  ngOnInit(): void {
    this.selectedCurrencyCode = this.currencies[0].code;
  }

  onChange(value: Currency) {
    this.selectedCurrencyCode =
      this.currencies.find((c) => c.code == value.code)?.code ?? '';
  }

  debit(value: number) {
    this.budget -= value;
  }

  credit(value: number) {
    this.budget += value;
  }
}
