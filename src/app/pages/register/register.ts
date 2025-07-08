import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register {
  showPassword = false;

  email= '';
  username = '';
  phone = '';
  password = '';
  // Router'ı kullanarak yönlendirme yapabilmek için gerekli
  constructor(private router: Router) {}
  // Şifreyi göstermek için bir değişken
  switchPasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  register(){
    if(!this.email || !this.username || !this.phone || !this.password) {
      alert('Lütfen tüm alanları doldurun.');
      return;
    }
    // Kullanıcıyı localStorage'dan kontrol et
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    // Kullanıcı adı veya email ile eşleşen kullanıcıyı bul
    const emailExists = users.some((user: any) => user.email === this.email);
    const usernameExists = users.some((user: any) => user.username === this.username);
    // Kullanıcı adı veya email zaten varsa uyarı ver
    if (emailExists) {
      alert('Bu email adresi zaten kayıtlı.');
      return;
    }
    users.push({
      email: this.email,
      username: this.username,
      phone: this.phone,
      password: this.password
    });
    // Yeni kullanıcıyı localStorage'a kaydet
    localStorage.setItem('users', JSON.stringify(users));
    alert('Kayıt başarılı!');
    // Kayıt başarılı olduğunda kullanıcıyı todo sayfasına yönlendir
    this.router.navigate(['/todo']);

    // Kayıt başarılı olduğunda yapılacak işlemler
    this.email = '';
    this.username = '';
    this.phone = '';
    this.password = '';

  }
}
