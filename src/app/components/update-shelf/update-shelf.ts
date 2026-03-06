import { Component } from '@angular/core';
import { Shelf } from '../../classes/shelf/shelf';
import { ShelfService } from '../../services/shelf service/shelf-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DeviceService } from '../../services/device service/device-service';

@Component({
  selector: 'app-update-shelf',
  imports: [FormsModule],
  templateUrl: './update-shelf.html',
  styleUrl: './update-shelf.css',
})
export class UpdateShelf {
  shelf:Shelf|null = new Shelf();

  errorMessage:string|null = null

  showErrorMessage(message:string) {
    return "Please enter " + message
  }

  constructor(private shelfService:ShelfService, private router:Router, private deviceSerice:DeviceService) {
    this.shelf = shelfService.getCurrentShelf()
  }

  async onSubmit() {
    if(this.shelf?.name.trim() == "") {
      this.errorMessage = this.showErrorMessage("shelf name")
      return
    }
    if(this.shelf?.partNumber.trim() == "") {
      this.errorMessage = this.showErrorMessage("shelf part number")
      return
    }
    if(this.shelf == null) return
    this.shelfService.updateShelf(this.shelf)?.subscribe((data) => console.log(data), error => console.error(error)
    )
    await new Promise(resolve => setTimeout(resolve, 2000))
    this.router.navigate(['/'])
  }
}
