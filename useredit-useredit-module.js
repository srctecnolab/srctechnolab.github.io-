(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["useredit-useredit-module"],{

/***/ "./src/app/layout/useredit/useredit-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/useredit/useredit-routing.module.ts ***!
  \************************************************************/
/*! exports provided: UsereditRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsereditRoutingModule", function() { return UsereditRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _useredit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useredit.component */ "./src/app/layout/useredit/useredit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _useredit_component__WEBPACK_IMPORTED_MODULE_2__["UsereditComponent"]
    }
];
var UsereditRoutingModule = /** @class */ (function () {
    function UsereditRoutingModule() {
    }
    UsereditRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UsereditRoutingModule);
    return UsereditRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/useredit/useredit.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/useredit/useredit.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<div class=\"container-fluid  \" style=\"background-color: #f7f7f7; min-height: 50%;    color: #73879c;padding-bottom: 30px\">\n  <div>\n    <h1 class=\"h3\" style=\"padding-top: 20px;padding-bottom: 20px\">{{title}}</h1>\n\n  \n  </div>\n      <div style=\"\">\n      \t<form  style=\"padding-left: 200px\" [formGroup]=\"user\" (ngSubmit)=\"update()\">\n\n          <div class=\"col-md-6 form-group\">\n          <label for=\"name\">Email: </label>\n          <input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Enter course email...\"[ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n           <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                            <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                        </div>\n        </div>\n\n\n        <div class=\"col-md-6 form-group\">\n          <label for=\"name\">Mobile:</label>\n          <input type=\"tel\" formControlName=\"mobile\" class=\"form-control\" placeholder=\"Enter course mobile...\"  [ngClass]=\"{ 'is-invalid': submitted && f.mobile.errors }\">\n           <div *ngIf=\"submitted && f.mobile.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.mobile.errors.required\">Mobile no. is required</div>\n                        </div>\n        </div>\n\n        <div class=\"col-md-6 form-group\">\n          <label for=\"name\">Name*: </label>\n          <input type=\"text\" formControlName=\"name\" class=\"form-control\" placeholder=\"Enter name name...\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\n\n           <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.name.errors.required\">Name is required</div>\n                        </div>\n        </div>\n\n        <div class=\"col-md-6 form-group\">\n          <label for=\"name\">Roles: </label>\n          <select formControlName=\"roles\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.roles.errors }\">\n        <option value=\"store\">Store</option>\n        <option value=\"delivery\">Delivery</option>\n        <option value=\"user\">User</option>\n        </select>\n        <div *ngIf=\"submitted && f.roles.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.roles.errors.required\">Roles is required</div>\n                        </div>\n        </div>\n\n        <div class=\"col-md-6 form-group\">\n          <label for=\"mobile_varified\">Mobile Varified </label>\n            <select formControlName=\"mobile_varified\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.mobile_varified.errors }\" placeholder=\"select \">\n        <option value=\"done\">Done</option>\n        <option value=\"not done\">not done</option>\n        </select>\n          <div *ngIf=\"submitted && f.mobile_varified.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.mobile_varified.errors.required\">Mobile Varified is required</div>\n                        </div>\n        </div>\n          \n\n           <div class=\"col-md-6 form-group\">\n          <label for=\"quick_links\">Quick Links</label>\n          <input type=\"text\" formControlName=\"quick_links\" class=\"form-control\" placeholder=\"Enter Your quick_links...\" [ngClass]=\"{ 'is-invalid': submitted && f.quick_links.errors }\">\n          <div *ngIf=\"submitted && f.quick_links.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.quick_links.errors.required\">Quick Links is required</div>\n                        </div>\n        </div>\n\n      \n\n            <div class=\"col-md-offset-5 col-md-6 form-group\">\n              <input type=\"submit\" value=\"submit\" [disabled]=\"loading\" class=\"btn btn-primary\">\n            </div>\n          </form>\n\n{{user.value|json}}\n      </div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/layout/useredit/useredit.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/useredit/useredit.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\n  font-family: inherit;\n  font-weight: 800;\n  line-height: 1.1;\n  color: inherit; }\n\nlabel {\n  font-family: inherit;\n  font-weight: 800;\n  line-height: 1.1;\n  color: inherit; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VzZXJlZGl0L0g6XFxqc1xccHJvamVjdFxcU0ItQWRtaW4tQlM0LUFuZ3VsYXItNi1tYXN0ZXIvc3JjXFxhcHBcXGxheW91dFxcdXNlcmVkaXRcXHVzZXJlZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdsQjtFQUNFLG9CQUFvQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC91c2VyZWRpdC91c2VyZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oMSwgLmgyLCAuaDMsIC5oNCwgLmg1LCAuaDYsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG59IFxyXG5cclxubGFiZWx7XHJcblx0IGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/useredit/useredit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/useredit/useredit.component.ts ***!
  \*******************************************************/
/*! exports provided: UsereditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsereditComponent", function() { return UsereditComponent; });
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




var UsereditComponent = /** @class */ (function () {
    function UsereditComponent(fb, active, operation, router) {
        this.fb = fb;
        this.active = active;
        this.operation = operation;
        this.router = router;
        this.model = {};
        this.submitted = false;
    }
    UsereditComponent.prototype.update = function () {
        //insert and update user
        if (this.id == undefined) {
            this.submitted = true;
            if (this.user.invalid) {
                return;
            }
            else {
                this.operation.insertdata(this.user.value, "user_reg");
                this.router.navigate(['user']);
            }
        }
        else {
            this.submitted = true;
            // stop here if form is invalid
            if (this.user.invalid) {
                return;
            }
            else {
                this.operation.updatedata(this.user.value, 'user_update');
                this.router.navigate(['user']);
            }
            console.log(this.user.invalid);
            alert('SUCCESS!! :-)');
        }
    };
    UsereditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.active.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log(_this.id);
            if (_this.id == undefined) {
                _this.title = "Add User";
            }
            else {
                _this.title = "Update User";
                _this.operation.Edit(params['id'], "edituser").subscribe(function (res) {
                    _this.x = res[0];
                    // put values in the form
                    console.log(res);
                    _this.user.setValue({
                        user_id: _this.x.user_id,
                        email: _this.x.email,
                        mobile: _this.x.mobile,
                        name: _this.x.name,
                        roles: _this.x.roles,
                        mobile_varified: _this.x.mobile_varified,
                        quick_links: _this.x.quick_links
                    });
                });
            }
        });
        this.user = this.fb.group({
            user_id: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            roles: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mobile_varified: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            quick_links: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    Object.defineProperty(UsereditComponent.prototype, "f", {
        get: function () { return this.user.controls; },
        enumerable: true,
        configurable: true
    });
    UsereditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-useredit',
            template: __webpack_require__(/*! ./useredit.component.html */ "./src/app/layout/useredit/useredit.component.html"),
            styles: [__webpack_require__(/*! ./useredit.component.scss */ "./src/app/layout/useredit/useredit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UsereditComponent);
    return UsereditComponent;
}());



/***/ }),

/***/ "./src/app/layout/useredit/useredit.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/useredit/useredit.module.ts ***!
  \****************************************************/
/*! exports provided: UsereditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsereditModule", function() { return UsereditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _useredit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useredit.component */ "./src/app/layout/useredit/useredit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _useredit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useredit-routing.module */ "./src/app/layout/useredit/useredit-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UsereditModule = /** @class */ (function () {
    function UsereditModule() {
    }
    UsereditModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"],
                _useredit_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsereditRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            declarations: [
                _useredit_component__WEBPACK_IMPORTED_MODULE_3__["UsereditComponent"]
            ]
        })
    ], UsereditModule);
    return UsereditModule;
}());



/***/ })

}]);
//# sourceMappingURL=useredit-useredit-module.js.map