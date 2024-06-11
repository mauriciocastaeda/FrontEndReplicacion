import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoComponent } from './app/evento/evento.component';
import { LugarComponent } from './app/lugar/lugar.component';
import { ReservaComponent } from './app/reserva/reserva.component';
import { GlamourComponent } from './app/glamour/glamour.component';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  { path: 'evento', component: EventoComponent },
  { path: 'lugar', component: LugarComponent },
  { path: 'reserva', component: ReservaComponent },
  // Otras rutas definidas aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
