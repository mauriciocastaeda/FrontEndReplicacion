import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioModule } from './usuario.module';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit{
  usuarios: any[] = []; // Inicialización vacía
 
  constructor(private usuarioService: UsuarioService) {}
 
  ngOnInit(): void {
    this.fetchUsuarios(); // Método para cargar datos de lugares
  }
 
  fetchUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(
      (data: any[]) => {
        console.log('Usuarios recibidos:', data); // Imprimir los datos en la consola
        this.usuarios = data; // Asignación de datos recibidos del servicio
      },
      (error) => {
        console.error('Error fetching usuarios:', error); // Imprimir el error en la consola
      }
    );
  }

}
