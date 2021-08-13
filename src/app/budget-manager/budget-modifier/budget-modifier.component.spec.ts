import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetModiferComponent } from './budget-modifier.component';

describe('BudgetModiferComponent', () => {
  let component: BudgetModiferComponent;
  let fixture: ComponentFixture<BudgetModiferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetModiferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetModiferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
