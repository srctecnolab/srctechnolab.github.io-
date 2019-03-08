(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-support-module"],{

/***/ "./src/app/layout/support/support-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/support/support-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: SupportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportRoutingModule", function() { return SupportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _support_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support.component */ "./src/app/layout/support/support.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _support_component__WEBPACK_IMPORTED_MODULE_2__["SupportComponent"]
    }
];
var SupportRoutingModule = /** @class */ (function () {
    function SupportRoutingModule() {
    }
    SupportRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SupportRoutingModule);
    return SupportRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/support/support.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/support/support.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"container-fluid  \" style=\"background-color: #f7f7f7; min-height: 50%;    color: #73879c;\">\r\n  <div>\r\n    <h1 class=\"h3\" style=\"padding-top: 20px;padding-bottom: 20px\">Support</h1>\r\n\r\n  \r\n  </div>\r\n  <div style=\"overflow-x:auto;\">\r\n    <table class=\"table table-striped table-bordered dt-responsive nowrap jambo_table\" cellspacing=\"0\" width=\"100%\">\r\n      <thead>\r\n            <tr>\r\n                <th>Name</th>\r\n                <th>Email</th>\r\n                <th>Created At</th>\r\n                <th>Updated At</th>\r\n                <th>Actions</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n                        \r\n                         <tr *ngFor=\"let x of data;let index=index\">\r\n                    <td>{{x.name}}</td>\r\n                    <td>{{x.email}}</td>\r\n                    <td>{{x.create_at}}</td>\r\n                    <td>{{x.update_at}}</td>\r\n                    \r\n                    <td>\r\n                        <a class=\"btn btn-xs btn-primary\"  data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"\" title=\"\"  [routerLink]=\"['/supportview',x.support_id]\">\r\n                            <i class=\"fa fa-eye\"></i>\r\n                        </a>\r\n                    </td>\r\n                </tr></tbody>\r\n      \r\n    </table>\r\n\r\n\r\n  <div class=\"container-fluid\" style=\"text-align: center;\">\r\n    <nav aria-label=\"Page navigation example\">\r\n  <ul class=\"pagination\">\r\n    <li class=\"page-item\">\r\n      <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\r\n        <span aria-hidden=\"true\">&laquo;</span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n    </li>\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n    <li class=\"page-item\">\r\n      <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\r\n        <span aria-hidden=\"true\">&raquo;</span>\r\n        <span class=\"sr-only\">Next</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav></div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/support/support.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/support/support.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit; }\n\na {\n  margin-left: 5px; }\n\ntable.jambo_table thead {\n  background: rgba(52, 73, 94, 0.94);\n  color: #ecf0f1; }\n\nth, td {\n  text-align: center;\n  padding: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3N1cHBvcnQvSDpcXGpzXFxwcm9qZWN0XFxTQi1BZG1pbi1CUzQtQW5ndWxhci02LW1hc3Rlci9zcmNcXGFwcFxcbGF5b3V0XFxzdXBwb3J0XFxzdXBwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdsQjtFQUNFLGdCQUFnQixFQUFBOztBQUlsQjtFQUNJLGtDQUE4QjtFQUM5QixjQUFjLEVBQUE7O0FBRWxCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zdXBwb3J0L3N1cHBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuYXtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICBcclxufVxyXG5cclxudGFibGUuamFtYm9fdGFibGUgdGhlYWQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg1Miw3Myw5NCwuOTQpO1xyXG4gICAgY29sb3I6ICNlY2YwZjE7XHJcbn1cclxudGgsIHRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/support/support.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/support/support.component.ts ***!
  \*****************************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
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


var SupportComponent = /** @class */ (function () {
    function SupportComponent(operation) {
        this.operation = operation;
    }
    SupportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.operation.showdataSupport("show_support").subscribe(function (res) { return _this.data = res; });
    };
    SupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.component.html */ "./src/app/layout/support/support.component.html"),
            styles: [__webpack_require__(/*! ./support.component.scss */ "./src/app/layout/support/support.component.scss")]
        }),
        __metadata("design:paramtypes", [_operation_service__WEBPACK_IMPORTED_MODULE_1__["OperationService"]])
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "./src/app/layout/support/support.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/support/support.module.ts ***!
  \**************************************************/
/*! exports provided: SupportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportModule", function() { return SupportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./support-routing.module */ "./src/app/layout/support/support-routing.module.ts");
/* harmony import */ var _support_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./support.component */ "./src/app/layout/support/support.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SupportModule = /** @class */ (function () {
    function SupportModule() {
    }
    SupportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"],
                _support_routing_module__WEBPACK_IMPORTED_MODULE_3__["SupportRoutingModule"],
            ],
            declarations: [
                _support_component__WEBPACK_IMPORTED_MODULE_4__["SupportComponent"]
            ]
        })
    ], SupportModule);
    return SupportModule;
}());



/***/ })

}]);
//# sourceMappingURL=support-support-module.js.map