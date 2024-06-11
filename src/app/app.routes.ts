import { Routes, RouterModule } from '@angular/router';
import { EventoComponent } from './evento/evento.component';
import { LugarComponent } from './lugar/lugar.component';
import { ReservaComponent } from './reserva/reserva.component';
import { GlamourComponent } from './glamour/glamour.component';

export const routes: Routes = [
    {path: '', component: GlamourComponent}, //ruta principal
    {path: 'evento', component: EventoComponent},//ruta de evento
    {path: 'lugar',component:LugarComponent}, //ruta de lugar
    {path: 'reserva', component:ReservaComponent}, //ruta de reserva
    { path: '**', redirectTo: '' } //ruta de captura
];

