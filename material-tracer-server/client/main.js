(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _manufacturer_manufacturer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manufacturer/manufacturer.component */ "./src/app/manufacturer/manufacturer.component.ts");
/* harmony import */ var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./supplier/supplier.component */ "./src/app/supplier/supplier.component.ts");
/* harmony import */ var _request_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request/request.component */ "./src/app/request/request.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./request-detail/request-detail.component */ "./src/app/request-detail/request-detail.component.ts");
/* harmony import */ var _bom_detail_bom_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bom-detail/bom-detail.component */ "./src/app/bom-detail/bom-detail.component.ts");
/* harmony import */ var _bom_submit_bom_submit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bom-submit/bom-submit.component */ "./src/app/bom-submit/bom-submit.component.ts");
/* harmony import */ var _graph_map_graph_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./graph-map/graph-map.component */ "./src/app/graph-map/graph-map.component.ts");












var routes = [
    { path: '', component: _client_client_component__WEBPACK_IMPORTED_MODULE_3__["ClientComponent"] },
    { path: 'login', component: _client_client_component__WEBPACK_IMPORTED_MODULE_3__["ClientComponent"] },
    { path: 'register', component: _client_client_component__WEBPACK_IMPORTED_MODULE_3__["ClientComponent"] },
    { path: 'manufacturer', redirectTo: 'manufacturer/request/history', pathMatch: 'full' },
    { path: 'manufacturer', component: _manufacturer_manufacturer_component__WEBPACK_IMPORTED_MODULE_4__["ManufacturerComponent"], children: [
            { path: 'request/new', component: _request_request_component__WEBPACK_IMPORTED_MODULE_6__["RequestComponent"] },
            { path: 'request/history', component: _request_request_component__WEBPACK_IMPORTED_MODULE_6__["RequestComponent"] },
            { path: 'request/bom', component: _request_request_component__WEBPACK_IMPORTED_MODULE_6__["RequestComponent"] },
            { path: 'request/bom/:id', component: _bom_detail_bom_detail_component__WEBPACK_IMPORTED_MODULE_9__["BomDetailComponent"] },
            { path: 'request/:id', component: _request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_8__["RequestDetailComponent"] }
        ] },
    { path: 'supplier', redirectTo: 'supplier/request/history', pathMatch: 'full' },
    { path: 'supplier', component: _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_5__["SupplierComponent"], children: [
            { path: 'request/history', component: _request_request_component__WEBPACK_IMPORTED_MODULE_6__["RequestComponent"] },
            { path: 'request/graphmap', component: _request_request_component__WEBPACK_IMPORTED_MODULE_6__["RequestComponent"] },
            { path: 'request/bom', component: _request_request_component__WEBPACK_IMPORTED_MODULE_6__["RequestComponent"] },
            { path: 'request/bom/:id', component: _bom_detail_bom_detail_component__WEBPACK_IMPORTED_MODULE_9__["BomDetailComponent"] },
            { path: 'request/bom/submit/:id', component: _bom_submit_bom_submit_component__WEBPACK_IMPORTED_MODULE_10__["BomSubmitComponent"] },
            { path: 'request/:id', component: _request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_8__["RequestDetailComponent"] },
            { path: 'request/graphmap/:id', component: _graph_map_graph_map_component__WEBPACK_IMPORTED_MODULE_11__["GraphMapComponent"] }
        ] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'material-tracer-client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _manufacturer_manufacturer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manufacturer/manufacturer.component */ "./src/app/manufacturer/manufacturer.component.ts");
/* harmony import */ var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./supplier/supplier.component */ "./src/app/supplier/supplier.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./request-detail/request-detail.component */ "./src/app/request-detail/request-detail.component.ts");
/* harmony import */ var _request_request_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./request/request.component */ "./src/app/request/request.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _bom_detail_bom_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bom-detail/bom-detail.component */ "./src/app/bom-detail/bom-detail.component.ts");
/* harmony import */ var _bom_submit_bom_submit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bom-submit/bom-submit.component */ "./src/app/bom-submit/bom-submit.component.ts");
/* harmony import */ var _graph_map_graph_map_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./graph-map/graph-map.component */ "./src/app/graph-map/graph-map.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _client_client_component__WEBPACK_IMPORTED_MODULE_4__["ClientComponent"],
                _manufacturer_manufacturer_component__WEBPACK_IMPORTED_MODULE_5__["ManufacturerComponent"],
                _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_6__["SupplierComponent"],
                _request_detail_request_detail_component__WEBPACK_IMPORTED_MODULE_10__["RequestDetailComponent"],
                _request_request_component__WEBPACK_IMPORTED_MODULE_11__["RequestComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
                _bom_detail_bom_detail_component__WEBPACK_IMPORTED_MODULE_13__["BomDetailComponent"],
                _bom_submit_bom_submit_component__WEBPACK_IMPORTED_MODULE_14__["BomSubmitComponent"],
                _graph_map_graph_map_component__WEBPACK_IMPORTED_MODULE_15__["GraphMapComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bom-detail/bom-detail.component.css":
/*!*****************************************************!*\
  !*** ./src/app/bom-detail/bom-detail.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvbS1kZXRhaWwvYm9tLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/bom-detail/bom-detail.component.html":
/*!******************************************************!*\
  !*** ./src/app/bom-detail/bom-detail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"isError\" class=\"row\">\n    <div class=\"col-md-12\">\n      <div>{{errorMessage}}</div>\n    </div>\n  </div>\n  <div *ngIf=\"isBOMDetail\" class=\"row\">\n    <div class=\"col-md-12\">\n      <table class=\"table\">\n        <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Id</th>\n          <th scope=\"col\">Part Name</th>\n          <th scope=\"col\">Supplier Name</th>\n          <th scope=\"col\">Supplier Address</th>\n          <th scope=\"col\">Dependent Supplier Name</th>\n          <th scope=\"col\">Dependent Supplier Address</th>\n        </tr>\n        </thead>\n        <tbody>\n\n        <tr *ngFor=\"let supplier of requestBOMDetails.bom.supplier_details\">\n          <th scope=\"row\">{{requestBOMDetails.id}}</th>\n          <td>{{supplier.part_name}}</td>\n          <td>{{supplier.supplier_name}}</td>\n          <td>{{supplier.supplier_address}}</td>\n          <td>{{supplier.dependant_supplier_name}}</td>\n          <td>{{supplier.dependant_supplier_address}}</td>\n        </tr>\n        </tbody>\n      </table>\n      <div>Total Amount : {{requestBOMDetails.bom.amount | currency:\"$\"}}</div>\n      <br>\n      <div *ngIf=\"requestBOMDetails.status === 2 && userType === 'manufacturer'\">\n        <a (click)=\"requestBOMAccepted(requestBOMDetails.id)\">\n        <span class=\"glyphicon glyphicon-ok text-success\" style=\"padding-left: 20px;padding-right: 20px;cursor: pointer\"></span>\n      </a>\n        <a (click)=\"requestBOMRejected(requestBOMDetails.id)\" style=\"padding-left: 30px;cursor: pointer\">\n          <span class=\"glyphicon glyphicon-remove text-danger\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bom-detail/bom-detail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/bom-detail/bom-detail.component.ts ***!
  \****************************************************/
/*! exports provided: BomDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BomDetailComponent", function() { return BomDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client.service */ "./src/app/client.service.ts");




var BomDetailComponent = /** @class */ (function () {
    function BomDetailComponent(route, clientService) {
        this.route = route;
        this.clientService = clientService;
        this.requestStatus = {
            '0': 'Intiated',
            '1': 'Request accepted by supplier',
            '2': 'BOM submitted  by supplier',
            '3': 'Quote approved  by manufacturer',
            '-1': 'Request rejected  by supplier',
            '-2': 'Quote rejected  by manufacturer'
        };
        this.isBOMDetail = false;
        this.isError = false;
    }
    BomDetailComponent.prototype.ngOnInit = function () {
        this.showRequestDetails();
    };
    BomDetailComponent.prototype.showRequestDetails = function () {
        var _this = this;
        var requestId = +this.route.snapshot.paramMap.get('id');
        if (isNaN(requestId)) {
            this.showError('No Data found');
        }
        else {
            // console.log('request details', requestId);
            this.isBOMDetail = false;
            this.isError = false;
            this.userType = localStorage.getItem('userType');
            this.clientService.getRequestBOMDetails(requestId).subscribe(function (requestBOMData) {
                if (requestBOMData && Object.keys(requestBOMData).length !== 0) {
                    _this.isBOMDetail = true;
                    _this.requestBOMDetails = requestBOMData;
                }
                else {
                    _this.showError('No Data found');
                }
            }, function (err) {
                if (err && err.error && err.error.error && (err.error.error.statusCode === 422 || err.error.error.statusCode === 400)) {
                    _this.isError = true;
                    _this.errorMessage = err.error.error.message;
                }
                else {
                    alert('Some internal error occurred');
                    // this.clientService.redirectToHome();
                }
            });
        }
    };
    BomDetailComponent.prototype.showError = function (error) {
        this.isBOMDetail = false;
        this.isError = true;
        this.errorMessage = error;
    };
    BomDetailComponent.prototype.requestBOMAccepted = function (requestId) {
        var _this = this;
        this.clientService.updateRequestStatus(requestId, 3).subscribe(function (updateResult) {
            if (updateResult && updateResult.statusCode === 200) {
                alert('request BOM accepted');
                _this.clientService.redirectToHome();
            }
            else {
                _this.showError('some internal error occurred');
            }
        }, function (err) {
            if (err && err.error && err.error.error && (err.error.error.statusCode === 422 || err.error.error.statusCode === 400)) {
                _this.isError = true;
                _this.errorMessage = err.error.error.message;
            }
            else {
                alert('Some internal error occurred');
                // this.clientService.redirectToHome();
            }
        });
        // console.log('BOM accepted', requestId);
    };
    BomDetailComponent.prototype.requestBOMRejected = function (requestId) {
        var _this = this;
        this.clientService.updateRequestStatus(requestId, -2).subscribe(function (updateResult) {
            if (updateResult && updateResult.statusCode === 200) {
                alert('request BOM rejected');
                _this.clientService.redirectToHome();
            }
            else {
                _this.showError('some internal error occurred');
            }
        }, function (err) {
            if (err && err.error && err.error.error && (err.error.error.statusCode === 422 || err.error.error.statusCode === 400)) {
                _this.isError = true;
                _this.errorMessage = err.error.error.message;
            }
            else {
                alert('Some internal error occurred');
                // this.clientService.redirectToHome();
            }
        });
        // console.log('BOM rejected', requestId);
    };
    BomDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bom-detail',
            template: __webpack_require__(/*! ./bom-detail.component.html */ "./src/app/bom-detail/bom-detail.component.html"),
            styles: [__webpack_require__(/*! ./bom-detail.component.css */ "./src/app/bom-detail/bom-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]])
    ], BomDetailComponent);
    return BomDetailComponent;
}());



/***/ }),

