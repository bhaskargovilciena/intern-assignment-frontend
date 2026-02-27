import { Component, Input } from '@angular/core';
import { ShelfPosition } from '../../classes/shelf-position';
import { Shelf } from '../../classes/shelf';
import { DeviceService } from '../../services/device-service';
import { Device } from '../../classes/device';

interface ShelfPositionToShelf {
  shelfPosition:ShelfPosition,
  shelf:Shelf | null
}

interface Result {
  device:Device,
  shelfPositions:ShelfPositionToShelf[]
}

@Component({
  selector: 'app-shelf-positions',
  imports: [],
  templateUrl: './shelf-positions.html',
  styleUrl: './shelf-positions.css',
})
export class ShelfPositions {
  device:Result|null = null

  constructor(private deviceService:DeviceService) {}

  ngOnInit() {
    this.device = this.deviceService.getCurrentDevice();
    console.log(this.device)
  }
}
