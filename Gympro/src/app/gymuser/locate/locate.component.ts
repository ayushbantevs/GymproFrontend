import { Component, OnInit, ViewChild } from "@angular/core";
import { MapMarker, GoogleMap, MapInfoWindow } from '@angular/google-maps';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: "app-locate",
  templateUrl: "./locate.component.html",
  styleUrls: ["./locate.component.scss"]
})

export class LocateComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;

  zoom = 12;
  center: google.maps.LatLngLiteral;
  get: google.maps.Point;
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom: 50,
    minZoom: 5,
  };
  markers = [];
  infoContent = '';


  constructor(
    private route: Router,
    private dialog: MatDialog
    ) {}
  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        // lat: position.coords.latitude,
        // lng: position.coords.longitude,
        lat: 18.573655,
        lng: 73.766645,
        // 18.575486,73.763963,m
      };
      // this.get ={
      //   x: 18.573655,
      //   y: 73.766645,
      //   equals: ()

      // };
    });
  }
  zoomIn() {
    if (this.zoom < this.options.maxZoom) { this.zoom++; }
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) { this.zoom--; }
  }

  click(event: google.maps.MouseEvent) {
    console.log(event);
  }

  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()));
  }

  addMarker() {
    this.markers.push({
      position: {
        // lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        // lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
        lat : this.center.lat,
        lng : this.center.lng,
      },
      label: {
        color: 'red',
        // text: 'Marker label ' + (this.markers.length + 1),
         text: 'Marker label ' + (this.markers),
      },
      // title: 'Marker title ' + (this.markers.length + 1),
      // info: 'Marker info ' + (this.markers.length + 1),
      title: 'Marker title ' + (this.markers),
      info: 'Marker info ' + (this.markers),
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    });
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    this.info.open(marker);
  }
}
