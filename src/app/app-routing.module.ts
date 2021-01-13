import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'quantum-mads',
    pathMatch: 'full'
  },
  {
    path: 'quantum-mads',
    loadChildren: () => import('./quantum-mads/quantum-mads.module').then(m => m.QuantumMadsModule)  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
