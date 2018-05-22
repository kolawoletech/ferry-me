webpackJsonp([1,4],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contentHeaders; });

var contentHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
//# sourceMappingURL=auth.headers.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_headers__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var baseUrl = 'https://api.teleport.org/api/cities/?limit=5';
var LocationService = (function () {
    function LocationService(http) {
        this.http = http;
    }
    LocationService.prototype.logResponse = function (response) {
        return response.json();
    };
    LocationService.prototype.getLocationByName = function (name) {
        var location = this.http.get(baseUrl + '&search=' + encodeURI(name), { headers: __WEBPACK_IMPORTED_MODULE_3__auth_auth_headers__["a" /* contentHeaders */] }).map(this.logResponse.bind(this));
        return location;
    };
    return LocationService;
}());
LocationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], LocationService);

var _a;
//# sourceMappingURL=location.service.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.auth.authenticated()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auto_auto_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(auth, auto) {
        var _this = this;
        this.auth = auth;
        this.auto = auto;
        this.ownedTrips = [];
        this.clientTrips = [];
        var profile = JSON.parse(localStorage.getItem('profile'));
        auto.retrieveAutosByClientship(profile.user_id).subscribe(function (clientAutos) {
            _this.clientTrips = clientAutos;
        });
        auto.retrieveAutosByOwnership(profile.user_id).subscribe(function (ownedAutos) {
            _this.ownedTrips = ownedAutos;
        });
    }
    HomeComponent.prototype.retrieveTrips = function () {
        var _this = this;
        var profile = JSON.parse(localStorage.getItem('profile'));
        this.auto.retrieveAutosByClientship(profile.user_id).subscribe(function (clientAutos) {
            _this.clientTrips = clientAutos;
        });
        this.auto.retrieveAutosByOwnership(profile.user_id).subscribe(function (ownedAutos) {
            _this.ownedTrips = ownedAutos;
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home',
        template: __webpack_require__(472),
        styles: [__webpack_require__(432)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auto_auto_service__["a" /* AutoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auto_auto_service__["a" /* AutoService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    LoginComponent.prototype.login = function () {
        if (!this.auth.authenticated()) {
            this.auth.login();
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__(473),
        styles: [__webpack_require__(433)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_headers__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var baseUrl = 'https://ferry-me-web.herokuapp.com/api/users';
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.createUser = function (user) {
        var response = this.http.post(baseUrl, user, { headers: __WEBPACK_IMPORTED_MODULE_3__auth_auth_headers__["a" /* contentHeaders */] }).map(this.logResponse.bind(this));
        ;
        return response;
    };
    UserService.prototype.updateUser = function (user) {
        var response = this.http.put(baseUrl, user, { headers: __WEBPACK_IMPORTED_MODULE_3__auth_auth_headers__["a" /* contentHeaders */] }).map(this.logResponse.bind(this));
        return response;
    };
    UserService.prototype.logResponse = function (response) {
        return response.json();
    };
    UserService.prototype.getUsersByName = function (name) {
        var users = this.http.get(baseUrl + '/search/' + encodeURI(name), { headers: __WEBPACK_IMPORTED_MODULE_3__auth_auth_headers__["a" /* contentHeaders */] }).map(this.mapUsers.bind(this));
        return users;
    };
    UserService.prototype.getUserByUserId = function (id) {
        var user = this.http.get(baseUrl + '/' + encodeURI(id), { headers: __WEBPACK_IMPORTED_MODULE_3__auth_auth_headers__["a" /* contentHeaders */] }).map(this.logResponse.bind(this));
        return user;
    };
    UserService.prototype.mapUsers = function (response) {
        return response.json().map(this.toUser.bind(this));
    };
    UserService.prototype.toUser = function (r) {
        console.log(r);
        var user = ({
            name: r.name,
            userId: r.userId,
            peerId: r.peerId
        });
        return user;
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 272;


/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(288);
///<reference path="typings.d.ts"/>




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.title = 'Welcome on Ferry Me';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(467),
        styles: [__webpack_require__(427)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_guard__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_jwt__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_dnd__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routes__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_user_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auto_detail_auto_detail__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auto_list_auto_list__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auto_search_auto_search__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__auto_post_auto_post__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auto_auto_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__login_login_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__location_location_service__ = __webpack_require__(111);
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_7_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_7_angular2_jwt__["AuthConfig"]({}), http, options);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_13__auto_detail_auto_detail__["a" /* AutoDetail */], __WEBPACK_IMPORTED_MODULE_14__auto_list_auto_list__["a" /* AutoList */], __WEBPACK_IMPORTED_MODULE_15__auto_search_auto_search__["a" /* AutoSearch */], __WEBPACK_IMPORTED_MODULE_16__auto_post_auto_post__["a" /* AutoPost */],
            __WEBPACK_IMPORTED_MODULE_18__login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["HttpModule"], __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_9_ng2_dnd__["a" /* DndModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__auth_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_12__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_17__auto_auto_service__["a" /* AutoService */], __WEBPACK_IMPORTED_MODULE_19__location_location_service__["a" /* LocationService */], {
                provide: __WEBPACK_IMPORTED_MODULE_7_angular2_jwt__["AuthHttp"],
                useFactory: authHttpServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]]
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_guard__ = __webpack_require__(173);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });



