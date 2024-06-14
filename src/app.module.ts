import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
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
import { AuthGuard } from './app/guards/auth.guard';
// Importa otros componentes según sea necesario
import { AuthService } from './app/services/auth.service';
import { LugarService } from './app/services/lugar.service';
import { ReservaService } from './app/services/reserva.service';
import { ReservaModule } from './app/tablas/reserva/reserva.module';
import { UsuarioComponent } from './app/tablas/usuario/usuario.component';
import { EstadisticasComponent } from './app/tablas/estadisticas/estadisticas.component';

import { LoginModule } from './app/tablas/login/login.module';
import { NavbarComponent } from './app/navbar/navbar.component';
import { FooterComponent } from './app/footer/footer.component';

const routes: Routes = [
  { path: 'evento', component: EventoComponent },
  { path: 'lugar', component: LugarComponent },
  { path: 'reserva', component: ReservaComponent,canActivate: [AuthGuard] },
  { path: 'boletos', component: BoletoComponent,canActivate: [AuthGuard]},
  { path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard] },
  { path: 'estadisticas', component: EstadisticasComponent, canActivate: [AuthGuard] },
  // Otras rutas definidas aquí
];

@NgModule({
  declarations: [LugarComponent, AppComponent, ReservaComponent, BoletoComponent, EventoComponent,UsuarioComponent,EstadisticasComponent,NavbarComponent,FooterComponent,AppRoutingModule],
  imports: [RouterModule.forRoot(routes),BrowserModule, LugarModule, ReservaModule,BoletosModule, EventoModule,FormsModule,LoginModule],
  exports: [RouterModule],
  providers: [LugarService,BoletosService, ReservaService,EventoService,provideHttpClient(), provideClientHydration(),AuthService,AuthGuard ]
})
export class AppRoutingModule { }
