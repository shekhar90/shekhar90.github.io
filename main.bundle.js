webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n    about component!\n</p>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__work_work_component__ = __webpack_require__("../../../../../src/app/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_blog_component__ = __webpack_require__("../../../../../src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__one_health_one_health_component__ = __webpack_require__("../../../../../src/app/one-health/one-health.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ehr_ehr_component__ = __webpack_require__("../../../../../src/app/ehr/ehr.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/work', pathMatch: 'full' },
    { path: 'work', component: __WEBPACK_IMPORTED_MODULE_2__work_work_component__["a" /* WorkComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_5__blog_blog_component__["a" /* BlogComponent */] },
    { path: 'work/onehealth', component: __WEBPACK_IMPORTED_MODULE_6__one_health_one_health_component__["a" /* OneHealthComponent */] },
    { path: 'work/ehr', component: __WEBPACK_IMPORTED_MODULE_7__ehr_ehr_component__["a" /* EhrComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { enableTracing: true })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light {{projectThemeBg}}\">\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link {{projectThemeColor}}\" [ngClass]=\"getActiveClass('work')\" (click)=\"onTabClick('work')\" routerLink=\"/work\">Work</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link {{projectThemeColor}}\" [ngClass]=\"getActiveClass('about')\" (click)=\"onTabClick('about')\" routerLink=\"/about\">About</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link {{projectThemeColor}}\" [ngClass]=\"getActiveClass('contact')\" (click)=\"onTabClick('contact')\" routerLink=\"/contact\">Contact</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link {{projectThemeColor}}\" [ngClass]=\"getActiveClass('blog')\" (click)=\"onTabClick('blog')\" routerLink=\"/blog\">Blog</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projects_service__ = __webpack_require__("../../../../../src/app/projects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(projectsService) {
        var _this = this;
        this.projectsService = projectsService;
        this.activeTab = "work";
        this.projectThemeColor = "project-theme-1";
        this.projectThemeBg = "project-theme-bg-1";
        this.activeClass = "project-theme-1-active";
        this.onTabClick = function (activeTab) {
            this.activeTab = activeTab;
        };
        this.getActiveClass = function (tab) {
            if (this.activeTab === tab) {
                return this.activeClass;
            }
            return "";
        };
        this.onProjectClick = function (projectThemeColor, projectThemeBg) {
            this.projectThemeColor = projectThemeColor;
            this.projectThemeBg = projectThemeBg;
            this.activeClass = projectThemeColor + '-active';
        };
        this.header = projectsService.header;
        this._subscription = projectsService.headerChange.subscribe(function (value) {
            _this.header = value;
            _this.onProjectClick(_this.header.headerColor, _this.header.headerBg);
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__projects_service__["a" /* ProjectsService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__work_work_component__ = __webpack_require__("../../../../../src/app/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blog_blog_component__ = __webpack_require__("../../../../../src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__one_health_one_health_component__ = __webpack_require__("../../../../../src/app/one-health/one-health.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__project_intro_project_intro_component__ = __webpack_require__("../../../../../src/app/project-intro/project-intro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__projects_service__ = __webpack_require__("../../../../../src/app/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ehr_ehr_component__ = __webpack_require__("../../../../../src/app/ehr/ehr.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__work_work_component__["a" /* WorkComponent */],
                __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_7__blog_blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_8__one_health_one_health_component__["a" /* OneHealthComponent */],
                __WEBPACK_IMPORTED_MODULE_9__project_intro_project_intro_component__["a" /* ProjectIntroComponent */],
                __WEBPACK_IMPORTED_MODULE_11__ehr_ehr_component__["a" /* EhrComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__projects_service__["a" /* ProjectsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/blog/blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n    blog component!\n</p>"

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-blog',
            template: __webpack_require__("../../../../../src/app/blog/blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n    contact component!\n</p>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ehr/ehr.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ehr/ehr.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  ehr works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/ehr/ehr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EhrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EhrComponent = (function () {
    function EhrComponent() {
    }
    EhrComponent.prototype.ngOnInit = function () {
    };
    EhrComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ehr',
            template: __webpack_require__("../../../../../src/app/ehr/ehr.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ehr/ehr.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EhrComponent);
    return EhrComponent;
}());



/***/ }),

/***/ "../../../../../src/app/one-health/one-health.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".viewport-height-width {\r\n    /*width: 100%;*/\r\n    /*height: 100vh;*/\r\n}\r\n\r\n.one-health-first-page {\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/img/onehealth/main-bottom.png") + "), url(" + __webpack_require__("../../../../../src/assets/img/onehealth/page-1.png") + "), url(" + __webpack_require__("../../../../../src/assets/img/onehealth/group-24.png") + ");\r\n    background-position: left bottom, 90% 140%, center;\r\n    background-repeat: repeat-x, no-repeat, repeat-x;\r\n    padding: 15px;\r\n    padding-left: 100px;\r\n    background-color: #f4f4f4;\r\n}\r\n\r\n.main-page-font {\r\n    font-size: 60px;\r\n    max-width: 1030px;\r\n    color: #d80058;\r\n    margin: 175px 0 0 0;\r\n}\r\n\r\nlabel {\r\n    font-weight: normal;\r\n}\r\n\r\n.tag-label {\r\n    color: #d80058;\r\n    padding: 2px 10px;\r\n    margin-right: 20px;\r\n    border-radius: 5px;\r\n    border: 1px solid #d80058;\r\n}\r\n\r\n.set-top-margin20 {\r\n    margin-top: 20px;\r\n}\r\n\r\n.header-tag {\r\n    color: grey;\r\n    font-size: 20px;\r\n}\r\n\r\n.header-value {\r\n    color: #000000;\r\n    opacity: 0.8;\r\n    padding-left: 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.challange-role-container {\r\n    background-color: pink;\r\n}\r\n\r\n.content-header-2 {\r\n    font-size: 40px;\r\n    font-weight: 500;\r\n    color: #d80058;\r\n}\r\n\r\n.content-header-3 {\r\n    font-weight: normal;\r\n}\r\n\r\n.one-health-main-page .challange-role-content {\r\n    font-size: 30px;\r\n    color: #383838;\r\n}\r\n\r\n.set-half-height {\r\n    height: 50%;\r\n}\r\n\r\n.launch-event-container {\r\n    max-width: 633px;\r\n    padding: 50px 50px 50px 20px;\r\n    height: 100%;\r\n}\r\n\r\n.launch-event {\r\n    border-bottom: solid 6px #d80058;\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/img/onehealth/female-single.png") + ");\r\n    background-position: 100% 170%;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.margin-auto {\r\n    margin: auto;\r\n    float: none;\r\n}\r\n.float-left {\r\n    float: left;\r\n}\r\n.flow-chart-height {\r\n    /*height: 72vh;*/\r\n}\r\n.flow-container-top-padding {\r\n    padding-bottom: 50px;\r\n}\r\n.top-content-padding {\r\n    padding-top: 50px;\r\n}\r\n.taskflow-height-width {\r\n    /*height: 130vh;*/\r\n}\r\n.font-mm-size {\r\n    font-size: 24px;\r\n}\r\n.emergency-card-padding {\r\n    padding-top: 40px;\r\n}\r\n.inline-block {\r\n    display: inline-block;\r\n    margin: 10px 0;\r\n}\r\n.text-center-align {\r\n    text-align: center;\r\n}\r\n.footer-text {\r\n     color: #666666;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/one-health/one-health.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"one-health-main-page\">\r\n    <div class=\"viewport-height-width one-health-first-page col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <h1 class=\"main-page-font col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            A one stop shop Indian Health exchange for all 'Indian' health needs\r\n        </h1>\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <div class=\"set-top-margin20\">\r\n                <label class=\"tag-label\">HEALTH</label>\r\n                <label class=\"tag-label\">EDUCATION</label>\r\n            </div>\r\n            <div class=\"set-top-margin20\">\r\n                <label class=\"header-tag\">Project:</label>\r\n                <label class=\"header-value\">Product design of 1health system</label>\r\n            </div>\r\n            <div class=\"\">\r\n                <label class=\"header-tag\">Category:</label>\r\n                <label class=\"header-value\">Health</label>\r\n            </div>\r\n            <div class=\"\">\r\n                <label class=\"header-tag\">Years:</label>\r\n                <label class=\"header-value\">2013- 14</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--<div style=\"clear: both;\"></div>-->\r\n    <div class=\"viewport-height-width flow-container-top-padding\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm12 col-xs-12 challange-role-container set-half-height top-content-padding\">\r\n            <div class=\"col-lg-8 col-md-8 col-sm-7 col-xs-12 float-left\">\r\n                <h2 class=\"content-header-2\">CHALLANGE:</h2>\r\n                <p class=\"challange-role-content\">To create a health exchange Indian audience that offers world class health services online keeping Indian constraints in mind</p>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-5 col-xs-12 float-left\">\r\n                <h2 class=\"content-header-2\">ROLES:</h2>\r\n                <p class=\"challange-role-content\">Product strategist, Product designer, Visual designer</p>\r\n            </div>\r\n            <div style=\"clear: both;\"></div>\r\n        </div>\r\n        <div class=\"set-half-height col-lg-12 col-md-12 col-sm12 col-xs-12\">\r\n            <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 margin-auto launch-event\">\r\n                <p class=\"content-header-2 content-header-3 launch-event-container\">Launched in 2014 with the mission to digitise all healthcare needs in India and make it available at a tap away.</p>\r\n            </div>\r\n        </div>\r\n        <!--<div style=\"clear: both;\"></div>-->\r\n    </div>\r\n    <div class=\"viewport-height-width flow-container-top-padding top-content-padding\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm12 col-xs-12\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"content-header-2\">Mind map of the initial product concept</h2>\r\n                <p class=\"challange-role-content\">While conceptualizing the product with the founders, we went through a lot of roadmaps for the MVP, here is one of them.</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <img class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 flow-chart-height\" src=\"../../assets/img/onehealth/1-hf.png\">\r\n        </div>\r\n        <!--<div style=\"clear: both;\"></div>-->\r\n    </div>\r\n    <div class=\"viewport-height-width flow-container-top-padding top-content-padding\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm12 col-xs-12\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"content-header-2\">Initial design options</h2>\r\n                <p class=\"challange-role-content\">Some of the half-cooked designs that made rounds while conceptualising the product. Sometimes lyrics and composition go hand in hand!</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <img class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 float-left\" src=\"../../assets/img/onehealth/group-14.png\">\r\n            <img class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 float-left flow-chart-height\" src=\"../../assets/img/onehealth/profile-double.png\">\r\n            <div style=\"clear: both;\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"viewport-height-width flow-container-top-padding top-content-padding\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm12 col-xs-12\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"content-header-2\">The pitch video</h2>\r\n                <p class=\"challange-role-content\">A small keynote video that explains the features of the product to potential investors and partners.</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-10 margin-auto\">\r\n            <img class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" src=\"../../assets/img/onehealth/group-41.png\">\r\n        </div>\r\n        <!--<div style=\"clear: both;\"></div>-->\r\n    </div>\r\n    <div class=\"viewport-height-width flow-container-top-padding top-content-padding\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm12 col-xs-12\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"content-header-2\">Initial design options</h2>\r\n                <p class=\"challange-role-content\">Some of the half-cooked designs that made rounds while conceptualising the product. Sometimes lyrics and composition go hand in hand!</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <img class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 float-left\" src=\"../../assets/img/onehealth/usecase1.png\">\r\n            <img class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 float-left\" src=\"../../assets/img/onehealth/usecase2.png\">\r\n            <img class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 float-left\" src=\"../../assets/img/onehealth/usecase3.png\">\r\n            <div style=\"clear: both;\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"taskflow-height-width flow-container-top-padding top-content-padding\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm12 col-xs-12\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"content-header-2\">TASK FLOW</h2>\r\n                <p class=\"challange-role-content\">A typical task flow would look like this:</p>\r\n                <p class=\"challange-role-content\">Feature: Sharing medical records</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <img class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 float-left\" src=\"../../assets/img/onehealth/sharing-and-referral-flow-04.png\">\r\n            <img class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 float-left\" src=\"../../assets/img/onehealth/sharing-and-referral-flow-05.png\">\r\n            <img class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 float-left\" src=\"../../assets/img/onehealth/sharing-and-referral-flow-06.png\">\r\n            <div style=\"clear: both;\"></div>\r\n        </div>\r\n        <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-10 margin-auto\">\r\n            <img class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 float-left\" src=\"../../assets/img/onehealth/sharing-and-referral-flow-07.png\">\r\n            <img class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 float-left\" src=\"../../assets/img/onehealth/sharing-and-referral-flow-08.png\">\r\n            <div style=\"clear: both;\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"taskflow-height-width flow-container-top-padding top-content-padding\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm12 col-xs-12\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"content-header-2\">Indianising ‘their’ best practices</h2>\r\n                <p class=\"font-mm-size challange-role-content\">We consulted Doctors and specialists practing in the USA to learn how medical practices work there, followed by some secondary research that helped us with some data points.</p>\r\n                <p class=\"font-mm-size challange-role-content\">e.g., We studied some medical emergency cards in the U.S. to design a feature called ICE (In case of emergency)</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-8 col-md-8 col-sm-6 col-xs-12 float-left\">\r\n            <img class=\"col-lg-7 col-md-7 col-sm-12 col-xs-12 float-left\" src=\"../../assets/img/onehealth/emergency-card-1.png\">\r\n            <img class=\"col-lg-10 col-md-10 col-sm-12 col-xs-12 float-left\" src=\"../../assets/img/onehealth/emergency-card-2.png\">\r\n            <div style=\"clear: both;\"></div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 float-left\">\r\n            <img class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 float-left emergency-card-padding\" src=\"../../assets/img/onehealth/group-32.png\">\r\n            <div style=\"clear: both;\"></div>\r\n        </div>\r\n        <div style=\"clear: both;\"></div>\r\n    </div>\r\n    <div class=\"taskflow-height-width flow-container-top-padding top-content-padding\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm12 col-xs-12\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"content-header-2\">SKETCHES</h2>\r\n                <p class=\"font-mm-size challange-role-content\">Here are some sketches for one of the features: Consult</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 float-left\">\r\n            <img class=\"col-lg-3 col-md-3 col-sm-4 col-xs-12 float-left\" src=\"../../assets/img/onehealth/1-health-1.png\">\r\n            <img class=\"col-lg-3 col-md-3 col-sm-4 col-xs-12 float-left\" src=\"../../assets/img/onehealth/1-health-2.png\">\r\n            <img class=\"col-lg-3 col-md-3 col-sm-4 col-xs-12 float-left\" src=\"../../assets/img/onehealth/1-health-3.png\">\r\n            <img class=\"col-lg-3 col-md-3 col-sm-4 col-xs-12 float-left\" src=\"../../assets/img/onehealth/1-health-4.png\">\r\n            <div style=\"clear: both;\"></div>\r\n        </div>\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 float-left\">\r\n            <img class=\"col-lg-3 col-md-3 col-sm-4 col-xs-12 float-left\" src=\"../../assets/img/onehealth/1-health-6.png\">\r\n            <img class=\"col-lg-3 col-md-3 col-sm-4 col-xs-12 float-left\" src=\"../../assets/img/onehealth/1-health-7.png\">\r\n            <img class=\"col-lg-3 col-md-3 col-sm-4 col-xs-12 float-left\" src=\"../../assets/img/onehealth/1-health-8.png\">\r\n            <img class=\"col-lg-3 col-md-3 col-sm-4 col-xs-12 float-left\" src=\"../../assets/img/onehealth/1-health-12.png\">\r\n            <div style=\"clear: both;\"></div>\r\n        </div>\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"content-header-2\">The UI - Main Features</h2>\r\n                <p class=\"font-mm-size challange-role-content\">While conceptualizing the product with the founders, we went through a lot of roadmaps for the MVP, here is one of them. While conceptualizing the product with the founders, we went through a lot of roadmaps for the MVP, here is one of them. While conceptualizing the product with the founders, we went through a lot of roadmaps for the MVP, here is one of them. While conceptualizing the product with the founders, we went through a lot of roadmaps for the MVP, here is one of them.</p>\r\n            </div>\r\n        <div style=\"clear: both;\"></div>\r\n    </div>\r\n    <div class=\"viewport-height-width flow-container-top-padding top-content-padding\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                <span class=\"col-lg-2 col-md-2 col-sm-4 col-xs-6 inline-block\">DASHBOARD</span>\r\n                <span class=\"col-lg-2 col-md-2 col-sm-4 col-xs-6 inline-block\">SCHEDULE</span>\r\n                <span class=\"col-lg-2 col-md-2 col-sm-4 col-xs-6 inline-block\">SCHEDULE</span>\r\n                <span class=\"col-lg-2 col-md-2 col-sm-4 col-xs-6 inline-block\">SCHEDULE</span>\r\n                <span class=\"col-lg-2 col-md-2 col-sm-4 col-xs-6 inline-block\">SCHEDULE</span>\r\n                <span class=\"col-lg-2 col-md-2 col-sm-4 col-xs-6 inline-block\">SCHEDULE</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 float-left\">\r\n                <p class=\"font-mm-size challange-role-content\">While conceptualizing the product with the founders, we went through a lot of roadmaps for the MVP, here is one of them.</p>\r\n                <p class=\"font-mm-size challange-role-content\">\r\n                    <span>SCHEDULE /</span>\r\n                    <span>HOME</span>\r\n                </p>\r\n                <p class=\"font-mm-size challange-role-content\">While conceptualizing the product with the founders, we went through a lot of roadmaps for the MVP, here is one of them. While conceptualizing the product with the founders, we went through a lot of roadmaps for the MVP, here is one of them.</p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 float-left\">\r\n                <img class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 float-left\" src=\"../../assets/img/onehealth/app-ui.png\">\r\n            </div>\r\n            <div style=\"clear: both;\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"viewport-height-width flow-container-top-padding top-content-padding\">\r\n        <div class=\"col-lg-8 col-md-8 col-sm-10 col-xs-12 margin-auto\">\r\n            <!--<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 float-left\">-->\r\n                <p class=\"footer-text text-center-align challange-role-content\">Thank you!</p>\r\n                <p class=\"footer-text font-mm-size challange-role-content\">\r\n                    PRO TIP: Always sketch main screens even before starting digital wireframes, can save a lot of iteration time. Good designers always sketch with pencil. Pens are for Doctors and Lawyers!\r\n                </p>\r\n            <!--</div>-->\r\n            <!--<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 float-left\">\r\n                <img class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 float-left\" src=\"../../assets/img/onehealth/app-ui.png\">\r\n            </div>-->\r\n            <!--<div style=\"clear: both;\"></div>-->\r\n        </div>\r\n    </div>\r\n    <!--<div style=\"clear: both;\"></div>-->\r\n</div>\r\n<!--<div style=\"clear: both;\"></div>-->"

/***/ }),