// Define which component should be loaded based on the current URL
var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthConfig; });
var AuthConfig = {
    clientID: '6lT5KjBicBIedjoTuXU0t6c1I1aVr8OA',
    domain: 'ferryme.auth0.com'
};
//# sourceMappingURL=auth.config.js.map

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

//# sourceMappingURL=auto.class.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auto_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auto_class__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auto_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__auto_class__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoDetail; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutoDetail = (function () {
    function AutoDetail(autoService) {
        this.autoService = autoService;
        this.autoDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.hasJoined = false;
    }
    AutoDetail.prototype.joinAuto = function () {
        var _this = this;
        if (this.auto.constraints.seats - this.seatsNumber < 0) {
            return;
        }
        var profile = JSON.parse(localStorage.getItem('profile'));
        var user = { 'name': profile.nickname, 'userId': profile.user_id };
        for (var i = 0; i < this.seatsNumber; i++) {
            this.auto.clients.push(user);
            this.auto.constraints.seats = this.auto.constraints.seats - 1;
        }
        this.autoService.updateAuto(this.auto).subscribe(function () { _this.hasJoined = true; });
    };
    AutoDetail.prototype.deleteAuto = function () {
        this.autoDeleted.emit();
        this.autoService.deleteAuto(this.auto).subscribe(function () { });
    };
    AutoDetail.prototype.cancelAuto = function () {
        this.autoDeleted.emit();
        var profile = JSON.parse(localStorage.getItem('profile'));
        for (var i = 0; i < this.auto.clients.length; i++) {
            if (this.auto.clients[i].userId === profile.user_id) {
                this.auto.clients.splice(i, 1);
                this.auto.constraints.seats = this.auto.constraints.seats + 1;
            }
        }
        this.autoService.updateAuto(this.auto).subscribe(function () { });
    };
    AutoDetail.prototype.isClient = function () {
        var profile = JSON.parse(localStorage.getItem('profile'));
        var index = this.auto.clients.findIndex(function (c) {
            return c.userId === profile.user_id;
        });
        return index !== -1;
    };
    AutoDetail.prototype.isOwner = function () {
        var profile = JSON.parse(localStorage.getItem('profile'));
        return profile.user_id === this.auto.owner.userId;
    };
    return AutoDetail;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auto_class__["Auto"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auto_class__["Auto"]) === "function" && _a || Object)
], AutoDetail.prototype, "auto", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], AutoDetail.prototype, "autoDeleted", void 0);
AutoDetail = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'auto-detail',
        template: __webpack_require__(468),
        styles: [__webpack_require__(428)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__auto_service__["a" /* AutoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auto_service__["a" /* AutoService */]) === "function" && _c || Object])
], AutoDetail);

