import { Routes, RouterModule } from '@angular/router';
import { EventoComponent } from './tablas/evento/evento.component';
import { LugarComponent } from './tablas/lugar/lugar.component';
import { ReservaComponent } from './tablas/reserva/reserva.component';
import { GlamourComponent } from './glamour/glamour.component';
import { UsuarioComponent } from './tablas/usuario/usuario.component';
import { EstadisticasComponent } from './tablas/estadisticas/estadisticas.component';
import { LoginComponent } from './tablas/login/login.component';
import { BoletoComponent } from './tablas/boletos/boletos.component';

export const routes: Routes = [
    {path: '', component: GlamourComponent}, //ruta principal
    {path: 'evento', component: EventoComponent},//ruta de evento
    {path: 'lugar',component:LugarComponent}, //ruta de lugar
    {path: 'reserva', component:ReservaComponent}, //ruta de reserva
    {path: 'usuario', component:UsuarioComponent},
    {path: 'estadisticas', component:EstadisticasComponent},
    {path: 'login', component:LoginComponent},
    {path: 'boletos', component:BoletoComponent},
    { path: '**', redirectTo: '' } //ruta de captura
];

