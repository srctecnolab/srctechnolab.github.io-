(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/layout/home/home-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/home/home-routing.module.ts ***!
  \****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/layout/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/home/home.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/home/home.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"container-fluid  \" style=\"background-color: #f7f7f7; min-height: 50%;    color: #73879c;\" >\n\n<div class=\"row tile_count\" style=\"padding-top: 20px\">\n        <div class=\"col-md-4 col-sm-4 col-xs-4 tile_stats_count\">\n          \n                <span class=\"count_top\"><i class=\"fa fa-users\"></i> Total Users</span>\n                <div class=\"count green\">56</div>\n        \n        </div>\n\n         <div class=\"col-md-4 col-sm-4 col-xs-4 tile_stats_count\">\n          \n                <span class=\"count_top\"><i class=\"fa fa-users\"></i> Total Stores</span>\n                <div class=\"count green\">44</div>\n        \n        </div>\n\n        <div class=\"col-md-4 col-sm-4 col-xs-4 tile_stats_count\">\n          \n                <span class=\"count_top\"><i class=\"fa fa-users\"></i> Total Delivery Profiles</span>\n                <div class=\"count green\">35</div>\n        \n        </div>\n\n    </div>\n\n\n<div class=\"row tile_count\" style=\"padding-top: 10px;padding-bottom: 30px\">\n        <div class=\"col-md-4 col-sm-4 col-xs-4 tile_stats_count\">\n          \n                <span class=\"count_top\"><i class=\"fa fa-users\"></i> Total Orders</span>\n                <div class=\"count green\">56</div>\n        \n        </div>\n\n         <div class=\"col-md-4 col-sm-4 col-xs-4 tile_stats_count\">\n          \n                <span class=\"count_top\"><i class=\"fa fa-users\"></i> Total Orders Cancelled</span>\n                <div class=\"count green\">44</div>\n        \n        </div>\n\n        <div class=\"col-md-4 col-sm-4 col-xs-4 tile_stats_count\">\n          \n                <span class=\"count_top\"><i class=\"fa fa-users\"></i> Total Orders Pending</span>\n                <div class=\"count green\">35</div>\n        \n        </div>\n\n    </div>\n\n    <div>\n    \t<div class=\" \">\n                    <div class=\"x_title\">\n                        <h3>Active Orders</h3>\n                    </div>\n                    <div class=\" \">\n           <!--          \t<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map> -->\n<div style=\"height: 300px;background-color: green\"></div>\n                    </div>\n                </div>\n\n    </div>\n<br>\n<!--  order -->\n \n <div>   \n    \t<div class=\" x_title\">\n                    <div class=\"row\">\n                        <h3 class=\"col-md-8\"> Orders place</h3>\n                      \n            <div class=\"dropdown col-md-4\" style=\"float:right;\">\n                           \n  <button class=\"btn \">  \n  \t<i class=\"glyphicon glyphicon-calendar fa fa-calendar\"></i>\n   <span style=\"margin-left:20px\">January 26, 2019 - February 24, 2019</span> </button>\n  <div class=\"dropdown-content\">\n    <a href=\"#\">Link 1</a>\n    <a href=\"#\">Link 2</a>\n    <a href=\"#\">Link 3</a>\n  </div>\n</div>\n            \n                    </div>\n\n               \n                    </div>\n                    <div class=\"row\">\n  <div class=\"col-md-8\">\n    <div style=\"display: block;\">\n    <canvas baseChart width=\"400\" height=\"280\"\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [legend]=\"lineChartLegend\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n  \t  \t\t<div class=\"row x_title1\">\n                   <h3 class=\"col-md-8\">Trending Stores</h3>\n        \n  \t</div>           \n  <div class=\"x_title1\">  \t<ul class=\"\" style=\"height: 330px,width:20px\">\n  \n\n  \n \n  <li class=\"list-group-item list-group-item-light\" style=\"\">      <i class=\"fa fa-cutlery aero\"></i><div class=\"media-body\" style=\"text-transform:capitalize\">\n                                            <a class=\"title\" href=\"http://opuslabs.in:9081/admin/stores/1\">Plaza</a>\n                                            <p>\n                                                <small>156 sales</small>\n                                            </p>\n                                        </div></li>\n  <li class=\"list-group-item list-group-item-dark\">This is a dark list group item</li>\n</ul></div>\n\n  </div>\n  <div class=\"col-md-6\" style=\"margin-bottom: 10px\">\n \n  </div>\n</div>\n                \n\n    </div>\n       \n</div>\n\n    \n\n\n\t\n<ul class=\"list-unstyled top_profiles scroll-view\">\n                                                                    <li class=\"media event\">\n                                        <a class=\"pull-left border-aero profile_thumb\">\n                                            <i class=\"fa fa-cutlery aero\"></i>\n                                        </a>\n                                        <div class=\"media-body\" style=\"text-transform:capitalize\">\n                                            <a class=\"title\" href=\"http://opuslabs.in:9081/admin/stores/1\">Plaza</a>\n                                            <p>\n                                                <small>156 sales</small>\n                                            </p>\n                                        </div>\n                                    </li>\n                                                                    <li class=\"media event\">\n                                        <a class=\"pull-left border-aero profile_thumb\">\n                                            <i class=\"fa fa-cutlery aero\"></i>\n                                        </a>\n                                        <div class=\"media-body\" style=\"text-transform:capitalize\">\n                                            <a class=\"title\" href=\"http://opuslabs.in:9081/admin/stores/4\">Rouge Tomate Chelsea</a>\n                                            <p>\n                                                <small>46 sales</small>\n                                            </p>\n                                        </div>\n                                    </li>\n                                                                    <li class=\"media event\">\n                                        <a class=\"pull-left border-aero profile_thumb\">\n                                            <i class=\"fa fa-cutlery aero\"></i>\n                                        </a>\n                                        <div class=\"media-body\" style=\"text-transform:capitalize\">\n                                            <a class=\"title\" href=\"http://opuslabs.in:9081/admin/stores/6\">Peter Luger</a>\n                                            <p>\n                                                <small>17 sales</small>\n                                            </p>\n                                        </div>\n                                    </li>\n                                                                    <li class=\"media event\">\n                                        <a class=\"pull-left border-aero profile_thumb\">\n                                            <i class=\"fa fa-cutlery aero\"></i>\n                                        </a>\n                                        <div class=\"media-body\" style=\"text-transform:capitalize\">\n                                            <a class=\"title\" href=\"http://opuslabs.in:9081/admin/stores/2\">The Store</a>\n                                            <p>\n                                                <small>17 sales</small>\n                                            </p>\n                                        </div>\n                                    </li>\n                                                                    <li class=\"media event\">\n                                        <a class=\"pull-left border-aero profile_thumb\">\n                                            <i class=\"fa fa-cutlery aero\"></i>\n                                        </a>\n                                        <div class=\"media-body\" style=\"text-transform:capitalize\">\n                                            <a class=\"title\" href=\"http://opuslabs.in:9081/admin/stores/29\">Thai Restaurent</a>\n                                            <p>\n                                                <small>15 sales</small>\n                                            </p>\n                                        </div>\n                                    </li>\n                                                            </ul>\n"

/***/ }),

