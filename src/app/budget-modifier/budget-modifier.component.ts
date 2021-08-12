import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-budget-modifier',
  templateUrl: './budget-modifier.component.html',
  styleUrls: ['./budget-modifier.component.css'],
})

export class BudgetModiferComponent {
  @Input() budget!: number;
  @Input() selectedCurrencyCode: string = '';
  @Output() onDebit = new EventEmitter<number>();
  @Output() onCredit = new EventEmitter<number>();
  debitAmount: number = 0;
  creditAmount: number = 0;
  active = 1;
  isDisabled = false;

  constructor() { }

  debit(): void {
    if (this.debitAmount < 0) {
      return;
    }

    this.onDebit.emit(this.debitAmount);
    this.debitAmount = 0;
  }

  credit(): void {
    if (this.creditAmount < 0) {
      return;
    }

    this.onCredit.emit(this.creditAmount);
    this.creditAmount = 0;
  }

  onDebitChange(value: any) {
    this.isDisabled = +value.target.value > this.budget;
  }
}