/***/ "./src/app/bom-submit/bom-submit.component.css":
/*!*****************************************************!*\
  !*** ./src/app/bom-submit/bom-submit.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvbS1zdWJtaXQvYm9tLXN1Ym1pdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/bom-submit/bom-submit.component.html":
/*!******************************************************!*\
  !*** ./src/app/bom-submit/bom-submit.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"isError\" class=\"row\">\n    <div class=\"col-md-12\">\n      <div>{{errorMessage}}</div>\n    </div>\n  </div>\n  <div *ngIf=\"isRequestBOMSubmit && userType==='supplier'\" class=\"row\">\n    <div class=\"col-md-12\">\n      <form method=\"post\" id=\"requestBOMSubmitForm\" enctype=\"multipart/form-data\">\n        <table  class=\"table\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Part Name[*]</th>\n              <th scope=\"col\">Supplier Name[*]</th>\n              <th scope=\"col\">Supplier Address[*]</th>\n              <th scope=\"col\">Dependent Supplier Name</th>\n              <th scope=\"col\">Dependent Supplier Address</th>\n            </tr>\n          </thead>\n          <tr *ngFor=\"let row of rows; let i = index\">\n            <td><input type=\"text\" name=\"request_part_name\" id=\"request_part_name_{{i}}\" [(ngModel)]=\"row.part_name\" value=\"{{row.part_name}}\"></td>\n            <td><input type=\"text\" name=\"request_supplier_name\" id=\"request_supplier_name_{{i}}\" [(ngModel)]=\"row.supplier_name\"></td>\n            <td>\n              <div>\n                <input type=\"text\" name=\"request_supplier_address\" id=\"request_supplier_address_{{i}}\" [(ngModel)]=\"row.supplier_address\" placeholder=\"Address\">\n                <input type=\"text\" name=\"request_supplier_geopoint\" id=\"request_supplier_geopoint_{{i}}\" hidden [(ngModel)]=\"row.supplier_geopoint\">\n              </div>\n            </td>\n            <td><input type=\"text\" name=\"request_dependant_supplier_name\" id=\"request_dependant_supplier_name{{i}}\" [(ngModel)]=\"row.dependant_supplier_name\"></td>\n            <td>\n              <div>\n                <input type=\"text\" name=\"request_dependant_supplier_address\" id=\"request_dependant_supplier_address_{{i}}\" [(ngModel)]=\"row.dependant_supplier_address\" placeholder=\"Address\">\n                <input type=\"text\" name=\"request_dependant_supplier_geopoint\" id=\"request_dependant_supplier_geopoint_{{i}}\" hidden [(ngModel)]=\"row.dependant_supplier_geopoint\">\n              </div>\n            </td>\n          </tr>\n        </table>\n        <div>Amount : <input type=\"text\" name=\"amount\" id=\"amount\" [(ngModel)]=\"amount\"></div>\n        <table  class=\"table\">\n          <thead>\n          <tr>\n            <td><button type=\"button\" class=\"btn btn-primary\" id=\"add_row\" (click)=\"addRowToTable()\">+Add Row</button></td>\n            <td><button type=\"button\" class=\"btn btn-primary\" id=\"delete_row\" (click)=\"deleteRowFromTable()\">*Delete Row</button></td>\n            <td>   </td>\n            <td>   </td>\n            <td>   </td>\n            <td>   </td>\n            <td>   </td>\n            <td>   </td>\n            <td>   </td>\n            <td>   </td>\n            <td>   </td>\n            <td>   </td>\n            <td>   </td>\n            <td>   </td>\n            <td>   </td>\n            <td><button type=\"submit\" class=\"btn btn-primary\" id=\"save_data\" (click)=\"postData()\">+Save Data</button></td>\n            <td><button type=\"button\" class=\"btn btn-primary\" id=\"close_form\" (click)=\"closeBOMForm()\">Close</button></td>\n          </tr>\n          </thead>\n        </table>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bom-submit/bom-submit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/bom-submit/bom-submit.component.ts ***!
  \****************************************************/
/*! exports provided: BomSubmitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BomSubmitComponent", function() { return BomSubmitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client.service */ "./src/app/client.service.ts");