var _a, _b, _c;
//# sourceMappingURL=auto.detail.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auto_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoList; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutoList = (function () {
    function AutoList(autoService) {
        this.autoService = autoService;
    }
    AutoList.prototype.onAutoDeleted = function (auto) {
        var index = this.autos.indexOf(auto);
        this.autos.splice(index, 1);
    };
    AutoList.prototype.isAutoValid = function (auto) {
        var _this = this;
        var indexDest = -1;
        var indexDep = -1;
        var dateDep = false;
        var dateDest = false;
        if (this.constraints === undefined) {
            return true;
        }
        var profile = JSON.parse(localStorage.getItem('profile'));
        var index = auto.clients.findIndex(function (c) {
            return c.userId === profile.user_id;
        });
        if (index !== -1) {
            return true;
        }
        if (auto.constraints.pets !== this.constraints.pets) {
            return false;
        }
        if (auto.constraints.music !== this.constraints.music) {
            return false;
        }
        if (auto.constraints.smoker !== this.constraints.smoker) {
            return false;
        }
        if (auto.constraints.seats === 0) {
            return false;
        }
        if (auto.constraints.seats - this.constraints.seats < 0) {
            return false;
        }
        indexDep = auto.destinations.findIndex(function (d) { return d.name === _this.constraints.dep; });
        indexDest = auto.destinations.findIndex(function (d) { return d.name === _this.constraints.dest; });
        if (indexDep === -1 || indexDest === -1) {
            return false;
        }
        if (indexDep >= indexDest) {
            return false;
        }
        if (new Date(auto.destinations[indexDep].date).getFullYear() === new Date(this.constraints.date).getFullYear() &&
            new Date(auto.destinations[indexDep].date).getMonth() === new Date(this.constraints.date).getMonth() &&
            new Date(auto.destinations[indexDep].date).getDay() === new Date(this.constraints.date).getDay()) {
            dateDep = true;
        }
        if (new Date(auto.destinations[indexDest].date).getFullYear() === new Date(this.constraints.date).getFullYear() &&
            new Date(auto.destinations[indexDest].date).getMonth() === new Date(this.constraints.date).getMonth() &&
            new Date(auto.destinations[indexDest].date).getDay() === new Date(this.constraints.date).getDay()) {
            dateDest = true;
        }
        if (!dateDest && !dateDep) {
            return false;
        }
        return true;
    };
    return AutoList;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AutoList.prototype, "autos", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AutoList.prototype, "constraints", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AutoList.prototype, "isSearch", void 0);
AutoList = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'auto-list',
        template: __webpack_require__(469),
        styles: [__webpack_require__(429)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auto_service__["a" /* AutoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auto_service__["a" /* AutoService */]) === "function" && _a || Object])
], AutoList);

var _a;
//# sourceMappingURL=auto.list.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auto_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_location_service__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoPost; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutoPost = (function () {
    function AutoPost(locationService, autoService) {
        this.locationService = locationService;
        this.autoService = autoService;
        this.searchDestResults = [];
        this.auto = {
            owner: {},
            description: '',
            destinations: [],
            constraints: {
                seats: 1,
                pets: false,
                smoker: false,
                music: false
            }
        };
        this.minDate = Date.now();
        this.isPosted = false;
    }
    AutoPost.prototype.addDestination = function (d) {
        this.isPosted = false;
        this.auto.destinations.push({ 'name': this.destinationName, 'date': this.destinationDate });
    };
    AutoPost.prototype.removeDestination = function (d) {
        var index = this.auto.destinations.indexOf(d);
        this.auto.destinations.splice(index, 1);
    };
    AutoPost.prototype.postAuto = function () {
        var _this = this;
        var profile = JSON.parse(localStorage.getItem(('profile')));
        this.auto.owner = { 'name': profile.nickname, 'userId': profile.user_id };
        this.autoService.createAuto(this.auto).subscribe(function () { _this.isPosted = true; });
    };
    AutoPost.prototype.updateDestCities = function () {
        var _this = this;
        this.locationService.getLocationByName(this.destinationName).subscribe(function (data) { _this.searchDestResults = data._embedded['city:search-results']; });
    };
    AutoPost.prototype.setSearchDest = function (name) {
        this.destinationName = name;
    };
    AutoPost.prototype.isDestValid = function () {
        var _this = this;
        if (this.searchDestResults.findIndex(function (el) { return el.matching_full_name === _this.destinationName; }) === -1) {
            return false;
        }
        return true;
    };
    AutoPost.prototype.isDestinationValid = function () {
        if (this.isDestValid()) {
            return true;
        }
        return false;
    };
    AutoPost.prototype.isPostFormValid = function () {
        if (this.auto.constraints.seats >= 1 && this.auto.description && this.auto.destinations.length >= 2) {
            return true;
        }
        return false;
    };
    return AutoPost;
}());
AutoPost = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'auto-post',
        template: __webpack_require__(470),
        styles: [__webpack_require__(430)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__location_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__location_location_service__["a" /* LocationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auto_service__["a" /* AutoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auto_service__["a" /* AutoService */]) === "function" && _b || Object])
], AutoPost);

