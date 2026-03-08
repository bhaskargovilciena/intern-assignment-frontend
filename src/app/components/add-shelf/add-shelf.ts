import { Component, signal, WritableSignal } from '@angular/core';
import { ShelfService } from '../../services/shelf service/shelf-service';
import { Shelf } from '../../classes/shelf/shelf';
import { ShelfPosition } from '../../classes/shelf position/shelf-position';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-shelf',
  imports: [],
  templateUrl: './add-shelf.html',
  styleUrl: './add-shelf.css',
})
export class AddShelf {
  shelfPosition:ShelfPosition|null = null
  shelves:WritableSignal<Shelf[]> = signal([])

  constructor(private shelfService:ShelfService, private router:Router) {
    this.shelfPosition = shelfService.getCurrentShelfPosition()
  }

  ngOnInit() {
    this.shelfService.getAvailableShelfPositions().subscribe({
      next: (data) => {
        console.log(data)
        this.shelves.set(data);
      },
      error: msg => console.error(msg)
    })
  }

  async addShelf(shelf:Shelf) {
    if(this.shelfPosition == null) return
    this.shelfService.linkShelfWithShelfPosition(this.shelfPosition.id, shelf.id)?.subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (data) => {
        console.error(data)
      }
    });
    await new Promise(resolve => setTimeout(resolve, 1000))
    this.router.navigate(['/'])
  }
}
