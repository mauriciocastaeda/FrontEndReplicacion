import { Component, OnInit } from '@angular/core';
import { EventoModule } from './evento.module';
import { EventoService } from '../../services/evento.service';
@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrl: './evento.component.css'
})
export class EventoComponent implements OnInit {
  eventos: any[] = []; // Inicialización vacía

  constructor(private eventoService: EventoService) {}

  ngOnInit(): void {
    this.fetchEventos(); // Método para cargar datos de eventos
  }

  fetchEventos(): void {
    this.eventoService.getEventos().subscribe(
      (data: any[]) => {
        console.log('Eventos recibidos:', data); // Imprimir los datos en la consola
        this.eventos = data; // Asignación de datos recibidos del servicio
      },
      (error) => {
        console.error('Error fetching lugares:', error); // Imprimir el error en la consola
      }
    );
  }
}
