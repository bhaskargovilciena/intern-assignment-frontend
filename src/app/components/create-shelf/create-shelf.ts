import { Component } from '@angular/core';
import { ShelfService } from '../../services//shelf service/shelf-service';
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

  errorMessage:string|null = null

  showErrorMessage(message:string) {
    return "Please enter " + message
  }

  onSubmit():void|null {
    if(this.shelf.name.trim() == "") {
      this.errorMessage = this.showErrorMessage("shelf name")
      return
    }
    if(this.shelf.partNumber.trim() == "") {
      this.errorMessage = this.showErrorMessage("shelf part number")
      return
    }
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
