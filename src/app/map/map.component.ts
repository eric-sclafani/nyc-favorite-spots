import { Component, OnInit, Input, OnChanges} from '@angular/core';

import { locations, Location } from '../models/location';
import * as L from 'leaflet';

@Component({
    selector: 'app-map',
    standalone: true,
    template: '<div id="map"></div>',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {

    private map: L.Map
    private markers: L.Marker<number>[] = [];
    private initialLatLng: L.LatLng;
    private intialZoom: number;

    @Input() selectedLocation: Location | null;
    @Input() resetMapView: boolean;
    
    
    constructor() { }

    ngOnInit() {
        this.initMarkers();
        this.initMap();
        this.centerMap();

        this.initialLatLng = this.map.getCenter();
        this.intialZoom = this.map.getZoom();
        
    }

    ngOnChanges(){  
        if (this.selectedLocation){
            const loc = this.selectedLocation;
            const marker = L.marker([loc.lat + .00013, loc.long]);
            const popup = this.createPopup(marker, loc);
            popup.openOn(this.map);

            this.map.setView([this.selectedLocation.lat, this.selectedLocation.long], 50);
        }

        if (this.resetMapView){
            this.map.closePopup();
            this.map.setView(this.initialLatLng, this.intialZoom);

        }
        
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

    private popupContent(loc:Location):string{
        return `
        <div class="card-wrapper">
            <div class="card-title">
                ${loc.name}
            </div>
        </div>
        `
    }

    private createPopup(marker:L.Marker, loc:Location):L.Popup{

        const contentString = this.popupContent(loc);
        const popup = L.popup({className:'popup'})
            .setLatLng(marker.getLatLng())
            .setContent(contentString)
        return popup;
    }

  
    

}