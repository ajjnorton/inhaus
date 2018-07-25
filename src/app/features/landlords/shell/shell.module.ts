import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellRoutingModule, routedComponents} from './shell-routing.module'
import { AngularMaterialModule } from '../../../shared/angular-material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    ShellRoutingModule,
    AngularMaterialModule
  ],
  declarations: [routedComponents, ToolbarComponent]
})
export class ShellModule { }
