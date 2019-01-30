import {Component, OnInit} from '@angular/core';
import {ClientService} from '../client.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  requestStatus = {
    '0': 'Intiated',
    '1': 'Request accepted by supplier',
    '2': 'BOM submitted  by supplier',
    '3': 'Quote approved  by manufacturer',
    '-1': 'Request rejected  by supplier',
    '-2': 'Quote rejected  by manufacturer'
  };
  userType;
  requestsDetails;
  isRequestDetail = false;
  isError = false;
  errorMessage;

  constructor(private route: ActivatedRoute, private clientService: ClientService) {
  }

  ngOnInit() {
    this.showRequestBOMDetails();
  }

  showRequestBOMDetails(): void {
    const requestId = +this.route.snapshot.paramMap.get('id');
    if (isNaN(requestId)) {
      this.showError('No Data found');
    } else {
      // console.log('request details', requestId);
      this.isRequestDetail = false;
      this.isError = false;
      this.userType = localStorage.getItem('userType');
      this.clientService.getRequestDetails(requestId).subscribe(requestData => {
        if (requestData && Object.keys(requestData).length !== 0) {
          this.isRequestDetail = true;
          for (let trailIndex = 0; trailIndex < requestData.trail.length; trailIndex++) {
            requestData['trail'][trailIndex][0] = this.requestStatus[requestData['trail'][trailIndex][0]];
          }
          this.requestsDetails = requestData;
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
    this.isRequestDetail = false;
    this.isError = true;
    this.errorMessage = error;
  }
}
