import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuantumMadsComponent } from './quantum-mads.component';
import { QuantumMadsModule } from './quantum-mads.module';

const routes: Routes = [
  {
    path: '',
    component: QuantumMadsComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuantumMadsRoutingModule {}
