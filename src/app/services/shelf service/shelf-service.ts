import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shelf } from '../../classes/shelf/shelf';
import { Observable, share } from 'rxjs';
import { ShelfPosition } from '../../classes/shelf position/shelf-position';

@Injectable({
  providedIn: 'root',
})
export class ShelfService {
  constructor(private httpClient:HttpClient) {}
  baseURL:string = "http://localhost:8080"

  currentShelfPosition:ShelfPosition|null = null
  currentShelf:Shelf|null = null

  getCurrentShelfPosition():ShelfPosition|null {
    return this.currentShelfPosition
  }

  setCurrentShelfPosition(shelfPosition:ShelfPosition):void {
    this.currentShelfPosition = shelfPosition;
  }

  getCurrentShelf() {
    return this.currentShelf
  }

  setCurrentShelf(shelf:Shelf|null) {
    this.currentShelf = shelf
  }

  createShelf(shelf:Shelf):Observable<Shelf>|null {
    if(this.currentShelfPosition == null) return null
    return this.httpClient.post<Shelf>(`${this.baseURL}/shelf/create?shelfPositionId=${this.currentShelfPosition.id}`, shelf)
  }

  deleteShelf(shelf:Shelf):Observable<boolean>|null {
    if(this.currentShelfPosition == null) return null
    console.log("shelf with id: " + shelf.id + " deleted")
    return this.httpClient.delete<boolean>(`${this.baseURL}/shelf/delete?shelfId=${shelf.id}`)
  }

  deleteShelfPosition(shelfPosition:ShelfPosition):Observable<boolean> {
    console.log("shelf position with ID: " + shelfPosition.id + " deleted")
    return this.httpClient.delete<boolean>(`${this.baseURL}/shelf-position/delete?id=${shelfPosition.id}`)
  }

  updateShelf(shelf:Shelf):Observable<Shelf>|null {
    console.log("shelf with ID: " + shelf?.id + " updated")
    if(shelf == null) return null
    return this.httpClient.put<Shelf>(`${this.baseURL}/shelf/update?shelfId=${shelf.id}&name=${shelf.name}&partNumber=${shelf.partNumber}`,"")
  }
}
