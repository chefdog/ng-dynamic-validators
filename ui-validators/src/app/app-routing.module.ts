import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './views/demo/demo.component';
import { Demo2Component } from './views/demo2/demo2.component';

const routes: Routes = [
  { path: '', redirectTo: '/demo1', pathMatch: 'full' },
  { path: 'demo1', component: DemoComponent },
  { path: 'demo2', component: Demo2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
