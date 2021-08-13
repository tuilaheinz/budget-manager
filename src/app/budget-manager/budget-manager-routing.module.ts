import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetManagerComponent } from './budget-manager.component';

const routes: Routes = [{
    path: '',
    component: BudgetManagerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetManagerRoutingModule { }
