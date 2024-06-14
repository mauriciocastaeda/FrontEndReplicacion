import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoComponent } from './app/tablas/evento/evento.component';
import { LugarComponent } from './app/tablas/lugar/lugar.component';
import { ReservaComponent } from './app/tablas/reserva/reserva.component';
import { GlamourComponent } from './app/glamour/glamour.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { BoletosService } from './app/services/boletos.service';
import { BoletosModule } from './app/tablas/boletos/boletos.module';
import { BoletoComponent } from './app/tablas/boletos/boletos.component';
import { EventoService } from './app/services/evento.service';
import { EventoModule } from './app/tablas/evento/evento.module';
import { LugarModule } from './app/tablas/lugar/lugar.module';
// Componentes
import { AppComponent } from './app/app.component';

// Importa otros componentes según sea necesario


import { LugarService } from './app/services/lugar.service';
import { ReservaService } from './app/services/reserva.service';
import { ReservaModule } from './app/tablas/reserva/reserva.module';
const routes: Routes = [
  { path: 'evento', component: EventoComponent },
  { path: 'lugar', component: LugarComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: 'boletos', component: BoletoComponent},
  // Otras rutas definidas aquí
];

@NgModule({
  declarations: [LugarComponent, AppComponent, ReservaComponent, BoletoComponent, EventoComponent],
  imports: [RouterModule.forRoot(routes),BrowserModule, LugarModule, ReservaModule,BoletosModule, EventoModule],
  exports: [RouterModule],
  providers: [LugarService,BoletosService, ReservaService,EventoService,provideHttpClient(), provideClientHydration() ]
})
export class AppRoutingModule { }