var _a, _b;
//# sourceMappingURL=auto.post.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auto_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_location_service__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoSearch; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutoSearch = (function () {
    function AutoSearch(autoService, locationService) {
        this.autoService = autoService;
        this.locationService = locationService;
        this.searchDepResults = [];
        this.searchDestResults = [];
        this.showPets = false;
        this.showSmoker = false;
        this.showMusic = false;
    }
    AutoSearch.prototype.updateDepCities = function () {
        var _this = this;
        this.locationService.getLocationByName(this.searchDep).subscribe(function (data) { _this.searchDepResults = data._embedded['city:search-results']; });
    };
    AutoSearch.prototype.setSearchDep = function (name) {
        this.searchDep = name;
    };
    AutoSearch.prototype.updateDestCities = function () {
        var _this = this;
        this.locationService.getLocationByName(this.searchDest).subscribe(function (data) { _this.searchDestResults = data._embedded['city:search-results']; });
    };
    AutoSearch.prototype.setSearchDest = function (name) {
        this.searchDest = name;
    };
    AutoSearch.prototype.isDepValid = function () {
        var _this = this;
        if (this.searchDepResults.findIndex(function (el) { return el.matching_full_name === _this.searchDep; }) === -1) {
            return false;
        }
        return true;
    };
    AutoSearch.prototype.isDestValid = function () {
        var _this = this;
        if (this.searchDestResults.findIndex(function (el) { return el.matching_full_name === _this.searchDest; }) === -1) {
            return false;
        }
        return true;
    };
    AutoSearch.prototype.isSearchFormValid = function () {
        if (this.isDepValid() && this.isDestValid() && this.seatsNumber >= 1) {
            return true;
        }
        return false;
    };
    AutoSearch.prototype.searchAuto = function () {
        var _this = this;
        if (!this.isSearchFormValid()) {
            return;
        }
        this.constraints = {
            dep: this.searchDep,
            dest: this.searchDest,
            date: this.nowDate,
            seats: this.seatsNumber,
            pets: this.showPets,
            smoker: this.showSmoker,
            music: this.showMusic
        };
        this.autoService.retrieveAutosByDestinations(this.searchDep, this.searchDest).subscribe(function (data) {
            _this.searchResult = data;
        });
    };
    return AutoSearch;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AutoSearch.prototype, "searchDep", void 0);
AutoSearch = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'auto-search',
        template: __webpack_require__(471),
        styles: [__webpack_require__(431)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auto_service__["a" /* AutoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auto_service__["a" /* AutoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__location_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__location_location_service__["a" /* LocationService */]) === "function" && _b || Object])
], AutoSearch);

var _a, _b;
//# sourceMappingURL=auto.search.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(false);
// imports


// module
exports.push([module.i, ".container-full{\n  width:100%;\n  left:0;\n  right:0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(false);
// imports


// module
exports.push([module.i, ".margined-top {\n  margin-top: 5em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 467:
/***/ (function(module, exports) {

module.exports = "<div>\n  <router-outlet>\n  </router-outlet>\n</div>\n"

/***/ }),

/***/ 468:
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-outline-primary text-xs-center\">\n  <div class=\"card-block\">\n    <blockquote class=\"card-blockquote\">\n      <h4>{{ auto.description }}</h4>\n      <div *ngFor=\"let d of auto.destinations\">\n        - {{ d.name }} on {{ d.date | date:'short' }}\n      </div>\n      <div>{{ auto.constraints.seats }} seats left</div>\n      <div *ngIf=\"auto.constraints.pets\">Pets allowed</div>\n      <div *ngIf=\"!auto.constraints.pets\">Pets not allowed</div>\n      <div *ngIf=\"auto.constraints.smoker\">Smoking allowed</div>\n      <div *ngIf=\"!auto.constraints.smoker\">Smoking not allowed</div>\n      <div *ngIf=\"auto.constraints.music\">Music allowed</div>\n      <div *ngIf=\"!auto.constraints.music\">Music not allowed</div>\n      <footer>Author : {{ auto.owner.name }}</footer>\n      <div *ngIf=\"!isClient() && !isOwner()\"> Seats number :\n      <input id=\"seats\" name=\"seats\" class=\"form-control\" type=\"number\" required\n             min=\"1\" max=\"{{auto.constraints.seats}}\" [(ngModel)]=\"seatsNumber\">\n      </div>\n      <div *ngIf=\"hasJoined\" class=\"alert alert-dismissible alert-success\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        <strong>Well done!</strong> You successfully joined the trip and will be debited of 5$.\n      </div>\n      <button *ngIf=\"!isClient() && !isOwner()\" class=\"btn btn-primary\" type=\"submit\" (click)=\"joinAuto()\"> Join </button>\n      <button *ngIf=\"isOwner()\" class=\"btn btn-primary\" type=\"submit\" (click)=\"deleteAuto()\"> Delete </button>\n      <button *ngIf=\"isClient() && !isOwner()\" class=\"btn btn-primary\" type=\"submit\" (click)=\"cancelAuto()\"> Cancel </button>\n    </blockquote>\n  </div>\n</div>\n"

/***/ }),

/***/ 469:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div *ngFor = \"let a of autos\" class=\"col-md-3\">\n    <auto-detail (autoDeleted)=\"onAutoDeleted(a)\" [auto]=\"a\" *ngIf=\"isAutoValid(a)\"></auto-detail>\n  </div>\n</div>\n"

/***/ }),

