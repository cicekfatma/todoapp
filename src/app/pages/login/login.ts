import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- gerekli
import { FormsModule } from '@angular/forms'; // <-- Form işlemleri için gerekli
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // <-- Standalone bileşen
  imports: [CommonModule, FormsModule, RouterLink], // <-- *ngIf çalışması için şart
  templateUrl: './login.html',
  styleUrls: ['./login.css'] // <-- CSS dosyasını ekliyoruz
})
export class Login {
  showPassword = false;
// Kullanıcı adı veya email ile giriş yapabilmek için iki alanı da kullanacağız
  username = '';
  password = '';
// Router'ı kullanarak yönlendirme yapabilmek için gerekli
  constructor(private router: Router) {}




// Şifreyi göstermek için bir değişken
  switchPasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  login() {
    if (!this.username || !this.password) {
      alert('Lütfen tüm alanları doldurun.');
      return;
    }
    // Kullanıcıyı localStorage'dan kontrol et
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    // Kullanıcı adı veya email ile eşleşen kullanıcıyı bul
    const user = users.find((user: any) => (user.email === this.username || user.username === this.username) && user.password === this.password);
    // Eğer kullanıcı bulunduysa, localStorage'a kaydet ve giriş başarılı mesajı göster
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));

      alert('Giriş başarılı!');
      this.router.navigate(['/todo']);
      // Giriş başarılı olduğunda yapılacak işlemler
      // Örneğin, kullanıcı bilgilerini saklayabilir veya yönlendirme yapabilirsiniz.
    } else {
      alert('Kullanıcı adı veya şifre yanlış.');
    }
  }

}
