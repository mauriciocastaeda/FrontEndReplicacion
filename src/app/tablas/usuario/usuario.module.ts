import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }