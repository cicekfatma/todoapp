import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,NavigationEnd} from '@angular/router';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'todoapp';

}