var BomSubmitComponent = /** @class */ (function () {
    function BomSubmitComponent(route, clientService) {
        this.route = route;
        this.clientService = clientService;
        this.isRequestBOMSubmit = false;
        this.isError = false;
        this.rowsNumber = 0;
        this.rows = [{
                part_name: '',
                supplier_name: '',
                supplier_address: '',
                supplier_geopoint: [],
                dependant_supplier_name: '',
                dependant_supplier_address: '',
                dependant_supplier_geopoint: [],
            }];
        this.amount = 0;
    }
    BomSubmitComponent.prototype.ngOnInit = function () {
        this.showRequestBOMSubmit();
    };
    BomSubmitComponent.prototype.showRequestBOMSubmit = function () {
        var requestId = +this.route.snapshot.paramMap.get('id');
        if (isNaN(requestId)) {
            this.showError('No Data found');
        }
        else {
            this.requestId = requestId;
            // console.log('request details', requestId);
            this.isRequestBOMSubmit = true;
            this.isError = false;
            this.userType = localStorage.getItem('userType');
            this.initTableRowSupplierAddress(0);
            this.initTableRowDependantSupplierAddress(0);
        }
    };
    BomSubmitComponent.prototype.showError = function (error) {
        this.isRequestBOMSubmit = false;
        this.isError = true;
        this.errorMessage = error;
    };
    BomSubmitComponent.prototype.addRowToTable = function () {
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
    };
    BomSubmitComponent.prototype.deleteRowFromTable = function () {
        if (this.rowsNumber >= 0) {
            this.rows.pop();
            this.rowsNumber = this.rowsNumber - 1;
        }
    };
    BomSubmitComponent.prototype.initTableRowSupplierAddress = function (index) {
        var _this = this;
        var supplier_address_input = document.getElementById('request_supplier_address_' + index);
        if (supplier_address_input) {
            var searchBox_1 = new google.maps.places.SearchBox(supplier_address_input);
            searchBox_1.addListener('places_changed', function () {
                var places = searchBox_1.getPlaces();
                if (places.length === 0) {
                    return;
                }
                places.forEach(function (place) {
                    if (!place.geometry) {
                        return;
                    }
                    else {
                        var user_geopoint = $('#request_supplier_geopoint_' + index);
                        user_geopoint.val([place.geometry.location.lat(), place.geometry.location.lng()]);
                        _this.rows[index].supplier_geopoint = [place.geometry.location.lat(), place.geometry.location.lng()];
                        _this.rows[index].supplier_address = place.formatted_address;
                    }
                });
            });
        }
        else {
            setTimeout(function () {
                _this.initTableRowSupplierAddress(index);
            }, 1000);
        }
    };
    BomSubmitComponent.prototype.initTableRowDependantSupplierAddress = function (index) {
        var _this = this;
        var dependant_supplier_address_input = document.getElementById('request_dependant_supplier_address_' + index);
        if (dependant_supplier_address_input) {
            var searchBox_2 = new google.maps.places.SearchBox(dependant_supplier_address_input);
            searchBox_2.addListener('places_changed', function () {
                var places = searchBox_2.getPlaces();
                if (places.length === 0) {
                    return;
                }
                places.forEach(function (place) {
                    if (!place.geometry) {
                        return;
                    }
                    else {
                        var user_geopoint = $('#request_supplier_geopoint_' + index);
                        user_geopoint.val([place.geometry.location.lat(), place.geometry.location.lng()]);
                        // console.log('VALUE', user_geopoint.val());
                        _this.rows[index].dependant_supplier_geopoint = [place.geometry.location.lat(), place.geometry.location.lng()];
                        _this.rows[index].dependant_supplier_address = place.formatted_address;
                    }
                });
            });
        }
        else {
            setTimeout(function () {
                _this.initTableRowDependantSupplierAddress(index);
            }, 1000);
        }
    };
    BomSubmitComponent.prototype.postData = function () {
        var _this = this;
        var bomData = {
            'requestId': this.requestId,
            'bom': {
                'amount': +this.amount,
                'supplier_details': []
            }
        };
        for (var rowIndex = 0; rowIndex < this.rows.length; rowIndex++) {
            var supplierDetails = {};
            for (var property in this.rows[rowIndex]) {
                if (this.rows[rowIndex][property] !== '' && this.rows[rowIndex][property].length !== 0) {
                    supplierDetails[property] = this.rows[rowIndex][property];
                }
            }
            if (Object.keys(supplierDetails).length !== 0) {
                bomData.bom.supplier_details.push(supplierDetails);
            }
        }
        // console.log(JSON.stringify(bomData, null, 2));
        this.clientService.postRequestBOMDocument(bomData).subscribe(function (response) {
            if (response) {
                alert('bom successfully submitted');
                _this.clientService.redirectToUrl('/supplier/request/bom');
            }
            else {
                _this.showError('Some internal error occurred');
            }
        }, function (err) {
            if (err && err.error && err.error.error && (err.error.error.statusCode === 422 || err.error.error.statusCode === 400)) {
                _this.isError = true;
                _this.errorMessage = err.error.error.message;
            }
            else {
                alert('Some internal error occurred');
                // this.clientService.redirectToHome();
            }
        });
    };
    BomSubmitComponent.prototype.closeBOMForm = function () {
        this.clientService.redirectToUrl('/supplier/request/bom');
    };
    BomSubmitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bom-submit',
            template: __webpack_require__(/*! ./bom-submit.component.html */ "./src/app/bom-submit/bom-submit.component.html"),
            styles: [__webpack_require__(/*! ./bom-submit.component.css */ "./src/app/bom-submit/bom-submit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]])
    ], BomSubmitComponent);
    return BomSubmitComponent;
}());



/***/ }),

