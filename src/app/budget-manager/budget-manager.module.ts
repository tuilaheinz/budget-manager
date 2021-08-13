import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetManagerComponent } from './budget-manager.component';
import { BudgetManagerRoutingModule } from './budget-manager-routing.module';
import { BudgetInfoComponent } from './budget-info/budget-info.component';
import { BudgetModiferComponent } from './budget-modifier/budget-modifier.component';
import { CurrencyChangerComponent } from './currency-changer/currency-changer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BudgetManagerComponent, BudgetInfoComponent, BudgetModiferComponent, CurrencyChangerComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    BudgetManagerRoutingModule,
  ],
})
export class BudgetManagerModule { }
