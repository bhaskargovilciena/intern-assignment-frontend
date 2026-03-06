import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../../classes/device/device';
import { ShelfPosition } from '../../classes/shelf position/shelf-position';
import { Shelf } from '../../classes/shelf/shelf';

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

  private allDevices:Result[]|null = null

  private baseURL = "http://localhost:8080"
  
  getAllDevices():Observable<Result[]> {
    return this.httpClient.get<Result[]>(`${this.baseURL}/device/search`)
  }

  getAllDevicesStatic():Result[]|null {
    return this.allDevices;
  }

  setAllDevices(allDevices:Result[]|null) {
    this.allDevices = allDevices;
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

  deleteDevice(deviceId:string):Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.baseURL}/device/delete?id=${deviceId}`)
  }

  updateDevice(device:Result|null):Observable<Device>|null {
    if(device == null) return null
    return this.httpClient.put<Device>(`${this.baseURL}/device/update?id=${device.device.id}&deviceName=${device.device.deviceName}&buildingName=${device.device.buildingName}&deviceType=${device.device.deviceType}&partNumber=${device.device.partNumber}`,"")
  }

  addShelfPositions(device:Result|null, numberOfPositions:number|null):Observable<ShelfPositionToShelf[]>|null {
    return this.httpClient.post<ShelfPositionToShelf[]>(`${this.baseURL}/shelf-position/create?deviceId=${device?.device.id}&numberOfShelfPositions=${numberOfPositions}`,"")
  }
}
