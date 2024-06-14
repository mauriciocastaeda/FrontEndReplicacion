import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BoletosService {
  private apiUrl = 'http://localhost:22500/boletos'; // Cambia el puerto si es necesario

  constructor(private http: HttpClient) {}

  getBoletos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error fetching data from backend:', error);
    return throwError('Something went wrong; please try again later.');
  }
}