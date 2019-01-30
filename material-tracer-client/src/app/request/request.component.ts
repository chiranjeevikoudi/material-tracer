import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from '../client.service';

declare var $;

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  isHistory = false;
  userType;
  requestsData;
  isNewRequest = false;
  isBOMView = false;
  isGraphMapView = false;
  isRequestDetail = false;
  isError = false;
  errorMessage;

  constructor(private router: Router, private clientService: ClientService) {
  }

  ngOnInit() {
    this.checkPathAndSetElement();
    this.userType = localStorage.getItem('userType');
    this.initNewRequestListener();
  }

  checkPathAndSetElement(): void {
    // console.log('url', this.router.url);
    switch (this.router.url) {
      case '/manufacturer/request/history' :
        this.showHistory();
        break;
      case '/manufacturer/request/new' :
        this.showNewRequest();
        break;
      case '/manufacturer/request/bom' :
        this.showBOMView();
        break;
      case '/supplier/request/history' :
        this.showHistory();
        break;
      case '/supplier/request/bom' :
        this.showBOMView();
        break;
      case '/supplier/request/graphmap' :
        this.showGraphMapView();
        break;
      default:
        this.clientService.redirectToPageNotFound();
    }
    // if (this.router.url === '/history') {
    //   this.showHistory();
    // } else if (this.router.url === '/register') {
    //   this.displayRegisterForm();
    // }

  }

  showHistory(): void {
    this.isHistory = false;
    this.isNewRequest = false;
    this.isBOMView = false;
    this.isGraphMapView = false;
    this.isRequestDetail = false;
    this.isError = false;
    this.userType = localStorage.getItem('userType');
    this.clientService.getRequests().subscribe(requests => {
      if (requests && requests.length !== 0) {
        this.isHistory = true;
        this.requestsData = requests;
        // console.log(requests);
      } else {
        this.showError('No Requests found');
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

  showNewRequest(): void {
    this.isHistory = false;
    this.isNewRequest = true;
    this.isBOMView = false;
    this.isRequestDetail = false;
    this.isError = false;
    this.isGraphMapView = false;
  }

  redirectToRequestDetailsPage(requestId): void {
    this.clientService.redirectToUrl('/' + this.userType + '/request/' + requestId);
  }

  redirectToRequestBOMDetailsPage(requestId): void {
    this.clientService.redirectToUrl('/' + this.userType + '/request/bom/' + requestId);
  }
  redirectToRequestGraphMapPage(requestId): void {
    this.clientService.redirectToUrl('/' + this.userType + '/request/graphmap/' + requestId);
  }

  redirectToRequestBOMSubmitPage(requestId): void {
    this.clientService.redirectToUrl('/' + this.userType + '/request/bom/submit/' + requestId);
  }

  showBOMView(): void {
    this.isHistory = false;
    this.isNewRequest = false;
    this.isBOMView = false;
    this.isRequestDetail = false;
    this.isError = false;
    this.isGraphMapView = false;
    this.userType = localStorage.getItem('userType');
    this.clientService.getRequests().subscribe(requests => {
      if (requests && requests.length !== 0) {
        this.requestsData = [];
        for (let index = 0; index < requests.length; index++) {
          if ((requests[index].status !== 0 && requests[index].status !== -1 && requests[index].status !== 1)) {
            this.requestsData.push(requests[index]);
          }
        }
        if (this.requestsData.length !== 0) {
          this.isBOMView = true;
        } else {
          this.showError('No Data found');
        }
      } else {
        this.showError('No Requests found');
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

  showGraphMapView(): void {
    this.isHistory = false;
    this.isNewRequest = false;
    this.isBOMView = false;
    this.isRequestDetail = false;
    this.isError = false;
    this.isGraphMapView = false;
    this.userType = localStorage.getItem('userType');
    this.clientService.getRequests().subscribe(requests => {
      // console.log('requests in map', requests);
      if (requests && requests.length !== 0) {
        this.requestsData = [];
        for (let index = 0; index < requests.length; index++) {
          if ((requests[index].status === 'BOM submitted  by supplier' || requests[index].status === 'Quote rejected  by manufacturer' || requests[index].status === 'Quote approved  by manufacturer')) {
            this.requestsData.push(requests[index]);
          }
        }
        if (this.requestsData.length !== 0) {
          this.isGraphMapView = true;
        } else {
          this.showError('No Data found');
        }
      } else {
        this.showError('No Requests found');
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

  showError(error): void {
    this.isHistory = false;
    this.isNewRequest = false;
    this.isBOMView = false;
    this.isRequestDetail = false;
    this.isError = true;
    this.errorMessage = error;
  }

  requestAccepted(requestId): void {
    this.clientService.updateRequestStatus(requestId, 1).subscribe(updateResult => {
      if (updateResult && updateResult.statusCode === 200) {
        alert('request accepted');
        this.clientService.redirectToHome();
      } else {
        this.showError('No Requests found');
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

  requestRejected(requestId): void {
    this.clientService.updateRequestStatus(requestId, -1).subscribe(updateResult => {
      if (updateResult && updateResult.statusCode === 200) {
        alert('request rejected');
        this.clientService.redirectToHome();
      } else {
        this.showError('No Requests found');
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

  initNewRequestListener(): void {
    let $material_name, $material_type, $manufacturer_email, $supplier_email, $supplier_contact, $supplier_name,
      $attachment;
    let apiUrl = 'http://localhost:3000/api/';

    $(document).ready(() => {
      $material_name = $('#request_material_name');
      $material_type = $('#request_material_type');
      $manufacturer_email = $('#request_manfacturer_email');
      $supplier_email = $('#request_supplier_email');
      $supplier_name = $('#request_supplier_name');
      $supplier_contact = $('#request_supplier_contact');
      $attachment = $('#request_attachment');
      $('#requestForm').on('submit', (e) => {
        e.preventDefault();
        let requestData = {
          'material_name': $material_name.val(),
          'material_type': $material_type.val(),
          'manufacturer_email': $manufacturer_email.val(),
          'supplier_email': $supplier_email.val(),
          'supplier_contact': $supplier_contact.val(),
          'supplier_name': $supplier_name.val(),
        };
        // console.log(requestData);
        this.clientService.postRequest(requestData).subscribe(response => {
          if (response ) {
            // console.log(response.data.request_id);
            let promises = [];
            if ($attachment.val() !== '') {
              // console.log('attachment available');
              promises.push(sendFile($attachment.get(0).files[0], response.data.request_id, apiUrl + 'attachments/requests_docs/upload?access_token=' + this.clientService.getUserToken()));
              Promise.all(promises).then((results) => {
                // console.log('back from all promises', results);
                if (promises.length >= 1) {
                  // console.log('uploaded success');
                  results.forEach(function (resultOb) {
                    if (resultOb.result.files && resultOb.result.files.file[0].container) {
                      requestData['attachmentName'] = resultOb.result.files.file[0].container + '/' + resultOb.result.files.file[0].name;
                    }
                  });
                  // console.log(requestData);
                  this.clientService.updateRequestAttachment(response.data.request_id, requestData['attachmentName']).subscribe(res => {
                    alert('request successfully submitted');
                    this.clientService.redirectToHome();
                  }, err => {
                    if ( err && err.error && err.error.error && (err.error.error.statusCode === 422 || err.error.error.statusCode === 400)) {
                      this.isError = true;
                      this.errorMessage = err.error.error.message;
                    } else {
                      alert('Some internal error occurred');
                      this.clientService.redirectToHome();
                    }
                  });
                } else {
                  // console.log('not uploaded');
                  this.clientService.redirectToHome();
                }
              });

            } else {
              this.clientService.redirectToHome();
            }
          } else {
            this.showError('Some Internal error occurred');
          }
        }, err => {
          if (err && err.error && err.error.error && (err.error.error.statusCode === 422 || err.error.error.statusCode === 400)) {
            this.isError = true;
            this.errorMessage = err.error.error.message;
          } else {
            alert('Some internal error occurred');
          }
        });
      });
    });
    function sendFile(file, requestId, url) {
      return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        let fd = new FormData();
        xhr.open("POST", url, true);
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          }
        };
        let fileExtension = file.name.substr(file.name.lastIndexOf('.'));
        if (fileExtension !== '') {
          fd.append('file', file, requestId + fileExtension);
        } else {
          fd.append('file', file, requestId);
        }
        xhr.send(fd);
      });
    }
  }
}
