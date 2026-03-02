import { Component } from '@angular/core';
import { Shelf } from '../../classes/shelf';
import { ShelfService } from '../../services/shelf-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DeviceService } from '../../services/device-service';

@Component({
  selector: 'app-update-shelf',
  imports: [FormsModule],
  templateUrl: './update-shelf.html',
  styleUrl: './update-shelf.css',
})
export class UpdateShelf {
  shelf:Shelf|null = new Shelf();

  constructor(private shelfService:ShelfService, private router:Router, private deviceSerice:DeviceService) {
    this.shelf = shelfService.getCurrentShelf()
  }

  async onSubmit() {
    if(this.shelf == null) return
    this.shelfService.updateShelf(this.shelf)?.subscribe((data) => console.log(data), error => console.error(error)
    )
    await new Promise(resolve => setTimeout(resolve, 2000))
    this.router.navigate(['/'])
  }
}