/***/ "./src/app/client.service.ts":
/*!***********************************!*\
  !*** ./src/app/client.service.ts ***!
  \***********************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ClientService = /** @class */ (function () {
    function ClientService(http, router) {
        this.http = http;
        this.router = router;
        this.apiBaseUrl = 'http://localhost:3000/api';
    }
    /*login(email, password):  Observable<Client> {
      return of({
        'id': 81,
        'token': 'GUANkBKVE7DZ2Hl19V80AhT9KQ9FJXFogwWli3KEppCbb8pZnRgK5U9NZ9RUzN1w',
        'userType': 'manufacturer',
        'name': 'Chiranjeevi'
      });
    }*/
    ClientService.prototype.register = function (userRecord) {
        /*this.http.post (this.apiBaseUrl + 'register', userRecord).subscribe(res => {
          console.log(res);
        }, err => {
          console.log(err);

        });*/
        return this.http.post(this.apiBaseUrl + '/client/register', userRecord);
    };
    ClientService.prototype.login = function (email, password) {
        return this.http.post(this.apiBaseUrl + '/client/login', { email: email, password: password });
    };
    ClientService.prototype.redirectToClientHomePage = function (userInstance) {
        if (this.setUserDetails(userInstance)) {
            if (userInstance.type === 'manufacturer') {
                this.router.navigate(['/manufacturer']);
            }
            else {
                // console.log('inside subscriber');
                this.router.navigate(['/supplier']);
            }
        }
        else {
            this.redirectToHome();
        }
    };
    ClientService.prototype.redirectToLogin = function () {
        this.router.navigate(['/login']);
    };
    ClientService.prototype.redirectToHome = function () {
        this.router.navigate(['/']);
    };
    ClientService.prototype.redirectToUrl = function (url) {
        // console.log('inside navigate');
        this.router.navigate([url]);
    };
    ClientService.prototype.redirectToPageNotFound = function () {
        this.router.navigate(['/']);
    };
    ClientService.prototype.setUserDetails = function (userInstance) {
        this.clearUserDetails();
        if (userInstance.id && userInstance.userId && userInstance.type && userInstance.name) {
            localStorage.setItem('token', userInstance.id);
            localStorage.setItem('userId', userInstance.userId);
            localStorage.setItem('userType', userInstance.type);
            localStorage.setItem('userName', userInstance.name);
            return true;
        }
        return false;
    };
    ClientService.prototype.clearUserDetails = function () {
        localStorage.clear();
    };
    ClientService.prototype.checkUserLoginAndRedirect = function () {
        if (localStorage.getItem('token') && localStorage.getItem('userId') && localStorage.getItem('userType') && localStorage.getItem('userName')) {
            if (localStorage.getItem('userType') === 'manufacturer') {
                this.router.navigate(['/manufacturer']);
            }
            else if (localStorage.getItem('userType') === 'supplier') {
                this.router.navigate(['/supplier']);
            }
            else {
                this.clearUserDetails();
                this.router.navigate(['/']);
            }
        }
        else {
            this.clearUserDetails();
            this.router.navigate(['/']);
        }
    };
    ClientService.prototype.isUserLogin = function () {
        // console.log(localStorage.getItem('token'), localStorage.getItem('userId'), localStorage.getItem('userType'), localStorage.getItem('userName'));
        if (localStorage.getItem('token') && localStorage.getItem('userId') && localStorage.getItem('userType') && localStorage.getItem('userName')) {
            return (localStorage.getItem('userType') === 'manufacturer' || localStorage.getItem('userType') === 'supplier');
        }
        else {
            return false;
        }
    };
    ClientService.prototype.getUserDetails = function () {
        var userDetails = {
            token: localStorage.getItem('token'),
            userId: localStorage.getItem('userId'),
            userType: localStorage.getItem('userType'),
            name: localStorage.getItem('userName')
        };
        // console.log(userDetails)
        return userDetails;
    };
    ClientService.prototype.logout = function () {
        this.clearUserDetails();
        this.redirectToHome();
    };
    ClientService.prototype.getRequests = function () {
        var userToken = localStorage.getItem('token');
        if (!userToken) {
            this.clearUserDetails();
            this.redirectToHome();
        }
        else {
            return this.http.get(this.apiBaseUrl + '/requests?access_token=' + userToken);
        }
    };
    ClientService.prototype.getRequestDetails = function (requestId) {
        var userToken = localStorage.getItem('token');
        if (!userToken) {
            this.clearUserDetails();
            this.redirectToHome();
        }
        else {
            return this.http.get(this.apiBaseUrl + '/requests/byId?requestId=' + requestId + '&access_token=' + userToken);
        }
    };
    ClientService.prototype.getRequestGraphMapGeoPoints = function (requestId) {
        var userToken = localStorage.getItem('token');
        if (!userToken) {
            this.clearUserDetails();
            this.redirectToHome();
        }
        else {
            return this.http.get(this.apiBaseUrl + '/requests/graph/map/geopoints/byId?requestId=' + requestId + '&access_token=' + userToken);
        }
    };
    ClientService.prototype.getRequestBOMDetails = function (requestId) {
        var userToken = localStorage.getItem('token');
        if (!userToken) {
            this.clearUserDetails();
            this.redirectToHome();
        }
        else {
            return this.http.get(this.apiBaseUrl + '/requests/bom/byId?requestId=' + requestId + '&access_token=' + userToken);
        }
    };
    ClientService.prototype.updateRequestStatus = function (requestId, status) {
        var userToken = localStorage.getItem('token');
        if (!userToken) {
            this.clearUserDetails();
            this.redirectToHome();
        }
        else {
            return this.http.post(this.apiBaseUrl + '/requests/update/status?access_token=' + userToken, { requestId: requestId, status: status });
        }
    };
    ClientService.prototype.postRequest = function (requestData) {
        var userToken = localStorage.getItem('token');
        if (!userToken) {
            this.clearUserDetails();
            this.redirectToHome();
        }
        else {
            return this.http.post(this.apiBaseUrl + '/requests?access_token=' + userToken, requestData);
        }
    };
    ClientService.prototype.getUserToken = function () {
        return localStorage.getItem('token');
    };
    ClientService.prototype.updateRequestAttachment = function (requestId, attachmentName) {
        var userToken = localStorage.getItem('token');
        if (!userToken) {
            this.clearUserDetails();
            this.redirectToHome();
        }
        else {
            return this.http.post(this.apiBaseUrl + '/requests/update/attachment?access_token=' + userToken, { requestId: requestId, attachment: attachmentName });
        }
    };
    ClientService.prototype.postRequestBOMDocument = function (requestBOMData) {
        var userToken = localStorage.getItem('token');
        if (!userToken) {
            this.clearUserDetails();
            this.redirectToHome();
        }
        else {
            return this.http.post(this.apiBaseUrl + '/requests/bom/document?access_token=' + userToken, requestBOMData);
        }
    };
    ClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/client/client.component.css":
/*!*********************************************!*\
  !*** ./src/app/client/client.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/client/client.component.html":
/*!**********************************************!*\
  !*** ./src/app/client/client.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top \">\n  <!--<a class=\"navbar-brand\" href=\"#\"><img src=\"./assets/images/icon.png\" height=\"50px\" width=\"80px\"></a>-->\n  <a class=\"navbar-brand\" href=\"#\">Material Tracer</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"./\" routerLinkActive=\"active\"\n        >Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"./\" routerLinkActive=\"active\"\n        >About Us</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"./\" routerLinkActive=\"active\"\n        >Our Services</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"./\" routerLinkActive=\"active\">Contact Us</a>\n      </li>\n    </ul>\n    <div *ngIf=\"!userLoggedIn\" class=\"div-inline-block my-2 my-lg-0\" >\n      <a class=\"btn btn-primary my-2 my-sm-0 active\" type=\"button\" routerLink=\"/login\" >Login</a> &nbsp;&nbsp;\n      <a class=\"btn btn-success my-2 my-sm-0\" type=\"button\"  routerLink=\"/register\" >Register</a>\n    </div>\n    <div *ngIf=\"userLoggedIn && loggedInUser\" class=\"nav-item white\" style=\"color:white\">\n      Welcome {{loggedInUser.name}}\n    </div>\n  </div>\n</nav>\n\n<div *ngIf=\"!userLoggedIn\" style=\"padding: 50px\" class=\"div-inline-block my-2 my-lg-0\" >\n  <h1 style=\"text-align: center\">Welcome to Material tracer</h1>\n</div>\n\n<div *ngIf=\"showLoginForm\" class=\"container-fluid\" style=\"padding: 50px\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n    </div>\n    <div class=\"col-md-4\">\n      <table class=\"table\">\n        <tr>\n          <td>Email</td>\n          <td> <input type=\"text\" name=\"email\" id=\"login_user_email\" [(ngModel)]=\"login_user_email\"></td>\n        </tr>\n        <tr>\n          <td>Password</td>\n          <td><input type=\"text\" name=\"password\" id=\"login_user_password\" [(ngModel)]=\"login_user_password\"></td>\n        </tr>\n        <tr>\n          <td></td>\n          <td><button class=\"btn btn-primary\" type=\"button\" (click)=\"login()\">Login</button></td>\n        </tr>\n      </table>\n    </div>\n    <div class=\"col-md-4\">\n    </div>\n  </div>\n\n</div>\n\n<div *ngIf=\"showRegisterForm\" class=\"container-fluid\" style=\"padding: 50px\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n    </div>\n    <div class=\"col-md-4\">\n      <table class=\"table\">\n        <tr>\n          <td>Name</td>\n          <td> <input type=\"text\" name=\"name\" id=\"register_user_name\" [(ngModel)]=\"register_user_name\"></td>\n        </tr>\n        <tr>\n          <td>Email</td>\n          <td><input type=\"text\" name=\"email\" id=\"register_user_email\" [(ngModel)]=\"register_user_email\"></td>\n        </tr>\n\n        <tr>\n          <td>Password</td>\n          <td><input type=\"text\" name=\"password\" id=\"register_user_password\" [(ngModel)]=\"register_user_password\"></td>\n        </tr>\n        <tr>\n          <td>Contact</td>\n          <td><input type=\"text\" name=\"contact\" id=\"register_user_contact\" [(ngModel)]=\"register_user_contact\"></td>\n        </tr>\n        <tr>\n          <td>Address</td>\n          <td><input input id=\"register_user_address\" name=\"address\" class=\"controls\" type=\"text\" placeholder=\"Search Box\" [(ngModel)]=\"register_user_address\">\n            <input type=\"text\" name=\"type\" id=\"register_user_geopoint\" hidden [(ngModel)]=\"register_user_geopoint\"></td>\n        </tr>\n        <tr>\n          <td>Type</td>\n          <td><input type=\"text\" name=\"type\" id=\"register_user_type\" [(ngModel)]=\"register_user_type\"></td>\n        </tr>\n        <tr>\n          <td></td>\n          <td><button class=\"btn btn-success\" type=\"button\" (click)=\"registerUser()\">Register</button></td>\n        </tr>\n      </table>\n    </div>\n    <div class=\"col-md-4\">\n    </div>\n  </div>\n\n</div>\n\n<div *ngIf=\"errorOccurred\" class=\"container-fluid\" style=\"padding: 100px;color: red\">\n  {{errorMessage}}\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/client/client.component.ts":
/*!********************************************!*\
  !*** ./src/app/client/client.component.ts ***!
  \********************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client.service */ "./src/app/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ClientComponent = /** @class */ (function () {
    function ClientComponent(clientService, router) {
        this.clientService = clientService;
        this.router = router;
        this.userLoggedIn = false;
        this.showLoginForm = false;
        this.errorOccurred = false;
        this.errorMessage = false;
        this.showRegisterForm = false;
    }
    ClientComponent.prototype.ngOnInit = function () {
        if (this.clientService.isUserLogin()) {
            this.clientService.checkUserLoginAndRedirect();
        }
        else {
            this.loginURLCheck();
        }
    };
    ClientComponent.prototype.loginURLCheck = function () {
        if (this.router.url === '/login') {
            this.displayloginForm();
        }
        else if (this.router.url === '/register') {
            this.displayRegisterForm();
        }
    };
    ClientComponent.prototype.redirectToLogin = function () {
        this.router.navigate(['/login']);
    };
    ClientComponent.prototype.redirectToRegister = function () {
        this.router.navigate(['/register']);
    };
    ClientComponent.prototype.isUserLoggedIn = function () {
        return false;
    };
    ClientComponent.prototype.displayRegisterForm = function () {
        this.showLoginForm = false;
        this.showRegisterForm = true;
        this.initRegAddress();
    };
    ClientComponent.prototype.displayloginForm = function () {
        this.showLoginForm = true;
        this.showRegisterForm = false;
    };
    ClientComponent.prototype.login = function () {
        var _this = this;
        this.clientService.login(this.login_user_email, this.login_user_password).subscribe(function (res) {
            alert('login success');
            _this.clientService.redirectToClientHomePage(res);
        }, function (err) {
            if (err && err.error && err.error.error && (err.error.error.statusCode === 422 || err.error.error.statusCode === 400)) {
                _this.errorOccurred = true;
                _this.errorMessage = err.error.error.message;
            }
            else {
                alert('Some internal error occurred');
            }
        });
    };
    ClientComponent.prototype.registerUser = function () {
        var _this = this;
        /*console.log(this.register_user_name);
        console.log(this.register_user_email);
        console.log(this.register_user_password);
        console.log(this.register_user_contact);
        console.log(this.register_user_address);
        console.log(this.register_user_type);
        console.log(this.register_user_geopoint);
        console.log(typeof this.register_user_geopoint);
    */
        var userData = {
            'name': this.register_user_name,
            'email': this.register_user_email,
            'password': this.register_user_password,
            'contact': this.register_user_contact,
            'address': this.register_user_address,
            'type': this.register_user_type,
            'geopoint': this.register_user_geopoint
        };
        // console.log(userData);
        this.clientService.register(userData).subscribe(function (res) {
            alert('registration success');
            _this.clientService.redirectToLogin();
        }, function (err) {
            if (err && err.error && err.error.error && err.error.error.statusCode === 422) {
                _this.errorOccurred = true;
                _this.errorMessage = err.error.error.message;
            }
            else {
                alert('Some internal error occurred');
                // this.clientService.redirectToHome();
            }
            // console.log( 'error occurred',err.error);
            // console.log( 'error occurred',err.error.error);
            // console.log( 'error occurred',err.error.error.name);
            // console.log( 'error occurred',err.error.error.message);
            // console.log(err);
        });
    };
    ClientComponent.prototype.initRegAddress = function () {
        var _this = this;
        var input = document.getElementById('register_user_address');
        if (input) {
            var searchBox_1 = new google.maps.places.SearchBox(input);
            searchBox_1.addListener('places_changed', function () {
                var places = searchBox_1.getPlaces();
                if (places.length === 0) {
                    return;
                }
                places.forEach(function (place) {
                    if (!place.geometry) {
                        return;
                    }
                    else {
                        var user_geopoint = $('#register_user_geopoint');
                        user_geopoint.val([place.geometry.location.lat(), place.geometry.location.lng()]);
                        _this.register_user_geopoint = [place.geometry.location.lat(), place.geometry.location.lng()];
                        _this.register_user_address = place.formatted_address;
                    }
                });
            });
        }
        else {
            setTimeout(function () {
                _this.initRegAddress();
            }, 1000);
        }
    };
    ClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/client/client.component.html"),
            styles: [__webpack_require__(/*! ./client.component.css */ "./src/app/client/client.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/graph-map/graph-map.component.css":
/*!***************************************************!*\
  !*** ./src/app/graph-map/graph-map.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhcGgtbWFwL2dyYXBoLW1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZ3JhcGgtbWFwL2dyYXBoLW1hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/graph-map/graph-map.component.html":
/*!****************************************************!*\
  !*** ./src/app/graph-map/graph-map.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding-top: 20px\">\n  <div *ngIf=\"isError\" class=\"row\">\n    <div class=\"col-md-12\">\n      <div>{{errorMessage}}</div>\n    </div>\n  </div>\n  <div *ngIf=\"isGraphMapDetail\" id=\"map\"></div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/graph-map/graph-map.component.ts":
/*!**************************************************!*\
  !*** ./src/app/graph-map/graph-map.component.ts ***!
  \**************************************************/
/*! exports provided: GraphMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphMapComponent", function() { return GraphMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client.service */ "./src/app/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var GraphMapComponent = /** @class */ (function () {
    function GraphMapComponent(route, clientService) {
        this.route = route;
        this.clientService = clientService;
        this.requestStatus = {
            '0': 'Intiated',
            '1': 'Request accepted by supplier',
            '2': 'BOM submitted  by supplier',
            '3': 'Quote approved  by manufacturer',
            '-1': 'Request rejected  by supplier',
            '-2': 'Quote rejected  by manufacturer'
        };
        this.isGraphMapDetail = false;
        this.isError = false;
    }
    GraphMapComponent.prototype.ngOnInit = function () {
        this.showGraphMapDetails();
    };
    GraphMapComponent.prototype.showGraphMapDetails = function () {
        var _this = this;
        var requestId = +this.route.snapshot.paramMap.get('id');
        if (isNaN(requestId)) {
            this.showError('No Data found');
        }
        else {
            // console.log('request details', requestId);
            this.isGraphMapDetail = false;
            this.isError = false;
            this.userType = localStorage.getItem('userType');
            this.clientService.getRequestGraphMapGeoPoints(requestId).subscribe(function (response) {
                if (response && response.length !== 0) {
                    _this.isGraphMapDetail = true;
                    _this.requestGraphMapDetails = response;
                    _this.initMap();
                }
                else {
                    _this.showError('No Data found');
                }
            }, function (err) {
                if (err && err.error && err.error.error && (err.error.error.statusCode === 422 || err.error.error.statusCode === 400)) {
                    _this.isError = true;
                    _this.errorMessage = err.error.error.message;
                }
                else {
                    alert('Some internal error occurred');
                    // this.clientService.redirectToHome();
                }
            });
        }
    };
    GraphMapComponent.prototype.showError = function (error) {
        this.isGraphMapDetail = false;
        this.isError = true;
        this.errorMessage = error;
    };
    GraphMapComponent.prototype.initMap = function () {
        var _this = this;
        // console.log("initmap called");
        var mapElement = document.getElementById('map');
        if (mapElement) {
            $(window).resize(function () {
                var h = $(window).height(), offsetTop = 60; // Calculate the top offset
                $('#map').css('height', (h - offsetTop));
                var flightPlanCoordinates = [];
                for (var geoPointIndex = 0; geoPointIndex < _this.requestGraphMapDetails.length; geoPointIndex++) {
                    flightPlanCoordinates.push({
                        lat: _this.requestGraphMapDetails[geoPointIndex][0],
                        lng: _this.requestGraphMapDetails[geoPointIndex][1],
                    });
                }
                var map = new google.maps.Map(mapElement, {
                    zoom: 3,
                    center: flightPlanCoordinates[1],
                    mapTypeId: 'terrain'
                });
                var marker = new google.maps.Marker({
                    position: flightPlanCoordinates[0],
                    label: "M",
                    map: map
                });
                for (var geoPointIndex = 1; geoPointIndex < flightPlanCoordinates.length; geoPointIndex++) {
                    var marker_1 = new google.maps.Marker({
                        position: flightPlanCoordinates[geoPointIndex],
                        label: "S",
                        map: map
                    });
                }
                var flightPath = new google.maps.Polyline({
                    path: flightPlanCoordinates,
                    geodesic: true,
                    strokeColor: '#0000BB',
                    strokeOpacity: 1.0,
                    strokeWeight: 2
                });
                flightPath.setMap(map);
            }).resize();
        }
        else {
            setTimeout(function () {
                _this.initMap();
            }, 1000);
        }
    };
    GraphMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-graph-map',
            template: __webpack_require__(/*! ./graph-map.component.html */ "./src/app/graph-map/graph-map.component.html"),
            styles: [__webpack_require__(/*! ./graph-map.component.css */ "./src/app/graph-map/graph-map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"]])
    ], GraphMapComponent);
    return GraphMapComponent;
}());



