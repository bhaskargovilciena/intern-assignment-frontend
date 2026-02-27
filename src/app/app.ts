import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Device Inventory Management');
  constructor(public router:Router) {}
}
