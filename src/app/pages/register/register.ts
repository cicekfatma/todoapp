import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  switchPasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  register(){
    if(!this.email || !this.username || !this.phone || !this.password) {
      alert('Lütfen tüm alanları doldurun.');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const emailExists = users.some((user: any) => user.email === this.email);
    const usernameExists = users.some((user: any) => user.username === this.username);
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
    localStorage.setItem('users', JSON.stringify(users));
    alert('Kayıt başarılı!');
    this.email = '';
    this.username = '';
    this.phone = '';
    this.password = '';

  }
}
