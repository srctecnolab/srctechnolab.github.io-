(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"],{

/***/ "./src/app/layout/order/order-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/order/order-routing.module.ts ***!
  \******************************************************/
/*! exports provided: OrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function() { return OrderRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.component */ "./src/app/layout/order/order.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _order_component__WEBPACK_IMPORTED_MODULE_2__["OrderComponent"]
    }
];
var OrderRoutingModule = /** @class */ (function () {
    function OrderRoutingModule() {
    }
    OrderRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OrderRoutingModule);
    return OrderRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/order/order.component.html":
/*!***************************************************!*\
  !*** ./src/app/layout/order/order.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid  \" style=\"background-color: #f7f7f7; min-height: 50%; padding-top: 20px;   color: #73879c;\" >\n\t<div>\n\t\t<h1 class=\"h3\">Orders</h1>\n       <form>\n       \t <div class=\"\">\n            <strong>Order Status: </strong>\n            <a class=\"btn btn-primary\" [routerLink]=\"['/orderedit']\">New</a>\n            <a class=\"btn btn-warning\" href=\"http://opuslabs.in:9081/admin/orders?status=pending\">Pending</a>\n            <a class=\"btn btn-danger\" href=\"http://opuslabs.in:9081/admin/orders?status=cancelled\">Cancelled</a>\n            <a class=\"btn btn-success\" href=\"http://opuslabs.in:9081/admin/orders?status=accepted\">Accepted</a>\n            <a class=\"btn btn-danger\" href=\"http://opuslabs.in:9081/admin/orders?status=rejected\">Rejected</a>\n            <a class=\"btn btn-info\" href=\"http://opuslabs.in:9081/admin/orders?status=preparing\">Preparing</a>\n            <a class=\"btn btn-info\" href=\"http://opuslabs.in:9081/admin/orders?status=dispatched\">Dispatched</a>\n            <a class=\"btn btn-info\" href=\"http://opuslabs.in:9081/admin/orders?status=intransit\">Intransit</a>\n            <a class=\"btn btn-success\" href=\"http://opuslabs.in:9081/admin/orders?status=complete\">Complete</a>\n            <a title=\"Clear\" class=\"btn btn-default\" href=\"http://opuslabs.in:9081/admin/orders?\"><i class=\"fa fa-remove\"></i></a>\n        </div>\n\n         <div style=\"margin-top: 5px\">\n            <strong>Delivery Status: </strong> &nbsp;\n            <a class=\"btn btn-warning\" href=\"http://opuslabs.in:9081/admin/orders?delivery_status=pending\">Pending</a>\n            <a class=\"btn btn-success\" href=\"http://opuslabs.in:9081/admin/orders?delivery_status=allotted\">Allotted</a>\n            <a class=\"btn btn-info\" href=\"http://opuslabs.in:9081/admin/orders?delivery_status=started\">Started</a>\n            <a class=\"btn btn-danger\" href=\"http://opuslabs.in:9081/admin/orders?delivery_status=cancelled\">Cancelled</a>\n            <a class=\"btn btn-success\" href=\"http://opuslabs.in:9081/admin/orders?delivery_status=complete\">Complete</a>\n            <a title=\"Clear\" class=\"btn btn-default\" href=\"http://opuslabs.in:9081/admin/orders?\"><i class=\"fa fa-remove\"></i></a>\n        </div>\n        <div style=\"margin-top: 5px\">\n            <strong>Payment Status: </strong>\n            <a class=\"btn btn-warning\" href=\"http://opuslabs.in:9081/admin/orders?payment_status=paid\">Paid</a>\n            <a class=\"btn btn-success\" href=\"http://opuslabs.in:9081/admin/orders?payment_status=unpaid\">Unpaid</a>\n            <a title=\"Clear\" class=\"btn btn-default\" href=\"http://opuslabs.in:9081/admin/orders?\"><i class=\"fa fa-remove\"></i></a>\n        </div>\n\n\n        <div class=\"form-group row\" style=\"margin: 30px 0 30px 0;\">\n            <label >\n              <strong> Order Create Date:</strong>  \n            </label>\n\n            <div class=\"col-md-3 \">\n                <input id=\"from\" type=\"date\" class=\"form-control \" placeholder=\"Date From\" name=\"from\" value=\"\">\n            </div>\n            <div class=\"col-md-3 \">\n                <input id=\"to\" type=\"date\" class=\"form-control \" placeholder=\"Date To\" name=\"to\" value=\"\">\n            </div>\n            <div class=\"col-md-3 \">\n                <button type=\"submit\" class=\"btn btn-success\"><i class=\"fa fa-search\"></i> Filter</button>\n                <a title=\"Clear\" class=\"btn btn-default\" href=\"http://opuslabs.in:9081/admin/orders?\"><i class=\"fa fa-remove\"></i></a>\n            </div>\n        </div>\n\n  <div class=\"\">\n            <div class=\"form-group  row\">\n                \n                <label class=\"control-label col-md-2 \" for=\"search\">\n                    <strong>Search</strong>\n                </label>\n                <div class=\"col-md-6\">\n                \t\n                    <input id=\"search\" type=\"text\" class=\"form-control \" placeholder=\"Search user, store, address, total\" name=\"search\" required=\"\" value=\"\">\n\n                    \n                </div>\n                \n                    <div  class=\"col-md-3\"><button type=\"submit\" class=\"btn btn-success\"><i class=\"fa fa-search\"></i> Filter</button>\n                    <a title=\"Clear\" class=\"btn btn-default\" href=\"http://opuslabs.in:9081/admin/orders?\"><i class=\"fa fa-remove\"></i></a></div>\n               \n            </div>\n            \n        </div>\n\n\n       </form>\n\t</div>\n\n\t<div>\n\t\t<table class=\"table table-striped table-bordered dt-responsive nowrap jambo_table\" cellspacing=\"0\" width=\"100%\">\n\t\t\t<thead>\n            <tr>\n                <th>User ID</th>\n                <th>Store ID</th>\n                <th>Total</th>\n                <th>Status</th>\n                <th>Delivery Status</th>\n                <th>Payment Status</th>\n                <th>Delivery At</th>\n                <th>Created At</th>\n                <th>Updated At</th>\n                <th>Actions</th>\n            </tr>\n            </thead>\n            <tbody>\n                            <tr *ngFor=\"let x of data\">\n                    <td><a href=\"http://opuslabs.in:9081/admin/stores/4\">{{x.user_id}}</a></td>\n\n                    <td><a href=\"http://opuslabs.in:9081/admin/users/5\">{{x.store_id}}</a></td>\n                    <td>{{x.total}}</td>\n                    <td>{{x.status}}</td>\n                    <td>{{x.delivery_status}}</td>\n                    <td>{{x.payment_status}}</td>\n                    <td>{{x.delivery_at}}</td>\n\n                    <td>\n                            {{x.created_at}}\n                     \n                    </td>\n                    <td>{{x.update_at}}</td>\n                    <td>\n                       <a [routerLink]=\"['/menuview',x.order_id]\" class=\"btn btn-xs btn-primary\"  >\n                            <i class=\"fa fa-eye\"></i>\n                        </a>\n                        <a [routerLink]=\"['/orderedit',x.order_id]\" class=\"btn btn-xs btn-info\" >\n                            <i class=\"fa fa-pencil\"></i>\n                        </a>\n                    </td>\n                </tr></tbody>\n\t\t\t\n\t\t</table>\n\n\n\t<div class=\"container-fluid\" style=\"text-align: center;background-color: white\">\n\t\t<nav aria-label=\"Page navigation example\">\n  <ul class=\"pagination\">\n    <li class=\"page-item\">\n      <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n        <span aria-hidden=\"true\">&laquo;</span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n    </li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n    <li class=\"page-item\">\n      <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n        <span aria-hidden=\"true\">&raquo;</span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </li>\n  </ul>\n</nav></div>\n\t</div>\n\n</div>\n\n\n\n\n\n\n\n\n "

/***/ }),

