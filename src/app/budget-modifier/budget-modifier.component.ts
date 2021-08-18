import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Currency } from '../models';

@Component({
  selector: 'app-budget-modifier',
  templateUrl: './budget-modifier.component.html',
  styleUrls: ['./budget-modifier.component.css'],
})

export class BudgetModiferComponent implements OnInit, OnChanges {
  @Input() budget!: number;
  @Input() selectedCurrency: Currency;
  @Output() onDebit = new EventEmitter<number>();
  @Output() onCredit = new EventEmitter<number>();
  active = 1;
  isDisabled = false;
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      debitAmount: new FormControl(null, [
        (control: AbstractControl) => Validators.max(this.budget)(control)
      ]),
      creditAmount: new FormControl(null)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.budget?.firstChange) {
      this.form.get('debitAmount').updateValueAndValidity();
    }
  }

  debit(): void {
    let debitAmount = this.form.get('debitAmount').value;
    if (!debitAmount || debitAmount <= 0) {
      return;
    }

    this.onDebit.emit(debitAmount);
    this.form.patchValue({ debitAmount: null });
  }

  credit(): void {
    let creditAmount = this.form.get('creditAmount').value;
    if (!creditAmount || creditAmount <= 0) {
      return;
    }

    this.onCredit.emit(creditAmount);
    this.form.patchValue({ creditAmount: null });
  }
}
