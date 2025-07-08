import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- gerekli
import { FormsModule } from '@angular/forms'; // <-- Form işlemleri için gerekli
@Component({
  selector: 'app-login',
  standalone: true, // <-- Standalone bileşen
  imports: [CommonModule, FormsModule], // <-- *ngIf çalışması için şart
  templateUrl: './login.html',
  styleUrls: ['./login.css'] // <-- CSS dosyasını ekliyoruz
})
export class Login {
  showPassword = false;

  username = '';
  password = '';

  switchPasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  login() {
    if (!this.username || !this.password) {
      alert('Lütfen tüm alanları doldurun.');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((user: any) => (user.email === this.username || user.username === this.username) && user.password === this.password);
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));

      alert('Giriş başarılı!');
      // Giriş başarılı olduğunda yapılacak işlemler
      // Örneğin, kullanıcı bilgilerini saklayabilir veya yönlendirme yapabilirsiniz.
    } else {
      alert('Kullanıcı adı veya şifre yanlış.');
    }
  }

}
