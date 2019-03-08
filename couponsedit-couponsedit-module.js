(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["couponsedit-couponsedit-module"],{

/***/ "./src/app/layout/couponsedit/couponsedit-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/couponsedit/couponsedit-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: CouponseditRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponseditRoutingModule", function() { return CouponseditRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _couponsedit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./couponsedit.component */ "./src/app/layout/couponsedit/couponsedit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _couponsedit_component__WEBPACK_IMPORTED_MODULE_2__["CouponseditComponent"]
    }
];
var CouponseditRoutingModule = /** @class */ (function () {
    function CouponseditRoutingModule() {
    }
    CouponseditRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CouponseditRoutingModule);
    return CouponseditRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/couponsedit/couponsedit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/couponsedit/couponsedit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n<div class=\"container-fluid  \" style=\"background-color: #f7f7f7; min-height: 50%;    color: #73879c;padding-bottom: 30px\">\n  <div>\n    <h1 class=\"h3\" style=\"padding-top: 20px;padding-bottom: 20px\">{{title}}</h1>\n\n  \n  </div>\n      <div style=\"\">\n        <form  style=\"padding-left: 200px\" [formGroup]=\"coupon\" (ngSubmit)=\"update()\">\n\n          \n        <div class=\"col-md-6 form-group\">\n          <label for=\"code\">Code: </label>\n          <input type=\"text\" formControlName=\"code\" class=\"form-control\" placeholder=\"Enter code...\" [ngClass]=\"{ 'is-invalid': submitted && f.code.errors }\">\n\n           <div *ngIf=\"submitted && f.code.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.code.errors.required\">code is required</div>\n                        </div>\n        </div>\n\n        \n               <div class=\"col-md-6 form-group\">\n          <label for=\"reward\">Reward: </label>\n          <input type=\"text\" formControlName=\"reward\" class=\"form-control\" placeholder=\"Enter reward...\" [ngClass]=\"{ 'is-invalid': submitted && f.reward.errors }\">\n\n           <div *ngIf=\"submitted && f.reward.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.reward.errors.required\">reward is required</div>\n                        </div>\n        </div>\n\n           <div class=\"col-md-6 form-group\">\n          <label for=\"type\">Type</label>\n          <input type=\"text\" formControlName=\"type\" class=\"form-control\" placeholder=\"Enter Your type...\" [ngClass]=\"{ 'is-invalid': submitted && f.type.errors }\">\n          <div *ngIf=\"submitted && f.type.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.type.errors.required\">type is required</div>\n                        </div>\n        </div>\n\n      \n        <div class=\"col-md-6 form-group\">\n          <label for=\"expires_at\">Updated At</label>\n          <input type=\"date\" formControlName=\"expires_at\" class=\"form-control\" placeholder=\"Enter Your expires_at...\" [ngClass]=\"{ 'is-invalid': submitted && f.expires_at.errors }\">\n          <div *ngIf=\"submitted && f.expires_at.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.expires_at.errors.required\">Expires At is required</div>\n                        </div>\n        </div>\n\n              \n      \n\n            <div class=\"col-md-offset-5 col-md-6 form-group\">\n              <input type=\"submit\" value=\"submit\" [disabled]=\"loading\" class=\"btn btn-primary\">\n            </div>\n          </form>\n\n{{coupon.value|json}}\n      </div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/layout/couponsedit/couponsedit.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/couponsedit/couponsedit.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb3Vwb25zZWRpdC9jb3Vwb25zZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/couponsedit/couponsedit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/couponsedit/couponsedit.component.ts ***!
  \*************************************************************/
/*! exports provided: CouponseditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponseditComponent", function() { return CouponseditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _operation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operation.service */ "./src/app/layout/operation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CouponseditComponent = /** @class */ (function () {
    function CouponseditComponent(fb, active, operation, router) {
        this.fb = fb;
        this.active = active;
        this.operation = operation;
        this.router = router;
        this.model = {};
        this.submitted = false;
    }
    CouponseditComponent.prototype.update = function () {
        //insert and update coupon
        if (this.id == undefined) {
            this.submitted = true;
            if (this.coupon.invalid) {
                return;
            }
            else {
                this.operation.insertdata(this.coupon.value, "coupon_reg");
                this.router.navigate(['coupons']);
            }
        }
        else {
            this.submitted = true;
            // stop here if form is invalid
            if (this.coupon.invalid) {
                return;
            }
            else {
                this.operation.updatedata(this.coupon.value, 'coupon_update');
                this.router.navigate(['coupons']);
            }
            console.log(this.coupon.invalid);
            alert('SUCCESS!! :-)');
        }
    };
    CouponseditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.active.params.subscribe(function (params) {
            _this.id = params['id'];
            if (_this.id == undefined) {
                _this.title = "Add coupon";
            }
            else {
                _this.title = "Update coupon";
                _this.operation.Edit(params['id'], "editcoupon").subscribe(function (res) {
                    _this.x = res[0];
                    // put values in the form
                    console.log(res);
                    _this.coupon.setValue({
                        coupon_id: _this.x.coupon_id,
                        code: _this.x.code,
                        reward: _this.x.reward,
                        type: _this.x.type,
                        expires_at: _this.x.expires_at,
                    });
                });
            }
        });
        this.coupon = this.fb.group({
            coupon_id: [''],
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            reward: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            expires_at: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    };
    Object.defineProperty(CouponseditComponent.prototype, "f", {
        get: function () { return this.coupon.controls; },
        enumerable: true,
        configurable: true
    });
    CouponseditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-couponsedit',
            template: __webpack_require__(/*! ./couponsedit.component.html */ "./src/app/layout/couponsedit/couponsedit.component.html"),
            styles: [__webpack_require__(/*! ./couponsedit.component.scss */ "./src/app/layout/couponsedit/couponsedit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CouponseditComponent);
    return CouponseditComponent;
}());



/***/ }),

/***/ "./src/app/layout/couponsedit/couponsedit.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/couponsedit/couponsedit.module.ts ***!
  \**********************************************************/
/*! exports provided: CouponseditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponseditModule", function() { return CouponseditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _couponsedit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./couponsedit.component */ "./src/app/layout/couponsedit/couponsedit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _couponsedit_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./couponsedit-routing.module */ "./src/app/layout/couponsedit/couponsedit-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CouponseditModule = /** @class */ (function () {
    function CouponseditModule() {
    }
    CouponseditModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"],
                _couponsedit_routing_module__WEBPACK_IMPORTED_MODULE_6__["CouponseditRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            declarations: [
                _couponsedit_component__WEBPACK_IMPORTED_MODULE_3__["CouponseditComponent"]
            ]
        })
    ], CouponseditModule);
    return CouponseditModule;
}());



/***/ })

}]);
//# sourceMappingURL=couponsedit-couponsedit-module.js.map