/***/ "../../../../../src/app/one-health/one-health.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneHealthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OneHealthComponent = (function () {
    function OneHealthComponent() {
    }
    OneHealthComponent.prototype.ngOnInit = function () {
    };
    OneHealthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-one-health',
            template: __webpack_require__("../../../../../src/app/one-health/one-health.component.html"),
            styles: [__webpack_require__("../../../../../src/app/one-health/one-health.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OneHealthComponent);
    return OneHealthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project-intro/project-intro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin-b-26 {\r\n    margin-bottom: 26px;\r\n}\r\n\r\n.margin-r-10 {\r\n    margin-right: 10px;\r\n}\r\n\r\n.margin-l-5 {\r\n    margin-left: 5px;\r\n}\r\n\r\n.pt-btn {\r\n    border-radius: 4px;\r\n    background: none;\r\n    border-width: 1px;\r\n    border-image-slice: 1;\r\n    font-size: 14px;\r\n}\r\n\r\n.project-info {\r\n    font-size: 20px;\r\n    color: #9a9a9a;\r\n}\r\n\r\n.pr-img {\r\n    background-image: linear-gradient(62deg, #027dd7, #7100ce);\r\n    opacity: 0.2;\r\n}\r\n\r\n.project-des {\r\n    font-size: 40px;\r\n}\r\n\r\n.pr-des-1 {\r\n    color: #7100ce;\r\n}\r\n\r\n.pr-des-2 {\r\n    color: #ce003b;\r\n}\r\n\r\n.pr-des-3 {\r\n    color: #67c014;\r\n}\r\n\r\n.pr-des-4 {\r\n    color: #0009ff;\r\n}\r\n\r\n.pt-btn-1 {\r\n    border-image-source: linear-gradient(76deg, #027dd7, #7100ce);\r\n    color: #7100ce;\r\n}\r\n\r\n.pt-btn-2 {\r\n    border-image-source: linear-gradient(291deg, #ce003b, #e70dd6);\r\n    color: #ce003b;\r\n}\r\n\r\n.pt-btn-3 {\r\n    border-image-source: linear-gradient(90deg, #02bed7 0%, #00cea8);\r\n    color: #00cea8;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-intro/project-intro.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row project-info-container\" (click)=\"onProjectClick(project.style.header)\" routerLink=\"/work/{{project.router}}\">\r\n    <div class=\"col-md-6 pr-img\" *ngIf=\"project.contentPos === 'right'\"></div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"{{project.style.description}} margin-b-26\">\r\n            {{project.projectDescription}}\r\n        </div>\r\n        <div class=\"{{project.style.tags}} margin-b-26\">\r\n            <button class=\"{{project.style.button}} margin-r-10\" *ngFor=\"let tag of project.tags\">{{tag}}</button>\r\n        </div>\r\n        <div class=\"{{project.style.info}} project-info\">\r\n            <div class=\"pi-des\">Project:<span class=\"margin-l-5\">{{project.projectInfo.project}}</span></div>\r\n            <div class=\"pi-client\">Client:<span class=\"margin-l-5\">{{project.projectInfo.client}}</span></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6 pr-img\" *ngIf=\"project.contentPos === 'left'\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/project-intro/project-intro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectIntroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project__ = __webpack_require__("../../../../../src/app/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_service__ = __webpack_require__("../../../../../src/app/projects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectIntroComponent = (function () {
    function ProjectIntroComponent(projectsService) {
        this.projectsService = projectsService;
    }
    ProjectIntroComponent.prototype.onProjectClick = function (header) {
        this.projectsService.setHeader(header);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */])
    ], ProjectIntroComponent.prototype, "project", void 0);
    ProjectIntroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project-intro',
            template: __webpack_require__("../../../../../src/app/project-intro/project-intro.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project-intro/project-intro.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__projects_service__["a" /* ProjectsService */]])
    ], ProjectIntroComponent);
    return ProjectIntroComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = (function () {
    function Project() {
    }
    return Project;
}());



