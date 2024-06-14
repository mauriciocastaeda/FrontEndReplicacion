import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoginModule } from './login.module';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    console.log('Iniciando sesión...'); // Verifica si se llama al método
    if (this.authService.login(this.username, this.password)) {
      console.log('Inicio de sesión exitoso'); // Verifica si el inicio de sesión es exitoso
      this.router.navigate(['/']); // Redirige a la ruta principal después del inicio de sesión exitoso
    } else {
      console.log('Inicio de sesión fallido');
      this.errorMessage = 'Nombre de usuario o contraseña incorrectos';
    }
  }
  get loginError(): boolean {
    return this.errorMessage !== '';
  }
}

