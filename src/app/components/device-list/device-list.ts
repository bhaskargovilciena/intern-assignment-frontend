import { ChangeDetectorRef, Component, inject, NgZone, OnInit } from '@angular/core';
import { DeviceService } from '../../services/device-service';
import { Device } from '../../classes/device';
import { ShelfPosition } from '../../classes/shelf-position';
import { Shelf } from '../../classes/shelf';
import { Router, RouterLink } from '@angular/router';

interface ShelfPositionToShelf {
  shelfPosition:ShelfPosition,
  shelf:Shelf | null
}

interface Result {
  device:Device,
  shelfPositions:ShelfPositionToShelf[]
}

@Component({
  selector: 'app-device-list',
  imports: [RouterLink],
  templateUrl: './device-list.html',
  styleUrl: './device-list.css',
})
export class DeviceList implements OnInit {
  devices:Result[] = []

  constructor(private deviceService:DeviceService, private cdr:ChangeDetectorRef, private router:Router) {}

  ngOnInit():void {
    this.getAllDevices();
  }

  getAllDevices():void {
    this.deviceService.getAllDevices().subscribe(result => {
      console.log(result)
      this.devices = [...result]
      this.cdr.detectChanges()
    })
  }

  handleViewShelfPositions(deviceId:string) {
    console.log(deviceId)
  }
}
