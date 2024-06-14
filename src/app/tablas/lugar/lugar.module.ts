import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugarComponent } from './lugar.component';
import { LugarRoutingModule } from './lugar-routing.module';
import { LugarService } from '../../services/lugar.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LugarComponent
  ],
  imports: [
    CommonModule,
    LugarRoutingModule,
    FormsModule
  ],
  providers: [
    LugarService
  ]
})
export class LugarModule { }
