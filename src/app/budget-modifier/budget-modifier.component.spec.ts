import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app.component';

import { BudgetModiferComponent } from './budget-modifier.component';

describe('BudgetModiferComponent', () => {
  let component: BudgetModiferComponent;
  let fixture: ComponentFixture<BudgetModiferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgbNavModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [AppComponent, BudgetModiferComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetModiferComponent);
    component = fixture.componentInstance;
    component.selectedCurrency = { code: 'US', symbol: '$' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on debit click', async () => {
    const debitAmount = 100;

    // spy on event emitter
    spyOn(component.onDebit, 'emit');

    // set value
    const debitAmountEl = fixture.debugElement.query(By.css('#debitAmount')).nativeElement;
    debitAmountEl.value = debitAmount;
    debitAmountEl.dispatchEvent(new Event('input'));

    await fixture.whenStable();
    fixture.detectChanges();

    // trigger the click
    const button = fixture.nativeElement.querySelector('#debitBtn');
    button.dispatchEvent(new Event('click'));

    expect(component.onDebit.emit).toHaveBeenCalledWith(debitAmount);
  });

  it('should show error if debit amount is bigger than budget', async () => {
    component.budget = 500;

    // set value
    const debitAmountEl = fixture.nativeElement.querySelector('#debitAmount');
    debitAmountEl.value = 501;
    debitAmountEl.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const el = fixture.nativeElement.querySelector('p.error');
    expect(el).toBeTruthy();
  });

  it('should not show error if debit amount is equal budget', async () => {
    component.budget = 123;

    // set value
    const debitAmountEl = fixture.nativeElement.querySelector('#debitAmount');
    debitAmountEl.value = 123;
    debitAmountEl.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const el = fixture.nativeElement.querySelector('p.error');
    expect(el).toBeNull();
  });
});
