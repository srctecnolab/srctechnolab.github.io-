(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/layout/profile/profile-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/profile/profile-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component */ "./src/app/layout/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]
    }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/profile/profile.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/profile/profile.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid  \" style=\"background-color: #f7f7f7; min-height: 50%;    color: #73879c;\">\n\t<div>\n\t\t<h1 class=\"h3\" style=\"padding-top: 20px\">Delivery Profile</h1>\n\n\t\t<form>\n\t\t\t\n  <div class=\"\">\n            <div class=\"form-group  row\" style=\"padding-left:20px;\n    padding-top:30px;\">\n                \n               \n                   <strong  class=\"col-lg-1 text-center\" style=\"padding-top: 4px\">Search</strong>\n              \n                <div class=\"col-md-5\">\n                    \n                    <input id=\"search\" type=\"text\" class=\"form-control \" placeholder=\"Search user, store, address, total\" name=\"search\" required=\"\" value=\"\">\n\n                    \n                </div>\n                \n                    <div  class=\"col-md-3\"><button type=\"submit\" class=\"btn btn-success\"><i class=\"fa fa-search\"></i> Filter</button>\n                    <a title=\"Clear\" class=\"btn btn-default\" href=\"http://opuslabs.in:9081/admin/orders?\"><i class=\"fa fa-remove\"></i></a></div>\n               \n            </div>\n            \n        </div>\n\t\t</form>\n\t</div>\n\t<div style=\"overflow-x:auto;\">\n\t\t<table class=\"table table-striped table-bordered dt-responsive nowrap jambo_table\" cellspacing=\"0\" width=\"100%\">\n\t\t\t<thead>\n            <tr>\n                <th>Name</th>\n                <th>Is Online?</th>\n                <th>Assigned?</th>\n                <th>Latitude</th>\n                <th>Longitude</th>\n                <th>Created At</th>\n                <th>Updated At</th>\n                <th>Actions</th>\n            </tr>\n            </thead>\n            <tbody>\n                        \n                         <tr *ngFor=\"let x of data;let index=index\">\n                    \n                    <td>{{x.name}}</td>\n                    <td>{{x.is_online}}</td>\n                    <td>{{x.assigned}}</td>\n                    <td>{{x.latitude}}</td>\n                    <td>{{x.longitude}}</td>\n                    <td>{{x.created_at}}</td>\n                    <td>{{x.update_at}}</td>\n                    <td>\n                        <a class=\"btn btn-xs btn-primary\"  data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"\" title=\"\" [routerLink]=\"['/profileview',x.delivery_id]\">\n                            <i class=\"fa fa-eye\"></i>\n                        </a>\n                    </td>\n                </tr></tbody>\n\t\t\t\n\t\t</table>\n\n\n\t<div class=\"container-fluid\" style=\"text-align: center;\">\n\t\t<nav aria-label=\"Page navigation example\">\n  <ul class=\"pagination\">\n    <li class=\"page-item\">\n      <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n        <span aria-hidden=\"true\">&laquo;</span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n    </li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n    <li class=\"page-item\">\n      <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n        <span aria-hidden=\"true\">&raquo;</span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </li>\n  </ul>\n</nav></div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/layout/profile/profile.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/profile/profile.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit; }\n\na {\n  margin-left: 5px; }\n\ntable.jambo_table thead {\n  background: rgba(52, 73, 94, 0.94);\n  color: #ecf0f1; }\n\nth, td {\n  text-align: center;\n  padding: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUvSDpcXGpzXFxwcm9qZWN0XFxTQi1BZG1pbi1CUzQtQW5ndWxhci02LW1hc3Rlci9zcmNcXGFwcFxcbGF5b3V0XFxwcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdsQjtFQUNFLGdCQUFnQixFQUFBOztBQUlsQjtFQUNJLGtDQUE4QjtFQUM5QixjQUFjLEVBQUE7O0FBRWxCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuYXtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICBcclxufVxyXG5cclxudGFibGUuamFtYm9fdGFibGUgdGhlYWQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg1Miw3Myw5NCwuOTQpO1xyXG4gICAgY29sb3I6ICNlY2YwZjE7XHJcbn1cclxudGgsIHRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/profile/profile.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/profile/profile.component.ts ***!
  \*****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operation.service */ "./src/app/layout/operation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(operation) {
        this.operation = operation;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.operation.showdataProfile("show_profile").subscribe(function (res) { return _this.data = res; });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/layout/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/layout/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_operation_service__WEBPACK_IMPORTED_MODULE_1__["OperationService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/layout/profile/profile.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/profile/profile.module.ts ***!
  \**************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "./src/app/layout/profile/profile.component.ts");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/layout/profile/profile-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProfileRoutingModule"],
            ],
            declarations: [
                _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map