import { Component, EventEmitter, Output  } from '@angular/core'; 
import { NgTemplateOutlet } from '@angular/common';
import { Location, locations } from '../models/location';

@Component({
  selector: 'app-location-list',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.scss'
})
export class LocationListComponent {

    public locations = locations;
    public selectedLoc:Location;

    @Output() locationEmitter: EventEmitter<Location> = new EventEmitter();

    public emitLocation(loc:Location){
        this.locationEmitter.emit(loc)
    }

}
