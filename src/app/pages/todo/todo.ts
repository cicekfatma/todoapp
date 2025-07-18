import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common'; // DatePipe for displaying date in HTML if needed later

import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

// Angular Materyal modülleri
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-todo', // Komponent'in selectoru
  standalone: true,
  // Gerekli Angular Material modüllerini ve diğer modülleri burada tanımlıyoruz
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule,

  ],
  templateUrl: './todo.html', // HTML şablon dosyanız
  styleUrls: ['./todo.css'] // CSS stil dosyanız
})

export class Todo {
  newTaskTitle: string = '';
  selectedDate: Date | null = null;
  // Düzeltildi: selectedPriority için doğru tür bildirimi
  selectedPriority: 'none' | 'yuksek' | 'orta' | 'dusuk' = 'none';
    tasks: { title: string; date: Date | null; priority: string; completed: boolean }[] = [];

  constructor() {}



  // Yeni görev ekleme metodu
  // Bu metot, kullanıcının yeni bir görev eklemesini sağlar
  addTask() {
    if (this.newTaskTitle.trim()) {
      const taskDetails = {
        title: this.newTaskTitle.trim(),
        date: this.selectedDate,
        priority: this.selectedPriority,
        completed: false // Görev başlangıçta tamamlanmamış olarak ayarlanır
      };

      this.tasks.push(taskDetails); // Yeni görevi görevler dizisine ekle

      // Burada genellikle taskDetails'i kaydetmek için bir servise gönderirsiniz

      this.newTaskTitle = ''; // Görev girişini temizle
      this.selectedDate = null; // Seçilen tarihi sıfırla
      this.selectedPriority = 'none'; // Seçilen önceliği sıfırla
    } else {
      console.log('Görev başlığı boş olamaz!');
      // Kullanıcı dostu bir hata mesajı göstermek isteyebilirsiniz (örneğin, bir Material Snackbar kullanarak)
    }
  }

  // Öncelik stillendirmesi için CSS sınıfını alma metodu
  getPriorityClass(): string {
    switch (this.selectedPriority) {
      case 'yuksek':
        return 'priority-yuksek'; // Kırmızı
      case 'orta':
        return 'priority-orta';   // Sarı
      case 'dusuk':
        return 'priority-dusuk';  // Mavi
      default:
        return ''; // 'none' veya seçilmemişse özel bir sınıf yok
    }
  }
}