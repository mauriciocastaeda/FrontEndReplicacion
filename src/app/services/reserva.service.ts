import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private apiUrl = 'http://localhost:22500/reservas'; // Ajusta la URL según la configuración de tu backend

  constructor(private http: HttpClient) { }

  getReservas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error fetching data from backend:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
