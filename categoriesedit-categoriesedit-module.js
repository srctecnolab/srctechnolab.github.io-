(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categoriesedit-categoriesedit-module"],{

/***/ "./src/app/layout/categoriesedit/categoriesedit-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/categoriesedit/categoriesedit-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: CategorieseditRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorieseditRoutingModule", function() { return CategorieseditRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _categoriesedit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categoriesedit.component */ "./src/app/layout/categoriesedit/categoriesedit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _categoriesedit_component__WEBPACK_IMPORTED_MODULE_2__["CategorieseditComponent"]
    }
];
var CategorieseditRoutingModule = /** @class */ (function () {
    function CategorieseditRoutingModule() {
    }
    CategorieseditRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CategorieseditRoutingModule);
    return CategorieseditRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/categoriesedit/categoriesedit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/categoriesedit/categoriesedit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<div class=\"container-fluid  \" style=\"background-color: #f7f7f7; min-height: 50%;    color: #73879c;padding-bottom: 30px\">\n  <div>\n    <h1 class=\"h3\" style=\"padding-top: 20px;padding-bottom: 20px\">{{title}}</h1>\n\n  \n  </div>\n      <div style=\"\">\n      \t<form  style=\"padding-left: 200px\" [formGroup]=\"cat\" (ngSubmit)=\"update()\">\n\n          \n\n\n        \n\n        <div class=\"col-md-6 form-group\">\n          <label for=\"title\">Title: </label>\n          <input type=\"text\" formControlName=\"title\" class=\"form-control\" placeholder=\"Enter title...\" [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\">\n\n           <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.title.errors.required\">Title is required</div>\n                        </div>\n        </div>\n\n        <div class=\"col-md-6 form-group\">\n          <label for=\"image_url\">Image URL?: </label>\n          <input type=\"text\" formControlName=\"image_url\" class=\"form-control\" placeholder=\"Enter image_url...\" [ngClass]=\"{ 'is-invalid': submitted && f.image_url.errors }\">\n\n           <div *ngIf=\"submitted && f.image_url.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.image_url.errors.required\">Image URL?: is required</div>\n                        </div>\n        </div>\n\n        <div class=\"col-md-6 form-group\">\n          <label for=\"slug\">Slug: </label>\n          <input type=\"text\" formControlName=\"slug\" class=\"form-control\" placeholder=\"Enter slug...\" [ngClass]=\"{ 'is-invalid': submitted && f.slug.errors }\">\n\n           <div *ngIf=\"submitted && f.slug.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.slug.errors.required\">slug is required</div>\n                        </div>\n        </div>\n      \n\n            <div class=\"col-md-offset-5 col-md-6 form-group\">\n              <input type=\"submit\" value=\"submit\" [disabled]=\"loading\" class=\"btn btn-primary\">\n            </div>\n          </form>\n\n{{cat.value|json}}\n      </div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/layout/categoriesedit/categoriesedit.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/categoriesedit/categoriesedit.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jYXRlZ29yaWVzZWRpdC9jYXRlZ29yaWVzZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/categoriesedit/categoriesedit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/categoriesedit/categoriesedit.component.ts ***!
  \*******************************************************************/
/*! exports provided: CategorieseditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorieseditComponent", function() { return CategorieseditComponent; });
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




var CategorieseditComponent = /** @class */ (function () {
    function CategorieseditComponent(fb, active, operation, router) {
        this.fb = fb;
        this.active = active;
        this.operation = operation;
        this.router = router;
        this.model = {};
        this.submitted = false;
    }
    CategorieseditComponent.prototype.update = function () {
        //insert and update cat
        if (this.id == undefined) {
            this.submitted = true;
            if (this.cat.invalid) {
                return;
            }
            else {
                this.operation.insertdata(this.cat.value, "cat_reg");
                this.router.navigate(['categories']);
            }
        }
        else {
            this.submitted = true;
            // stop here if form is invalid
            if (this.cat.invalid) {
                return;
            }
            else {
                this.operation.updatedata(this.cat.value, 'cat_update');
                this.router.navigate(['categories']);
            }
            console.log(this.cat.invalid);
            alert('SUCCESS!! :-)');
        }
    };
    CategorieseditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.active.params.subscribe(function (params) {
            _this.id = params['id'];
            if (_this.id == undefined) {
                _this.title = "Add Categories";
            }
            else {
                _this.title = "Update Categories";
                _this.operation.Edit(params['id'], "editcat").subscribe(function (res) {
                    _this.x = res[0];
                    // put values in the form
                    console.log(res);
                    _this.cat.setValue({
                        categories_id: _this.x.categories_id,
                        title: _this.x.title,
                        image_url: _this.x.image_url,
                        slug: _this.x.slug,
                    });
                });
            }
        });
        this.cat = this.fb.group({
            categories_id: [''],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            image_url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            slug: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    Object.defineProperty(CategorieseditComponent.prototype, "f", {
        get: function () { return this.cat.controls; },
        enumerable: true,
        configurable: true
    });
    CategorieseditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categoriesedit',
            template: __webpack_require__(/*! ./categoriesedit.component.html */ "./src/app/layout/categoriesedit/categoriesedit.component.html"),
            styles: [__webpack_require__(/*! ./categoriesedit.component.scss */ "./src/app/layout/categoriesedit/categoriesedit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CategorieseditComponent);
    return CategorieseditComponent;
}());



/***/ }),

/***/ "./src/app/layout/categoriesedit/categoriesedit.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/categoriesedit/categoriesedit.module.ts ***!
  \****************************************************************/
/*! exports provided: CategorieseditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorieseditModule", function() { return CategorieseditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _categoriesedit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categoriesedit.component */ "./src/app/layout/categoriesedit/categoriesedit.component.ts");
/* harmony import */ var _categoriesedit_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categoriesedit-routing.module */ "./src/app/layout/categoriesedit/categoriesedit-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CategorieseditModule = /** @class */ (function () {
    function CategorieseditModule() {
    }
    CategorieseditModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"],
                _categoriesedit_routing_module__WEBPACK_IMPORTED_MODULE_4__["CategorieseditRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            declarations: [
                _categoriesedit_component__WEBPACK_IMPORTED_MODULE_3__["CategorieseditComponent"]
            ]
        })
    ], CategorieseditModule);
    return CategorieseditModule;
}());



/***/ })

}]);
//# sourceMappingURL=categoriesedit-categoriesedit-module.js.map