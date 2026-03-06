import { Component } from '@angular/core';
import { Device } from '../../classes/device/device';
import { FormsModule } from '@angular/forms';
import { DeviceService } from '../../services/device service/device-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-device',
  imports: [FormsModule],
  templateUrl: './create-device.html',
  styleUrl: './create-device.css',
})
export class CreateDevice {
  device:Device = new Device();
  constructor(private deviceService:DeviceService, private router:Router) {}

  errorMessage:string|null = null

  showErrorMessage(fieldMissing:string) {
    return "Please enter " + fieldMissing;
  }

  onSubmit() {
    if(this.device.buildingName.trim() == "") {
      this.errorMessage = this.showErrorMessage("building name")
      return
    }
    if(this.device.deviceName.trim() == "") {
      this.errorMessage = this.showErrorMessage("device name")
      return 
    }
    if(this.device.deviceType.trim() == "") {
      this.errorMessage = this.showErrorMessage("device type")
      return 
    }
    if(this.device.partNumber.trim() == "") {
      this.errorMessage = this.showErrorMessage("part number")
      return 
    }
    if(this.device.numberOfShelfPositions == 0) {
      this.errorMessage = this.showErrorMessage("number of shelf positions greater than 0")
      return 
    }
    this.deviceService.createDevice(this.device).subscribe(data => {
      console.log(data)
      this.returnToHomePage()
    },
    error => {console.error(error)}
  )
  }

  returnToHomePage() {
    this.router.navigate(['/'])
  }
}
