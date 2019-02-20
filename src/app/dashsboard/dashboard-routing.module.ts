import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsercardComponent } from '../components/usercard/usercard.component';
import { DashboardComponent } from './dashboard.component';
import { DetailsComponent } from '../components/details/details.component';

const routes: Routes = [
           { path: '', component:DashboardComponent,
            children: [ 
              { path:'', component: UsercardComponent },
              { path:'details', component: DetailsComponent }
            ] 
          }
    ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }