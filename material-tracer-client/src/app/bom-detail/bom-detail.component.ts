import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../client.service";

@Component({
  selector: 'app-bom-detail',
  templateUrl: './bom-detail.component.html',
  styleUrls: ['./bom-detail.component.css']
})
export class BomDetailComponent implements OnInit {
  requestStatus = {
    '0': 'Intiated',
    '1': 'Request accepted by supplier',
    '2': 'BOM submitted  by supplier',
    '3': 'Quote approved  by manufacturer',
    '-1': 'Request rejected  by supplier',
    '-2': 'Quote rejected  by manufacturer'
  };
  userType;
  requestBOMDetails;
  isBOMDetail = false;
  isError = false;
  errorMessage;
  constructor(private route: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit() {
    this.showRequestDetails();
  }

  showRequestDetails(): void {
    const requestId = +this.route.snapshot.paramMap.get('id');
    if (isNaN(requestId)) {
      this.showError('No Data found');
    } else {
      // console.log('request details', requestId);
      this.isBOMDetail = false;
      this.isError = false;
      this.userType = localStorage.getItem('userType');
      this.clientService.getRequestBOMDetails(requestId).subscribe(requestBOMData => {
        if (requestBOMData && Object.keys(requestBOMData).length !== 0) {
          this.isBOMDetail = true;
          this.requestBOMDetails = requestBOMData;
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
    this.isBOMDetail = false;
    this.isError = true;
    this.errorMessage = error;
  }

  requestBOMAccepted(requestId): void {
    this.clientService.updateRequestStatus(requestId, 3).subscribe(updateResult => {
      if (updateResult && updateResult.statusCode === 200) {
        alert('request BOM accepted');
        this.clientService.redirectToHome();
      } else {
        this.showError('some internal error occurred');
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
    // console.log('BOM accepted', requestId);
  }

  requestBOMRejected(requestId): void {
    this.clientService.updateRequestStatus(requestId, -2).subscribe(updateResult => {
      if (updateResult && updateResult.statusCode === 200) {
        alert('request BOM rejected');
        this.clientService.redirectToHome();
      } else {
        this.showError('some internal error occurred');
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
    // console.log('BOM rejected', requestId);
  }
}
