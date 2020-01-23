import { Component, OnInit, ViewChild } from '@angular/core';
import { Edit_profileComponent } from './edit_profile/edit_profile.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'
import { editUserModel } from './edit_profile/edituserModel';
import { FormBuilder } from '@angular/forms';
import { NavigationService } from './navigation.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;
  @ViewChild('sidenav', { static: false }) sidenav: any;
  opened: any = false;
  zoom = 12;
  center: google.maps.LatLngLiteral;
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
    private dialog: MatDialog,
    private navservice: NavigationService
  ) { }
  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }


  openDialog() {
    const dialogRef = this.dialog.open(Edit_profileComponent, {
      height: '600px',
      width: '1000px',
      panelClass: 'custom-dialog-container',
      data: {
        userId: 'U5'
      }
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
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    });
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    this.info.open(marker);
  }
  toggle_sidenav(sidenav: any) {
    console.log(sidenav);
    sidenav.close();
  }
}
  // Editprofile():void{
  //   this.route.navigate(['/edituserprofile']);
    // const dialogRef = this.dialog.open(Edit_profileComponent, {
    // height:'auto',
    // width: 'auto',
    // data: {name: '', animal: ''}
    // });
   // }


