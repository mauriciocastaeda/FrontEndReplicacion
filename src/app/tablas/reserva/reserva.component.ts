import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';
import { ReservaModule } from './reserva.module';
@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  reservas: any[] = [];

  constructor(private reservaService: ReservaService) { }

  ngOnInit(): void {
    this.fetchReservas();
  }

  fetchReservas(): void {
    this.reservaService.getReservas().subscribe(
      (data: any[]) => {
        console.log('Reservas recibidas:', data);
        this.reservas = data;
      },
      (error) => {
        console.error('Error al obtener reservas:', error);
      }
    );
  }
}
