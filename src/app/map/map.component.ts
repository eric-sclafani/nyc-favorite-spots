import { Component, OnInit } from '@angular/core';

import { locations } from '../models/location';
import * as L from 'leaflet';

@Component({
    selector: 'app-map',
    standalone: true,
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    private map: L.Map
    private markers: L.Marker<number>[] = [];

    constructor() { }

    ngOnInit() {
        this.initMarkers();
        this.initMap();
        this.centerMap();
    }

    private initMarkers():void {
        for (let loc of locations) {
            this.markers.push(L.marker([loc.lat, loc.long]))
        }
    }

    private initMap():void {
        const baseMapURl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        this.map = L.map(
            'map',
            { 
                layers: this.markers,
                minZoom:15
            }
        );
        L.tileLayer(baseMapURl).addTo(this.map);
    }


    private centerMap():void {

        // Create a LatLngBounds object to encompass all the marker locations
        const bounds = L.latLngBounds(
            this.markers.map(
                marker => marker.getLatLng()
            )
        );

        this.map.fitBounds(bounds);
    }
}