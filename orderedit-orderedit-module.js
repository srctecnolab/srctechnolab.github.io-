(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orderedit-orderedit-module"],{

/***/ "./src/app/layout/orderedit/orderedit-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/orderedit/orderedit-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: OrdereditRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdereditRoutingModule", function() { return OrdereditRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orderedit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orderedit.component */ "./src/app/layout/orderedit/orderedit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _orderedit_component__WEBPACK_IMPORTED_MODULE_2__["OrdereditComponent"]
    }
];
var OrdereditRoutingModule = /** @class */ (function () {
    function OrdereditRoutingModule() {
    }
    OrdereditRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OrdereditRoutingModule);
    return OrdereditRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/orderedit/orderedit.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/orderedit/orderedit.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<div class=\"container-fluid  \" style=\"background-color: #f7f7f7; min-height: 50%;    color: #73879c;padding-bottom: 30px\">\n  <div>\n    <h1 class=\"h3\" style=\"padding-top: 20px;padding-bottom: 20px\">{{title}}</h1>\n\n  \n  </div>\n      <div style=\"\">\n      \t<form  style=\"padding-left: 200px\" [formGroup]=\"order\" (ngSubmit)=\"update()\">\n\n        \n\n <div class=\"col-md-6 form-group\">\n          <label for=\"user_id\">User ID: </label>\n          <input type=\"text\" formControlName=\"user_id\" class=\"form-control\" placeholder=\"Enter user_id...\" [ngClass]=\"{ 'is-invalid': submitted && f.user_id.errors }\">\n\n           <div *ngIf=\"submitted && f.user_id.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.user_id.errors.required\">user_id is required</div>\n                        </div>\n        </div>\n\n\n          <div class=\"col-md-6 form-group\">\n          <label for=\"store_id\">Store Id: </label>\n          <input type=\"text\" formControlName=\"store_id\" class=\"form-control\" placeholder=\"Enter store_id...\" [ngClass]=\"{ 'is-invalid': submitted && f.store_id.errors }\">\n\n           <div *ngIf=\"submitted && f.store_id.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.store_id.errors.required\">store_id is required</div>\n                        </div>\n        </div>\n         \n         <div class=\"col-md-6 form-group\">\n          <label for=\"total\">Total: </label>\n          <input type=\"text\" formControlName=\"total\" class=\"form-control\" placeholder=\"Enter total...\" [ngClass]=\"{ 'is-invalid': submitted && f.total.errors }\">\n\n           <div *ngIf=\"submitted && f.total.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.total.errors.required\">total is required</div>\n                        </div>\n        </div>\n         \n          <div class=\"col-md-6 form-group\">\n        <label for=\"status\">Status: </label>\n          <select type=\"text\" formControlName=\"status\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && f.status.errors }\">\n        \n\n        <option value=\"1\">true</option>\n        <option value=\"0\">false</option>\n        \n        </select>\n         <div *ngIf=\"submitted && f.status.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.status.errors.required\">status is required</div>\n                        </div>\n        </div>\n\n\n         <div class=\"col-md-6 form-group\">\n        <label for=\"delivery_status\">Delivery Status: </label>\n          <select type=\"text\" formControlName=\"delivery_status\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && f.delivery_status.errors }\">\n\n        <option value=\"1\">true</option>\n        <option value=\"0\">false</option>\n        \n        </select>\n         <div *ngIf=\"submitted && f.delivery_status.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.delivery_status.errors.required\">delivery_status is required</div>\n                        </div>\n        </div>\n\n           <div class=\"col-md-6 form-group\">\n        <label for=\"payment_status\">Payment Status: </label>\n          <select type=\"text\" formControlName=\"payment_status\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && f.payment_status.errors }\" >\n\n        <option value=\"1\">true</option>\n        <option value=\"0\">false</option>\n        \n        </select>\n         <div *ngIf=\"submitted && f.payment_status.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.payment_status.errors.required\">payment_status is required</div>\n                        </div>\n        </div>\n         \n\n          <div class=\"col-md-6 form-group\">\n          <label for=\"delivery_at\">Delivery At: </label>\n          <input type=\"text\" formControlName=\"delivery_at\" class=\"form-control\" placeholder=\"Enter delivery_at...\" [ngClass]=\"{ 'is-invalid': submitted && f.delivery_at.errors }\">\n\n           <div *ngIf=\"submitted && f.delivery_at.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.delivery_at.errors.required\">delivery_at is required</div>\n                        </div>\n        </div>\n\n\n      \n      \n       \n          <div class=\"col-md-6 form-group\">\n          <label for=\"created_at\">Created At: </label>\n          <input type=\"date\" formControlName=\"created_at\" class=\"form-control\" placeholder=\"Enter created_at...\" [ngClass]=\"{ 'is-invalid': submitted && f.created_at.errors }\">\n\n           <div *ngIf=\"submitted && f.created_at.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.created_at.errors.required\">created_at is required</div>\n                        </div>\n        </div>\n\n\n        <div class=\"col-md-6 form-group\">\n          <label for=\"update_at\">Update At: </label>\n          <input type=\"date\" formControlName=\"update_at\" class=\"form-control\" placeholder=\"Enter update_at...\" [ngClass]=\"{ 'is-invalid': submitted && f.update_at.errors }\">\n\n           <div *ngIf=\"submitted && f.update_at.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.update_at.errors.required\">update_at is required</div>\n                        </div>\n        </div>\n          \n          \n\n            <div class=\"col-md-offset-5 col-md-6 form-group\">\n              <input type=\"submit\" value=\"submit\" [disabled]=\"loading\" class=\"btn btn-primary\">\n            </div>\n          </form>\n\n{{order.value|json}}\n      </div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/layout/orderedit/orderedit.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/orderedit/orderedit.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9vcmRlcmVkaXQvb3JkZXJlZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/orderedit/orderedit.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/orderedit/orderedit.component.ts ***!
  \*********************************************************/
/*! exports provided: OrdereditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdereditComponent", function() { return OrdereditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operation.service */ "./src/app/layout/operation.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdereditComponent = /** @class */ (function () {
    function OrdereditComponent(fb, active, operation, router) {
        this.fb = fb;
        this.active = active;
        this.operation = operation;
        this.router = router;
        this.model = {};
        this.submitted = false;
    }
    OrdereditComponent.prototype.update = function () {
        //insert and update order
        if (this.id == undefined) {
            this.submitted = true;
            if (this.order.invalid) {
                return;
            }
            else {
                this.operation.insertdata(this.order.value, "order_reg");
                this.router.navigate(['order']);
            }
        }
        else {
            this.submitted = true;
            // stop here if form is invalid
            if (this.order.invalid) {
                return;
            }
            else {
                this.operation.updatedata(this.order.value, 'order_update');
                this.router.navigate(['order']);
            }
            console.log(this.order.invalid);
            alert('SUCCESS!! :-)');
        }
    };
    OrdereditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.active.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log(_this.id);
            if (_this.id == undefined) {
                _this.title = "Add order";
            }
            else {
                _this.title = "Update order";
                _this.operation.Edit(params['id'], "editorder").subscribe(function (res) {
                    _this.x = res[0];
                    // put values in the form
                    console.log(res);
                    _this.order.setValue({
                        order_id: _this.x.order_id,
                        user_id: _this.x.user_id,
                        store_id: _this.x.store_id,
                        total: _this.x.total,
                        status: _this.x.status,
                        delivery_status: _this.x.delivery_status,
                        payment_status: _this.x.payment_status,
                        delivery_at: _this.x.delivery_at,
                        created_at: _this.x.created_at,
                        update_at: _this.x.update_at
                    });
                });
            }
        });
        this.order = this.fb.group({
            order_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            user_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            store_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            total: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            delivery_status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            payment_status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            delivery_at: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            created_at: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            update_at: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    Object.defineProperty(OrdereditComponent.prototype, "f", {
        get: function () { return this.order.controls; },
        enumerable: true,
        configurable: true
    });
    OrdereditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orderedit',
            template: __webpack_require__(/*! ./orderedit.component.html */ "./src/app/layout/orderedit/orderedit.component.html"),
            styles: [__webpack_require__(/*! ./orderedit.component.scss */ "./src/app/layout/orderedit/orderedit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _operation_service__WEBPACK_IMPORTED_MODULE_2__["OperationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OrdereditComponent);
    return OrdereditComponent;
}());



/***/ }),

/***/ "./src/app/layout/orderedit/orderedit.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/orderedit/orderedit.module.ts ***!
  \******************************************************/
/*! exports provided: OrdereditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdereditModule", function() { return OrdereditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _orderedit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orderedit-routing.module */ "./src/app/layout/orderedit/orderedit-routing.module.ts");
/* harmony import */ var _orderedit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orderedit.component */ "./src/app/layout/orderedit/orderedit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var OrdereditModule = /** @class */ (function () {
    function OrdereditModule() {
    }
    OrdereditModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _orderedit_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdereditRoutingModule"]
            ],
            declarations: [
                _orderedit_component__WEBPACK_IMPORTED_MODULE_6__["OrdereditComponent"]
            ]
        })
    ], OrdereditModule);
    return OrdereditModule;
}());



/***/ })

}]);
//# sourceMappingURL=orderedit-orderedit-module.js.map