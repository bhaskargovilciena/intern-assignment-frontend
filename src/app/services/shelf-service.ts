import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shelf } from '../classes/shelf';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShelfService {
  constructor(private httpClient:HttpClient) {}
  baseURL:string = "http://localhost:8080"

  createShelf(shelfPositionId:string, shelf:Shelf):Observable<Shelf> {
    return this.httpClient.post<Shelf>(`${this.baseURL}/shelf/create?shelfPositionId=${shelfPositionId}`, shelf)
  }
}
