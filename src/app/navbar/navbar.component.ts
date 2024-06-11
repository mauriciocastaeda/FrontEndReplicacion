import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { EventService } from '../event.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  searchQuery: string = ''; 
  searchResults: any[] = [];

  //constructor(private eventService: EventService) {}

 // onSearch(): void {
   // if (this.searchQuery) {
     // this.eventService.searchEvents(this.searchQuery).subscribe(
      //  (data: any) => {
        //  this.searchResults = data.results; // Ajusta según la estructura de la respuesta de tu API
          //console.log(this.searchResults);
        //},
        //(error: any) => {
          //console.error('Error fetching search results', error);
        //}
      //);
    //}
  //}
}
