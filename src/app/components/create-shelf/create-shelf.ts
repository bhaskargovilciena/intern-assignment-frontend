import { Component } from '@angular/core';
import { ShelfService } from '../../services/shelf-service';
import { ShelfPosition } from '../../classes/shelf-position';
import { Shelf } from '../../classes/shelf';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-shelf',
  imports: [FormsModule],
  templateUrl: './create-shelf.html',
  styleUrl: './create-shelf.css',
})
export class CreateShelf {
  shelfPosition:ShelfPosition|null = null;

  constructor(private shelfService:ShelfService, private router:Router){
    this.shelfPosition = shelfService.getCurrentShelfPosition()
  }

  shelf:Shelf = new Shelf()

  onSubmit():void|null {
    this.shelfService.createShelf(this.shelf)?.subscribe(data => {
      this.shelf = data
      console.log("shelf with id: " + this.shelf.id + " created")
      this.returnToHomePage()
    })
  }

  returnToHomePage() {
    this.router.navigate(['/'])
  }
}