/***/ }),

/***/ "../../../../../src/app/projects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var projects = [{
        projectDescription: "Making a difference in Health Education with an EHR application.",
        tags: ["ENTERPRISE", "EDUCATION"],
        projectInfo: {
            project: "Enterprise Design of EHR (Electronic Health Records)",
            client: "McGraw Hill Education",
        },
        contentPos: "right",
        style: {
            description: "project-des pr-des-1",
            tags: "project-tags",
            button: "pt-btn pt-btn-1",
            info: "project-info",
            header: {
                headerBg: "project-theme-bg-1",
                headerColor: "project-theme-1"
            }
        },
        router: "ehr"
    }, {
        projectDescription: "Helping Dubai schools to digitize contracts and track kids' progress.",
        tags: ["ENTERPRISE", "EDUCATION"],
        projectInfo: {
            project: "Enterprise Design of EHR (Electronic Health Records)",
            client: "McGraw Hill Education",
        },
        contentPos: "left",
        style: {
            description: "project-des pr-des-2",
            tags: "project-tags",
            button: "pt-btn pt-btn-2",
            info: "project-info",
            header: {
                headerBg: "project-theme-bg-2",
                headerColor: "project-theme-2"
            }
        },
        router: "onehealth"
    }, {
        projectDescription: "Bringing the organizational change with design thinking.",
        tags: ["ENTERPRISE", "EDUCATION"],
        projectInfo: {
            project: "Enterprise Design of EHR (Electronic Health Records)",
            client: "McGraw Hill Education",
        },
        contentPos: "right",
        style: {
            description: "project-des pr-des-3",
            tags: "project-tags",
            button: "pt-btn pt-btn-3",
            info: "project-info",
            header: {
                headerBg: "project-theme-bg-3",
                headerColor: "project-theme-3"
            }
        },
        router: "ehr"
    }, {
        projectDescription: "Gamifying the pshychology for students.",
        tags: ["ENTERPRISE", "EDUCATION", "CONCEPT"],
        projectInfo: {
            project: "Enterprise Design of EHR (Electronic Health Records)",
            client: "McGraw Hill Education",
        },
        contentPos: "left",
        style: {
            description: "project-des pr-des-4",
            tags: "project-tags",
            button: "pt-btn pt-btn-1",
            info: "project-info",
            header: {
                headerBg: "project-theme-bg-4",
                headerColor: "project-theme-4"
            }
        },
        router: "ehr"
    }, {
        projectDescription: "Making a difference in Health Education with an EHR application.",
        tags: ["ENTERPRISE", "EDUCATION"],
        projectInfo: {
            project: "Enterprise Design of EHR (Electronic Health Records)",
            client: "McGraw Hill Education",
        },
        contentPos: "right",
        style: {
            description: "project-des pr-des-1",
            tags: "project-tags",
            button: "pt-btn pt-btn-2",
            info: "project-info",
            header: {
                headerBg: "project-theme-bg-1",
                headerColor: "project-theme-1"
            }
        },
        router: "ehr"
    }];
