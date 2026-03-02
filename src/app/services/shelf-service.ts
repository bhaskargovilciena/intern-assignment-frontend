import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shelf } from '../classes/shelf';
import { Observable } from 'rxjs';
import { ShelfPosition } from '../classes/shelf-position';

@Injectable({
  providedIn: 'root',
})
export class ShelfService {
  constructor(private httpClient:HttpClient) {}
  baseURL:string = "http://localhost:8080"

  currentShelfPosition:ShelfPosition|null = null

  getCurrentShelfPosition():ShelfPosition|null {
    return this.currentShelfPosition
  }

  setCurrentShelfPosition(shelfPosition:ShelfPosition):void {
    this.currentShelfPosition = shelfPosition;
  }

  createShelf(shelf:Shelf):Observable<Shelf>|null {
    if(this.currentShelfPosition == null) return null
    return this.httpClient.post<Shelf>(`${this.baseURL}/shelf/create?shelfPositionId=${this.currentShelfPosition.id}`, shelf)
  }

  deleteShelf(shelf:Shelf):Observable<boolean>|null {
    if(this.currentShelfPosition == null) return null
    return this.httpClient.delete<boolean>(`${this.baseURL}/shelf/delete?shelfId=${shelf.id}`)
    console.log("shelf with id: " + shelf.id + " deleted")
  }
}
