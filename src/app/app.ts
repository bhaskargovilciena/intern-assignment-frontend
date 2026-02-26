import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeviceList } from './components/device-list/device-list';

@Component({
  selector: 'app-root',
  imports: [DeviceList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Device Inventory Management');
}
