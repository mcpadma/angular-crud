import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UsercardComponent } from '../components/usercard/usercard.component';
import { DetailsComponent } from '../components/details/details.component';
import { GithubUsersService } from './github-users.service';

@NgModule({
  declarations: [UsercardComponent, DetailsComponent, DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers:[GithubUsersService]
})
export class DashsboardModule { }
