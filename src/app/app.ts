import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  count = signal(1);
  double = computed(() => this.count() * 2);
}
