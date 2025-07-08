import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- gerekli

@Component({
  selector: 'app-login',
  standalone: true, // <-- Standalone bileşen
  imports: [CommonModule], // <-- *ngIf çalışması için şart
  templateUrl: './login.html',
  styleUrls: ['./login.css'] // <-- CSS dosyasını ekliyoruz
})
export class Login {
  showPassword = false;

  switchPasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
