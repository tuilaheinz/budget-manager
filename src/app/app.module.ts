import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetInfoComponent } from './budget-info/budget-info.component';
import { BudgetModiferComponent } from './budget-modifier/budget-modifier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyChangerComponent } from './currency-changer/currency-changer.component';

@NgModule({
  declarations: [AppComponent, BudgetInfoComponent, BudgetModiferComponent, CurrencyChangerComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
