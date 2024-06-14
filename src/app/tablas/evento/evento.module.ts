import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoComponent } from './evento.component';
import { EventoService } from '../../services/evento.service';
import { FormsModule } from '@angular/forms';
import { EventoRoutingModule } from './evento-routing.module';


@NgModule({
  declarations: [
    EventoComponent
  ],
  imports: [
    CommonModule,
    EventoRoutingModule,
    FormsModule
  ],
  providers: [
    EventoService
  ]
})
export class EventoModule { }
