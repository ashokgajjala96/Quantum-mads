import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuantumMadsRoutingModule } from './quantum-mads-routing.module';
import { TopNavBarComponent } from './shared/top-nav-bar/top-nav-bar.component';
import { SideNavBarComponent } from './shared/side-nav-bar/side-nav-bar.component';
import { QuantumMadsComponent } from './quantum-mads.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxFlagPickerModule } from 'ngx-flag-picker';



@NgModule({
  declarations: [TopNavBarComponent, SideNavBarComponent,QuantumMadsComponent, DashboardComponent],
  imports: [
    CommonModule,
    NgxFlagPickerModule ,
    QuantumMadsRoutingModule
  ]
})
export class QuantumMadsModule { }