/***/ "./src/app/layout/order/order.component.scss":
/*!***************************************************!*\
  !*** ./src/app/layout/order/order.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit; }\n\na {\n  margin-left: 5px; }\n\ntable.jambo_table thead {\n  background: rgba(52, 73, 94, 0.94);\n  color: #ecf0f1; }\n\nth, td {\n  text-align: center;\n  padding: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L29yZGVyL0g6XFxqc1xccHJvamVjdFxcU0ItQWRtaW4tQlM0LUFuZ3VsYXItNi1tYXN0ZXIvc3JjXFxhcHBcXGxheW91dFxcb3JkZXJcXG9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdsQjtFQUNDLGdCQUFnQixFQUFBOztBQUlqQjtFQUNJLGtDQUE4QjtFQUM5QixjQUFjLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oMSwgLmgyLCAuaDMsIC5oNCwgLmg1LCAuaDYsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG5he1xyXG5cdG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgIFxyXG59XHJcblxyXG50YWJsZS5qYW1ib190YWJsZSB0aGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDUyLDczLDk0LC45NCk7XHJcbiAgICBjb2xvcjogI2VjZjBmMTtcclxufVxyXG5cclxudGgsIHRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/order/order.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/order/order.component.ts ***!
  \*************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
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


var OrderComponent = /** @class */ (function () {
    function OrderComponent(operation) {
        this.operation = operation;
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.operation.showdataOrder("show_order").subscribe(function (res) { return _this.data = res; });
    };
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/layout/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.scss */ "./src/app/layout/order/order.component.scss")]
        }),
        __metadata("design:paramtypes", [_operation_service__WEBPACK_IMPORTED_MODULE_1__["OperationService"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/layout/order/order.module.ts":
/*!**********************************************!*\
  !*** ./src/app/layout/order/order.module.ts ***!
  \**********************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.component */ "./src/app/layout/order/order.component.ts");
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-routing.module */ "./src/app/layout/order/order-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"],
                _order_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrderRoutingModule"],
            ],
            declarations: [
                _order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"]
            ]
        })
    ], OrderModule);
    return OrderModule;
}());



/***/ })

}]);
//# sourceMappingURL=order-order-module.js.map