/***/ "./src/app/layout/home/home.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/home/home.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tile_count {\n  margin-bottom: 20px;\n  margin-top: 20px; }\n\n.green {\n  font-size: 40px;\n  font-weight: 1000;\n  color: #1abb9c;\n  line-height: 47px; }\n\n.tile_stats_count {\n  padding: 0 10px 0 20px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  position: relative;\n  border-left: 3px solid #d9dee4; }\n\n.x_title {\n  border-bottom: 4px solid #e6e9ed;\n  padding: 1px 5px 6px;\n  margin-bottom: 10px;\n  background-color: white; }\n\n.x_title1 {\n  border-bottom: 4px solid #e6e9ed;\n  background-color: white;\n  text-align: center; }\n\nagm-map {\n  height: 300px; }\n\n.x_panel {\n  position: relative;\n  width: 100%;\n  margin-bottom: 10px;\n  padding: 10px 17px;\n  display: inline-block;\n  background: #fff;\n  border: 1px solid #e6e9ed;\n  -webkit-column-break-inside: avoid;\n  -moz-column-break-inside: avoid;\n  column-break-inside: avoid;\n  opacity: 1;\n  transition: all .2s ease; }\n\n.filter {\n  width: 40%;\n  float: right; }\n\n*, :after, :before {\n  box-sizing: border-box; }\n\n* {\n  box-sizing: border-box; }\n\nuser agent stylesheet\ndiv {\n  display: block; }\n\nbody {\n  color: #73879c;\n  background: #2a3f54;\n  font-family: \"Helvetica Neue\",Roboto,Arial,\"Droid Sans\",sans-serif;\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 1.471; }\n\nbody {\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333;\n  background-color: #fff; }\n\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: transparent; }\n\nhtml {\n  font-family: sans-serif;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%; }\n\n.btn-group-vertical > .btn-group:after, .btn-group-vertical > .btn-group:before, .btn-toolbar:after, .btn-toolbar:before, .clearfix:after, .clearfix:before, .container-fluid:after, .container-fluid:before, .container:after, .container:before, .dl-horizontal dd:after, .dl-horizontal dd:before, .form-horizontal .form-group:after, .form-horizontal .form-group:before, .modal-footer:after, .modal-footer:before, .modal-header:after, .modal-header:before, .nav:after, .nav:before, .navbar-collapse:after, .navbar-collapse:before, .navbar-header:after, .navbar-header:before, .navbar:after, .navbar:before, .pager:after, .pager:before, .panel-body:after, .panel-body:before, .row:after, .row:before {\n  display: table;\n  content: \" \"; }\n\n*, :after, :before {\n  box-sizing: border-box; }\n\n:after, :before {\n  box-sizing: border-box; }\n\n.clearfix:after, form:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden; }\n\n.x_content {\n  padding: 0 5px 6px;\n  position: relative;\n  width: 100%;\n  float: left;\n  clear: both;\n  margin-top: 5px; }\n\n.demo-placeholder {\n  height: 280px; }\n\nelement.style {\n  background: #fff;\n  cursor: pointer;\n  padding: 5px 10px;\n  border: 1px solid #ccc; }\n\n.pull-right {\n  float: right; }\n\n.pull-right {\n  float: right !important; }\n\n.pull-right {\n  float: right; }\n\n*, :after, :before {\n  box-sizing: border-box; }\n\n* {\n  box-sizing: border-box; }\n\n.dropdown {\n  position: relative;\n  display: inline-block; }\n\n/* Dropdown Content (Hidden by Default) */\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n\n/* Links inside the dropdown */\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block; }\n\n/* Change color of dropdown links on hover */\n\n.dropdown-content a:hover {\n  background-color: #f1f1f1; }\n\n/* Show the dropdown menu on hover */\n\n.dropdown:hover .dropdown-content {\n  display: block; }\n\n/* Change the background color of the dropdown button when the dropdown content is shown */\n\n.dropdown:hover .dropbtn {\n  background-color: #3e8e41; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hvbWUvSDpcXGpzXFxwcm9qZWN0XFxTQi1BZG1pbi1CUzQtQW5ndWxhci02LW1hc3Rlci9zcmNcXGFwcFxcbGF5b3V0XFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUVwQjtFQUNFLGVBQWU7RUFDZCxpQkFBaUI7RUFDaEIsY0FBYztFQUNkLGlCQUNKLEVBQUE7O0FBQ0E7RUFFSSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2pCLDhCQUE4QixFQUFBOztBQUVuQztFQUNJLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ3BCLHVCQUF1QixFQUFBOztBQUcxQjtFQUNJLGdDQUFnQztFQUdqQyx1QkFBdUI7RUFDdkIsa0JBQWtCLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtDQUFrQztFQUNsQywrQkFBK0I7RUFDL0IsMEJBQTBCO0VBQzFCLFVBQVU7RUFDVix3QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQU1oQjtFQUNJLHNCQUFzQixFQUFBOztBQUUxQjtFQUdJLHNCQUFzQixFQUFBOztBQUUxQjs7RUFFSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrRUFBa0U7RUFDbEUsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSx3REFBd0Q7RUFDeEQsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksZUFBZTtFQUNmLHdDQUF3QyxFQUFBOztBQUU1QztFQUNJLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsMEJBQTBCLEVBQUE7O0FBRTlCO0VBQ0ksY0FBYztFQUNkLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxzQkFBc0IsRUFBQTs7QUFFMUI7RUFHSSxzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxZQUFZO0VBQ1osY0FBYztFQUNkLFNBQVM7RUFDVCxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSx1QkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRTFCO0VBR0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBOztBQUd2Qix5Q0FBQTs7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiwrQ0FBNEM7RUFDNUMsVUFBVSxFQUFBOztBQUdaLDhCQUFBOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYyxFQUFBOztBQUdoQiw0Q0FBQTs7QUFDQTtFQUEyQix5QkFBeUIsRUFBQTs7QUFFcEQsb0NBQUE7O0FBQ0E7RUFDRSxjQUFjLEVBQUE7O0FBR2hCLDBGQUFBOztBQUNBO0VBQ0UseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50aWxlX2NvdW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5ncmVlbiB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gICBmb250LXdlaWdodDogMTAwMDtcclxuICAgIGNvbG9yOiAjMWFiYjljO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ3cHhcclxufVxyXG4udGlsZV9zdGF0c19jb3VudCB7XHJcbiAgXHJcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAyMHB4O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNkOWRlZTQ7XHJcbn1cclxuLnhfdGl0bGUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNlNmU5ZWQ7XHJcbiAgICBwYWRkaW5nOiAxcHggNXB4IDZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG4ueF90aXRsZTEge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNlNmU5ZWQ7XHJcblxyXG4gICAgXHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbmFnbS1tYXAge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi54X3BhbmVsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTdweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlOWVkO1xyXG4gICAgLXdlYmtpdC1jb2x1bW4tYnJlYWstaW5zaWRlOiBhdm9pZDtcclxuICAgIC1tb3otY29sdW1uLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICBjb2x1bW4tYnJlYWstaW5zaWRlOiBhdm9pZDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5maWx0ZXIge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuXHJcbmVsZW1lbnQuc3R5bGUge1xyXG59XHJcbiosIDphZnRlciwgOmJlZm9yZSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbioge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG51c2VyIGFnZW50IHN0eWxlc2hlZXRcclxuZGl2IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmJvZHkge1xyXG4gICAgY29sb3I6ICM3Mzg3OWM7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmEzZjU0O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIixSb2JvdG8sQXJpYWwsXCJEcm9pZCBTYW5zXCIsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS40NzE7XHJcbn1cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbmh0bWwge1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxufVxyXG4uYnRuLWdyb3VwLXZlcnRpY2FsPi5idG4tZ3JvdXA6YWZ0ZXIsIC5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi1ncm91cDpiZWZvcmUsIC5idG4tdG9vbGJhcjphZnRlciwgLmJ0bi10b29sYmFyOmJlZm9yZSwgLmNsZWFyZml4OmFmdGVyLCAuY2xlYXJmaXg6YmVmb3JlLCAuY29udGFpbmVyLWZsdWlkOmFmdGVyLCAuY29udGFpbmVyLWZsdWlkOmJlZm9yZSwgLmNvbnRhaW5lcjphZnRlciwgLmNvbnRhaW5lcjpiZWZvcmUsIC5kbC1ob3Jpem9udGFsIGRkOmFmdGVyLCAuZGwtaG9yaXpvbnRhbCBkZDpiZWZvcmUsIC5mb3JtLWhvcml6b250YWwgLmZvcm0tZ3JvdXA6YWZ0ZXIsIC5mb3JtLWhvcml6b250YWwgLmZvcm0tZ3JvdXA6YmVmb3JlLCAubW9kYWwtZm9vdGVyOmFmdGVyLCAubW9kYWwtZm9vdGVyOmJlZm9yZSwgLm1vZGFsLWhlYWRlcjphZnRlciwgLm1vZGFsLWhlYWRlcjpiZWZvcmUsIC5uYXY6YWZ0ZXIsIC5uYXY6YmVmb3JlLCAubmF2YmFyLWNvbGxhcHNlOmFmdGVyLCAubmF2YmFyLWNvbGxhcHNlOmJlZm9yZSwgLm5hdmJhci1oZWFkZXI6YWZ0ZXIsIC5uYXZiYXItaGVhZGVyOmJlZm9yZSwgLm5hdmJhcjphZnRlciwgLm5hdmJhcjpiZWZvcmUsIC5wYWdlcjphZnRlciwgLnBhZ2VyOmJlZm9yZSwgLnBhbmVsLWJvZHk6YWZ0ZXIsIC5wYW5lbC1ib2R5OmJlZm9yZSwgLnJvdzphZnRlciwgLnJvdzpiZWZvcmUge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxufVxyXG4qLCA6YWZ0ZXIsIDpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG46YWZ0ZXIsIDpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uY2xlYXJmaXg6YWZ0ZXIsIGZvcm06YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIuXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi54X2NvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMCA1cHggNnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5kZW1vLXBsYWNlaG9sZGVyIHtcclxuICAgIGhlaWdodDogMjgwcHg7XHJcbn1cclxuXHJcbmVsZW1lbnQuc3R5bGUge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG4ucHVsbC1yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnB1bGwtcmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0IWltcG9ydGFudDtcclxufVxyXG4ucHVsbC1yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuKiwgOmFmdGVyLCA6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuKiB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi8qIERyb3Bkb3duIENvbnRlbnQgKEhpZGRlbiBieSBEZWZhdWx0KSAqL1xyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBjb2xvciBvZiBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xyXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxfVxyXG5cclxuLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGRyb3Bkb3duIGJ1dHRvbiB3aGVuIHRoZSBkcm9wZG93biBjb250ZW50IGlzIHNob3duICovXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['01/02/19', '04/02/19', '07/02/19', '10/02/19', '13/02/19', '16/02/19', '19/02/19'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    HomeComponent.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    // events
    HomeComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    HomeComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/layout/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/layout/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/home/home.module.ts":
/*!********************************************!*\
  !*** ./src/app/layout/home/home.module.ts ***!
  \********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/layout/home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/layout/home/home-routing.module.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map