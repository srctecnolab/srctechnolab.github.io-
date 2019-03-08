(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profileview-profileview-module"],{

/***/ "./src/app/layout/profileview/profileview-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/profileview/profileview-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ProfileviewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileviewRoutingModule", function() { return ProfileviewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profileview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profileview.component */ "./src/app/layout/profileview/profileview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _profileview_component__WEBPACK_IMPORTED_MODULE_2__["ProfileviewComponent"]
    }
];
var ProfileviewRoutingModule = /** @class */ (function () {
    function ProfileviewRoutingModule() {
    }
    ProfileviewRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProfileviewRoutingModule);
    return ProfileviewRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/profileview/profileview.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/profileview/profileview.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<div class=\"container-fluid  \" style=\"background-color: #f7f7f7; min-height: 50%;    color: #73879c;padding-bottom: 30px\">\n  <div>\n    <h1 class=\"h3\" style=\"padding-top: 20px;padding-bottom: 20px\">Delivery Profiles View</h1>\n\n  \n  </div>\n      <div style=\"\">\n     <div style=\"width: 600px;background-color:#d3e2f1;border-radius:7px;color: white ;padding-top: 20px;padding-bottom: 20px\" class=\"container-fluid\">\t\n   \n\n     <dl >\n    <dt >Name</dt>\n    <dd>{{x.name}}</dd>\n\n    <dt>Is Online?</dt>\n    <dd>{{x.is_online}}</dd>\n\n    <dt>Assigned?</dt>\n    <dd>{{x.assigned}}</dd>\n\n    <dt>Latitude</dt>\n    <dd>{{x.latitude}}</dd>\n\n    <dt>Longitude</dt>\n    <dd>{{x.longitude}}</dd>\n    \n    <dt>Created At</dt>\n    <dd>{{x.created_at}}</dd>\n\n    <dt>Updated At</dt>\n    <dd>{{x.update_at}}</dd>\n\n  </dl>\n\n  <button class=\"btn btn-primary\" [routerLink]=\"['/profile']\">BACK</button>\n     </div>\n\n\n      \n      </div>\n      <style > \n\n      dt{\n      \tcolor:#6787a7;\n      }\n      dd{\n      \tcolor:#a7aab1;\n      }\n  </style>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/layout/profileview/profileview.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/profileview/profileview.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wcm9maWxldmlldy9wcm9maWxldmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/profileview/profileview.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/profileview/profileview.component.ts ***!
  \*************************************************************/
/*! exports provided: ProfileviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileviewComponent", function() { return ProfileviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operation.service */ "./src/app/layout/operation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileviewComponent = /** @class */ (function () {
    function ProfileviewComponent(active, operation, router) {
        this.active = active;
        this.operation = operation;
        this.router = router;
    }
    ProfileviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.active.params.subscribe(function (params) {
            _this.operation.Edit(params['id'], "profileview").subscribe(function (res) {
                _this.x = res[0];
                // put values in the form
                console.log(res);
            });
        });
    };
    ProfileviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profileview',
            template: __webpack_require__(/*! ./profileview.component.html */ "./src/app/layout/profileview/profileview.component.html"),
            styles: [__webpack_require__(/*! ./profileview.component.scss */ "./src/app/layout/profileview/profileview.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _operation_service__WEBPACK_IMPORTED_MODULE_2__["OperationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProfileviewComponent);
    return ProfileviewComponent;
}());



/***/ }),

/***/ "./src/app/layout/profileview/profileview.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/profileview/profileview.module.ts ***!
  \**********************************************************/
/*! exports provided: ProfileviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileviewModule", function() { return ProfileviewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _profileview_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profileview-routing.module */ "./src/app/layout/profileview/profileview-routing.module.ts");
/* harmony import */ var _profileview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profileview.component */ "./src/app/layout/profileview/profileview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProfileviewModule = /** @class */ (function () {
    function ProfileviewModule() {
    }
    ProfileviewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"],
                _profileview_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileviewRoutingModule"],
            ],
            declarations: [
                _profileview_component__WEBPACK_IMPORTED_MODULE_4__["ProfileviewComponent"]
            ]
        })
    ], ProfileviewModule);
    return ProfileviewModule;
}());



/***/ })

}]);
//# sourceMappingURL=profileview-profileview-module.js.map