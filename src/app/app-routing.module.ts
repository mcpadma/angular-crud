import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashsboardModule } from './dashsboard/dashsboard.module';
import { CustomersModule } from './customers/customers.module';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './dashsboard/dashsboard.module#DashsboardModule' },
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule'
  },
  {
    path:'form', component: ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
