import { Component, Input } from '@angular/core';
import { ShelfPosition } from '../../classes/shelf position/shelf-position';
import { Shelf } from '../../classes/shelf/shelf';
import { DeviceService } from '../../services/device service/device-service';
import { Device } from '../../classes/device/device';
import { ShelfService } from '../../services//shelf service/shelf-service';
import { Router } from '@angular/router';
import { errorContext } from 'rxjs/internal/util/errorContext';

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
    if(shelfPositionToShelf.shelf == null) return
    this.shelfService.deleteShelf(shelfPositionToShelf.shelf)?.subscribe((data) => console.log(data), error => console.error(error))
    shelfPositionToShelf.shelf = null
  }

  handleDeleteShelfPosition(shelfPosition:ShelfPosition) {
    if(this.device == null) return
    this.shelfService.deleteShelfPosition(shelfPosition).subscribe(data => console.log(data), error => console.error(error)
    )
    this.device.shelfPositions = this.device.shelfPositions.filter(sp => sp.shelfPosition.id !== shelfPosition.id)
  }

  handleUpdateShelf(shelf:Shelf|null) {
    if(shelf == null) return 
    this.shelfService.setCurrentShelf(shelf)
    this.router.navigate(['/update-shelf'])
  }
}
