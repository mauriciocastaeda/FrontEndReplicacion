import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservaComponent } from './reserva.component';
import { ReservaService } from '../../services/reserva.service';  // Asegúrate de ajustar la ruta si es diferente
import { ReservaRoutingModule } from './reserva-routing.module';

@NgModule({
  declarations: [ReservaComponent],  // Declara los componentes incluidos en este módulo
  imports: [
    CommonModule,
    FormsModule,
    ReservaRoutingModule      // Importa CommonModule para directivas básicas como ngFor, ngIf, etc.
      
  ],
  providers: [ReservaService],  // Provee los servicios necesarios en este módulo
  exports: [ReservaComponent]   // Opcional: exporta componentes si necesitas utilizarlos fuera de este módulo
})
export class ReservaModule { }
