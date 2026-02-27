import { Component } from '@angular/core';
import { Device } from '../../classes/device';
import { FormsModule } from '@angular/forms';
import { DeviceService } from '../../services/device-service';

@Component({
  selector: 'app-create-device',
  imports: [FormsModule],
  templateUrl: './create-device.html',
  styleUrl: './create-device.css',
})
export class CreateDevice {
  device:Device = new Device();
  constructor(private deviceService:DeviceService) {}

  onSubmit() {
    this.deviceService.createDevice(this.device).subscribe(data => {
      console.log(data)
    },
    error => {console.error(error)}
  )
  }
}
