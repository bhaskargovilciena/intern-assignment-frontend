import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../classes/device';
import { ShelfPosition } from '../classes/shelf-position';
import { Shelf } from '../classes/shelf';

interface ShelfPositionToShelf {
  shelfPosition:ShelfPosition,
  shelf:Shelf | null
}

interface Result {
  device:Device,
  shelfPositions:ShelfPositionToShelf[]
}

@Injectable({
  providedIn: 'root',
})
export class DeviceService {

  constructor(private httpClient:HttpClient) {}

  private currentDevice:Result|null = null;

  private baseURL = "http://localhost:8080"
  
  getAllDevices():Observable<Result[]> {
    return this.httpClient.get<Result[]>(`${this.baseURL}/device/search`)
  }

  createDevice(device: Device):Observable<Result[]> {
    return this.httpClient.post<Result[]>(`${this.baseURL}/device/create`, device)
  }

  getCurrentDevice():Result|null {
    return this.currentDevice;
  }

  setCurrentDevice(device:Result|null):void {
    this.currentDevice = device;
  }
}