/***/ }),

/***/ "./src/app/manufacturer/manufacturer.component.css":
/*!*********************************************************!*\
  !*** ./src/app/manufacturer/manufacturer.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbnVmYWN0dXJlci9tYW51ZmFjdHVyZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/manufacturer/manufacturer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/manufacturer/manufacturer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top \">\n  <!--<a class=\"navbar-brand\" href=\"#\"><img src=\"./assets/images/icon.png\" height=\"50px\" width=\"80px\"></a>-->\n  <a class=\"navbar-brand\" href=\"#\">Material Tracer</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\"><a class=\"nav-link\" >Link1 <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\"><a class=\"nav-link\"\n        >Link2</a>\n      </li>\n      <li class=\"nav-item\"><a class=\"nav-link\"\n        >Link3</a>\n      </li>\n      <li class=\"nav-item\"><a class=\"nav-link\" >Link4</a>\n      </li>\n    </ul>\n    <div *ngIf=\"userLoggedIn && user && user.name\" class=\"div-inline my-2 my-lg-0\" >\n      <div class=\"text-white my-2 my-sm-0 active\">Welcome {{user.name}} <a (click)=\"logout()\"><img src=\"./assets/images/logout.png\"></a></div> &nbsp;&nbsp;\n\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid\" style=\"padding: 50px\">\n  <div class = \"row\" style=\"padding-top: 30px\">\n    <div class = \"col-md-2\">\n      <nav id=\"sidebar\">\n        <div class=\"sidebar-header\">\n          <form class=\"form my-2 my-lg-0\" >\n            <input class=\"form-control mr-sm-3\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n          </form>\n        </div>\n        <br/>\n        <ul class=\"list-group\">\n          <li class=\"list-group-item active\" ><a style=\"text-decoration: none;\" routerLink=\"./request/history\" class=\"text-white\" routerLinkActive=\"active\">History</a></li>\n          <li class=\"list-group-item\" ><a routerLinkActive=\"active\" style=\"text-decoration: none\" routerLink=\"./request/new\" >Create Request</a></li>\n          <li class=\"list-group-item\" ><a routerLinkActive=\"active\" style=\"text-decoration: none\" routerLink=\"./request/bom\" >View Billing of Material (BOM)</a></li>\n        </ul>\n      </nav>\n    </div>\n    <div class = \"col-md-10\" style=\"padding: 20px\">\n      <div>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/manufacturer/manufacturer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/manufacturer/manufacturer.component.ts ***!
  \********************************************************/
/*! exports provided: ManufacturerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturerComponent", function() { return ManufacturerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client.service */ "./src/app/client.service.ts");



