import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { ShellComponent} from './shell.component'


const routes: Routes = [
  {
    path: '',
    component: ShellComponent
  },

];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ShellRoutingModule { }

export const routedComponents = [
  ShellComponent
];

