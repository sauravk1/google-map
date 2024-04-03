import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-polygon',
  templateUrl: './map-polygon.component.html',
  styleUrls: ['./map-polygon.component.css']
})
export class MapPolygonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  center: google.maps.LatLngLiteral = {lat: 18, lng: 73}; // 18 73
  zoom = 4;

  vertices: google.maps.LatLngLiteral[] = [
    {lat: 10, lng: 74},
    {lat: -10, lng: 61},
    {lat: 10, lng: 50},
  ];
}
