import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../sidebar/sidebar';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule, RouterModule, Sidebar],
  standalone: true,
  templateUrl: './todo.html',
  styleUrls: ['./todo.css']
})
export class Todo {


}
