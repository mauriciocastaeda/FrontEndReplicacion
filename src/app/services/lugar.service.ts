import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LugarService {
  private apiUrl = 'http://localhost:22500/lugares'; // Cambia el puerto si es necesario

  constructor(private http: HttpClient) {}

  getLugares(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error fetching data from backend:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
