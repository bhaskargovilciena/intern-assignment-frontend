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

  currentShelfPosition:ShelfPosition = new ShelfPosition()

  getCurrentShelfPosition():ShelfPosition {
    return this.currentShelfPosition
  }

  setCurrentShelfPosition(shelfPosition:ShelfPosition):void {
    this.currentShelfPosition = shelfPosition;
  }

  createShelf(shelf:Shelf):Observable<Shelf> {
    return this.httpClient.post<Shelf>(`${this.baseURL}/shelf/create?shelfPositionId=${this.currentShelfPosition.id}`, shelf)
  }

  deleteShelf(shelf:Shelf) {
    this.httpClient.delete(`${this.baseURL}/shelf/delete?shelfId=${shelf.id}`)
    console.log("shelf with id: " + shelf.id + " deleted")
  }
}
