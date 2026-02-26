import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../classes/device';
import { ShelfPosition } from '../classes/shelf-position';

interface Result {
  device:Device,
  shelfPositions:ShelfPosition[]
}

@Injectable({
  providedIn: 'root',
})
export class DeviceService {

  constructor(private httpClient:HttpClient) {}

  private baseURL = "http://localhost:8080"
  
  getAllDevices():Observable<Result[]> {
    return this.httpClient.get<Result[]>(`${this.baseURL}/device/search`)
  }
}