var ManufacturerComponent = /** @class */ (function () {
    function ManufacturerComponent(clientService) {
        this.clientService = clientService;
        this.userLoggedIn = false;
    }
    ManufacturerComponent.prototype.ngOnInit = function () {
        this.checkUserDetails();
        this.listenForNavigation();
    };
    ManufacturerComponent.prototype.logout = function () {
        this.clientService.logout();
    };
    ManufacturerComponent.prototype.checkUserDetails = function () {
        if (this.clientService.isUserLogin()) {
            this.userLoggedIn = true;
            this.user = this.clientService.getUserDetails();
            // console.log('logged in');
        }
        else {
            // console.log('not logged in');
            this.clientService.redirectToHome();
        }
    };
    ManufacturerComponent.prototype.listenForNavigation = function () {
        $(".list-group li").on("click", function () {
            $(".list-group li").removeClass("active text-white");
            $(".list-group li > a").removeClass("text-white");
            $(this).addClass("active");
            $(this).find("a").addClass("text-white");
        });
    };
    ManufacturerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manufacturer',
            template: __webpack_require__(/*! ./manufacturer.component.html */ "./src/app/manufacturer/manufacturer.component.html"),
            styles: [__webpack_require__(/*! ./manufacturer.component.css */ "./src/app/manufacturer/manufacturer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"]])
    ], ManufacturerComponent);
    return ManufacturerComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Page Not Found</h1>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/request-detail/request-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/request-detail/request-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcXVlc3QtZGV0YWlsL3JlcXVlc3QtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/request-detail/request-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/request-detail/request-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"isError\" class=\"row\">\n    <div class=\"col-md-12\">\n      <div>{{errorMessage}}</div>\n    </div>\n  </div>\n  <div *ngIf=\"isRequestDetail\" class=\"row\">\n    <div class=\"col-md-12\">\n      <table class=\"table\">\n        <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Id</th>\n          <th scope=\"col\">Material Name</th>\n          <th scope=\"col\">Material Type</th>\n          <th scope=\"col\">Supplier Name</th>\n          <th scope=\"col\">Status</th>\n          <th scope=\"col\">Date</th>\n        </tr>\n        </thead>\n        <tbody>\n\n        <tr *ngFor=\"let trail of requestsDetails.trail\">\n          <th scope=\"row\">{{requestsDetails.id}}</th>\n          <td>{{requestsDetails.material_name}}</td>\n          <td>{{requestsDetails.material_type}}</td>\n          <td>{{requestsDetails.supplier_name}}</td>\n          <td>{{trail[0]}}</td>\n          <td>{{trail[1] * 1000 | date:'dd/MM/yyyy HH:mm:ss'}}\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/request-detail/request-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/request-detail/request-detail.component.ts ***!
  \************************************************************/
/*! exports provided: RequestDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetailComponent", function() { return RequestDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client.service */ "./src/app/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RequestDetailComponent = /** @class */ (function () {
    function RequestDetailComponent(route, clientService) {
        this.route = route;
        this.clientService = clientService;
        this.requestStatus = {
            '0': 'Intiated',
            '1': 'Request accepted by supplier',
            '2': 'BOM submitted  by supplier',
            '3': 'Quote approved  by manufacturer',
            '-1': 'Request rejected  by supplier',
            '-2': 'Quote rejected  by manufacturer'
        };
        this.isRequestDetail = false;
        this.isError = false;
    }
    RequestDetailComponent.prototype.ngOnInit = function () {
        this.showRequestBOMDetails();
    };
    RequestDetailComponent.prototype.showRequestBOMDetails = function () {
        var _this = this;
        var requestId = +this.route.snapshot.paramMap.get('id');
        if (isNaN(requestId)) {
            this.showError('No Data found');
        }
        else {
            // console.log('request details', requestId);
            this.isRequestDetail = false;
            this.isError = false;
            this.userType = localStorage.getItem('userType');
            this.clientService.getRequestDetails(requestId).subscribe(function (requestData) {
                if (requestData && Object.keys(requestData).length !== 0) {
                    _this.isRequestDetail = true;
                    for (var trailIndex = 0; trailIndex < requestData.trail.length; trailIndex++) {
                        requestData['trail'][trailIndex][0] = _this.requestStatus[requestData['trail'][trailIndex][0]];
                    }
                    _this.requestsDetails = requestData;
                }
                else {
                    _this.showError('No Data found');
                }
            }, function (err) {
                if (err && err.error && err.error.error && (err.error.error.statusCode === 422 || err.error.error.statusCode === 400)) {
                    _this.isError = true;
                    _this.errorMessage = err.error.error.message;
                }
                else {
                    alert('Some internal error occurred');
                    // this.clientService.redirectToHome();
                }
            });
        }
    };
    RequestDetailComponent.prototype.showError = function (error) {
        this.isRequestDetail = false;
        this.isError = true;
        this.errorMessage = error;
    };
    RequestDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-detail',
            template: __webpack_require__(/*! ./request-detail.component.html */ "./src/app/request-detail/request-detail.component.html"),
            styles: [__webpack_require__(/*! ./request-detail.component.css */ "./src/app/request-detail/request-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"]])
    ], RequestDetailComponent);
    return RequestDetailComponent;
}());



/***/ }),

/***/ "./src/app/request/request.component.css":
/*!***********************************************!*\
  !*** ./src/app/request/request.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcXVlc3QvcmVxdWVzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/request/request.component.html":
/*!************************************************!*\
  !*** ./src/app/request/request.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"isError\" class=\"row\">\n    <div class=\"col-md-12\">\n      <div>{{errorMessage}}</div>\n    </div>\n  </div>\n  <div *ngIf=\"isHistory\" class=\"row\">\n    <div class=\"col-md-12\">\n      <table class=\"table\">\n        <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Id</th>\n          <th scope=\"col\">Material Name</th>\n          <th scope=\"col\">Material Type</th>\n          <th scope=\"col\">Supplier Name</th>\n          <th scope=\"col\">Status</th>\n          <th scope=\"col\">Operations</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let request of requestsData\">\n          <th scope=\"row\">{{request.id}}</th>\n          <td>{{request.material_name}}</td>\n          <td>{{request.material_type}}</td>\n          <td>{{request.supplier_name}}</td>\n          <td>{{request.status}}</td>\n          <td>\n            <div>\n              <a *ngIf=\"request.status === 'Intiated' && userType === 'supplier'\"\n                 (click)=\"requestAccepted(request.id)\">\n                <span class=\"glyphicon glyphicon-ok text-success\" style=\"padding-left: 10px;cursor: pointer\"></span>\n              </a>\n              <a *ngIf=\"request.status === 'Intiated' && userType === 'supplier'\"\n                 (click)=\"requestRejected(request.id)\" style=\"padding-left: 10px;cursor: pointer\">\n                <span class=\"glyphicon glyphicon-remove text-danger\"></span>\n              </a>\n              <a (click)=\"redirectToRequestDetailsPage(request.id)\" style=\"padding-left:10px;cursor: pointer\">\n                <span class=\"glyphicon glyphicon-time text-primary\"></span>\n              </a>\n            </div>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div *ngIf=\"isNewRequest && userType==='manufacturer'\" class=\"row\">\n    <div class=\"col-md-4\">\n    </div>\n    <div class=\"col-md-4\">\n      <form method=\"post\" id=\"requestForm\" enctype=\"multipart/form-data\">\n        <table class=\"table\">\n          <tr>\n            <td>Material Name</td>\n            <td> <input type=\"text\" name=\"request_material_name\" id=\"request_material_name\"></td>\n          </tr>\n          <tr>\n            <td>Material Type</td>\n            <td><input type=\"text\" name=\"request_material_type\" id=\"request_material_type\"></td>\n          </tr>\n          <tr>\n            <td>Manufacturer Email</td>\n            <td><input type=\"text\" name=\"request_manfacturer_email\" id=\"request_manfacturer_email\"></td>\n          </tr>\n          <tr>\n            <td>Supplier Name</td>\n            <td><input type=\"text\" name=\"request_supplier_name\" id=\"request_supplier_name\"></td>\n          </tr>\n          <tr>\n            <td>Supplier Email</td>\n            <td><input type=\"text\" name=\"request_supplier_email\" id=\"request_supplier_email\"></td>\n          </tr>\n          <tr>\n            <td>Supplier Contact</td>\n            <td><input type=\"text\" name=\"request_supplier_contact\" id=\"request_supplier_contact\"></td>\n          </tr>\n          <tr>\n            <td>Attachment</td>\n            <td><input type=\"file\" id=\"request_attachment\" name=\"request_attachment\" accept=\"*\"></td>\n          </tr>\n          <tr>\n            <td></td>\n            <td><button class=\"btn btn-success\" type=\"submit\">Submit</button></td>\n          </tr>\n        </table>\n        <!--Material Name: <input type=\"text\" name=\"request_material_name\" id=\"request_material_name\"><br>\n        Material Type: <input type=\"text\" name=\"request_material_type\" id=\"request_material_type\"><br>\n\n        Manufacturer Email: <input type=\"text\" name=\"request_manfacturer_email\" id=\"request_manfacturer_email\"><br>\n\n        Supplier Name: <input type=\"text\" name=\"request_supplier_name\" id=\"request_supplier_name\"><br>\n        Supplier Email: <input type=\"text\" name=\"request_supplier_email\" id=\"request_supplier_email\"><br>\n        Supplier Contact: <input type=\"text\" name=\"request_supplier_contact\" id=\"request_supplier_contact\"><br>\n        Attachment: <input type=\"file\" id=\"request_attachment\" name=\"request_attachment\" accept=\"*\"><br>\n        <button type=\"submit\">Submit</button>-->\n      </form>\n    </div>\n    <div class=\"col-md-4\">\n    </div>\n  </div>\n  <div *ngIf=\"isBOMView\" class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"col-md-12\">\n        <table class=\"table\">\n          <thead class=\"thead-dark\">\n          <tr>\n            <th scope=\"col\">Id</th>\n            <th scope=\"col\">Material Name</th>\n            <th scope=\"col\">Material Type</th>\n            <th scope=\"col\">Supplier Name</th>\n            <th scope=\"col\">Status</th>\n            <th scope=\"col\">Operations</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let request of requestsData\">\n            <th scope=\"row\">{{request.id}}</th>\n            <td>{{request.material_name}}</td>\n            <td>{{request.material_type}}</td>\n            <td>{{request.supplier_name}}</td>\n            <td>{{request.status}}</td>\n            <td>\n              <a *ngIf=\"(request.status !== 'Intiated' && request.status !== 'Request accepted by supplier' && request.status !== 'Request rejected  by supplier')\" class=\"text-primary\" (click)=\"redirectToRequestBOMDetailsPage(request.id)\" style=\"padding-left:10px;cursor: pointer\">View BOM</a>\n              <span *ngIf=\"((request.status === 'Intiated' || request.status === 'Request accepted by supplier' || request.status === 'Request rejected  by supplier')&&(userType === 'manufacturer')) \" style=\"padding-left:10px;\">No BOM</span>\n              <a *ngIf=\"((request.status === 'Request accepted by supplier' )&&(userType === 'supplier'))\" class=\"text-primary\" (click)=\"redirectToRequestBOMSubmitPage(request.id)\" style=\"padding-left:10px;cursor: pointer\">\n                Submit BOM\n              </a>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"isGraphMapView\" class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"col-md-12\">\n        <table class=\"table\">\n          <thead class=\"thead-dark\">\n          <tr>\n            <th scope=\"col\">Id</th>\n            <th scope=\"col\">Material Name</th>\n            <th scope=\"col\">Material Type</th>\n            <th scope=\"col\">Supplier Name</th>\n            <th scope=\"col\">Status</th>\n            <th scope=\"col\">Operations</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let request of requestsData\">\n            <th scope=\"row\">{{request.id}}</th>\n            <td>{{request.material_name}}</td>\n            <td>{{request.material_type}}</td>\n            <td>{{request.supplier_name}}</td>\n            <td>{{request.status}}</td>\n            <td>\n              <a *ngIf=\"(request.status === 'BOM submitted  by supplier' || request.status === 'Quote approved  by manufacturer' || request.status === 'Quote rejected  by manufacturer')\" class=\"text-primary\" (click)=\"redirectToRequestGraphMapPage(request.id)\" style=\"padding-left:10px;cursor: pointer\">View Map</a>\n              <span *ngIf=\"((request.status !== 'BOM submitted  by supplier' && request.status !== 'Quote approved  by manufacturer' && request.status !== 'Quote rejected  by manufacturer')) \" style=\"padding-left:10px;\">No Map</span>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/request/request.component.ts":
/*!**********************************************!*\
  !*** ./src/app/request/request.component.ts ***!
  \**********************************************/