/***/ 470:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row\">\n  <form class=\"col-xs-12 col-md-3\">\n\n    <label for=\"description\" class=\"col-form-label col-form-label-sm\"> Description </label>\n    <div class=\"form-group has-danger\" [ngClass]=\"{'has-danger': !auto.description}\">\n      <input id=\"description\" name=\"description\" type=\"textarea\" [(ngModel)]=\"auto.description\"\n             class=\"form-control\" required placeholder=\"Enter a quick description of your offer.\"\n             [ngClass]=\"{'form-control-danger': !auto.description}\"/>\n    </div>\n    <div>\n      <label for=\"destinationName\" class=\"col-form-label col-form-label-sm\"> Destinations </label>\n      <div class=\"form-group has-danger\" [ngClass]=\"{'has-danger': !isDestValid() && destinationName}\">\n        <div class=\"dropdown\">\n          <input class=\"form-control dropdown-toggle\" autocomplete=\"off\" required placeholder=\"Enter a city name.\"\n                 [ngClass]=\"{'form-control-danger': !isDestValid()}\" type=\"text\" [(ngModel)]=\"destinationName\"\n                 name=\"searchInputDest\" id=\"destinationName\" data-toggle=\"dropdown\" (ngModelChange)=\"updateDestCities()\"/>\n          <ul class=\"dropdown-menu form-control\" *ngIf=\"searchDestResults.length > 0\">\n            <li *ngFor=\"let dest of searchDestResults\" (click)=\"setSearchDest(dest.matching_full_name)\">{{dest.matching_full_name}}</li>\n          </ul>\n        </div>\n      </div>\n\n      <label for=\"destinationDate\" class=\"col-form-label col-form-label-sm\"> Departure date and hour </label>\n      <input name=\"destinationDate\" type=\"datetime-local\" class=\"form-control\"\n             min=\"{{ minDate | date: 'yyyy-MM-ddTHH:mm'}}\"\n             [(ngModel)]=\"destinationDate\" id=\"destinationDate\"/>\n      <div><br>\n        <button class=\"btn btn-info col-xs-2\" (click)=\"addDestination()\" [class.disabled]=\"!isDestinationValid()\">Add</button>\n      </div>\n      <br>\n    </div>\n\n    <label for=\"seats\" class=\"col-form-label col-form-label-sm\"> Seats </label>\n    <input id=\"seats\" name=\"seats\" class=\"form-control\" type=\"number\"\n           min=\"1\" max=\"8\" [(ngModel)]=\"auto.constraints.seats\">\n    <label for=\"pets\" class=\"col-form-label col-form-label-sm\"> Pets </label>\n\n    <div id=\"pets\" class=\"form-check\">\n      <label class=\"form-check-label\">\n        <input name=\"pets\" type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"auto.constraints.pets\"/>\n        <p *ngIf=\"auto.constraints.pets\">Allowed</p>\n        <p *ngIf=\"!auto.constraints.pets\">Not Allowed</p>\n      </label>\n    </div>\n\n    <label for=\"smoker\" class=\"col-form-label col-form-label-sm\"> Smoking </label>\n    <div id=\"smoker\" class=\"form-check\">\n      <label class=\"form-check-label\">\n        <input name=\"pets\" type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"auto.constraints.smoker\"/>\n        <p *ngIf=\"auto.constraints.smoker\">Allowed</p>\n        <p *ngIf=\"!auto.constraints.smoker\">Not Allowed</p>\n      </label>\n    </div>\n\n    <label for=\"music\" class=\"col-form-label col-form-label-sm\"> Music </label>\n    <div id=\"music\" class=\"form-check\">\n      <label class=\"form-check-label\">\n        <input name=\"pets\" type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"auto.constraints.music\"/>\n        <p *ngIf=\"auto.constraints.music\">Allowed</p>\n        <p *ngIf=\"!auto.constraints.music\">Not Allowed</p>\n      </label>\n    </div>\n\n    <button class=\"btn btn-primary\" type=\"submit\"  [class.disabled]=\"!isPostFormValid()\" (click)=\"postAuto()\">Post</button>\n    <div *ngIf=\"isPosted\" class=\"alert alert-dismissible alert-success\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n      <strong>Well done!</strong> You successfully created your trip !.\n    </div>\n  </form>\n  <div class=\"col-xs-12 col-md-9\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div *ngFor=\"let d of auto.destinations; let isFirst = first; let isLast = last\" class=\"col-md-3 col-xs-6\">\n          <div *ngIf=\"isFirst\">\n            <h4>Departure</h4>\n          </div>\n          <div *ngIf=\"isLast && !isFirst\">\n            <h4>Arrival</h4>\n          </div>\n          <div *ngIf=\"!isFirst && !isLast\">\n            <h5>Step</h5>\n          </div>\n          <div>\n            City : {{ d.name }}\n          </div>\n          <div>\n            Hour : {{ d.date | date:'dd-MM-yyyy HH:mm'}} GMT+0\n          </div>\n          <div class=\"row\">\n            <button class=\"btn btn-info\" (click)=\"removeDestination(d)\">Delete</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 471:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row\">\n    <form name=\"searchForm\" (ngSubmit)=\"searchAuto()\" class=\"col-sm-12 col-md-3\">\n        <fieldset>\n            <div id=\"inputSearch\" >\n                <label class=\"col-form-label col-form-label-sm\" for=\"inputDep\">\n                    Departure\n                </label>\n                <div class=\"form-group has-danger\" [ngClass]=\"{'has-danger': !isDepValid() && searchDep}\">\n                    <div class=\"dropdown\">\n                        <input class=\"form-control dropdown-toggle\" autocomplete=\"off\" required placeholder=\"Enter a city name.\"\n                               [ngClass]=\"{'form-control-danger': !isDepValid()}\" type=\"text\" [(ngModel)]=\"searchDep\"\n                               name=\"searchInputDep\" id=\"inputDep\" data-toggle=\"dropdown\" (ngModelChange)=\"updateDepCities()\"/>\n                        <ul class=\"dropdown-menu form-control\" *ngIf=\"searchDepResults.length > 0\">\n                            <li *ngFor=\"let dep of searchDepResults\" (click)=\"setSearchDep(dep.matching_full_name)\">{{dep.matching_full_name}}</li>\n                        </ul>\n                    </div>\n                </div>\n                <label class=\"col-form-label col-form-label-sm\" for=\"inputDest\">\n                    Arrival\n                </label>\n                <div class=\"form-group has-danger\" [ngClass]=\"{'has-danger': !isDestValid() && searchDest}\">\n                    <div class=\"dropdown\">\n                        <input class=\"form-control dropdown-toggle\" autocomplete=\"off\" required placeholder=\"Enter a city name.\"\n                               [ngClass]=\"{'form-control-danger': !isDestValid()}\" type=\"text\" [(ngModel)]=\"searchDest\"\n                               name=\"searchInputDest\" id=\"inputDest\" data-toggle=\"dropdown\" (ngModelChange)=\"updateDestCities()\"/>\n                        <ul class=\"dropdown-menu form-control\" *ngIf=\"searchDestResults.length > 0\">\n                            <li *ngFor=\"let dest of searchDestResults\" (click)=\"setSearchDest(dest.matching_full_name)\">{{dest.matching_full_name}}</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div>\n                <label class=\"col-form-label col-form-label-sm\" for=\"departureDate\">\n                    Departure date and hour\n                </label>\n                <div>\n                    <input type=\"datetime-local\" id=\"departureDate\" min=\"{{nowDate | date:'yyyy-MM-ddTHH:mm'}}\"\n                           [(ngModel)]=\"nowDate\" class=\"form-control\" name=\"inputDateSearch\">\n                </div>\n            </div>\n            <div>\n                <label for=\"seats\" class=\"col-form-label col-form-label-sm\"> Seats </label>\n                <div>\n                    <input id=\"seats\" name=\"seats\" class=\"form-control\" type=\"number\" required\n                           min=\"1\" max=\"8\" [(ngModel)]=\"seatsNumber\">\n                </div>\n            </div>\n            <label for=\"pets\" class=\"col-form-label col-form-label-sm\">\n                Pets </label>\n            <div id=\"pets\" class=\"form-check\">\n                <label class=\"form-check-label\">\n                    <input name=\"pets\" type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"showPets\"/>\n                    <p *ngIf=\"showPets\">Allowed</p>\n                    <p *ngIf=\"!showPets\">Not Allowed</p>\n                </label>\n            </div>\n            <label for=\"smoker\" class=\"col-form-label col-form-label-sm\"> Smoking </label>\n            <div id=\"smoker\" class=\"form-check\">\n                <label class=\"form-check-label\">\n                    <input name=\"pets\" type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"showSmoker\"/>\n                    <p *ngIf=\"showSmoker\">Allowed</p>\n                    <p *ngIf=\"!showSmoker\">Not Allowed</p>\n                </label>\n            </div>\n            <label for=\"music\" class=\"col-form-label col-form-label-sm\"> Music </label>\n            <div id=\"music\" class=\"form-check\">\n                <label class=\"form-check-label\">\n                    <input name=\"pets\" type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"showMusic\"/>\n                    <p *ngIf=\"showMusic\">Allowed</p>\n                    <p *ngIf=\"!showMusic\">Not Allowed</p>\n                </label>\n            </div>\n            <button class=\"btn btn-info col-xs-4\" [class.disabled]=\"!isSearchFormValid()\" type=\"submit\">\n                <i class=\"fa fa-lg fa-search\"></i>\n            </button>\n        </fieldset>\n    </form>\n    <div class=\"col-sm-12 col-md-9\">\n        <auto-list [autos]=\"searchResult\" [constraints]=\"constraints\" [isSearch]>=\"isSearch\"</auto-list>\n    </div>\n</div>\n"

