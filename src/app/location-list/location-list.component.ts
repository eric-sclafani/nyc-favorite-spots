import { Component } from '@angular/core'; 
import { NgTemplateOutlet } from '@angular/common';
import { locations } from '../models/location';

@Component({
  selector: 'app-location-list',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.scss'
})
export class LocationListComponent {

    public locations = locations;
}
