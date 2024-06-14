import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoletoComponent } from './boletos.component';
import { FormsModule } from '@angular/forms';
import { BoletosRoutingModule } from './boletos-routing.module';
import { BoletosService } from '../../services/boletos.service';


@NgModule({
  declarations: [
    BoletoComponent
  ],
  imports: [
    CommonModule,
    BoletosRoutingModule,
    FormsModule
  ],
  providers: [
    BoletosService
  ]
})
export class BoletosModule { }