import { Component, OnInit } from '@angular/core';
import { LugarService } from '../../services/lugar.service';
import { LugarModule } from './lugar.module';
@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css'],
  
})
export class LugarComponent implements OnInit {
  lugares: any[] = []; // Inicialización vacía

  constructor(private lugarService: LugarService) {}

  ngOnInit(): void {
    this.fetchLugares(); // Método para cargar datos de lugares
  }

  fetchLugares(): void {
    this.lugarService.getLugares().subscribe(
      (data: any[]) => {
        console.log('Lugares recibidos:', data); // Imprimir los datos en la consola
        this.lugares = data; // Asignación de datos recibidos del servicio
      },
      (error) => {
        console.error('Error fetching lugares:', error); // Imprimir el error en la consola
      }
    );
  }
}




