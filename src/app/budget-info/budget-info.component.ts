import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Currency } from '../models';

@Component({
  selector: 'app-budget-info',
  templateUrl: './budget-info.component.html',
  styleUrls: ['./budget-info.component.css'],
})
export class BudgetInfoComponent implements OnInit {
  @Input() budget: number = 1000;
  @Input() currencies: Currency[] = [];
  @Output() onCurrencyChange = new EventEmitter<any>();
  selectedCurrency: Currency | undefined;

  constructor() { }

  ngOnInit(): void {
    this.selectedCurrency = this.currencies[0];
  }

  onChange(value: string) {
    this.selectedCurrency = this.currencies.find((c) => c.code === value);
    this.onCurrencyChange.emit(this.selectedCurrency);
  }
}
