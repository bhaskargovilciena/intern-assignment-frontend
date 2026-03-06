import { Component } from '@angular/core';
import { DeviceService } from '../../services/device service/device-service';
import { Device } from '../../classes/device';
import { ShelfPosition } from '../../classes/shelf-position';
import { Shelf } from '../../classes/shelf';
import { FormsModule } from '@angular/forms';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { Router } from '@angular/router';

interface ShelfPositionToShelf {
  shelfPosition:ShelfPosition,
  shelf:Shelf|null
}

interface Result {
  device:Device,
  shelfPositions:ShelfPositionToShelf[]
}

@Component({
  selector: 'app-update-device',
  imports: [FormsModule],
  templateUrl: './update-device.html',
  styleUrl: './update-device.css',
})
export class UpdateDevice {
  device:Result|null

  constructor(private deviceService:DeviceService, private router:Router) {
    this.device = this.deviceService.getCurrentDevice()
  }

  errorMessage:string|null = null

  showErrorMessage(fieldMissing:string) {
    return "Please enter " + fieldMissing;
  }

  async onSubmit() {
    if(this.device?.device.buildingName.trim() == "") {
      this.errorMessage = this.showErrorMessage("building name")
      return
    }
    if(this.device?.device.deviceName.trim() == "") {
      this.errorMessage = this.showErrorMessage("device name")
      return 
    }
    if(this.device?.device.deviceType.trim() == "") {
      this.errorMessage = this.showErrorMessage("device type")
      return 
    }
    if(this.device?.device.partNumber.trim() == "") {
      this.errorMessage = this.showErrorMessage("part number")
      return 
    }
    if(this.device?.device.numberOfShelfPositions == 0) {
      this.errorMessage = this.showErrorMessage("number of shelf positions greater than 0")
      return 
    }
    this.deviceService.updateDevice(this.device)?.subscribe((data) => console.log(data), error => console.error(error))
    await new Promise(resolve => setTimeout(resolve, 1000))
    this.router.navigate(['/'])
  }
}
