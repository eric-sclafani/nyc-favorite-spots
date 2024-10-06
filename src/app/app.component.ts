import { Component } from '@angular/core';
import { MapComponent } from './map/map.component';
import { LocationListComponent } from './location-list/location-list.component';
import { Location } from './models/location';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        MapComponent,
        LocationListComponent
        ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

    public title = 'NYC Favorite Spots';
    public selectedLocation: Location;

    

}
