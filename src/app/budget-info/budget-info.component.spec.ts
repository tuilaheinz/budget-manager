import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetInfoComponent } from './budget-info.component';

describe('BudgetInfoComponent', () => {
  let component: BudgetInfoComponent;
  let fixture: ComponentFixture<BudgetInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('h1 should be green if budget is bigger than 500', () => {
    component.budget = 501;
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('h1.text-success');
    expect(el).toBeTruthy();
  });

  it('h1 should be orange if budget is equal 500', () => {
    component.budget = 500;
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('h1.text-warning');
    expect(el).toBeTruthy();
  });

  it('h1 should be orange if budget is equal 101', () => {
    component.budget = 101;
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('h1.text-warning');
    expect(el).toBeTruthy();
  });

  it('h1 should be red if budget is equal 100', () => {
    component.budget = 100;
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('h1.text-danger');
    expect(el).toBeTruthy();
  });
});
