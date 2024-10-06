import { Component, OnInit, Input} from '@angular/core';

import { locations, Location } from '../models/location';
import * as L from 'leaflet';

@Component({
    selector: 'app-map',
    standalone: true,
    template: '<div id="map"></div>',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    private map: L.Map
    private markers: L.Marker<number>[] = [];

    @Input() selectedLocation: Location;
    
    
    constructor() { }

    ngOnInit() {
        this.initMarkers();
        this.initMap();
        this.centerMap();
        
    }

    private initMarkers():void {
        for (let loc of locations) {

            const marker = L.marker([loc.lat, loc.long]);
            const popup = this.createPopup(marker, loc);
            marker.bindPopup(popup).openPopup();

            this.markers.push(marker);
        }
    }

    private initMap():void {
        const baseMapURl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        this.map = L.map(
            'map',
            { 
                layers: this.markers,
            }
        );
        L.tileLayer(baseMapURl).addTo(this.map);

    }


    private centerMap():void {

        const bounds = L.latLngBounds(
            this.markers.map(
                marker => marker.getLatLng()
            )
        );

        this.map.fitBounds(bounds);
    }

    private createPopup(marker:L.Marker, loc:Location):L.Popup{

        const contentString = `
        <div class="card-wrapper">
            <div class="card-title">
                ${loc.name}
            </div>
        </div>
        `


        const popup = L.popup({className:'popup'})
            .setLatLng(marker.getLatLng())
            .setContent(contentString)
            
        
        return popup;
    }

  


}