import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellRoutingModule, routedComponents} from './shell-routing.module'

@NgModule({
  imports: [
    CommonModule,
    ShellRoutingModule
  ],
  declarations: [routedComponents]
})
export class ShellModule { }
