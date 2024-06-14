import { Component, OnInit } from '@angular/core';
import { BoletosService } from '../../services/boletos.service';
import { BoletosModule } from './boletos.module';
@Component({
  selector: 'app-boleto',
  templateUrl: './boletos.component.html',
  styleUrls: ['./boletos.component.css']
})
export class BoletoComponent implements OnInit {
  boletos: any[] = []; // Inicialización vacía

  constructor(private boletoService: BoletosService) {}

  ngOnInit(): void {
    this.fetchBoletos(); // Método para cargar datos de boletos
  }

  fetchBoletos(): void {
    this.boletoService.getBoletos().subscribe(
      (data: any[]) => {
        console.log('Boletos recibidos:', data); // Imprimir los datos en la consola
        this.boletos = data; // Asignación de datos recibidos del servicio
      },
      (error) => {
        console.error('Error fetching boletos:', error); // Imprimir el error en la consola
      }
    );
  }
}