/*! exports provided: RequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function() { return RequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client.service */ "./src/app/client.service.ts");




var RequestComponent = /** @class */ (function () {
    function RequestComponent(router, clientService) {
        this.router = router;
        this.clientService = clientService;
        this.isHistory = false;
        this.isNewRequest = false;
        this.isBOMView = false;
        this.isGraphMapView = false;
        this.isRequestDetail = false;
        this.isError = false;
    }
    RequestComponent.prototype.ngOnInit = function () {
        this.checkPathAndSetElement();
        this.userType = localStorage.getItem('userType');
        this.initNewRequestListener();
    };
    RequestComponent.prototype.checkPathAndSetElement = function () {
        // console.log('url', this.router.url);
        switch (this.router.url) {
            case '/manufacturer/request/history':
                this.showHistory();
                break;
            case '/manufacturer/request/new':
                this.showNewRequest();
                break;
            case '/manufacturer/request/bom':
                this.showBOMView();
                break;
            case '/supplier/request/history':
                this.showHistory();
                break;
            case '/supplier/request/bom':
                this.showBOMView();
                break;
            case '/supplier/request/graphmap':
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
    };
    RequestComponent.prototype.showHistory = function () {
        var _this = this;
        this.isHistory = false;
        this.isNewRequest = false;
        this.isBOMView = false;
        this.isGraphMapView = false;
        this.isRequestDetail = false;
        this.isError = false;
        this.userType = localStorage.getItem('userType');
        this.clientService.getRequests().subscribe(function (requests) {
            if (requests && requests.length !== 0) {
                _this.isHistory = true;
                _this.requestsData = requests;
                // console.log(requests);
            }
            else {
                _this.showError('No Requests found');
            }
        }, function (err) {
            if (err && err.error && err.error.error && (err.error.error.statusCode === 422 || err.error.error.statusCode === 400)) {
                _this.isError = true;
                _this.errorMessage = err.error.error.message;
            }
            else {
                alert('Some internal error occurred');
                // this.clientService.redirectToHome();
            }
        });
    };
    RequestComponent.prototype.showNewRequest = function () {
        this.isHistory = false;
        this.isNewRequest = true;
        this.isBOMView = false;
        this.isRequestDetail = false;
        this.isError = false;
        this.isGraphMapView = false;
    };
    RequestComponent.prototype.redirectToRequestDetailsPage = function (requestId) {
        this.clientService.redirectToUrl('/' + this.userType + '/request/' + requestId);
    };
    RequestComponent.prototype.redirectToRequestBOMDetailsPage = function (requestId) {
        this.clientService.redirectToUrl('/' + this.userType + '/request/bom/' + requestId);
    };
    RequestComponent.prototype.redirectToRequestGraphMapPage = function (requestId) {
        this.clientService.redirectToUrl('/' + this.userType + '/request/graphmap/' + requestId);
    };
    RequestComponent.prototype.redirectToRequestBOMSubmitPage = function (requestId) {
        this.clientService.redirectToUrl('/' + this.userType + '/request/bom/submit/' + requestId);
    };
    RequestComponent.prototype.showBOMView = function () {
        var _this = this;
        this.isHistory = false;
        this.isNewRequest = false;
        this.isBOMView = false;
        this.isRequestDetail = false;
        this.isError = false;
        this.isGraphMapView = false;
        this.userType = localStorage.getItem('userType');
        this.clientService.getRequests().subscribe(function (requests) {
            if (requests && requests.length !== 0) {
                _this.requestsData = [];
                for (var index = 0; index < requests.length; index++) {
                    if ((requests[index].status !== 0 && requests[index].status !== -1 && requests[index].status !== 1)) {
                        _this.requestsData.push(requests[index]);
                    }
                }
                if (_this.requestsData.length !== 0) {
                    _this.isBOMView = true;
                }
                else {
                    _this.showError('No Data found');
                }
            }
            else {
                _this.showError('No Requests found');
            }
        }, function (err) {
            if (err && err.error && err.error.error && (err.error.error.statusCode === 422 || err.error.error.statusCode === 400)) {
                _this.isError = true;
                _this.errorMessage = err.error.error.message;
            }
            else {
                alert('Some internal error occurred');
                // this.clientService.redirectToHome();
            }
        });
    };
    RequestComponent.prototype.showGraphMapView = function () {
        var _this = this;
        this.isHistory = false;
        this.isNewRequest = false;
        this.isBOMView = false;
        this.isRequestDetail = false;
        this.isError = false;
        this.isGraphMapView = false;
        this.userType = localStorage.getItem('userType');
        this.clientService.getRequests().subscribe(function (requests) {
            // console.log('requests in map', requests);
            if (requests && requests.length !== 0) {
                _this.requestsData = [];
                for (var index = 0; index < requests.length; index++) {
                    if ((requests[index].status === 'BOM submitted  by supplier' || requests[index].status === 'Quote rejected  by manufacturer' || requests[index].status === 'Quote approved  by manufacturer')) {
                        _this.requestsData.push(requests[index]);
                    }
                }
                if (_this.requestsData.length !== 0) {
                    _this.isGraphMapView = true;
                }
                else {
                    _this.showError('No Data found');
                }
            }
            else {
                _this.showError('No Requests found');
            }
        }, function (err) {
            if (err && err.error && err.error.error && (err.error.error.statusCode === 422 || err.error.error.statusCode === 400)) {
                _this.isError = true;
                _this.errorMessage = err.error.error.message;
            }
            else {
                alert('Some internal error occurred');
                // this.clientService.redirectToHome();
            }
        });
    };
    RequestComponent.prototype.showError = function (error) {
        this.isHistory = false;
        this.isNewRequest = false;
        this.isBOMView = false;
        this.isRequestDetail = false;
        this.isError = true;
        this.errorMessage = error;
    };
    RequestComponent.prototype.requestAccepted = function (requestId) {
        var _this = this;
        this.clientService.updateRequestStatus(requestId, 1).subscribe(function (updateResult) {
            if (updateResult && updateResult.statusCode === 200) {
                alert('request accepted');
                _this.clientService.redirectToHome();
            }
            else {
                _this.showError('No Requests found');
            }
        }, function (err) {
            if (err && err.error && err.error.error && (err.error.error.statusCode === 422 || err.error.error.statusCode === 400)) {
                _this.isError = true;
                _this.errorMessage = err.error.error.message;
            }
            else {
                alert('Some internal error occurred');
                // this.clientService.redirectToHome();
            }
        });
    };
    RequestComponent.prototype.requestRejected = function (requestId) {
        var _this = this;
        this.clientService.updateRequestStatus(requestId, -1).subscribe(function (updateResult) {
            if (updateResult && updateResult.statusCode === 200) {
                alert('request rejected');
                _this.clientService.redirectToHome();
            }
            else {
                _this.showError('No Requests found');
            }
        }, function (err) {
            if (err && err.error && err.error.error && (err.error.error.statusCode === 422 || err.error.error.statusCode === 400)) {
                _this.isError = true;
                _this.errorMessage = err.error.error.message;
            }
            else {
                alert('Some internal error occurred');
                // this.clientService.redirectToHome();
            }
        });
    };
    RequestComponent.prototype.initNewRequestListener = function () {
        var _this = this;
        var $material_name, $material_type, $manufacturer_email, $supplier_email, $supplier_contact, $supplier_name, $attachment;
        var apiUrl = 'http://localhost:3000/api/';
        $(document).ready(function () {
            $material_name = $('#request_material_name');
            $material_type = $('#request_material_type');
            $manufacturer_email = $('#request_manfacturer_email');
            $supplier_email = $('#request_supplier_email');
            $supplier_name = $('#request_supplier_name');
            $supplier_contact = $('#request_supplier_contact');
            $attachment = $('#request_attachment');
            $('#requestForm').on('submit', function (e) {
                e.preventDefault();
                var requestData = {
                    'material_name': $material_name.val(),
                    'material_type': $material_type.val(),
                    'manufacturer_email': $manufacturer_email.val(),
                    'supplier_email': $supplier_email.val(),
                    'supplier_contact': $supplier_contact.val(),
                    'supplier_name': $supplier_name.val(),
                };
                // console.log(requestData);
                _this.clientService.postRequest(requestData).subscribe(function (response) {
                    if (response) {
                        // console.log(response.data.request_id);
                        var promises_1 = [];
                        if ($attachment.val() !== '') {
                            // console.log('attachment available');
                            promises_1.push(sendFile($attachment.get(0).files[0], response.data.request_id, apiUrl + 'attachments/requests_docs/upload?access_token=' + _this.clientService.getUserToken()));
                            Promise.all(promises_1).then(function (results) {
                                // console.log('back from all promises', results);
                                if (promises_1.length >= 1) {
                                    // console.log('uploaded success');
                                    results.forEach(function (resultOb) {
                                        if (resultOb.result.files && resultOb.result.files.file[0].container) {
                                            requestData['attachmentName'] = resultOb.result.files.file[0].container + '/' + resultOb.result.files.file[0].name;
                                        }
                                    });
                                    // console.log(requestData);
                                    _this.clientService.updateRequestAttachment(response.data.request_id, requestData['attachmentName']).subscribe(function (res) {
                                        alert('request successfully submitted');
                                        _this.clientService.redirectToHome();
                                    }, function (err) {
                                        if (err && err.error && err.error.error && (err.error.error.statusCode === 422 || err.error.error.statusCode === 400)) {
                                            _this.isError = true;
                                            _this.errorMessage = err.error.error.message;
                                        }
                                        else {
                                            alert('Some internal error occurred');
                                            _this.clientService.redirectToHome();
                                        }
                                    });
                                }
                                else {
                                    // console.log('not uploaded');
                                    _this.clientService.redirectToHome();
                                }
                            });
                        }
                        else {
                            _this.clientService.redirectToHome();
                        }
                    }
                    else {
                        _this.showError('Some Internal error occurred');
                    }
                }, function (err) {
                    if (err && err.error && err.error.error && (err.error.error.statusCode === 422 || err.error.error.statusCode === 400)) {
                        _this.isError = true;
                        _this.errorMessage = err.error.error.message;
                    }
                    else {
                        alert('Some internal error occurred');
                    }
                });
            });
        });
        function sendFile(file, requestId, url) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                var fd = new FormData();
                xhr.open("POST", url, true);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                };
                var fileExtension = file.name.substr(file.name.lastIndexOf('.'));
                if (fileExtension !== '') {
                    fd.append('file', file, requestId + fileExtension);
                }
                else {
                    fd.append('file', file, requestId);
                }
                xhr.send(fd);
            });
        }
    };
    RequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request',
            template: __webpack_require__(/*! ./request.component.html */ "./src/app/request/request.component.html"),
            styles: [__webpack_require__(/*! ./request.component.css */ "./src/app/request/request.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]])
    ], RequestComponent);
    return RequestComponent;
}());



