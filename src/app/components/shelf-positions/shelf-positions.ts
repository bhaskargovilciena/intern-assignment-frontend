import { Component, Input } from '@angular/core';
import { ShelfPosition } from '../../classes/shelf-position';
import { Shelf } from '../../classes/shelf';

interface ShelfPositionToShelf {
  shelfPosition:ShelfPosition,
  shelf:Shelf | null
}

@Component({
  selector: 'app-shelf-positions',
  imports: [],
  templateUrl: './shelf-positions.html',
  styleUrl: './shelf-positions.css',
})
export class ShelfPositions {
  @Input() shelfPositionToShelf:ShelfPositionToShelf[] = []
}
