import { ChangeDetectorRef, Component, inject, NgZone, OnInit } from '@angular/core';
import { DeviceService } from '../../services/device-service';
import { Device } from '../../classes/device';
import { ShelfPosition } from '../../classes/shelf-position';

interface Result {
  device:Device,
  shelfPositions:ShelfPosition[]
}

@Component({
  selector: 'app-device-list',
  imports: [],
  templateUrl: './device-list.html',
  styleUrl: './device-list.css',
})
export class DeviceList implements OnInit {
  devices:Result[] = []

  constructor(private deviceService:DeviceService, private cdr:ChangeDetectorRef) {}

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
}
