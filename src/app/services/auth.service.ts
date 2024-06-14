import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;

  constructor() {}

  login(username: string, password: string): boolean {
    // Aquí debes implementar tu lógica de autenticación
    // Este es solo un ejemplo simple
    if (username === 'user' && password === 'password') {
      this.authenticated = true;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.authenticated = false;
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }
}