/***/ }),

/***/ "./src/app/supplier/supplier.component.css":
/*!*************************************************!*\
  !*** ./src/app/supplier/supplier.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVyL3N1cHBsaWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/supplier/supplier.component.html":
/*!**************************************************!*\
  !*** ./src/app/supplier/supplier.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top \">\n  <!--<a class=\"navbar-brand\" href=\"#\"><img src=\"./assets/images/icon.png\" height=\"50px\" width=\"80px\"></a>-->\n  <a class=\"navbar-brand\" href=\"#\">Material Tracer</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\"><a class=\"nav-link\" >Link1 <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\"><a class=\"nav-link\"\n      >Link2</a>\n      </li>\n      <li class=\"nav-item\"><a class=\"nav-link\"\n      >Link3</a>\n      </li>\n      <li class=\"nav-item\"><a class=\"nav-link\" >Link4</a>\n      </li>\n    </ul>\n    <div *ngIf=\"userLoggedIn && user && user.name\" class=\"div-inline my-2 my-lg-0\" >\n      <div class=\"text-white my-2 my-sm-0 active\">Welcome {{user.name}} <a (click)=\"logout()\"><img src=\"./assets/images/logout.png\"></a></div> &nbsp;&nbsp;\n\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid\" style=\"padding: 50px\">\n  <div class = \"row\" style=\"padding-top: 30px\">\n    <div class = \"col-md-2\">\n      <nav id=\"sidebar\">\n        <div class=\"sidebar-header\">\n          <form class=\"form my-2 my-lg-0\" >\n            <input class=\"form-control mr-sm-3\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n          </form>\n        </div>\n        <br/>\n        <ul class=\"list-group\">\n          <li class=\"list-group-item active\" ><a style=\"text-decoration: none;\" routerLink=\"./request/history\" class=\"text-white\" routerLinkActive=\"active\">History</a></li>\n          <li class=\"list-group-item\" ><a routerLinkActive=\"active\" style=\"text-decoration: none\" routerLink=\"./request/bom\" >Submit Billing of Material (BOM)</a></li>\n          <li class=\"list-group-item\" ><a routerLinkActive=\"active\" style=\"text-decoration: none\" routerLink=\"./request/graphmap\" >Graph-Map View</a></li>\n        </ul>\n      </nav>\n    </div>\n    <div class = \"col-md-10\" style=\"padding: 20px\">\n      <div>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/supplier/supplier.component.ts":
/*!************************************************!*\
  !*** ./src/app/supplier/supplier.component.ts ***!
  \************************************************/
/*! exports provided: SupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierComponent", function() { return SupplierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client.service */ "./src/app/client.service.ts");



var SupplierComponent = /** @class */ (function () {
    function SupplierComponent(clientService) {
        this.clientService = clientService;
        this.userLoggedIn = false;
    }
    SupplierComponent.prototype.ngOnInit = function () {
        this.checkUserDetails();
        this.listenForNavigation();
    };
    SupplierComponent.prototype.logout = function () {
        this.clientService.logout();
    };
    SupplierComponent.prototype.checkUserDetails = function () {
        if (this.clientService.isUserLogin()) {
            this.userLoggedIn = true;
            this.user = this.clientService.getUserDetails();
            // console.log('logged in');
        }
        else {
            // console.log('not logged in');
            this.clientService.redirectToHome();
        }
    };
    SupplierComponent.prototype.listenForNavigation = function () {
        $(".list-group li").on("click", function () {
            $(".list-group li").removeClass("active text-white");
            $(".list-group li > a").removeClass("text-white");
            $(this).addClass("active");
            $(this).find("a").addClass("text-white");
        });
    };
    SupplierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-supplier',
            template: __webpack_require__(/*! ./supplier.component.html */ "./src/app/supplier/supplier.component.html"),
            styles: [__webpack_require__(/*! ./supplier.component.css */ "./src/app/supplier/supplier.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"]])
    ], SupplierComponent);
    return SupplierComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sys1049/files/Hackathon/material-tracer-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
