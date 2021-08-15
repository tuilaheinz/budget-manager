import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BudgetInfoComponent } from './budget-info/budget-info.component';
import { BudgetModiferComponent } from './budget-modifier/budget-modifier.component';
import { CurrencyChangerComponent } from './currency-changer/currency-changer.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgbNavModule
      ],
      declarations: [
        AppComponent, BudgetModiferComponent, BudgetInfoComponent, CurrencyChangerComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'budget-manager'`, () => {
    expect(component.title).toEqual('budget-manager');
  });

  it(`should have 1000 $/£ initial budget`, () => {
    expect(component.budget).toEqual(1000);
  });

  it('budget should be changed if debit button is clicked', fakeAsync(() => {
    let bmFixture = fixture.debugElement.query(By.directive(BudgetModiferComponent)) as DebugElement;
    let bmComponent = bmFixture.componentInstance;
    bmComponent.selectedCurrency = component.currencies[0];
    
    bmComponent.onDebit.emit(100);
    
    expect(component.budget).toEqual(900);
  }));
});
