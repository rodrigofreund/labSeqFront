import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabSeqComponent } from './lab-seq/lab-seq.component';

const routes: Routes = [
  {
    path: '',
    component: LabSeqComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
