import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumberFormComponent } from './number-form/number-form.component';
import { ResultCompComponent } from './result-comp/result-comp.component';

const routes: Routes = [
  {
    path: 'home',
    component: NumberFormComponent,

  },{
    path: 'results',
    component: ResultCompComponent,
  }
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
