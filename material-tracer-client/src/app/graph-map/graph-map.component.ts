import {Component, OnInit} from '@angular/core';
import {ClientService} from '../client.service';
import {ActivatedRoute} from '@angular/router';

declare let google: any;
declare let $;

@Component({
  selector: 'app-graph-map',
  templateUrl: './graph-map.component.html',
  styleUrls: ['./graph-map.component.css']
})
export class GraphMapComponent implements OnInit {
  requestStatus = {
    '0': 'Intiated',
    '1': 'Request accepted by supplier',
    '2': 'BOM submitted  by supplier',
    '3': 'Quote approved  by manufacturer',
    '-1': 'Request rejected  by supplier',
    '-2': 'Quote rejected  by manufacturer'
  };
  userType;
  requestGraphMapDetails;
  isGraphMapDetail = false;
  isError = false;
  errorMessage;

  constructor(private route: ActivatedRoute, private clientService: ClientService) {
  }

  ngOnInit() {
    this.showGraphMapDetails();
  }

  showGraphMapDetails(): void {
    const requestId = +this.route.snapshot.paramMap.get('id');
    if (isNaN(requestId)) {
      this.showError('No Data found');
    } else {
      // console.log('request details', requestId);
      this.isGraphMapDetail = false;
      this.isError = false;
      this.userType = localStorage.getItem('userType');
      this.clientService.getRequestGraphMapGeoPoints(requestId).subscribe(response => {
        if (response && response.length !== 0) {
          this.isGraphMapDetail = true;
          this.requestGraphMapDetails = response;
          this.initMap();
        } else {
          this.showError('No Data found');
        }
      }, err => {
        if (err && err.error && err.error.error && (err.error.error.statusCode === 422 || err.error.error.statusCode === 400)) {
          this.isError = true;
          this.errorMessage = err.error.error.message;
        } else {
          alert('Some internal error occurred');
          // this.clientService.redirectToHome();
        }
      });
    }
  }

  showError(error): void {
    this.isGraphMapDetail = false;
    this.isError = true;
    this.errorMessage = error;
  }

  initMap(): void {
    // console.log("initmap called");
    let mapElement = document.getElementById('map');
    if (mapElement) {


      $(window).resize(() => {
        var h = $(window).height(),
          offsetTop = 60; // Calculate the top offset
        $('#map').css('height', (h - offsetTop));

        let flightPlanCoordinates = [];
        for (let geoPointIndex = 0; geoPointIndex < this.requestGraphMapDetails.length; geoPointIndex++) {
          flightPlanCoordinates.push({
            lat: this.requestGraphMapDetails[geoPointIndex][0],
            lng: this.requestGraphMapDetails[geoPointIndex][1],
          });
        }
        let map = new google.maps.Map(mapElement, {
          zoom: 3,
          center: flightPlanCoordinates[1],
          mapTypeId: 'terrain'
        });
        let marker = new google.maps.Marker({
          position: flightPlanCoordinates[0],
          label: "M",
          map: map
        });
        for(let geoPointIndex=1;geoPointIndex<flightPlanCoordinates.length;geoPointIndex++){
          let marker = new google.maps.Marker({
            position: flightPlanCoordinates[geoPointIndex],
            label: "S",
            map: map
          });
        }
        let flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#0000BB',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        flightPath.setMap(map);
      }).resize();
    } else {
      setTimeout(() => {
        this.initMap();
      }, 1000);
    }
  }
}
