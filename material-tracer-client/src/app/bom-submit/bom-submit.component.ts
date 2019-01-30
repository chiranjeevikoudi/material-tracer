import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientService} from '../client.service';
import index from "@angular/cli/lib/cli";

declare let google: any;
declare let $;

@Component({
  selector: 'app-bom-submit',
  templateUrl: './bom-submit.component.html',
  styleUrls: ['./bom-submit.component.css']
})
export class BomSubmitComponent implements OnInit {
  userType;
  isRequestBOMSubmit = false;
  isError = false;
  errorMessage;
  rowsNumber = 0;
  rows = [{
    part_name: '',
    supplier_name: '',
    supplier_address: '',
    supplier_geopoint: [],
    dependant_supplier_name: '',
    dependant_supplier_address: '',
    dependant_supplier_geopoint: [],
  }];
  requestId;
  amount = 0;

  constructor(private route: ActivatedRoute, private clientService: ClientService) {
  }

  ngOnInit() {
    this.showRequestBOMSubmit();
  }

  showRequestBOMSubmit(): void {
    const requestId = +this.route.snapshot.paramMap.get('id');
    if (isNaN(requestId)) {
      this.showError('No Data found');
    } else {
      this.requestId = requestId;
      // console.log('request details', requestId);
      this.isRequestBOMSubmit = true;
      this.isError = false;
      this.userType = localStorage.getItem('userType');
      this.initTableRowSupplierAddress(0);
      this.initTableRowDependantSupplierAddress(0);
    }
  }

  showError(error): void {
    this.isRequestBOMSubmit = false;
    this.isError = true;
    this.errorMessage = error;
  }

  addRowToTable(): void {
    this.rows.push({
      part_name: '',
      supplier_name: '',
      supplier_address: '',
      supplier_geopoint: [],
      dependant_supplier_name: '',
      dependant_supplier_address: '',
      dependant_supplier_geopoint: [],
    });
    this.rowsNumber = this.rowsNumber + 1;
    this.initTableRowSupplierAddress(this.rowsNumber);
    this.initTableRowDependantSupplierAddress(this.rowsNumber);
  }

  deleteRowFromTable(): void {
    if (this.rowsNumber >= 0) {
      this.rows.pop();
      this.rowsNumber = this.rowsNumber - 1;
    }
  }

  initTableRowSupplierAddress(index): void {
    const supplier_address_input = document.getElementById('request_supplier_address_' + index);
    if (supplier_address_input) {
      const searchBox = new google.maps.places.SearchBox(supplier_address_input);
      searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();
        if (places.length === 0) {
          return;
        }
        places.forEach((place) => {
          if (!place.geometry) {
            return;
          } else {
            const user_geopoint = $('#request_supplier_geopoint_' + index);
            user_geopoint.val([place.geometry.location.lat(), place.geometry.location.lng()]);
            this.rows[index].supplier_geopoint = [place.geometry.location.lat(), place.geometry.location.lng()];
            this.rows[index].supplier_address = place.formatted_address;
          }
        });
      });
    } else {
      setTimeout(() => {
        this.initTableRowSupplierAddress(index);
      }, 1000);
    }
  }

  initTableRowDependantSupplierAddress(index): void {
    const dependant_supplier_address_input = document.getElementById('request_dependant_supplier_address_' + index);
    if (dependant_supplier_address_input) {
      const searchBox = new google.maps.places.SearchBox(dependant_supplier_address_input);
      searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();
        if (places.length === 0) {
          return;
        }
        places.forEach((place) => {
          if (!place.geometry) {
            return;
          } else {
            const user_geopoint = $('#request_supplier_geopoint_' + index);
            user_geopoint.val([place.geometry.location.lat(), place.geometry.location.lng()]);
            // console.log('VALUE', user_geopoint.val());
            this.rows[index].dependant_supplier_geopoint = [place.geometry.location.lat(), place.geometry.location.lng()];
            this.rows[index].dependant_supplier_address = place.formatted_address;
          }
        });
      });
    } else {
      setTimeout(() => {
        this.initTableRowDependantSupplierAddress(index);
      }, 1000);
    }
  }

  postData(): void {
    let bomData = {
      'requestId': this.requestId,
      'bom': {
        'amount': +this.amount,
        'supplier_details': []
      }
    };
    for (let rowIndex = 0; rowIndex < this.rows.length; rowIndex++) {
      let supplierDetails = {};
      for (let property in this.rows[rowIndex]) {
        if (this.rows[rowIndex][property] !== '' && this.rows[rowIndex][property].length !== 0) {
          supplierDetails[property] = this.rows[rowIndex][property];
        }
      }
      if (Object.keys(supplierDetails).length !== 0) {
        bomData.bom.supplier_details.push(supplierDetails);
      }
    }
    // console.log(JSON.stringify(bomData, null, 2));
    this.clientService.postRequestBOMDocument(bomData).subscribe(response => {
      if (response) {
        alert('bom successfully submitted');
        this.clientService.redirectToUrl('/supplier/request/bom');
      } else {
        this.showError('Some internal error occurred');
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

  closeBOMForm(): void {
    this.clientService.redirectToUrl('/supplier/request/bom');
  }
}
