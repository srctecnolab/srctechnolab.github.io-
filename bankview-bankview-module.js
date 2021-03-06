(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bankview-bankview-module"],{

/***/ "./src/app/layout/bankview/bankview-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/bankview/bankview-routing.module.ts ***!
  \************************************************************/
/*! exports provided: BankviewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankviewRoutingModule", function() { return BankviewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bankview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bankview.component */ "./src/app/layout/bankview/bankview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _bankview_component__WEBPACK_IMPORTED_MODULE_2__["BankviewComponent"]
    }
];
var BankviewRoutingModule = /** @class */ (function () {
    function BankviewRoutingModule() {
    }
    BankviewRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BankviewRoutingModule);
    return BankviewRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/bankview/bankview.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/bankview/bankview.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<div class=\"container-fluid  \" style=\"background-color: #f7f7f7; min-height: 50%;    color: #73879c;padding-bottom: 30px\">\n  <div>\n    <h1 class=\"h3\" style=\"padding-top: 20px;padding-bottom: 20px\">Bank View</h1>\n\n  \n  </div>\n      <div style=\"\">\n     <div style=\"width: 600px;background-color:#d3e2f1;border-radius:7px;color: white ;padding-top: 20px;padding-bottom: 20px\" class=\"container-fluid\">\t\n   \n\n     <dl >\n    <dt >Name</dt>\n    <dd>{{x.name}}</dd>\n\n    <dt>User Id</dt>\n    <dd>{{x.user_id}}</dd>\n\n    <dt>IFSC</dt>\n    <dd>{{x.ifsc}}</dd>\n    \n    <dt>Updated At</dt>\n    <dd>{{x.created_at}}</dd>\n\n    <dt>Updated At</dt>\n    <dd>{{x.updated_at}}</dd>\n\n    \n  </dl>\n\n  <button class=\"btn btn-primary\" [routerLink]=\"['/bank']\">BACK</button>\n     </div>\n\n\n      \n      </div>\n      <style > \n\n      dt{\n      \tcolor:#6787a7;\n      }\n      dd{\n      \tcolor:#a7aab1;\n      }\n  </style>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/layout/bankview/bankview.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/bankview/bankview.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9iYW5rdmlldy9iYW5rdmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/bankview/bankview.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/bankview/bankview.component.ts ***!
  \*******************************************************/
/*! exports provided: BankviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankviewComponent", function() { return BankviewComponent; });
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



var BankviewComponent = /** @class */ (function () {
    function BankviewComponent(active, operation, router) {
        this.active = active;
        this.operation = operation;
        this.router = router;
    }
    BankviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.active.params.subscribe(function (params) {
            _this.operation.Edit(params['id'], "bankview").subscribe(function (res) {
                _this.x = res[0];
                // put values in the form
                console.log(res);
            });
        });
    };
    BankviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bankview',
            template: __webpack_require__(/*! ./bankview.component.html */ "./src/app/layout/bankview/bankview.component.html"),
            styles: [__webpack_require__(/*! ./bankview.component.scss */ "./src/app/layout/bankview/bankview.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _operation_service__WEBPACK_IMPORTED_MODULE_2__["OperationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BankviewComponent);
    return BankviewComponent;
}());



/***/ }),

/***/ "./src/app/layout/bankview/bankview.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/bankview/bankview.module.ts ***!
  \****************************************************/
/*! exports provided: BankviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankviewModule", function() { return BankviewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _bankview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bankview.component */ "./src/app/layout/bankview/bankview.component.ts");
/* harmony import */ var _bankview_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bankview-routing.module */ "./src/app/layout/bankview/bankview-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BankviewModule = /** @class */ (function () {
    function BankviewModule() {
    }
    BankviewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"],
                _bankview_routing_module__WEBPACK_IMPORTED_MODULE_4__["BankviewRoutingModule"],
            ],
            declarations: [
                _bankview_component__WEBPACK_IMPORTED_MODULE_3__["BankviewComponent"]
            ]
        })
    ], BankviewModule);
    return BankviewModule;
}());



/***/ })

}]);
//# sourceMappingURL=bankview-bankview-module.js.map