/***/ }),

/***/ 472:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-primary\">\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\"\n            data-toggle=\"collapse\" data-target=\"#navbarColor01\"\n            aria-controls=\"navbarColor01\" aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand\" href=\"#\">Ferry Me</a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n        <ul class=\"navbar-nav mr-auto\">\n        </ul>\n        <form class=\"form-inline\">\n            <button class=\"btn btn-secondary my-2 my-sm-0\" *ngIf=\"auth.authenticated()\"\n                    type = \"submit\" (click)=\"auth.logout()\">Log Out</button>\n        </form>\n    </div>\n</nav>\n\n<ul class=\"nav nav-tabs\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#search\">Sssssearch</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#create\">Create</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#trips\" (click)=\"retrieveTrips()\">My trips</a>\n    </li>\n</ul>\n<div id=\"myTabContent\" class=\"tab-content\">\n    <div class=\"tab-pane fade active in show\" id=\"search\">\n        <auto-search></auto-search>\n    </div>\n    <div class=\"tab-pane fade\" id=\"create\">\n        <auto-post></auto-post>\n    </div>\n    <div class=\"tab-pane fade\" id=\"trips\">\n      <div class=\"container-fluid\">\n      <h1 class=\"text-primary\" *ngIf=\"ownedTrips.length>0\">Owned trips</h1>\n      <auto-list [autos]=\"ownedTrips\" [isSearch]>=\"isSearch\"></auto-list>\n      <h1 class=\"text-primary\" *ngIf=\"clientTrips.length>0\">Client trips</h1>\n      <auto-list [autos]=\"clientTrips\" [isSearch]>=\"isSearch\"></auto-list>\n      <h2 class=\"text-primary\" *ngIf=\"ownedTrips.length===0 && clientTrips.length===0\">You have no trips yet.</h2>\n      </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ 473:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-primary\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\"\n    data-toggle=\"collapse\" data-target=\"#navbarColor01\"\n    aria-controls=\"navbarColor01\" aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">Ferry</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n   </ul>\n    <form class=\"form-inline\">\n      <button class=\"btn btn-success my-2 my-sm-0\" *ngIf=\"!auth.authenticated()\"\n      type = \"submit\" (click)=\"login()\">Log In</button>\n    </form>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"jumbotron margined-top\">\n    <h1 class=\"display-3\">Ferry Me</h1>\n    <p>A simple application of carpooling. Try it out for free now !</p>\n    <p *ngIf=\"!auth.authenticated()\">\n      <button class=\"btn btn-primary btn-lg\" (click)=\"login()\">Log In</button>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_headers__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var baseUrl = 'https://ferry-me.herokuapp.com/api/autos';
var AutoService = (function () {
    function AutoService(http) {
        this.http = http;
    }
    AutoService.prototype.createAuto = function (auto) {
        var response = this.http.post(baseUrl, auto, { headers: __WEBPACK_IMPORTED_MODULE_3__auth_auth_headers__["a" /* contentHeaders */] }).map(this.logResponse.bind(this));
        return response;
    };
    AutoService.prototype.updateAuto = function (auto) {
        var response = this.http.put(baseUrl + '/' + encodeURI(auto._id), auto, { headers: __WEBPACK_IMPORTED_MODULE_3__auth_auth_headers__["a" /* contentHeaders */] }).map(this.logResponse.bind(this));
        return response;
    };
    AutoService.prototype.retrieveAutosByOwnership = function (ownerId) {
        var response = this.http.get(baseUrl + '/owner/' + encodeURI(ownerId), { headers: __WEBPACK_IMPORTED_MODULE_3__auth_auth_headers__["a" /* contentHeaders */] }).map(this.mapAutos.bind(this));
        return response;
    };
    AutoService.prototype.retrieveAutosByClientship = function (clientId) {
        var response = this.http.get(baseUrl + '/client/' + encodeURI(clientId), { headers: __WEBPACK_IMPORTED_MODULE_3__auth_auth_headers__["a" /* contentHeaders */] }).map(this.mapAutos.bind(this));
        return response;
    };
    AutoService.prototype.retrieveAutosByDestinations = function (from, to) {
        var response = this.http.post(baseUrl + '/search/', { 'dep': from, 'dest': to }, { headers: __WEBPACK_IMPORTED_MODULE_3__auth_auth_headers__["a" /* contentHeaders */] }).map(this.mapAutos.bind(this));
        return response;
    };
    AutoService.prototype.deleteAuto = function (auto) {
        var response = this.http.delete(baseUrl + '/' + encodeURI(auto._id), { headers: __WEBPACK_IMPORTED_MODULE_3__auth_auth_headers__["a" /* contentHeaders */] }).map(this.logResponse.bind(this));
        return response;
    };
    AutoService.prototype.logResponse = function (response) {
        return response.json();
    };
    AutoService.prototype.mapAutos = function (response) {
        return response.json().map(this.toAuto.bind(this));
    };
    AutoService.prototype.toAuto = function (r) {
        var auto = ({
            _id: r._id,
            owner: r.owner,
            clients: r.clients,
            description: r.description,
            destinations: r.destinations,
            constraints: r.constraints
        });
        return auto;
    };
    return AutoService;
}());
AutoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AutoService);

