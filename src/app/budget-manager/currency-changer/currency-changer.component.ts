import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Currency } from '../../models';

@Component({
  selector: 'app-currency-changer',
  templateUrl: './currency-changer.component.html',
  styleUrls: ['./currency-changer.component.css']
})
export class CurrencyChangerComponent implements OnInit {
  @Input() currencies: Currency[] = [];
  @Output() onCurrencyChange = new EventEmitter<any>();
  selectedCurrency: Currency | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: string) {
    this.selectedCurrency = this.currencies.find((c) => c.code === value);
    this.onCurrencyChange.emit(this.selectedCurrency);
  }
}
