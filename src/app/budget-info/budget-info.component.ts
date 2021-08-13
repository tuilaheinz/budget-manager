import { Component, Input, OnInit } from '@angular/core';
import { Currency } from '../models';

@Component({
  selector: 'app-budget-info',
  templateUrl: './budget-info.component.html',
  styleUrls: ['./budget-info.component.css'],
})
export class BudgetInfoComponent implements OnInit {
  @Input() budget: number = 1000;
  @Input() selectedCurrency: Currency | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