var ProjectsService = (function () {
    function ProjectsService() {
        this.headerChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.header = {
            headerBg: "project-theme-bg-1",
            headerColor: "project-theme-1"
        };
    }
    ProjectsService.prototype.setHeader = function (header) {
        this.header = header;
        this.headerChange.next(this.header);
    };
    ProjectsService.prototype.getProjects = function () {
        return new Promise(function (resolve, reject) {
            resolve(projects);
        });
    };
    ProjectsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "../../../../../src/app/work/work.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/work/work.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-one-health></app-one-health> -->\r\n<app-project-intro [project]=\"project\" *ngFor=\"let project of projects\"></app-project-intro>"

/***/ }),

/***/ "../../../../../src/app/work/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projects_service__ = __webpack_require__("../../../../../src/app/projects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkComponent = (function () {
    function WorkComponent(projectsService) {
        this.projectsService = projectsService;
        this.projects = [];
    }
    WorkComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectsService
            .getProjects()
            .then(function (projects) { return _this.projects = projects; })
            .catch(function (error) { return _this.error = error; });
    };
    WorkComponent.prototype.ngOnInit = function () {
        this.getProjects();
        console.log(this.projects);
    };
    WorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-work',
            template: __webpack_require__("../../../../../src/app/work/work.component.html"),
            styles: [__webpack_require__("../../../../../src/app/work/work.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__projects_service__["a" /* ProjectsService */]])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/img/onehealth/female-single.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "female-single.55761c5d24ace8082ce0.png";

/***/ }),

/***/ "../../../../../src/assets/img/onehealth/group-24.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "group-24.e65d01ac7c3ad6cf5b76.png";

/***/ }),

/***/ "../../../../../src/assets/img/onehealth/main-bottom.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "main-bottom.50fd735e989561a93ea8.png";

/***/ }),

/***/ "../../../../../src/assets/img/onehealth/page-1.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "page-1.79ccc29ea2b2084e1e4b.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map