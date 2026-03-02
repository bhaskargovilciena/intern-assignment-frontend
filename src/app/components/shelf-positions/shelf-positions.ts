import { Component, Input } from '@angular/core';
import { ShelfPosition } from '../../classes/shelf-position';
import { Shelf } from '../../classes/shelf';
import { DeviceService } from '../../services/device-service';
import { Device } from '../../classes/device';
import { ShelfService } from '../../services/shelf-service';
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
  selector: 'app-shelf-positions',
  imports: [],
  templateUrl: './shelf-positions.html',
  styleUrl: './shelf-positions.css',
})
export class ShelfPositions {
  device:Result|null = null

  constructor(private deviceService:DeviceService, private shelfService:ShelfService, private router:Router) {}

  ngOnInit() {
    this.device = this.deviceService.getCurrentDevice();
    console.log(this.device)
  }

  handleAddShelf(shelfPosition:ShelfPosition) {
    this.shelfService.setCurrentShelfPosition(shelfPosition)
    this.router.navigate(['/create-shelf'])
  }

  handleDeleteShelf(shelfPositionToShelf:ShelfPositionToShelf) {
    shelfPositionToShelf.shelf = null
  }
}
