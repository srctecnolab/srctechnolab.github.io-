(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menuview-menuview-module"],{

/***/ "./src/app/layout/menuview/menuview-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/menuview/menuview-routing.module.ts ***!
  \************************************************************/
/*! exports provided: MenuviewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuviewRoutingModule", function() { return MenuviewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menuview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuview.component */ "./src/app/layout/menuview/menuview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _menuview_component__WEBPACK_IMPORTED_MODULE_2__["MenuviewComponent"]
    }
];
var MenuviewRoutingModule = /** @class */ (function () {
    function MenuviewRoutingModule() {
    }
    MenuviewRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MenuviewRoutingModule);
    return MenuviewRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/menuview/menuview.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/menuview/menuview.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<div class=\"container-fluid  \" style=\"background-color: #f7f7f7; min-height: 50%;    color: #73879c;padding-bottom: 30px\">\n  <div>\n    <h1 class=\"h3\" style=\"padding-top: 20px;padding-bottom: 20px\">Support View</h1>\n\n  \n  </div>\n      <div style=\"\">\n     <div style=\"width: 600px;background-color:#d3e2f1;border-radius:7px;color: white ;padding-top: 20px;padding-bottom: 20px\" class=\"container-fluid\">\t\n   \n\n     <dl >\n    <dt >Title</dt>\n    <dd>{{x.title}}</dd>\n\n    <dt>Store</dt>\n    <dd>{{x.store}}</dd>\n\n    <dt>Image</dt>\n    <dd>{{x.image}}</dd>\n    \n    <dt >Price</dt>\n    <dd>{{x.price}}</dd>\n\n    <dt>Is Available?</dt>\n    <dd>{{x.is_available}}</dd>\n\n    <dt>Is Non Veg?</dt>\n    <dd>{{x.is_non_veg}}</dd>\n\n     <dt>Status:</dt>\n    <dd>{{x.status}}</dd>\n\n    <dt>Updated At</dt>\n    <dd>{{x.update_at}}</dd>\n\n    \n  </dl>\n\n  <button class=\"btn btn-primary\" [routerLink]=\"['/menu']\">BACK</button>\n     </div>\n\n\n      \n      </div>\n      <style > \n\n      dt{\n      \tcolor:#6787a7;\n      }\n      dd{\n      \tcolor:#a7aab1;\n      }\n  </style>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/layout/menuview/menuview.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/menuview/menuview.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tZW51dmlldy9tZW51dmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/menuview/menuview.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/menuview/menuview.component.ts ***!
  \*******************************************************/
/*! exports provided: MenuviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuviewComponent", function() { return MenuviewComponent; });
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



var MenuviewComponent = /** @class */ (function () {
    function MenuviewComponent(active, operation, router) {
        this.active = active;
        this.operation = operation;
        this.router = router;
    }
    MenuviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.active.params.subscribe(function (params) {
            _this.operation.Edit(params['id'], "menuview").subscribe(function (res) {
                _this.x = res[0];
                // put values in the form
                console.log(res);
            });
        });
    };
    MenuviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menuview',
            template: __webpack_require__(/*! ./menuview.component.html */ "./src/app/layout/menuview/menuview.component.html"),
            styles: [__webpack_require__(/*! ./menuview.component.scss */ "./src/app/layout/menuview/menuview.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _operation_service__WEBPACK_IMPORTED_MODULE_2__["OperationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuviewComponent);
    return MenuviewComponent;
}());



/***/ }),

/***/ "./src/app/layout/menuview/menuview.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/menuview/menuview.module.ts ***!
  \****************************************************/
/*! exports provided: MenuviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuviewModule", function() { return MenuviewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _menuview_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuview-routing.module */ "./src/app/layout/menuview/menuview-routing.module.ts");
/* harmony import */ var _menuview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menuview.component */ "./src/app/layout/menuview/menuview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MenuviewModule = /** @class */ (function () {
    function MenuviewModule() {
    }
    MenuviewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"],
                _menuview_routing_module__WEBPACK_IMPORTED_MODULE_3__["MenuviewRoutingModule"],
            ],
            declarations: [
                _menuview_component__WEBPACK_IMPORTED_MODULE_4__["MenuviewComponent"]
            ]
        })
    ], MenuviewModule);
    return MenuviewModule;
}());



/***/ })

}]);
//# sourceMappingURL=menuview-menuview-module.js.map