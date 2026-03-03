import { Component } from '@angular/core';
import { DeviceService } from '../../services/device service/device-service';
import { FormsModule } from '@angular/forms';
import { ShelfPosition } from '../../classes/shelf-position';
import { Shelf } from '../../classes/shelf';
import { Device } from '../../classes/device';
import { Router } from '@angular/router';

interface ShelfPositionToShelf {
  shelfPosition:ShelfPosition,
  shelf:Shelf | null
}

interface Result {
  device:Device,
  shelfPositions:ShelfPositionToShelf[]
}

@Component({
  selector: 'app-add-shelf-position',
  imports: [FormsModule],
  templateUrl: './add-shelf-position.html',
  styleUrl: './add-shelf-position.css',
})
export class AddShelfPosition {
  device:Result|null = null
  numberOfShelfPositions:number = 0

  constructor(private deviceService:DeviceService, private router:Router) {
    this.device = deviceService.getCurrentDevice()
  }
  
  async onSubmit() {
    this.deviceService.addShelfPositions(this.device, this.numberOfShelfPositions)?.subscribe((data) => {
      data.forEach(sp => {
        this.device?.shelfPositions.push(sp)
      })
      console.log("shelf positions added: " + this.numberOfShelfPositions)
    },
    error => console.error(error)
  )
  await new Promise(resolve => setTimeout(resolve, 1000))
  this.router.navigate(['/'])
  }
}