var _a;
//# sourceMappingURL=auto.service.js.map

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(273);


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_config__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth0_lock__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth0_lock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_auth0_lock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_service__ = __webpack_require__(176);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.lock = new __WEBPACK_IMPORTED_MODULE_4_auth0_lock___default.a(__WEBPACK_IMPORTED_MODULE_2__auth_config__["a" /* AuthConfig */].clientID, __WEBPACK_IMPORTED_MODULE_2__auth_config__["a" /* AuthConfig */].domain, {
            theme: {
                primaryColor: '#005375'
            },
            auth: {
                responseType: 'token',
                redirectUrl: 'https://ferry-me-web.herokuapp.com'
            },
            languageDictionary: {
                title: 'Have your rides on Ferry Me >:3'
            }
        });
        if (this.authenticated()) {
            this.router.navigate(['home']);
        }
        this.lock.on('authenticated', function (authResult) {
            _this.registerTokens(authResult);
        });
    }
    AuthService.prototype.registerTokens = function (authResult) {
        var _this = this;
        // Use the token in authResult to getUserInfo() and save it to localStorage
        this.lock.getUserInfo(authResult.accessToken, function (error, profile) {
            localStorage.setItem('token', authResult.idToken);
            localStorage.setItem('profile', JSON.stringify(profile));
            localStorage.setItem('accessToken', authResult.accessToken);
            if (profile.signed_up) {
                console.log('Enjoy your journey on Speeroo, ' + profile.nickname);
                _this.userService.createUser({ 'name': profile.nickname, 'userId': profile.user_id, 'peerId': '' }).subscribe(function (data) {
                    _this.response = data.message;
                    console.log(_this.response);
                });
            }
            else {
                console.log('Welcome back, ' + profile.nickname);
            }
            _this.router.navigate(['home']);
        });
    };
    AuthService.prototype.login = function () {
        // Call the show method to display the widget.
        this.lock.show();
    };
    ;
    AuthService.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // It searches for an item in localStorage with key == 'id_token'
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])();
    };
    ;
    AuthService.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('accessToken');
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
        this.router.navigate(['login']);
    };
    ;
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ })

},[618]);
//# sourceMappingURL=main.bundle.js.map