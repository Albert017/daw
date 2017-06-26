webpackJsonp([0,4],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_login_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPostPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddPostPageComponent = (function () {
    function AddPostPageComponent(router, loginService, http) {
        this.router = router;
        this.loginService = loginService;
        this.http = http;
        this.imageTitleFileUploader = "";
        this.op = "anime";
    }
    AddPostPageComponent.prototype.ngOnInit = function () {
    };
    AddPostPageComponent.prototype.fileChange = function (event) {
        var files = event.target.files;
        if (files.length > 0) {
            this.formData = new FormData();
            this.formData.append('file', files[0]);
        }
    };
    AddPostPageComponent.prototype.upload = function () {
        var _this = this;
        console.log(this.op);
        if (this.formData) {
            this.formData.append('imageTitleFileUploader', this.imageTitleFileUploader);
            this.formData.append('op', this.op);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
            headers.append('withCredentials', 'true');
            headers.append('Accept', 'application/json');
            headers.append('X-Requested-With', 'XMLHttpRequest');
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.http.post('http://localhost:8080/api/posts/', this.formData, options).subscribe(function (response) {
                _this.router.navigate(['/hot']);
            }, function (error) {
                alert('Error al enviar.');
            });
        }
    };
    AddPostPageComponent.prototype.background = function () {
        return "url(./src/assets/headers/" + this.loginService.user.id + ".jpg)";
    };
    return AddPostPageComponent;
}());
AddPostPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-add-post-page',
        template: __webpack_require__(362),
        styles: [__webpack_require__(320)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object])
], AddPostPageComponent);

var _a, _b, _c;
//# sourceMappingURL=add-post-page.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_login_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeAvatarPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangeAvatarPageComponent = (function () {
    function ChangeAvatarPageComponent(router, loginService, http) {
        this.router = router;
        this.loginService = loginService;
        this.http = http;
    }
    ChangeAvatarPageComponent.prototype.ngOnInit = function () {
    };
    ChangeAvatarPageComponent.prototype.fileChange = function (event) {
        var files = event.target.files;
        if (files.length > 0) {
            this.formData = new FormData();
            this.formData.append('file', files[0]);
        }
    };
    ChangeAvatarPageComponent.prototype.upload = function () {
        var _this = this;
        console.log(123);
        if (this.formData) {
            console.log(123);
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
            headers.append('withCredentials', 'true');
            headers.append('Accept', 'application/json');
            headers.append('X-Requested-With', 'XMLHttpRequest');
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.http.post('http://localhost:8080/api/users/avatar/', this.formData, options).subscribe(function (response) {
                _this.router.navigate(['/profile']);
            }, function (error) {
                alert('Error al enviar.');
            });
        }
    };
    ChangeAvatarPageComponent.prototype.background = function () {
        return "url(./src/assets/headers/" + this.loginService.user.id + ".jpg)";
    };
    return ChangeAvatarPageComponent;
}());
ChangeAvatarPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-change-avatar-page',
        template: __webpack_require__(365),
        styles: [__webpack_require__(323)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object])
], ChangeAvatarPageComponent);

var _a, _b, _c;
//# sourceMappingURL=change-avatar-page.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_login_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeHeaderPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangeHeaderPageComponent = (function () {
    function ChangeHeaderPageComponent(router, loginService, http) {
        this.router = router;
        this.loginService = loginService;
        this.http = http;
    }
    ChangeHeaderPageComponent.prototype.ngOnInit = function () {
    };
    ChangeHeaderPageComponent.prototype.fileChange = function (event) {
        var files = event.target.files;
        if (files.length > 0) {
            this.formData = new FormData();
            this.formData.append('file', files[0]);
        }
    };
    ChangeHeaderPageComponent.prototype.upload = function () {
        var _this = this;
        if (this.formData) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
            headers.append('withCredentials', 'true');
            headers.append('Accept', 'application/json');
            headers.append('X-Requested-With', 'XMLHttpRequest');
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.http.post('http://localhost:8080/api/users/header/', this.formData, options).subscribe(function (response) {
                _this.router.navigate(['/profile']);
            }, function (error) {
                alert('Error al enviar.');
            });
        }
    };
    ChangeHeaderPageComponent.prototype.background = function () {
        return "url(./src/assets/headers/" + this.loginService.user.id + ".jpg)";
    };
    return ChangeHeaderPageComponent;
}());
ChangeHeaderPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-change-header-page',
        template: __webpack_require__(366),
        styles: [__webpack_require__(324)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object])
], ChangeHeaderPageComponent);

var _a, _b, _c;
//# sourceMappingURL=change-header-page.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_login_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_user_user_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProfilePageComponent = (function () {
    function EditProfilePageComponent(loginService, route, router, userService) {
        this.loginService = loginService;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.user = {
            username: loginService.user.username,
            roles: loginService.user.roles,
            userEmail: " ",
            userBiography: " ",
            userLocation: " ",
            userLink: " "
        };
    }
    EditProfilePageComponent.prototype.updateInfo = function () {
        this.userService.updateUser(this.user);
    };
    EditProfilePageComponent.prototype.ngOnInit = function () {
    };
    EditProfilePageComponent.prototype.background = function () {
        return "url(./src/assets/headers/" + this.loginService.user.id + ".jpg)";
    };
    return EditProfilePageComponent;
}());
EditProfilePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-edit-profile-page',
        template: __webpack_require__(367),
        styles: [__webpack_require__(325)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_user_user_service__["a" /* UserService */]) === "function" && _d || Object])
], EditProfilePageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-profile-page.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_login_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_api_posts_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL = 'http://localhost:8080/api';
var HotPageComponent = (function () {
    function HotPageComponent(http, loginService, apiPostsService) {
        var _this = this;
        this.http = http;
        this.loginService = loginService;
        this.apiPostsService = apiPostsService;
        this.posts = [];
        var url = URL + "/posts/";
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            for (var i = 0; i < data.length; i++) {
                var post = data[i];
                _this.posts.push(post);
            }
            _this.posts = _this.posts.reverse();
        }, function (error) { return console.error(error); });
    }
    HotPageComponent.prototype.ngOnInit = function () {
    };
    return HotPageComponent;
}());
HotPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-hot-page',
        template: __webpack_require__(368),
        styles: [__webpack_require__(326)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_api_posts_service__["a" /* ApiPostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_api_posts_service__["a" /* ApiPostsService */]) === "function" && _c || Object])
], HotPageComponent);

var _a, _b, _c;
//# sourceMappingURL=hot-page.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_login_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogInComponent = (function () {
    function LogInComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    LogInComponent.prototype.logIn = function () {
        this.loginService.logIn(this.username, this.password);
        this.loggedUser = this.loginService;
    };
    LogInComponent.prototype.ngOnInit = function () {
    };
    return LogInComponent;
}());
LogInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-log-in',
        template: __webpack_require__(369),
        styles: [__webpack_require__(327)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], LogInComponent);

var _a, _b;
//# sourceMappingURL=log-in.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_login_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageDeletedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL = 'http://localhost:8080/api';
var MessageDeletedComponent = (function () {
    function MessageDeletedComponent(loginService, route, router, http) {
        var _this = this;
        this.loginService = loginService;
        this.route = route;
        this.router = router;
        this.http = http;
        console.log(this.loginService);
        if (this.loginService.isLogged) {
            var url = URL + "/messages/deleted";
            this.http.get(url, { withCredentials: true }).subscribe(function (response) {
                var data = response.json();
                _this.messages = data;
                console.log(_this.messages);
            }, function (error) { return console.error(error); });
        }
    }
    MessageDeletedComponent.prototype.ngOnInit = function () {
    };
    return MessageDeletedComponent;
}());
MessageDeletedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-message-deleted',
        template: __webpack_require__(370),
        styles: [__webpack_require__(328)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _d || Object])
], MessageDeletedComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=message-deleted.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageNewComponent = (function () {
    function MessageNewComponent() {
    }
    MessageNewComponent.prototype.ngOnInit = function () {
    };
    return MessageNewComponent;
}());
MessageNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-message-new',
        template: __webpack_require__(371),
        styles: [__webpack_require__(329)]
    }),
    __metadata("design:paramtypes", [])
], MessageNewComponent);

//# sourceMappingURL=message-new.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_login_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL = 'http://localhost:8080/api';
var MessagePageComponent = (function () {
    function MessagePageComponent(loginService, route, router, http) {
        var _this = this;
        this.loginService = loginService;
        this.route = route;
        this.router = router;
        this.http = http;
        console.log(this.loginService);
        if (this.loginService.isLogged) {
            var url = URL + "/messages/conversations";
            this.http.get(url, { withCredentials: true }).subscribe(function (response) {
                var data = response.json();
                _this.messages = data;
                console.log(_this.messages);
            }, function (error) { return console.error(error); });
        }
    }
    MessagePageComponent.prototype.ngOnInit = function () {
    };
    return MessagePageComponent;
}());
MessagePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-message-page',
        template: __webpack_require__(372),
        styles: [__webpack_require__(330)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _d || Object])
], MessagePageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=message-page.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_login_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageReadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL = 'http://localhost:8080/api';
var MessageReadComponent = (function () {
    function MessageReadComponent(route, router, http, loginService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.loginService = loginService;
        this.messages = [];
        var username = route.snapshot.params['name'];
        if (this.loginService.isLogged) {
            var url = URL + "/messages/conversations=" + username;
            this.http.get(url, { withCredentials: true }).subscribe(function (response) {
                var data = response.json();
                var j = 0;
                for (var i = (data.length - 1); i >= 0; i--) {
                    _this.messages[j] = data[i];
                    j++;
                }
                console.log(data);
                console.log(_this.messages);
            }, function (error) { return console.error(error); });
        }
    }
    MessageReadComponent.prototype.ngOnInit = function () {
    };
    return MessageReadComponent;
}());
MessageReadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-message-read',
        template: __webpack_require__(373),
        styles: [__webpack_require__(331)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_login_service__["a" /* LoginService */]) === "function" && _d || Object])
], MessageReadComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=message-read.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_login_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_api_posts_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostIndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {HttpClient} from "../HttpClient/HttpClient";




var URL = 'http://localhost:8080/api';
var PostIndexComponent = (function () {
    function PostIndexComponent(route, router, http, loginService, apiPostsService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.loginService = loginService;
        this.apiPostsService = apiPostsService;
        this.comment = { commentContent: "" };
        this.loggedUser = this.loginService.getUser();
        this.route.params.subscribe(function (params) {
            _this.idPost = params['id'];
        });
        var url = URL + "/posts/" + this.idPost;
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            _this.post = data;
        }, function (error) { return console.error(error); });
    }
    PostIndexComponent.prototype.ngOnInit = function () { };
    PostIndexComponent.prototype.addComment = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('withCredentials', 'true');
        headers.append('Accept', 'application/json');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append('Content-type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post('http://localhost:8080/api/posts/' + this.idPost + '/comments/', this.comment, options).subscribe(function (response) {
            var comment = response.json();
            _this.post.postComments.push(comment);
        }, function (error) {
            alert("Error al publicar comentario");
        });
    };
    PostIndexComponent.prototype.onSubmit = function (postId) {
        var url = URL + "/posts/" + postId + "/comments/";
        var data = JSON.stringify(this.comment);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('withCredentials', 'true');
        headers.append('Accept', 'application/json');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, data, options).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
    };
    return PostIndexComponent;
}());
PostIndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-post-index',
        template: __webpack_require__(376)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_login_service__["a" /* LoginService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_app_api_posts_service__["a" /* ApiPostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_api_posts_service__["a" /* ApiPostsService */]) === "function" && _e || Object])
], PostIndexComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=post-index.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_login_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL = 'http://localhost:8080/api';
var ProfilePageComponent = (function () {
    function ProfilePageComponent(loginService, route, router, http) {
        var _this = this;
        this.loginService = loginService;
        this.route = route;
        this.router = router;
        this.http = http;
        this.html = "posts";
        this.isAdminLogged = this.loginService.isAdminMethod();
        console.log(this.loginService);
        var url = URL + "/users/" + this.loginService.user.id;
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            _this.numFollowers = data.userFollowers.length;
            _this.numFollowing = data.userFollowing.length;
        }, function (error) { return console.error(error); });
    }
    ProfilePageComponent.prototype.ngOnInit = function () {
    };
    ProfilePageComponent.prototype.goToMenu = function (menu) {
        this.html = menu;
    };
    ProfilePageComponent.prototype.background = function () {
        return "url(./src/assets/headers/" + this.loginService.user.id + ".jpg)";
    };
    return ProfilePageComponent;
}());
ProfilePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile-page',
        template: __webpack_require__(379),
        styles: [__webpack_require__(336)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _d || Object])
], ProfilePageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile-page.component.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_api_posts_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_login_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL = 'http://localhost:8080/api';
var RandomPageComponent = (function () {
    function RandomPageComponent(http, loginService, apiPostsService) {
        var _this = this;
        this.http = http;
        this.loginService = loginService;
        this.apiPostsService = apiPostsService;
        this.posts = [];
        var url = URL + "/posts/";
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            for (var i = 0; i < data.length; i++) {
                var p = data[i];
                _this.posts.push(p);
            }
            var cont = Math.floor(Math.random() * (_this.posts.length));
            _this.post = _this.posts[cont];
        }, function (error) { return console.error(error); });
    }
    RandomPageComponent.prototype.ngOnInit = function () {
    };
    return RandomPageComponent;
}());
RandomPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-random-page',
        template: __webpack_require__(385),
        styles: [__webpack_require__(342)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_api_posts_service__["a" /* ApiPostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_api_posts_service__["a" /* ApiPostsService */]) === "function" && _c || Object])
], RandomPageComponent);

var _a, _b, _c;
//# sourceMappingURL=random-page.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_api_posts_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_login_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var URL = 'http://localhost:8080/api';
var SearchPageComponent = (function () {
    function SearchPageComponent(route, router, http, apiPostsService, loginService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.apiPostsService = apiPostsService;
        this.loginService = loginService;
        this.posts = [];
        this.route.params.subscribe(function (params) {
            _this.title = params['find'];
        });
        var url = URL + "/posts/search=" + this.title;
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            for (var i = 0; i < data.length; i++) {
                var p = data[i];
                _this.posts.push(p);
            }
            var cont = Math.floor(Math.random() * (_this.posts.length));
            _this.post = _this.posts[cont];
        }, function (error) { return console.error(error); });
    }
    SearchPageComponent.prototype.ngOnInit = function () {
    };
    return SearchPageComponent;
}());
SearchPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-search-page',
        template: __webpack_require__(386),
        styles: [__webpack_require__(343)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_api_posts_service__["a" /* ApiPostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_api_posts_service__["a" /* ApiPostsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_login_service__["a" /* LoginService */]) === "function" && _e || Object])
], SearchPageComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=search-page.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupPageComponent = (function () {
    function SignupPageComponent(http, router) {
        this.http = http;
        this.router = router;
        this.error = false;
        this.username = "";
        this.password = "";
        this.email = "";
    }
    SignupPageComponent.prototype.ngOnInit = function () {
    };
    SignupPageComponent.prototype.signUp = function () {
        var _this = this;
        var URL = 'http://localhost:8080/api/users/';
        if (this.email === "" || this.username === "" || this.password === "") {
            this.error = true;
        }
        else {
            var data = { username: this.username, userEmail: this.email, userPassword: this.password };
            this.http.post(URL, data).subscribe(function (response) {
                alert("User created.");
                _this.router.navigate(['/hot']);
            }, function (error) {
                alert("Error creating the user.");
                _this.error = true;
            });
        }
    };
    return SignupPageComponent;
}());
SignupPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-signup-page',
        template: __webpack_require__(390),
        styles: [__webpack_require__(347)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], SignupPageComponent);

var _a, _b;
//# sourceMappingURL=signup-page.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_login_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_api_posts_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var URL = 'http://localhost:8080/api';
var TagsPageComponent = (function () {
    function TagsPageComponent(route, router, http, loginService, apiPostsService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.loginService = loginService;
        this.apiPostsService = apiPostsService;
        this.posts = [];
        this.route.params.subscribe(function (params) {
            _this.tags = params['tags'];
        });
        var url = URL + "/posts/tag=" + this.tags;
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            for (var i = 0; i < data.length; i++) {
                var post = data[i];
                _this.posts.push(post);
            }
        }, function (error) { return console.error(error); });
    }
    TagsPageComponent.prototype.ngOnInit = function () {
    };
    return TagsPageComponent;
}());
TagsPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-tags-page',
        template: __webpack_require__(392),
        styles: [__webpack_require__(349)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_login_service__["a" /* LoginService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_api_posts_service__["a" /* ApiPostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_api_posts_service__["a" /* ApiPostsService */]) === "function" && _e || Object])
], TagsPageComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=tags-page.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_login_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_api_posts_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendingPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL = 'http://localhost:8080/api';
var TrendingPageComponent = (function () {
    function TrendingPageComponent(http, loginService, apiPostsService) {
        var _this = this;
        this.http = http;
        this.loginService = loginService;
        this.apiPostsService = apiPostsService;
        this.posts = [];
        //Get Posts
        var url = URL + "/posts/trending";
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            for (var i = 0; i < data.length; i++) {
                var post = data[i];
                _this.posts.push(post);
            }
        }, function (error) { return console.error(error); });
    }
    TrendingPageComponent.prototype.ngOnInit = function () {
    };
    return TrendingPageComponent;
}());
TrendingPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-trending-page',
        template: __webpack_require__(393),
        styles: [__webpack_require__(350)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_api_posts_service__["a" /* ApiPostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_api_posts_service__["a" /* ApiPostsService */]) === "function" && _c || Object])
], TrendingPageComponent);

var _a, _b, _c;
//# sourceMappingURL=trending-page.component.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_login_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_user_user_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var URL = 'http://localhost:8080/api';
var UserProfileComponent = (function () {
    function UserProfileComponent(route, router, http, loginService, userService) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.loginService = loginService;
        this.userService = userService;
        this.html = "posts";
        this.user = {
            id: 1,
            username: "Cargando...",
            userEmail: "Cargando...",
            userBiography: "Cargando...",
            userLocation: "Cargando...",
            userLink: "",
            report: false,
            roles: [],
            userFollowing: [],
            userFollowers: [],
            userPosts: []
        };
        var username = route.snapshot.params['name'];
        this.getUserInfo(username);
        console.log(this.user);
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.prototype.goToMenu = function (menu) {
        this.html = menu;
    };
    UserProfileComponent.prototype.getUserInfo = function (username) {
        var _this = this;
        console.log("entre");
        var url = URL + "/users/name=" + username;
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            _this.user = data;
            _this.numFollowers = _this.user.userFollowers.length;
            _this.numFollowing = _this.user.userFollowing.length;
            _this.headerBackground = "./src/assets/headers/" + _this.user.id + ".jpg";
            console.log("Followers " + _this.numFollowers);
            console.log("Following " + _this.numFollowing);
            console.log(data);
        }, function (error) { return console.error(error); });
        console.log(this.user);
    };
    UserProfileComponent.prototype.background = function () {
        return "url(./src/assets/headers/" + this.user.id + ".jpg)";
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user-profile',
        template: __webpack_require__(397),
        styles: [__webpack_require__(354)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_login_service__["a" /* LoginService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_user_user_service__["a" /* UserService */]) === "function" && _e || Object])
], UserProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_login_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserToolsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserToolsComponent = (function () {
    function UserToolsComponent(loginService, http) {
        this.loginService = loginService;
        this.http = http;
        this.html = "settings";
        this.isAdminLogged = this.loginService.isAdminMethod();
    }
    UserToolsComponent.prototype.ngOnInit = function () {
    };
    UserToolsComponent.prototype.goToMenu = function (s) {
        this.html = s;
    };
    UserToolsComponent.prototype.background = function () {
        return "url(./src/assets/headers/" + this.loginService.user.id + ".jpg)";
    };
    return UserToolsComponent;
}());
UserToolsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user-tools',
        template: __webpack_require__(398),
        styles: [__webpack_require__(355)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], UserToolsComponent);

var _a, _b;
//# sourceMappingURL=user-tools.component.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_login_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiPostsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var URL = 'http://localhost:8080/api';
var ApiPostsService = (function () {
    function ApiPostsService(http, loginService) {
        this.http = http;
        this.loginService = loginService;
    }
    ApiPostsService.prototype.getOptions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('withCredentials', 'true');
        headers.append('Accept', 'application/json');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append('Content-type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    ApiPostsService.prototype.upvotePost = function (id) {
        var _this = this;
        var url = URL + "/posts/upvote=" + id;
        var options = this.getOptions();
        this.http.put(url, null, options).subscribe(function (response) {
            return response.json();
        }, function (error) {
            alert("Couldn't upvote post. Only logged users can vote.");
            return _this.handleError(error);
        });
    };
    ApiPostsService.prototype.downvotePost = function (id) {
        var _this = this;
        var url = URL + "/posts/downvote=" + id;
        var options = this.getOptions();
        this.http.put(url, null, options).subscribe(function (response) {
            return response.json();
        }, function (error) {
            alert("Couldn't downvote post. Only logged users can vote.");
            return _this.handleError(error);
        });
    };
    ApiPostsService.prototype.reportPost = function (id) {
        var _this = this;
        var url = URL + "/posts/report=" + id;
        var options = this.getOptions();
        this.http.put(url, null, options).subscribe(function (response) {
            alert("Post reported succesfully.");
            return response.json();
        }, function (error) {
            alert("Couldn't report post.");
            return _this.handleError(error);
        });
    };
    ApiPostsService.prototype.deletePost = function (id) {
        var _this = this;
        var url = URL + "/posts/delete=" + id;
        var options = this.getOptions();
        this.http.delete(url, options).subscribe(function (response) {
            alert("Post deleted succesfully.");
            return response.json();
        }, function (error) {
            alert("Couldn't delete post.");
            return _this.handleError(error);
        });
    };
    ApiPostsService.prototype.unreportPost = function (id) {
        var _this = this;
        var url = URL + "/posts/unreport=" + id;
        var options = this.getOptions();
        this.http.put(url, null, options).subscribe(function (response) {
            alert("Post unmarked succesfully.");
            return response.json();
        }, function (error) {
            alert("Couldn't unmark post.");
            return _this.handleError(error);
        });
    };
    ApiPostsService.prototype.handleError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw("Server error (" + error.status + "): " + error.text());
    };
    return ApiPostsService;
}());
ApiPostsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_login_service__["a" /* LoginService */]) === "function" && _b || Object])
], ApiPostsService);

var _a, _b;
//# sourceMappingURL=api-posts.service.js.map

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 230;


/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(263);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(363),
        styles: [__webpack_require__(321)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hot_page_hot_page_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__trending_page_trending_page_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__log_in_log_in_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_user_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__post_post_index_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_user_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__api_posts_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_page_profile_page_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__profile_posts_profile_posts_component__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__profile_followers_profile_followers_component__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__profile_following_profile_following_component__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__profile_report_users_profile_report_users_component__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__profile_report_posts_profile_report_posts_component__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__profile_report_comments_profile_report_comments_component__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__user_profile_user_profile_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__user_followers_user_followers_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__user_following_user_following_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__user_post_user_post_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__best_posts_best_posts_component__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__social_networks_social_networks_component__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__random_page_random_page_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__tags_page_tags_page_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__search_page_search_page_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__user_tools_user_tools_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__settings_page_settings_page_component__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__settings_notifications_settings_notifications_component__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__settings_password_settings_password_component__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__add_post_page_add_post_page_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__change_header_page_change_header_page_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__change_avatar_page_change_avatar_page_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__edit_profile_page_edit_profile_page_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__message_page_message_page_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__message_new_message_new_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__message_read_message_read_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__signup_page_signup_page_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__profile_post_following_profile_post_following_component__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_app_message_message_component__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__message_deleted_message_deleted_component__ = __webpack_require__(165);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















































// import { MessageComponent } from './message/message.component';
// import { CommentComponent } from './comment/comment.component';
//import { HttpClientComponent } from './http-client/http-client.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__hot_page_hot_page_component__["a" /* HotPageComponent */],
            __WEBPACK_IMPORTED_MODULE_10__trending_page_trending_page_component__["a" /* TrendingPageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__log_in_log_in_component__["a" /* LogInComponent */],
            __WEBPACK_IMPORTED_MODULE_12__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_13__post_post_index_component__["a" /* PostIndexComponent */],
            __WEBPACK_IMPORTED_MODULE_16__profile_page_profile_page_component__["a" /* ProfilePageComponent */],
            __WEBPACK_IMPORTED_MODULE_17__profile_posts_profile_posts_component__["a" /* ProfilePostsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__profile_followers_profile_followers_component__["a" /* ProfileFollowersComponent */],
            __WEBPACK_IMPORTED_MODULE_19__profile_following_profile_following_component__["a" /* ProfileFollowingComponent */],
            __WEBPACK_IMPORTED_MODULE_20__profile_report_users_profile_report_users_component__["a" /* ProfileReportUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_21__profile_report_posts_profile_report_posts_component__["a" /* ProfileReportPostsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__profile_report_comments_profile_report_comments_component__["a" /* ProfileReportCommentsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_24__user_followers_user_followers_component__["a" /* UserFollowersComponent */],
            __WEBPACK_IMPORTED_MODULE_25__user_following_user_following_component__["a" /* UserFollowingComponent */],
            __WEBPACK_IMPORTED_MODULE_26__user_post_user_post_component__["a" /* UserPostComponent */],
            __WEBPACK_IMPORTED_MODULE_27__best_posts_best_posts_component__["a" /* BestPostsComponent */],
            __WEBPACK_IMPORTED_MODULE_28__social_networks_social_networks_component__["a" /* SocialNetworksComponent */],
            __WEBPACK_IMPORTED_MODULE_29__random_page_random_page_component__["a" /* RandomPageComponent */],
            __WEBPACK_IMPORTED_MODULE_30__tags_page_tags_page_component__["a" /* TagsPageComponent */],
            __WEBPACK_IMPORTED_MODULE_31__search_page_search_page_component__["a" /* SearchPageComponent */],
            __WEBPACK_IMPORTED_MODULE_32__user_tools_user_tools_component__["a" /* UserToolsComponent */],
            __WEBPACK_IMPORTED_MODULE_33__settings_page_settings_page_component__["a" /* SettingsPageComponent */],
            __WEBPACK_IMPORTED_MODULE_34__settings_notifications_settings_notifications_component__["a" /* SettingsNotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_35__settings_password_settings_password_component__["a" /* SettingsPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_36__add_post_page_add_post_page_component__["a" /* AddPostPageComponent */],
            __WEBPACK_IMPORTED_MODULE_37__change_header_page_change_header_page_component__["a" /* ChangeHeaderPageComponent */],
            __WEBPACK_IMPORTED_MODULE_38__change_avatar_page_change_avatar_page_component__["a" /* ChangeAvatarPageComponent */],
            __WEBPACK_IMPORTED_MODULE_39__edit_profile_page_edit_profile_page_component__["a" /* EditProfilePageComponent */],
            __WEBPACK_IMPORTED_MODULE_40__message_page_message_page_component__["a" /* MessagePageComponent */],
            __WEBPACK_IMPORTED_MODULE_41__message_new_message_new_component__["a" /* MessageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_42__message_read_message_read_component__["a" /* MessageReadComponent */],
            __WEBPACK_IMPORTED_MODULE_43__signup_page_signup_page_component__["a" /* SignupPageComponent */],
            __WEBPACK_IMPORTED_MODULE_44__profile_post_following_profile_post_following_component__["a" /* ProfilePostFollowingComponent */],
            __WEBPACK_IMPORTED_MODULE_45_app_message_message_component__["a" /* MessageComponent */],
            __WEBPACK_IMPORTED_MODULE_46__message_deleted_message_deleted_component__["a" /* MessageDeletedComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_0__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_15__api_posts_service__["a" /* ApiPostsService */], __WEBPACK_IMPORTED_MODULE_14__user_user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hot_page_hot_page_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trending_page_trending_page_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_in_log_in_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_post_index_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_page_profile_page_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_profile_user_profile_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__random_page_random_page_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tags_page_tags_page_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_page_search_page_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_tools_user_tools_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_post_page_add_post_page_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__change_avatar_page_change_avatar_page_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__change_header_page_change_header_page_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__edit_profile_page_edit_profile_page_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__message_page_message_page_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__message_new_message_new_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__message_read_message_read_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__signup_page_signup_page_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_message_deleted_message_deleted_component__ = __webpack_require__(165);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




















var appRoutes = [
    { path: 'hot', component: __WEBPACK_IMPORTED_MODULE_1__hot_page_hot_page_component__["a" /* HotPageComponent */], useAsDefault: true },
    { path: 'trending', component: __WEBPACK_IMPORTED_MODULE_2__trending_page_trending_page_component__["a" /* TrendingPageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__log_in_log_in_component__["a" /* LogInComponent */] },
    { path: 'post', component: __WEBPACK_IMPORTED_MODULE_4__post_post_index_component__["a" /* PostIndexComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__profile_page_profile_page_component__["a" /* ProfilePageComponent */] },
    { path: 'post/:id', component: __WEBPACK_IMPORTED_MODULE_4__post_post_index_component__["a" /* PostIndexComponent */] },
    { path: 'user/:name', component: __WEBPACK_IMPORTED_MODULE_6__user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'random', component: __WEBPACK_IMPORTED_MODULE_7__random_page_random_page_component__["a" /* RandomPageComponent */] },
    { path: 'logOut', component: __WEBPACK_IMPORTED_MODULE_1__hot_page_hot_page_component__["a" /* HotPageComponent */] },
    { path: 'tag/:tags', component: __WEBPACK_IMPORTED_MODULE_8__tags_page_tags_page_component__["a" /* TagsPageComponent */] },
    { path: 'search/:find', component: __WEBPACK_IMPORTED_MODULE_9__search_page_search_page_component__["a" /* SearchPageComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_10__user_tools_user_tools_component__["a" /* UserToolsComponent */] },
    { path: 'addPost', component: __WEBPACK_IMPORTED_MODULE_11__add_post_page_add_post_page_component__["a" /* AddPostPageComponent */] },
    { path: 'changeAvatar', component: __WEBPACK_IMPORTED_MODULE_12__change_avatar_page_change_avatar_page_component__["a" /* ChangeAvatarPageComponent */] },
    { path: 'changeHeader', component: __WEBPACK_IMPORTED_MODULE_13__change_header_page_change_header_page_component__["a" /* ChangeHeaderPageComponent */] },
    { path: 'edit-profile', component: __WEBPACK_IMPORTED_MODULE_14__edit_profile_page_edit_profile_page_component__["a" /* EditProfilePageComponent */] },
    { path: 'messages', component: __WEBPACK_IMPORTED_MODULE_15__message_page_message_page_component__["a" /* MessagePageComponent */] },
    { path: 'newMessage', component: __WEBPACK_IMPORTED_MODULE_16__message_new_message_new_component__["a" /* MessageNewComponent */] },
    { path: 'conversation/:name', component: __WEBPACK_IMPORTED_MODULE_17__message_read_message_read_component__["a" /* MessageReadComponent */] },
    { path: 'deletedMessages', component: __WEBPACK_IMPORTED_MODULE_19_app_message_deleted_message_deleted_component__["a" /* MessageDeletedComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_18__signup_page_signup_page_component__["a" /* SignupPageComponent */] },
    { path: '', redirectTo: 'hot', pathMatch: 'full' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BestPostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var URL = 'http://localhost:8080/api';
var BestPostsComponent = (function () {
    function BestPostsComponent(http) {
        var _this = this;
        this.http = http;
        //Get best of the year
        var url = URL + "/posts/best/year/";
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            _this.postYear = data;
        }, function (error) { return console.error(error); });
        //Get best of the month 
        url = URL + "/posts/best/month/";
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            _this.postMonth = data;
        }, function (error) { return console.error(error); });
        //Get best of the week 
        url = URL + "/posts/best/week/";
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            _this.postWeek = data;
        }, function (error) { return console.error(error); });
        //Get best of the day 
        url = URL + "/posts/best/day/";
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            _this.postDay = data;
        }, function (error) { return console.error(error); });
    }
    BestPostsComponent.prototype.ngOnInit = function () {
    };
    return BestPostsComponent;
}());
BestPostsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-best-posts',
        template: __webpack_require__(364),
        styles: [__webpack_require__(322)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BestPostsComponent);

var _a;
//# sourceMappingURL=best-posts.component.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageComponent = (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    return MessageComponent;
}());
MessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-message',
        template: __webpack_require__(374),
        styles: [__webpack_require__(332)]
    }),
    __metadata("design:paramtypes", [])
], MessageComponent);

//# sourceMappingURL=message.component.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_login_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(router, loginService, http) {
        this.router = router;
        this.loginService = loginService;
        this.http = http;
        this.numEmails = 0;
        this.loggedUser = {
            id: 0,
            username: "Cargando...",
            userEmail: "Cargando...",
            userBiography: "Cargando...",
            userLocation: "Cargando...",
            userLink: "",
            report: false,
            roles: [],
            userFollowing: [],
            userFollowers: [],
            userPosts: []
        };
        this.loggedUser = this.loginService.getUser();
        this.calculateNumEmails();
        //this.loginService.logIn("user1","pass1");
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onSubmit = function () {
        this.router.navigate(['/search', this.searchedPost]);
    };
    NavbarComponent.prototype.logOut = function () {
        this.loginService.logOut();
        this.router.navigate(['/hot']);
    };
    NavbarComponent.prototype.calculateNumEmails = function () {
        var _this = this;
        if (this.loginService.isLogged) {
            var url = URL + "/messages/";
            this.http.get(url, { withCredentials: true }).subscribe(function (response) {
                var data = response.json();
                for (var i = 0; i < data.length; i++) {
                    if (data[i].messageNew == true) {
                        _this.numEmails++;
                    }
                }
                console.log(data);
            }, function (error) { return console.error(error); });
        }
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(375),
        styles: [__webpack_require__(333)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_login_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileFollowersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URL = 'http://localhost:8080/api';
var ProfileFollowersComponent = (function () {
    function ProfileFollowersComponent(loginService, http) {
        var _this = this;
        this.loginService = loginService;
        this.http = http;
        this.followers = [];
        var url = URL + "/users/" + this.loginService.user.id;
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            for (var i = 0; i < data.userFollowers.length; i++) {
                _this.followers.push(data.userFollowers[i]);
            }
        }, function (error) { return console.error(error); });
    }
    ProfileFollowersComponent.prototype.ngOnInit = function () {
    };
    return ProfileFollowersComponent;
}());
ProfileFollowersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile-followers',
        template: __webpack_require__(377),
        styles: [__webpack_require__(334)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], ProfileFollowersComponent);

var _a, _b;
//# sourceMappingURL=profile-followers.component.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_login_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileFollowingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URL = 'http://localhost:8080/api';
var ProfileFollowingComponent = (function () {
    function ProfileFollowingComponent(loginService, http) {
        var _this = this;
        this.loginService = loginService;
        this.http = http;
        this.followings = [];
        var url = URL + "/users/" + this.loginService.user.id;
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            for (var i = 0; i < data.userFollowing.length; i++) {
                _this.followings.push(data.userFollowing[i]);
            }
        }, function (error) { return console.error(error); });
    }
    ProfileFollowingComponent.prototype.ngOnInit = function () {
    };
    return ProfileFollowingComponent;
}());
ProfileFollowingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile-following',
        template: __webpack_require__(378),
        styles: [__webpack_require__(335)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], ProfileFollowingComponent);

var _a, _b;
//# sourceMappingURL=profile-following.component.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_login_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePostFollowingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL = 'http://localhost:8080/api';
var ProfilePostFollowingComponent = (function () {
    function ProfilePostFollowingComponent(loginService, route, router, http) {
        var _this = this;
        this.loginService = loginService;
        this.route = route;
        this.router = router;
        this.http = http;
        this.posts = [];
        var url = URL + "/posts/followingPosts=" + this.loginService.user.id;
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            for (var i = 0; i < data.length; i++) {
                var post = data[i];
                _this.posts.push(post);
            }
        }, function (error) { return console.error(error); });
    }
    ProfilePostFollowingComponent.prototype.ngOnInit = function () {
    };
    return ProfilePostFollowingComponent;
}());
ProfilePostFollowingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile-post-following',
        template: __webpack_require__(380),
        styles: [__webpack_require__(337)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _d || Object])
], ProfilePostFollowingComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile-post-following.component.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_login_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_api_posts_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var URL = 'http://localhost:8080/api';
var ProfilePostsComponent = (function () {
    function ProfilePostsComponent(loginService, route, router, http, apiPostsService) {
        var _this = this;
        this.loginService = loginService;
        this.route = route;
        this.router = router;
        this.http = http;
        this.apiPostsService = apiPostsService;
        this.posts = [];
        var url = URL + "/posts/user=" + this.loginService.user.username + "/";
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            for (var i = 0; i < data.length; i++) {
                _this.post = data[i];
                _this.posts.push(_this.post);
            }
        }, function (error) { return console.error(error); });
    }
    ProfilePostsComponent.prototype.ngOnInit = function () {
    };
    return ProfilePostsComponent;
}());
ProfilePostsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile-posts',
        template: __webpack_require__(381),
        styles: [__webpack_require__(338)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_api_posts_service__["a" /* ApiPostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_api_posts_service__["a" /* ApiPostsService */]) === "function" && _e || Object])
], ProfilePostsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile-posts.component.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileReportCommentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileReportCommentsComponent = (function () {
    function ProfileReportCommentsComponent() {
    }
    ProfileReportCommentsComponent.prototype.ngOnInit = function () {
    };
    return ProfileReportCommentsComponent;
}());
ProfileReportCommentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile-report-comments',
        template: __webpack_require__(382),
        styles: [__webpack_require__(339)]
    }),
    __metadata("design:paramtypes", [])
], ProfileReportCommentsComponent);

//# sourceMappingURL=profile-report-comments.component.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_api_posts_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_login_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileReportPostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileReportPostsComponent = (function () {
    function ProfileReportPostsComponent(http, loginService, apiPostsService) {
        var _this = this;
        this.http = http;
        this.loginService = loginService;
        this.apiPostsService = apiPostsService;
        this.posts = [];
        var url = "http://localhost:8080/api/posts/reported/";
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            for (var i = 0; i < data.length; i++) {
                var post = data[i];
                _this.posts.push(post);
            }
        }, function (error) { return console.error(error); });
    }
    ProfileReportPostsComponent.prototype.ngOnInit = function () {
    };
    ProfileReportPostsComponent.prototype.deletePost = function (post) {
        var pos = this.posts.indexOf(post);
        if (pos != -1) {
            this.posts.splice(pos, 1);
        }
        this.apiPostsService.deletePost(post.id);
    };
    ProfileReportPostsComponent.prototype.unmarkPost = function (post) {
        var pos = this.posts.indexOf(post);
        if (pos != -1) {
            this.posts.splice(pos, 1);
        }
        this.apiPostsService.unreportPost(post.id);
    };
    return ProfileReportPostsComponent;
}());
ProfileReportPostsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile-report-posts',
        template: __webpack_require__(383),
        styles: [__webpack_require__(340)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_api_posts_service__["a" /* ApiPostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_api_posts_service__["a" /* ApiPostsService */]) === "function" && _c || Object])
], ProfileReportPostsComponent);

var _a, _b, _c;
//# sourceMappingURL=profile-report-posts.component.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_login_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_api_posts_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_user_user_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileReportUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileReportUsersComponent = (function () {
    function ProfileReportUsersComponent(http, loginService, apiPostsService, userService) {
        var _this = this;
        this.http = http;
        this.loginService = loginService;
        this.apiPostsService = apiPostsService;
        this.userService = userService;
        this.users = [];
        var url = "http://localhost:8080/api/users/replist/";
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            for (var i = 0; i < data.length; i++) {
                var user = data[i];
                _this.users.push(user);
            }
        }, function (error) { return console.error(error); });
    }
    ProfileReportUsersComponent.prototype.ngOnInit = function () {
    };
    ProfileReportUsersComponent.prototype.deleteUser = function (user) {
        var pos = this.users.indexOf(user);
        if (pos != -1) {
            this.users.splice(pos, 1);
        }
        this.userService.deleteUser(user.id);
    };
    ProfileReportUsersComponent.prototype.unmarkUser = function (user) {
        var pos = this.users.indexOf(user);
        if (pos != -1) {
            this.users.splice(pos, 1);
        }
        this.userService.unreportUser(user.id);
    };
    return ProfileReportUsersComponent;
}());
ProfileReportUsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile-report-users',
        template: __webpack_require__(384),
        styles: [__webpack_require__(341)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_api_posts_service__["a" /* ApiPostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_api_posts_service__["a" /* ApiPostsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_user_user_service__["a" /* UserService */]) === "function" && _d || Object])
], ProfileReportUsersComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile-report-users.component.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsNotificationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsNotificationsComponent = (function () {
    function SettingsNotificationsComponent() {
    }
    SettingsNotificationsComponent.prototype.ngOnInit = function () {
    };
    return SettingsNotificationsComponent;
}());
SettingsNotificationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-settings-notifications',
        template: __webpack_require__(387),
        styles: [__webpack_require__(344)]
    }),
    __metadata("design:paramtypes", [])
], SettingsNotificationsComponent);

//# sourceMappingURL=settings-notifications.component.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsPageComponent = (function () {
    function SettingsPageComponent() {
    }
    SettingsPageComponent.prototype.ngOnInit = function () {
    };
    return SettingsPageComponent;
}());
SettingsPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-settings-page',
        template: __webpack_require__(388),
        styles: [__webpack_require__(345)]
    }),
    __metadata("design:paramtypes", [])
], SettingsPageComponent);

//# sourceMappingURL=settings-page.component.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_api_posts_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPasswordComponent = (function () {
    function SettingsPasswordComponent(http, apiPostsService) {
        this.http = http;
        this.apiPostsService = apiPostsService;
        this.pass = { oldPass: "", newPass: "" };
    }
    SettingsPasswordComponent.prototype.ngOnInit = function () {
    };
    SettingsPasswordComponent.prototype.changePassword = function () {
        var url = "http://localhost:8080/api/users/password/";
        var options = this.apiPostsService.getOptions();
        this.http.put(url, this.pass, options).subscribe(function (response) {
            alert("Password updated.");
            return response.json();
        }, function (error) {
            alert("Couldn't change password.");
        });
    };
    return SettingsPasswordComponent;
}());
SettingsPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-settings-password',
        template: __webpack_require__(389),
        styles: [__webpack_require__(346)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_api_posts_service__["a" /* ApiPostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_api_posts_service__["a" /* ApiPostsService */]) === "function" && _b || Object])
], SettingsPasswordComponent);

var _a, _b;
//# sourceMappingURL=settings-password.component.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialNetworksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialNetworksComponent = (function () {
    function SocialNetworksComponent() {
    }
    SocialNetworksComponent.prototype.ngOnInit = function () {
    };
    return SocialNetworksComponent;
}());
SocialNetworksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-social-networks',
        template: __webpack_require__(391),
        styles: [__webpack_require__(348)]
    }),
    __metadata("design:paramtypes", [])
], SocialNetworksComponent);

//# sourceMappingURL=social-networks.component.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFollowersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URL = 'http://localhost:8080/api';
var UserFollowersComponent = (function () {
    function UserFollowersComponent(route, router, http) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.html = "posts";
        this.followers = [];
        var userId = route.snapshot.params['name'];
        var url = URL + "/users/name=" + userId;
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            _this.id = data.id;
            var url2 = URL + "/users/" + data.id;
            _this.http.get(url2).subscribe(function (response) {
                var data2 = response.json();
                console.log(data2.userFollowing);
                _this.followers = data2.userFollowers;
            }, function (error) { return console.error(error); });
        }, function (error) { return console.error(error); });
    }
    UserFollowersComponent.prototype.ngOnInit = function () {
    };
    UserFollowersComponent.prototype.goToMenu = function (menu) {
        this.html = menu;
    };
    return UserFollowersComponent;
}());
UserFollowersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user-followers',
        template: __webpack_require__(394),
        styles: [__webpack_require__(351)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object])
], UserFollowersComponent);

var _a, _b, _c;
//# sourceMappingURL=user-followers.component.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_user_user_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFollowingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL = 'http://localhost:8080/api';
var UserFollowingComponent = (function () {
    function UserFollowingComponent(route, router, http, userService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.html = "posts";
        this.following = [];
        var userId = route.snapshot.params['name'];
        var url = URL + "/users/name=" + userId;
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            _this.id = data.id;
            var url2 = URL + "/users/" + data.id;
            _this.http.get(url2).subscribe(function (response) {
                var data2 = response.json();
                console.log(data2.userFollowing);
                _this.following = data2.userFollowing;
            }, function (error) { return console.error(error); });
        }, function (error) { return console.error(error); });
    }
    UserFollowingComponent.prototype.ngOnInit = function () {
    };
    UserFollowingComponent.prototype.goToMenu = function (menu) {
        this.html = menu;
    };
    return UserFollowingComponent;
}());
UserFollowingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user-following',
        template: __webpack_require__(395),
        styles: [__webpack_require__(352)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_user_user_service__["a" /* UserService */]) === "function" && _d || Object])
], UserFollowingComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-following.component.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_api_posts_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_login_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var URL = 'http://localhost:8080/api';
var UserPostComponent = (function () {
    function UserPostComponent(http, route, router, apiPostsService, loginService) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.apiPostsService = apiPostsService;
        this.loginService = loginService;
        this.posts = [];
        this.user = {
            id: 0,
            username: "Cargando...",
            userEmail: "Cargando...",
            userBiography: "Cargando...",
            userLocation: "Cargando...",
            userLink: "",
            report: false,
            roles: [],
            userFollowing: [],
            userFollowers: [],
            userPosts: []
        };
        this.username = route.snapshot.params['name'];
        this.getUserInfo();
        this.getUserPosts();
    }
    UserPostComponent.prototype.ngOnInit = function () {
    };
    UserPostComponent.prototype.getUserInfo = function () {
        var _this = this;
        var url = URL + "/users/name=" + this.username;
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            _this.user = data;
        }, function (error) { return console.error(error); });
    };
    UserPostComponent.prototype.getUserPosts = function () {
        var _this = this;
        var url = URL + "/posts/user=" + this.username + "/";
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            _this.posts = data;
            console.log(data);
        }, function (error) { return console.error(error); });
    };
    return UserPostComponent;
}());
UserPostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user-post',
        template: __webpack_require__(396),
        styles: [__webpack_require__(353)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_api_posts_service__["a" /* ApiPostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_api_posts_service__["a" /* ApiPostsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_login_service__["a" /* LoginService */]) === "function" && _e || Object])
], UserPostComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user-post.component.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URL = 'http://localhost:8080/api';
var UserComponent = (function () {
    function UserComponent(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.posts = [];
        this.getUserPosts("Sara");
    }
    UserComponent.prototype.getUserPosts = function (username) {
        var _this = this;
        var url = URL + "/posts/" + username;
        this.http.get(url).subscribe(function (response) {
            var data = response.json();
            for (var i = 0; i < data.length; i++) {
                var post = data[i];
                _this.posts.push(post);
            }
        }, function (error) { return console.error(error); });
    };
    UserComponent.prototype.ngOnInit = function () {
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__(399),
        styles: [__webpack_require__(356)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object])
], UserComponent);

var _a, _b, _c;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 263:
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

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".menu li {\r\n    border-left-style: inset;\r\n}\r\n\r\n.menu li a {\r\n    color: black;\r\n}\r\n\r\n.message {\r\n    height: 7em;\r\n}\r\n\r\n.panel-message {\r\n    margin-top: -1em\r\n}\r\n\r\n.message-content {\r\n    height: 7em;\r\n    padding-top: 1px;\r\n    width: 90%;\r\n    padding-left: 1px;\r\n}\r\n\r\n.message-text {\r\n    height: 7em;\r\n    width: 80%;\r\n    margin-left: 1px;\r\n}\r\n\r\n.message-text p {\r\n    padding-top: 1em;\r\n    margin-left: 1.1em;\r\n    padding-left: 1em;\r\n}\r\n\r\n.message a:link {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n.message a:visited {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n.panel-heading a:link{\r\n\ttext-decoration: none;\r\n    color: white;\r\n}\r\n\r\n.panel-heading a:visited { \r\n    color: white;\r\n}\r\n.message a {\r\n    color: black;\r\n}\r\n\r\ninput[type=checkbox] {\r\n    margin-top: -4.5em;\r\n    margin-left: 27.5em;\r\n}\r\n\r\n.user-rmt {\r\n    margin-top: -1.1em;\r\n    margin-left: -1.1em;\r\n    height: 7em;\r\n    border-right-color: beige;\r\n    border-right-style: inset;\r\n}\r\n\r\n.img-profile-message {\r\n    height: 7em;\r\n    margin-left: -1.1em;\r\n}\r\n\r\n.mailbox {\r\n    margin-bottom: 5em;\r\n}\r\n\r\n#legend {\r\n    padding-top: 2em;\r\n}\r\n\r\n#btn-mailbox {\r\n    padding-right: 1em;\r\n    margin-bottom: 1.5em;\r\n}\r\n\r\n#btn-message {\r\n    padding-right: 1em;\r\n}\r\n\r\n.conversation {\r\n    padding-top: 1em;\r\n}\r\n\r\n.conversation button {\r\n    margin: -3em 0.25em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "#imgProfile{\r\n    margin-top: -0.5em;\r\n    margin-right: 0.5em;\r\n    height: 11em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "#imgUser{\r\n    margin-top: -0.5em;\r\n    margin-right: 0.5em;\r\n    height: 11em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 362:
/***/ (function(module, exports) {

module.exports = "<header id=\"page-top\" [style.background-image]=\"background()\">\r\n        <div class=\"container header-info\">\r\n            <div class=\"header-user-info\"> <img id=\"imgProfile\" class=\"img-center\" alt=\"\" src=\"./src/assets/avatars/{{loginService.user.id}}.jpg\" />\r\n                <div class=\"intro-text\">\r\n                    <p><span class=\"name\">{{loginService.user.username}}</span></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <div class=\"row\">\r\n        <div class=\"hidden-xs col-md-3\">\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n            <!-- Form to add a post-->\r\n            <div class=\"side-middle\">\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <h1>Subir post</h1> </div>\r\n                    <div class=\"panel-body\">\r\n                    \t<form action=\"/uploadPost\" method=\"post\"\r\n\t\tenctype=\"multipart/form-data\">\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-body\">\r\n                                <label class=\"control-label\" for=\"postTitle\">\r\n                                    <h3>Título del post</h3></label>\r\n                                <div class=\"controls\">\r\n                                    <input type=\"text\" [(ngModel)]=\"imageTitleFileUploader\" id=\"postTitle\" name=\"imageTitleFileUploader\" placeholder=\"\" class=\"input-xlarge\"></div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-body\">\r\n                                <h3>Imagen del post</h3>\r\n                                <div class=\"upload\">\r\n                                    <label class=\"control-label\" for=\"postURL\">Subir imagen</label>\r\n                                    <input type=\"file\"  id=\"postURL\" name=\"file\" (change)=\"fileChange($event)\" placeholder=\"\" class=\"input-xlarge\"> <!-- <a href=\"#\" class=\"btn btn-primary\" role=\"button\">OK</a>--> </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-body\">\r\n                                <label class=\"control-label\" for=\"postTitle\">\r\n                                    <h3>Choose a tag:</h3></label>\r\n                                    <hr>    \r\n                                    <select [(ngModel)]=\"op\" name=\"op\">\r\n                                        <option [ngValue]=\"'savage'\">Savage</option>\r\n                                        <option [ngValue]=\"'funny'\">Funny</option>\r\n                                        <option [ngValue]=\"'animals'\">Animals</option>\r\n                                        <option [ngValue]=\"'movies'\">Movies and TV</option>\r\n                                        <option [ngValue]=\"'wtf'\">WTF</option>\r\n                                        <option [ngValue]=\"'anime'\">Anime</option>\r\n                                    </select>\r\n                            </div>\r\n                        </div>\r\n                    \t<input type='submit' class=\"btn btn-primary\" (click)=\"upload();\" name='enviar' value='Enviar' />\r\n                    </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Redes sociales-->\r\n        <app-social-networks></app-social-networks>\r\n    </div>"

/***/ }),

/***/ 363:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n <router-outlet></router-outlet>"

/***/ }),

/***/ 364:
/***/ (function(module, exports) {

module.exports = "<!--Para dejar margen-->\r\n            <div class=\"hidden-xs col-md-1\"></div>\r\n            <!--Contenido Izquierda-->\r\n            <div class=\"hidden-xs col-md-2\">\r\n                <div class=\"side-left\">\r\n                    <div *ngIf=\"postYear!==undefined\" class=\"thumbnail\">\r\n                    \t<p class=\"text-center text-warning\">Best of this year.</p>\r\n                        <a [routerLink]=\"['/post',postYear.id]\"><img src=\"src/assets/files/{{postYear.id}}.jpg\" alt=\"\" />\r\n                            <div class=\"caption\">\r\n                                <p>{{postYear.postTitle}}</p>\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n\t              \t<div *ngIf=\"postMonth !== undefined\" class=\"thumbnail\">\r\n                   \t\t<p class=\"text-center text-warning\">Best of this month.</p>\r\n\t                    <a [routerLink]=\"['/post',postMonth.id]\"><img src=\"src/assets/files/{{postMonth.id}}.jpg\" alt=\"\" />\r\n\t                        <div class=\"caption\">\r\n\t                             <p>{{postMonth.postTitle}}</p>\r\n\t                        </div>\r\n\t                    </a>\r\n\t                </div>\r\n                    <div *ngIf=\"postWeek !== undefined\" class=\"thumbnail\">\r\n                   \t\t<p class=\"text-center text-warning\">Best of this week.</p>\r\n                        <a [routerLink]=\"['/post',postWeek.id]\"><img src=\"src/assets/files/{{postWeek.id}}.jpg\" alt=\"\" />\r\n                            <div class=\"caption\">\r\n                                <p>{{postWeek.postTitle}}</p>\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                    <div *ngIf=\"postDay !== undefined\" class=\"thumbnail\">\r\n                    \t<p class=\"text-center text-warning\">Best of today.</p>\r\n                        <a [routerLink]=\"['/post',postDay.id]\"><img src=\"src/assets/files/{{postDay.id}}.jpg\" alt=\"\" />\r\n                            <div class=\"caption\">\r\n                                <p>{{postDay.postTitle}}</p>\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n"

/***/ }),

/***/ 365:
/***/ (function(module, exports) {

module.exports = "<header id=\"page-top\" [style.background-image]=\"background()\">\r\n        <div class=\"container header-info\">\r\n            <div class=\"header-user-info\"> <img id=\"imgProfile\" class=\"img-center\" alt=\"\" src=\"./src/assets/avatars/{{loginService.user.id}}.jpg\" />\r\n                <div class=\"intro-text\">\r\n                    <p><span class=\"name\">{{loginService.user.username}}</span></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <div class=\"row\">\r\n        <div class=\"hidden-xs col-md-3\">\r\n            <div class=\"btn-group-vertical separation-profile\" role=\"group\" aria-label=\"...\">\r\n            \t<a href=\"/edit-profile\" [routerLink]=\"['/edit-profile']\"><button  type=\"button\" class=\"btn btn-default\">Edit profile<span class=\"glyphicon glyphicon-pencil alignment-profile\" aria-hidden=\"true\"></span></button></a>\r\n                <a href=\"/changeAvatar\" [routerLink]=\"['/changeAvatar']\"><button type=\"button\" class=\"btn btn-default\">Avatar<span class=\"glyphicon glyphicon-pencil alignment-profile\" aria-hidden=\"true\"></span></button></a>\r\n                <a href=\"/changeHeader\" [routerLink]=\"['/changeHeader']\"><button type=\"button\" class=\"btn btn-default\">Header<span class=\"glyphicon glyphicon-pencil alignment-profile\" aria-hidden=\"true\"></span></button></a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n            <div class=\"menu-profile\">\r\n                <ul class=\"nav nav-pills\">\r\n                    <li role=\"presentation\"><a href=\"/profile\">Home</a></li>                \r\n                </ul>\r\n            </div>\r\n            <!-- Form to add a post-->\r\n            <div class=\"side-middle\">\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <h1>Cambiar avatar</h1> </div>\r\n                    <div class=\"panel-body\">\r\n                    \t<form action=\"/uploadAvatar\" method=\"post\"\r\n\t\tenctype=\"multipart/form-data\">\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-body\">\r\n                                <h3>Imagen del avatar</h3>\r\n                                <div class=\"upload\">\r\n                                    <label class=\"control-label\" for=\"postURL\">Subir imagen</label>\r\n                                    <input type=\"file\" id=\"postURL\" (change)=\"fileChange($event)\" name=\"file\" placeholder=\"\" class=\"input-xlarge\"></div>\r\n                            </div>\r\n                        </div>\r\n                    \t<input type='submit' (click)=\"upload();\" class=\"btn btn-primary\" name='enviar' value='Enviar' />\r\n                    </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Redes sociales-->\r\n        <app-social-networks></app-social-networks>\r\n    </div>"

/***/ }),

/***/ 366:
/***/ (function(module, exports) {

module.exports = "<header id=\"page-top\" [style.background-image]=\"background()\">\r\n        <div class=\"container header-info\">\r\n            <div class=\"header-user-info\"> <img id=\"imgProfile\" class=\"img-center\" alt=\"\" src=\"./src/assets/avatars/{{loginService.user.id}}.jpg\" />\r\n                <div class=\"intro-text\">\r\n                    <p><span class=\"name\">{{loginService.user.username}}</span></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <div class=\"row\">\r\n        <div class=\"hidden-xs col-md-3\">\r\n            <div class=\"btn-group-vertical separation-profile\" role=\"group\" aria-label=\"...\">\r\n            \t<a href=\"/edit-profile\" [routerLink]=\"['/edit-profile']\"><button  type=\"button\" class=\"btn btn-default\">Edit profile<span class=\"glyphicon glyphicon-pencil alignment-profile\" aria-hidden=\"true\"></span></button></a>\r\n                <a href=\"/changeAvatar\" [routerLink]=\"['/changeAvatar']\"><button type=\"button\" class=\"btn btn-default\">Avatar<span class=\"glyphicon glyphicon-pencil alignment-profile\" aria-hidden=\"true\"></span></button></a>\r\n                <a href=\"/changeHeader\" [routerLink]=\"['/changeHeader']\"><button type=\"button\" class=\"btn btn-default\">Header<span class=\"glyphicon glyphicon-pencil alignment-profile\" aria-hidden=\"true\"></span></button></a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n            <div class=\"menu-profile\">\r\n                <ul class=\"nav nav-pills\">\r\n                    <li role=\"presentation\"><a href=\"/profile\">Home</a></li>\r\n                </ul>\r\n            </div>\r\n            <!-- Form to add a post-->\r\n            <div class=\"side-middle\">\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <h1>Cambiar imagen de cabecera</h1> </div>\r\n                    <div class=\"panel-body\">\r\n                    \t<form action=\"/uploadHeader\" method=\"POST\" enctype=\"multipart/form-data\">\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-body\">\r\n                                <h3>Imagen de cabecera</h3>\r\n                                <div class=\"upload\">\r\n                                    <label class=\"control-label\" for=\"postURL\">Subir imagen</label>\r\n                                    <input type=\"file\" id=\"postURL\" name=\"file\" (change)=\"fileChange($event)\" placeholder=\"\" class=\"btn btn-primary\"></div>\r\n                            </div>\r\n                        </div>\r\n                    \t<input type='submit' (click)=\"upload();\" class=\"btn btn-primary\" name='enviar' value='Enviar' />\r\n                    </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Redes sociales-->\r\n        <app-social-networks></app-social-networks>\r\n    </div>"

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

module.exports = "<header id=\"page-top\" [style.background-image]=\"background()\">\r\n        <div class=\"container header-info\">\r\n            <div class=\"header-user-info\"> <img id=\"imgProfile\" class=\"img-center\" alt=\"\" src=\"./src/assets/avatars/{{loginService.user.id}}.jpg\" />\r\n                <div class=\"intro-text\">\r\n                    <p><span class=\"name\">{{loginService.user.username}}</span></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <div class=\"row\">\r\n        <!--Para dejar margen-->\r\n        <div class=\"hidden-xs col-md-1\"></div>\r\n        <!--Posts-->\r\n        <div class=\"col-xs-12 col-md-6\">\r\n        <form action=\"/uploadProfileNewData/id\" method=\"PUT\"\r\n\t\tenctype=\"multipart/form-data\">\r\n            <div *ngIf=\"loginService.isLogged\" class=\"panel panel-inverse panel-profile\">\r\n                <div class=\"panel-heading\">\r\n                    <h1><strong>Edit profile</strong></h1> </div>\r\n                <div class=\"panel-body\">\r\n                    <hr/>\r\n                    <div>\r\n                        <div class=\"input-group text-profile\"> <span class=\"input-group-addon\" id=\"basic-addon1\">E-mail</span>\r\n                            <input type=\"text\" [(ngModel)]=\"user.userEmail\" class=\"form-control\" name=\"email\" aria-describedby=\"basic-addon1\" value=\"userEmail\"> </div>\r\n                        <div class=\"input-group text-profile\"> <span class=\"input-group-addon\" id=\"basic-addon1\">Biography</span>\r\n                            <input type=\"text\" [(ngModel)]=\"user.userBiography\" class=\"form-control\" name=\"biography\" aria-describedby=\"basic-addon1\" value=\"userBiography\"> </div>\r\n                        <p><small>Tell something about you</small></p>\r\n                        <div class=\"input-group text-profile\"> <span class=\"input-group-addon\" id=\"basic-addon1\">Location</span>\r\n                            <input type=\"text\" [(ngModel)]=\"user.userLocation\" class=\"form-control\" name=\"location\" aria-describedby=\"basic-addon1\" value=\"userLocation\"> </div>\r\n                        <p><small>Where are you from?</small></p>\r\n                        <div class=\"input-group text-profile\"> <span class=\"input-group-addon\" id=\"basic-addon1\">Links</span>\r\n                            <input type=\"text\" [(ngModel)]=\"user.userLink\" class=\"form-control\" name=\"links\" aria-describedby=\"basic-addon1\" value=\"userLink\"> </div>\r\n                        <p><small>Have you a blog or a web site?</small></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <input type='submit' (click)=\"updateInfo();\" class=\"btn btn-default save-profile-button\" name='enviar' value='Save changes' />\r\n            </form>\r\n        </div>        \r\n        <div class=\"hidden-xs col-md-1\"></div>\r\n        <!--Redes sociales-->\r\n        <div class=\"hidden-xs col-md-3\">\r\n            <div class=\"edit-profile-right-side\">\r\n                <div class=\"list-group\"> <a href=\"#\" class=\"list-group-item active\">Encuentra amigos (coming soon)</a> <a href=\"#\" class=\"list-group-item\">En twitter</a> <a href=\"#\" class=\"list-group-item\">En facebook</a> </div>\r\n                <div class=\"list-group\"> <a href=\"#\" class=\"list-group-item active\">Invita amigos (coming soon)</a> <a href=\"#\" class=\"list-group-item\">En twitter</a> <a href=\"#\" class=\"list-group-item\">En facebook</a> </div>\r\n                <div class=\"list-group\"> <a href=\"#\" class=\"list-group-item active\">Asocia cuentas (coming soon)</a> <a href=\"#\" class=\"list-group-item\">De twitter</a> <a href=\"#\" class=\"list-group-item\">De facebook</a> </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"hidden-xs col-md-1\"></div>\r\n    </div>\r\n"

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

module.exports = "<div class='content'><header>\r\n        <div id=\"Up\"></div>\r\n        <div class=\"hidden-xs col-md-12\" id=\"title\">\r\n            <div>LA FILA DE ATRAS <img alt=\"Brand\" src=\"src/assets/img/logoTitulo_blanco.png\" /></div>\r\n        </div>\r\n    </header>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <app-best-posts></app-best-posts>\r\n            <!--Posts - Contenido central -->\r\n            <div class=\"col-xs-12 col-md-6\">\r\n                <div class=\"side-middle\"> \r\n                <div *ngIf=\"posts.length>0;else notPost\">\r\n                    <div *ngFor=\"let post of posts\" class=\"thumbnail\">\r\n                        <a [routerLink]=\"['/post',post.id]\"><img class=\"img-post\" src=\"/postimg/{{post.id}}.jpg\" /></a>\r\n                        <form *ngIf=\"loginService.isLogged\" action=\"/reportPost/id\" method=\"PUT\" enctype=\"multipart/form-data\" class=\"reportLink\">\r\n                            <input type='submit' class=\"btn btn-primary\" (click)=\"apiPostsService.reportPost(post.id);\" name='report' value='Report' />\r\n                        </form>\r\n                        <div class=\"caption\">\r\n                            <h3>{{post.postTitle}}</h3>\r\n                            <p><a class=\"votes\" [routerLink]=\"['/user',post.postAuthor.username]\">{{post.postAuthor.username}} </a>{{post.postDate}} <span class=\"label label-primary\">{{post.postTag}}</span></p>\r\n                            <p> \r\n                            <div id=\"up-votes\">\r\n\t                            <form action=\"/index/id/up-vote\" method=\"POST\">\r\n\t                            \t<button type=\"submit\" (click)=\"apiPostsService.upvotePost(post.id);\" class=\"btn btn-primary\" ><i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i></button> \r\n\t                            </form>\r\n                            </div>\r\n                            <div id=\"down-votes\">\r\n\t                            <form action=\"/index/id/down-vote\" method=\"POST\">\r\n\t                            \t<button type=\"submit\" (click)=\"apiPostsService.upvotePost(post.id);\" class=\"btn btn-primary\" role=\"button\"><i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i></button> \r\n\t                            \t\r\n\t                            </form>\r\n                            </div>\r\n                            \t<a class=\"votes\"> Upvotes <span class=\"badge\">{{post.postUpVotes}}</span></a> \r\n                            \t<a class=\"votes\"> Downvotes <span class=\"badge\">{{post.postDownVotes}}</span></a> \r\n                            \t<a class=\"votes\"> Comments <span id=\"comment\" class=\"glyphicon glyphicon-comment\" aria-hidden=\"true\"></span></a>\r\n                            <div>\r\n                                <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_twitter.png\" class=\"social-post\" /></a>\r\n                                <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_instagram.png\" class=\"social-post\" /></a>\r\n                                <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_facebook.png\" class=\"social-post\" /></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div> \r\n                    <ng-template #notPost>\r\n                        <p class=\"text-center text-info\">No hay posts<p>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n            <app-social-networks></app-social-networks>\r\n        </div>\r\n    </div>\r\n    <!-- Boton ir arriba-->\r\n    <div class=\"col-md-12 toup\">\r\n        <div class=\"toUp\"> <a href=\"#Up\" type=\"button\" class=\"btn btn-primary  btn-toUp btn-md navbar-right\"><span class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"false\"></span></a> </div>\r\n    </div>\r\n    \r\n</div>"

/***/ }),

/***/ 369:
/***/ (function(module, exports) {

module.exports = "<header>\r\n        <div id=\"Up\"></div>\r\n        <div id=\"title\" class=\"hidden-xs hidden-sm\">LA FILA DE ATRAS <img alt=\"Brand\" src=\"src/assets/img/logoTitulo_blanco.png\" /></div>\r\n    </header>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <!--Para dejar margen-->\r\n            <div class=\"hidden-xs col-sm-4 col-md-4\"></div>\r\n            <!--Contenido-->\r\n            <!--<div class=\"hidden-xs col-md-2\">\r\n\r\n            </div>-->\r\n            <!--Posts-->\r\n            <div class=\"col-xs-12 col-sm-5 col-md-4\">\r\n                <!-- Formulario -->\r\n                <div class=\"login-method\">\r\n                    <form class=\"form-horizontal\" action=\"/login\" method=\"POST\">\r\n                        <fieldset>\r\n                            <div id=\"legend\">\r\n                                <span *ngIf=\"!loginService.isLogged\" id=\"error\"><p>User not logged.</p></span>\r\n                                <ng-template #elseBlock><span id=\"success\"><p>User logged.</p></span></ng-template>\r\n                            </div>\r\n                            <div class=\"control-group\">\r\n                                <!-- Username -->\r\n                                <label class=\"control-label\" for=\"username\">Username</label>\r\n                                <div class=\"controls\">\r\n                                    <input #user [(ngModel)]=\"username\" type=\"text\" id=\"username\" name=\"username\" placeholder=\"\" class=\"input-xlarge\"> </div>\r\n                            </div>\r\n                            <div class=\"control-group\">\r\n                                <!-- Password-->\r\n                                <label class=\"control-label\" for=\"password\">Password</label>\r\n                                <div class=\"controls\">\r\n                                    <input #pass [(ngModel)]=\"password\" type=\"password\" id=\"password\" name=\"password\" placeholder=\"\" class=\"input-xlarge\"> </div>\r\n                            </div>\r\n                            <div class=\"control-group\">\r\n                                <!-- Button -->\r\n                                <div class=\"controls\" id=\"btnlogin\">\r\n                                    <input class=\"btn btn-success\" (click)=\"logIn(user.value, pass.value);\" type=\"submit\" value=\"Log in\"/>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                    </form>\r\n                </div>\r\n                <div class=\"login-method\">\r\n                    <p><strong>You can also: </strong></p>\r\n                    <div>\r\n                        <a class=\"btn btn-block btn-social btn-twitter\"> <span class=\"fa fa-twitter\"></span> Log in with Twitter </a>\r\n                        <a class=\"btn btn-block btn-social btn-facebook\"> <span class=\"fa fa-facebook\"></span> Log in with Facebook </a>\r\n                        <a class=\"btn btn-block btn-social btn-google\"> <span class=\"fa fa-google\"></span> Log in with Google+ </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--Redes sociales-->\r\n            <app-social-networks></app-social-networks>\r\n            <!--Para dejar margen-->\r\n            <div class=\"hidden-xs col-sm-1 col-md-1\"></div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!-- Boton ir arriba-->\r\n    <div class=\"col-md-12 toup\">\r\n\r\n        <div class=\"toUp\">\r\n            <a href=\"#Up\" type=\"button\" class=\"btn btn-primary  btn-toUp btn-md navbar-right\"><span class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"false\"></span></a>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ 370:
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div id=\"Up\"></div>\r\n  <div class=\"hidden-xs col-md-12\" id=\"title\">\r\n    <div>LA FILA DE ATRAS <img alt=\"Brand\" src=\"src/assets/img/logoTitulo_blanco.png\" /></div>\r\n  </div>\r\n</header>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <!--Para dejar margen-->\r\n    <div class=\"hidden-xs col-md-1\"></div>\r\n    <!--Contenido Izquierda-->\r\n    <div class=\"col-xs-12 col-md-8\">\r\n      <div id=\"legend\">\r\n        <legend class=\"\">Mis Mensajes</legend>\r\n      </div>\r\n      <div class=\"hidden-xs col-md-3\">\r\n        <div class=\"side-left\">\r\n          <div class=\"menu\">\r\n            <ul class=\"nav nav-pills nav-stacked\">\r\n              <li><a [routerLink]=\"['/messages']\">RECIBIDOS</a></li>\r\n              <li><a [routerLink]=\"['/deletedMessages']\">ELIMINADOS</a></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Posts - Contenido central -->\r\n      <div class=\"col-xs-12 col-md-9\">\r\n        <div class=\"side-middle\">\r\n          <div class=\"col-xs-12 col-md-12\">\r\n            <div class=\"btn-group navbar-right\" role=\"group\">\r\n              <div id=\"btn-mailbox\">\r\n                \r\n                <!-- <button type=\"button\" href=\"#\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"> </span> Eliminar</button>\r\n                                    <button type=\"button\" href=\"#\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span> Seleccionar todos</button> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xs-12 col-md-12\">\r\n            <div *ngIf=\"messages!=null;else notMessages\">\r\n              <div *ngFor=\"let message of messages\">\r\n                <div class=\"col-xs-12 col-md-12\">\r\n                  <div class=\"conversation\">\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <a [routerLink]=\"['/user', message.messageSender.username]\" class=\"votes\"><img alt=\"\" class=\"userIconImgCom\" src=\"./src/assets/avatars/{{message.messageSender.id}}.jpg\" />                          {{message.messageSender.username}}</a>\r\n                        \r\n                      </div>\r\n                      <div class=\"panel-body\">\r\n                        <p>{{message.messageContent}}</p>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <ng-template #notMessages>\r\n              <p class=\"text-center text-info\">No has eliminado ningún mensaje</p>\r\n            </ng-template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Redes sociales - Contenido derecha-->\r\n    <app-social-networks></app-social-networks>\r\n    <!--Para dejar margen-->\r\n    <div class=\"hidden-xs col-md-1 \"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 371:
/***/ (function(module, exports) {

module.exports = " <header>\r\n        <div id=\"Up\"></div>\r\n        <div class=\"hidden-xs col-md-12\" id=\"title\">\r\n            <div>LA FILA DE ATRAS <img alt=\"Brand\" src=\"src/assets/img/logoTitulo_blanco.png\" /></div>\r\n        </div>\r\n    </header>\r\n    <div class=\"container-fluid\">\r\n\r\n        <div class=\"row\">\r\n            <!--Para dejar margen-->\r\n            <div class=\"hidden-xs col-md-1\"></div>\r\n\r\n\r\n            <!--Contenido Izquierda-->\r\n            <div class=\"col-xs-12 col-md-8\">\r\n                <div id=\"legend\">\r\n                    <legend class=\"\">Mis Mensajes</legend>\r\n                </div>\r\n                <div class=\"hidden-xs col-md-3\">\r\n\r\n                    <div class=\"side-left\">\r\n                        <div class=\"menu\">\r\n                            <ul class=\"nav nav-pills nav-stacked\">\r\n                                <li><a href=\"/mensajes\">RECIBIDOS</a></li>\r\n                                <li><a href=\"/mensajes/eliminados\">ELIMINADOS</a></li>\r\n                            </ul>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!--Posts - Contenido central -->\r\n                <div class=\"col-xs-12 col-md-9\">\r\n                \t\r\n                    <div class=\"side-middle\">\r\n                    #error\r\n                \t<span id=\"error\">Error al enviar el mensaje</span>\r\n                \t/error\r\n                        <div class=\"mailbox\">\r\n                            <form action=\"/mensajes/enviado\" method=\"POST\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"inputdefault\">Destinatario:</label>\r\n                                    <input class=\"form-control\" id=\"destinatario\" name=\"destinatario\" type=\"text\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"inputdefault\">Mensaje:</label>\r\n                                    <textarea class=\"form-control\" id=\"message-content\" name=\"message-content\" rows=\"10\"></textarea>\r\n                                </div>\r\n                            \r\n\r\n                            <div id=\"btn-message\">\r\n                                <input type=\"submit\" class=\"btn btn-default navbar-right\" value=\"Enviar\">\r\n\r\n                            </div>\r\n\t\t\t\t\t\t</form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <!--Redes sociales - Contenido derecha-->\r\n            <app-social-networks></app-social-networks>\r\n            <!--Para dejar margen-->\r\n            <div class=\"hidden-xs col-md-1 \"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Boton ir arriba-->\r\n    <div class=\"col-md-12 toup\">\r\n\r\n        <div class=\"toUp\">\r\n            <a href=\"#Up\" type=\"button\" class=\"btn btn-primary  btn-toUp btn-md navbar-right\"><span class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"false\"></span></a>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ 372:
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div id=\"Up\"></div>\r\n  <div class=\"hidden-xs col-md-12\" id=\"title\">\r\n    <div>LA FILA DE ATRAS <img alt=\"Brand\" src=\"src/assets/img/logoTitulo_blanco.png\" /></div>\r\n  </div>\r\n</header>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <!--Para dejar margen-->\r\n    <div class=\"hidden-xs col-md-1\"></div>\r\n    <!--Contenido Izquierda-->\r\n    <div class=\"col-xs-12 col-md-8\">\r\n      <div id=\"legend\">\r\n        <legend class=\"\">Mis Mensajes</legend>\r\n      </div>\r\n      <div class=\"hidden-xs col-md-3\">\r\n        <div class=\"side-left\">\r\n          <div class=\"menu\">\r\n            <ul class=\"nav nav-pills nav-stacked\">\r\n              <li><a [routerLink]=\"['/messages']\">RECIBIDOS</a></li>\r\n              <li><a [routerLink]=\"['/deletedMessages']\">ELIMINADOS</a></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Posts - Contenido central -->\r\n      <div class=\"col-xs-12 col-md-9\">\r\n        <div class=\"side-middle\">\r\n          <div class=\"col-xs-12 col-md-12\">\r\n            <div class=\"btn-group navbar-right\" role=\"group\">\r\n              <div id=\"btn-mailbox\">\r\n                <button type=\"button\" href=\"/newMessage\" class=\"btn btn-default\"><a href=\"/newMessage\"><span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>Nuevo</a></button>\r\n                <!-- <button type=\"button\" href=\"#\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"> </span> Eliminar</button>\r\n                                    <button type=\"button\" href=\"#\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span> Seleccionar todos</button> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xs-12 col-md-12\">\r\n            <div *ngIf=\"messages!=null;else notMessages\">\r\n              <div *ngFor=\"let message of messages\">\r\n                <div class=\"mailbox\">\r\n                  <div class=\"panel panel-default panel-message \">\r\n                    <div class=\"panel-body message\">\r\n                      <div class=\"col-xs-4 col-md-4\">\r\n                        <a [routerLink]=\"['/user', message.messageSender.username]\">\r\n                          <div class=\"user-rmt\"> <img alt=\"\" src=\"./src/assets/avatars/{{message.messageSender.id}}.jpg\" class=\"img-profile-message\"\r\n                            /> <span class=\"user-message\">{{message.messageSender.username}}</span> </div>\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"col-xs-8 col-md-8\">\r\n\r\n                        <div class=\"message-content\">\r\n                          <a [routerLink]=\"['/conversation', message.messageSender.username]\">\r\n                            <div class=\"message-text\">\r\n                              <div *ngIf=\"message.messageNew==true\">\r\n                                <span class=\"glyphicon glyphicon-envelope\" aria-hidden=\"false\"> Nuevo</span>\r\n                              </div>\r\n                              <p>{{message.messageContent}}</p>\r\n                               <input type=\"checkbox\" class=\"checkbox-message\"> \r\n                            </div>\r\n                          </a>\r\n                          </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <ng-template #notMessages>\r\n              <p class=\"text-center text-info\">No tienes ningún mensaje</p>\r\n            </ng-template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Redes sociales - Contenido derecha-->\r\n    <app-social-networks></app-social-networks>\r\n    <!--Para dejar margen-->\r\n    <div class=\"hidden-xs col-md-1 \"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 373:
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div id=\"Up\"></div>\r\n  <div class=\"hidden-xs col-md-12\" id=\"title\">\r\n    <div>LA FILA DE ATRAS <img alt=\"Brand\" src=\"src/assets/img/logoTitulo_blanco.png\" /></div>\r\n  </div>\r\n</header>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <!--Para dejar margen-->\r\n    <div class=\"hidden-xs col-md-1\"></div>\r\n    <!--Contenido Izquierda-->\r\n    <div class=\"col-xs-12 col-md-8\">\r\n      <div id=\"legend\">\r\n        <legend class=\"\">Mis Mensajes</legend>\r\n      </div>\r\n      <div class=\"hidden-xs col-md-3\">\r\n        <div class=\"side-left\">\r\n          <div class=\"menu\">\r\n            <ul class=\"nav nav-pills nav-stacked\">\r\n              <li><a [routerLink]=\"['/messages']\">RECIBIDOS</a></li>\r\n              <li><a [routerLink]=\"['/deletedMessages']\">ELIMINADOS</a></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Posts - Contenido central -->\r\n      <div class=\"col-xs-12 col-md-9\">\r\n        <div class=\"side-middle\">\r\n          <div class=\"mailbox\">\r\n            <form action=\"/mensajes/username/enviado\" method=\"POST\">\r\n              <div class=\"col-xs-12 col-md-12\">\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"inputdefault\">Mensaje:</label>\r\n                  <textarea class=\"form-control\" id=\"textarea-message\" name=\"message-content\" rows=\"10\"></textarea>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-md-12\">\r\n                <div id=\"btn-message\">\r\n                  <input type=\"submit\" class=\"btn btn-default navbar-right\">\r\n                </div>\r\n              </div>\r\n            </form>\r\n            <div *ngIf=\"messages!=null;else notMessages\">\r\n              <div *ngFor=\"let message of messages\">\r\n                <div class=\"col-xs-12 col-md-12\">\r\n                  <div class=\"conversation\">\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-heading\">\r\n                        <a [routerLink]=\"['/user', message.messageSender.username]\" class=\"votes\"><img alt=\"\" class=\"userIconImgCom\" src=\"./src/assets/avatars/{{message.messageSender.id}}.jpg\" />                          {{message.messageSender.username}}</a>\r\n                        <div class=\"btn-remove\">\r\n                          <form action=\"/mensajes/eliminados/movido/id\" method=\"POST\">\r\n                            <button type=\"submit\" class=\"btn btn-xs navbar-right\"><span class=\"glyphicon glyphicon-trash\"></span></button>\r\n                          </form>\r\n                          <form action=\"/mensajes/eliminado/id\" method=\"POST\">\r\n                            <button type=\"submit\" class=\"btn btn-xs navbar-right\"><span class=\"glyphicon glyphicon-trash\"></span></button>\r\n                          </form>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"panel-body\">\r\n                        <p>{{message.messageContent}}</p>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Redes sociales - Contenido derecha-->\r\n    <app-social-networks></app-social-networks>\r\n    <!--Para dejar margen-->\r\n    <div class=\"hidden-xs col-md-1 \"></div>\r\n  </div>\r\n</div>\r\n<!-- Boton ir arriba-->\r\n<div class=\"col-md-12 toup\">\r\n  <div class=\"toUp\"> <a href=\"#Up\" type=\"button\" class=\"btn btn-primary  btn-toUp btn-md navbar-right\"><span class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"false\"></span></a>    </div>\r\n</div>\r\n"

/***/ }),

/***/ 374:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  message works!\r\n</p>\r\n"

/***/ }),

/***/ 375:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\"><a name=\"Up\"></a>\r\n        <!--Contenido de la barra de navegación-->\r\n        <div class=\"container-fluid\">\r\n            <!--Imagen-->\r\n            <div class=\"navbar-header\">\r\n                <a class=\"navbar-brand\" href=\"/\"><img class=\"brand\" alt=\"Brand\" src=\"src/assets/img/icon.png\" /></a>\r\n            </div>\r\n            <!--Resto del contenido-->\r\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                <!--Menus entre el logo y la busqueda-->\r\n                <ul class=\"nav navbar-nav\">\r\n                    <li><a [routerLink]=\"['/hot']\">Hot</a></li>\r\n                    <li><a [routerLink]=\"['/trending']\">Trending</a></li>\r\n                    <li><a [routerLink]=\"['/random']\">Random</a></li>\r\n                    <!--Ejemplo de botón que se desprende desde abajo-->\r\n                    <li ngbDropdown class=\"dropdown\">\r\n                        <!--Título botón,--><a ngbDropdownToggle  class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Tags <span class=\"caret\"></span></a>\r\n                        <!--Submenú-->\r\n                        <ul class=\"dropdown-menu\">\r\n                            <li><a [routerLink]=\"['/tag','funny']\">Funny</a></li>\r\n                            <li><a [routerLink]=\"['/tag','animals']\">Animals</a></li>\r\n                            <li><a [routerLink]=\"['/tag','anime']\">Anime and manga</a></li>\r\n                            <li><a [routerLink]=\"['/tag','movies']\">Movies and TV</a></li>\r\n                            <li><a [routerLink]=\"['/tag','wtf']\">WTF</a></li>\r\n                            <li><a [routerLink]=\"['/tag','savage']\">Savage</a></li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n                <!--Barra de búsqueda-->\r\n                <form class=\"navbar-form navbar-left\" role=\"search\" action=\"/search\" (ngSubmit)=\"onSubmit()\" method=\"POST\">\r\n                    <!--Cuadro donde introducir el texto-->\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Type to search\" [(ngModel)]=\"searchedPost\" name=\"searchedPost\"> </div>\r\n                    <!--Botón de lupa-->\r\n                    <button type=\"submit\" class=\"btn btn-default\"> <span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span> </button>\r\n                </form>\r\n                <!--Menus después de la busqueda: Inicio de sesión-->\r\n                <ul *ngIf=\"loginService.isLogged\" class=\"nav navbar-nav navbar-right\">\r\n                        <li><a [routerLink]=\"['/addPost']\"><span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>Add post</a></li>\r\n                        <li ngbDropdown class=\"dropdown\">\r\n                            <!--Título botón-->\r\n                            <a class=\"myaccount-link\" ngbDropdownToggle data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><img alt=\"\" class=\"img-profile-mini\" src=\"./src/assets/avatars/{{loginService.user.id}}.jpg\" />{{loginService.user.username}} <span class=\"caret\"></span></a>\r\n                            <!--Submenú-->\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li><a [routerLink]=\"['/profile']\">Profile</a></li>\r\n                                <li><a [routerLink]=\"['/settings']\">Tools</a></li>\r\n                                <li><a (click)=\"logOut();\">Log out</a></li>\r\n                            </ul>\r\n                        </li>\r\n                        <li><a [routerLink]=\"['/messages']\">E-mail <span class=\"badge\">{{numEmails}}</span></a></li>\r\n                </ul>\r\n                <ul *ngIf=\"loginService.isNotLogged\" class=\"nav navbar-nav navbar-right\">\r\n                        <li><a [routerLink]=\"['/login']\">Iniciar Sesion</a></li>\r\n                        <li><a [routerLink]=\"['/signup']\">Registrarse</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n\r\n\r\n"

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n    <header>\r\n        <div id=\"Up\"></div>\r\n        <div class=\"hidden-xs col-md-12\" id=\"title\">\r\n            <div>LA FILA DE ATRAS <img alt=\"Brand\" src=\"src/assets/img/logoTitulo_blanco.png\" /></div>\r\n        </div>\r\n    </header>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <!--Para dejar margen-->\r\n            <div class=\"hidden-xs col-md-1\"></div>\r\n            <!--Contenido Izquierda-->\r\n            <div class=\"hidden-xs col-md-2\">\r\n            </div>\r\n            <!--Posts - Contenido central -->\r\n            <div  *ngIf=\"post;else notPost\" class=\"col-xs-12 col-md-6\">\r\n                <div class=\"side-middle\"> \r\n                <div>\r\n                    <div class=\"thumbnail\">\r\n                        <a><img class=\"img-post\" src=\"src/assets/files/{{post.id}}.jpg\" /></a>\r\n                        <form *ngIf=\"loginService.isLogged\" action=\"/reportPost/id\" method=\"PUT\" enctype=\"multipart/form-data\" class=\"reportLink\">\r\n                            <input type='submit' class=\"btn btn-primary\" (click)=\"apiPostsService.reportPost(post.id);\" name='report' value='Report' />\r\n                        </form>\r\n                        <!-- <a href=\"/reportPost/{{id}}\" class=\"reportLink\">Report</a>-->\r\n                        <div class=\"caption\">\r\n                            <h3>{{post.postTitle}}</h3>\r\n                            <p><a class=\"votes\" [routerLink]=\"['/user',post.postAuthor.username]\">{{post.postAuthor.username}} </a>{{post.postDate}} <span class=\"label label-primary\">{{post.postTag}}</span></p>\r\n                            <p> \r\n                            <div id=\"up-votes\">\r\n\t                            <form action=\"/index/id/up-vote\" method=\"POST\">\r\n\t                            \t<button type=\"submit\" (click)=\"apiPostsService.upvotePost(post.id);\" class=\"btn btn-primary\" ><i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i></button> \r\n\t                            </form>\r\n                            </div>\r\n                            <div id=\"down-votes\">\r\n\t                            <form action=\"/index/id/down-vote\" method=\"POST\">\r\n\t                            \t<button type=\"submit\" (click)=\"apiPostsService.upvotePost(post.id);\" class=\"btn btn-primary\" role=\"button\"><i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i></button> \r\n\t                            \t\r\n\t                            </form>\r\n                            </div>\r\n                            \t<a class=\"votes\"> Upvotes <span class=\"badge\">{{post.postUpVotes}}</span></a> \r\n                            \t<a class=\"votes\"> Downvotes <span class=\"badge\">{{post.postDownVotes}}</span></a>\r\n                            <div>\r\n                                <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_twitter.png\" class=\"social-post\" /></a>\r\n                                <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_instagram.png\" class=\"social-post\" /></a>\r\n                                <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_facebook.png\" class=\"social-post\" /></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div> \r\n                    <ng-template #notPost>\r\n                        <p class=\"text-center text-info\">No hay posts<p>\r\n                    </ng-template>\r\n                </div>\r\n                <!--Comentarios-->\r\n\t                <div *ngFor=\"let comment of post.postComments\" class=\"panel panel-default\">\r\n\t                \t<form action=\"/reportComment/comment.id\" method=\"PUT\" enctype=\"multipart/form-data\" class=\"reportLink\">\r\n\t\t\t\t\t\t\t<input type='submit' class=\"btn btn-primary\" name='report' value='Report'>\r\n\t\t\t\t\t\t</form>\r\n\t                    <div class=\"panel-heading\"> <a href=\"/user/{{comment.commentUser.username}}\" class=\"votes\"><img alt=\"\" class=\"userIconImgCom\" src=\"./src/assets/avatars/{{comment.commentUser.id}}.jpg\" /> {{comment.commentUser.username}}</a> </div>\r\n\t                    <div class=\"panel-body\">{{comment.commentContent}}</div>\r\n\t                </div>\r\n                <div *ngIf=\"loginService.isLogged && (loggedUser!=null)\">\r\n\t                <div class=\"panel panel-default\">\r\n\t                    <div class=\"panel-heading\"> <a [routerLink]=\"['/user',loginService.user.username]\" class=\"votes\"> <img alt=\"\" class=\"userIconImgCom\" src=\"./src/assets/avatars/{{loginService.user.id}}.jpg\" />{{loginService.user.username}}</a> </div>\r\n\t                    <div class=\"panel-body \">\r\n\t                    \t<form class=\"form-horizontal\" action=\"/addComment\" method=\"POST\">\r\n\t                    \t\t<fieldset >\r\n\t                    \t\t<input type=\"text\" [(ngModel)]=\"comment.commentContent\" name=\"commentContent\" class=\"input-xlarge col-lg-12\"><br/>\r\n\t                    \t\t<input class=\"btn btn-success\" type=\"submit\" (click)=\"addComment();\" value=\"Comment\"><br/>\r\n\t                    \t\t</fieldset>\r\n\t                    \t</form>\r\n\t                    </div>\r\n\t                </div>\r\n                </div>\r\n          \t<hr>\r\n            </div>\r\n            <app-social-networks></app-social-networks>\r\n        </div>\r\n    </div>\r\n    <!-- Boton ir arriba-->\r\n    <div class=\"col-md-12 toup\">\r\n        <div class=\"toUp\"> <a href=\"#Up\" type=\"button\" class=\"btn btn-primary  btn-toUp btn-md navbar-right\"><span class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"false\"></span></a> </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"followers.length>0;else notFollowing\">\r\n  <div *ngFor=\"let following of followers\" class=\"\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-body\">\r\n        <a [routerLink]=\"['/user',followers.username]\"> <img alt=\"\" src=\"src/assets/avatars/{{following.id}}.jpg\" class=\"profile-followers\" />{{following.username}}</a>\r\n        <form action=\"/unfollow/follower.username\" method=\"POST\" class=\"form-follow\">\r\n          <button type=\"submit\" class=\"btn btn-success button-followers\">Following</button>\r\n        </form>\r\n        <form action=\"/follow/follower.username\" method=\"POST\" class=\"form-follow\">\r\n          <button type=\"submit\" class=\"btn btn-success button-follow-user\">Follow</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #notFollowing>\r\n  <p class=\"text-center text-info\">No me sigue nadie<p>\r\n</ng-template>"

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"followings.length>0;else notFollowing\">\r\n  <div *ngFor=\"let following of followings\" class=\"\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-body\">\r\n        <a [routerLink]=\"['/user',following.username]\"> <img alt=\"\" src=\"src/assets/avatars/{{following.id}}.jpg\" class=\"profile-followers\" />{{following.username}}</a>\r\n        <form action=\"/unfollow/follower.username\" method=\"POST\" class=\"form-follow\">\r\n          <button type=\"submit\" class=\"btn btn-success button-followers\">Following</button>\r\n        </form>\r\n        <form action=\"/follow/follower.username\" method=\"POST\" class=\"form-follow\">\r\n          <button type=\"submit\" class=\"btn btn-success button-follow-user\">Follow</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #notFollowing>\r\n  <p class=\"text-center text-info\">No sigues a nadie<p>\r\n</ng-template>"

/***/ }),

/***/ 379:
/***/ (function(module, exports) {

module.exports = "<header id=\"page-top\" [style.background-image]=\"background()\">\r\n        <div class=\"container header-info\">\r\n            <div class=\"header-user-info\"> <img id=\"imgProfile\" class=\"img-center\" alt=\"\" src=\"./src/assets/avatars/{{loginService.user.id}}.jpg\" />\r\n                <div class=\"intro-text\">\r\n                    <p><span class=\"name\">{{loginService.user.username}}</span></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <div class=\"row\">\r\n        <div class=\"hidden-xs col-md-3\">\r\n            <div class=\"btn-group-vertical separation-profile\" role=\"group\" aria-label=\"...\">\r\n            \t<a href=\"/edit-profile\" [routerLink]=\"['/edit-profile']\"><button  type=\"button\" class=\"btn btn-default\">Edit profile<span class=\"glyphicon glyphicon-pencil alignment-profile\" aria-hidden=\"true\"></span></button></a>\r\n                <a href=\"/changeAvatar\" [routerLink]=\"['/changeAvatar']\"><button type=\"button\" class=\"btn btn-default\">Avatar<span class=\"glyphicon glyphicon-pencil alignment-profile\" aria-hidden=\"true\"></span></button></a>\r\n                <a href=\"/changeHeader\" [routerLink]=\"['/changeHeader']\"><button type=\"button\" class=\"btn btn-default\">Header<span class=\"glyphicon glyphicon-pencil alignment-profile\" aria-hidden=\"true\"></span></button></a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\"><div class=\"menu-profile\">\r\n                <ul class=\"nav nav-pills\">\r\n                    <li role=\"presentation\"><a (click)=\"goToMenu('posts');\">My Posts</a></li>\r\n                    <li role=\"presentation\"><a (click)=\"goToMenu('followingPosts');\">My following's Posts</a></li>\r\n                    <li role=\"presentation\"><a class=\"followers-following\" (click)=\"goToMenu('followers');\"> Followers <span class=\"badge badge-header\">{{this.numFollowers}}</span></a></li>\r\n                    <li role=\"presentation\"><a class=\"followers-following\" (click)=\"goToMenu('following');\"> Following <span class=\"badge badge-header\">{{this.numFollowing}}</span></a></li>\r\n                    <li *ngIf=\"isAdminLogged==true;\" role=\"presentation\"><a (click)=\"goToMenu('reportUsers');\">Reported Users</a></li>\r\n                    <li *ngIf=\"isAdminLogged==true;\" role=\"presentation\"><a (click)=\"goToMenu('reportPosts');\">Reported posts</a></li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"side-middle\" [ngSwitch]=\"html\">\r\n                <div *ngSwitchCase=\"'followingPosts'\"><app-profile-post-following></app-profile-post-following></div>\r\n                <div *ngSwitchCase=\"'posts'\"><app-profile-posts></app-profile-posts></div>\r\n                <div *ngSwitchCase=\"'followers'\"><app-profile-followers></app-profile-followers></div>\r\n                <div *ngSwitchCase=\"'following'\"><app-profile-following></app-profile-following></div>\r\n                <div *ngSwitchCase=\"'reportUsers'\"><app-profile-report-users></app-profile-report-users></div>\r\n                <div *ngSwitchCase=\"'reportPosts'\"><app-profile-report-posts></app-profile-report-posts></div>\r\n                <div *ngSwitchDefault>...</div>\r\n            </div>\r\n        </div>\r\n        <app-social-networks></app-social-networks>\r\n    </div>\r\n"

/***/ }),

/***/ 380:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"posts.length>0;else notPost\">\r\n  <div *ngFor=\"let post of posts\" class=\"thumbnail\">\r\n    <a [routerLink]=\"['/post',post.id]\"><img class=\"img-post\" src=\"src/assets/files/{{post.id}}.jpg\" /></a>\r\n    <form action=\"/reportPost/id\" method=\"PUT\" enctype=\"multipart/form-data\" class=\"reportLink\">\r\n      <input type='submit' class=\"btn btn-primary\" name='report' value='Report' />\r\n    </form>\r\n    <!-- <a href=\"/reportPost/{{id}}\" class=\"reportLink\">Report</a>-->\r\n    <div class=\"caption\">\r\n      <h3>{{post.postTitle}}</h3>\r\n      <p><a class=\"votes\" [routerLink]=\"['/user', post.postAuthor]\">{{post.postAuthor}} </a>{{post.postDate}}\r\n        <span  class=\"label label-primary\">{{post.postTag}}</span>\r\n      </p>\r\n      <p>\r\n        <div id=\"up-votes\">\r\n          <form action=\"/index/id/up-vote\" method=\"POST\">\r\n            <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i></button>\r\n          </form>\r\n        </div>\r\n        <div id=\"down-votes\">\r\n          <form action=\"/index/id/down-vote\" method=\"POST\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" role=\"button\"><i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i></button>\r\n\r\n          </form>\r\n        </div>\r\n        <a class=\"votes\"> Upvotes <span class=\"badge\">{{post.postUpVotes}}</span></a>\r\n        <a class=\"votes\"> Downvotes <span class=\"badge\">{{post.postDownVotes}}</span></a>\r\n        <a class=\"votes\"> Comments <span id=\"comment\" class=\"glyphicon glyphicon-comment\" aria-hidden=\"true\"></span></a>\r\n        <div>\r\n          <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_twitter.png\" class=\"social-post\" /></a>\r\n          <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_instagram.png\" class=\"social-post\" /></a>\r\n          <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_facebook.png\" class=\"social-post\" /></a>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #notPost>\r\n  <p class=\"text-center text-info\">No hay posts </p>\r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ 381:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"posts.length>0;else notPost\">\r\n  <div *ngFor=\"let post of posts\" class=\"thumbnail\">\r\n    <a [routerLink]=\"['/post',post.id]\"><img class=\"img-post\" src=\"src/assets/files/{{post.id}}.jpg\" /></a>\r\n    <form *ngIf=\"loginService.isLogged\" action=\"/reportPost/id\" method=\"PUT\" enctype=\"multipart/form-data\" class=\"reportLink\">\r\n                            <input type='submit' class=\"btn btn-primary\" (click)=\"apiPostsService.reportPost(post.id);\" name='report' value='Report' />\r\n                        </form>\r\n    <!-- <a href=\"/reportPost/{{id}}\" class=\"reportLink\">Report</a>-->\r\n    <div class=\"caption\">\r\n      <h3>{{post.postTitle}}</h3>\r\n      <p><a class=\"votes\" [routerLink]=\"['/profile']\">{{post.postAuthor.username}} </a>{{post.postDate}}\r\n        <span\r\n          class=\"label label-primary\">{{post.postTag}}</span>\r\n      </p>\r\n      <p>\r\n        <div id=\"up-votes\">\r\n\t                            <form action=\"/index/id/up-vote\" method=\"POST\">\r\n\t                            \t<button type=\"submit\" (click)=\"apiPostsService.upvotePost(post.id);\" class=\"btn btn-primary\" ><i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i></button> \r\n\t                            </form>\r\n                            </div>\r\n                            <div id=\"down-votes\">\r\n\t                            <form action=\"/index/id/down-vote\" method=\"POST\">\r\n\t                            \t<button type=\"submit\" (click)=\"apiPostsService.upvotePost(post.id);\" class=\"btn btn-primary\" role=\"button\"><i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i></button> \r\n\t                            \t\r\n\t                            </form>\r\n                            </div>\r\n        <a class=\"votes\"> Upvotes <span class=\"badge\">{{post.postUpVotes}}</span></a>\r\n        <a class=\"votes\"> Downvotes <span class=\"badge\">{{post.postDownVotes}}</span></a>\r\n        <a class=\"votes\"> Comments <span id=\"comment\" class=\"glyphicon glyphicon-comment\" aria-hidden=\"true\"></span></a>\r\n        <div>\r\n          <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_twitter.png\" class=\"social-post\" /></a>\r\n          <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_instagram.png\" class=\"social-post\" /></a>\r\n          <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_facebook.png\" class=\"social-post\" /></a>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #notPost>\r\n  <p class=\"text-center text-info\">No hay posts</p>\r\n</ng-template>\r\n"

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

module.exports = "                \t#reportedCommentList\r\n\t                    <div class=\"panel panel-default\">\r\n\t                        <div class=\"panel-body\"> <img alt=\"\" src=\"src/assets/avatarimg/id\" class=\"profile-followers\" /> commentUser.username\r\n\t                            <p>commentContent</p>\r\n\t                            <form action=\"/deleteReportComment/id\" method=\"DELETE\" enctype=\"multipart/form-data\" class=\"btn btn-default button-report-users\">\r\n\t\t\t\t\t\t\t\t\t<input type='submit' class=\"btn btn-primary\" name='deleteComment' value='Delete comment' style=\"background-color:rgba(255, 0, 0, 0.81)\"/> <span class=\"glyphicon glyphicon-ban-circle\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t<form action=\"/falseReportComment/id\" method=\"PUT\" enctype=\"multipart/form-data\" class=\"btn btn-default button-report-users\">\r\n\t\t\t\t\t\t\t\t\t<input type='submit' class=\"btn btn-primary\" name='falsereport' value='Delete from report list ' /><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t                            \r\n\t                        </div>\r\n\t                    </div>\r\n                    /reportedCommentList"

/***/ }),

/***/ 383:
/***/ (function(module, exports) {

module.exports = "\t                    <div class=\"panel panel-default\">\r\n\t                        <div *ngFor=\"let post of posts\" class=\"panel-body\">\r\n\t                            <div  class=\"thumbnail\">\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/post',post.id]\"><img class=\"img-post\" src=\"src/assets/files/{{post.id}}.jpg\" /></a>\r\n\t\t\t\t\t\t\t\t\t<div class=\"caption\">\r\n\t\t\t\t\t\t\t\t\t\t<h3>{{post.postTitle}}</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p><a class=\"votes\" [routerLink]=\"['/user',post.postAuthor.username]\">{{post.postAuthor.username}} </a>{{post.postDate}} <span class=\"label label-primary\">{{post.postTag}}</span></p>\r\n\t\t\t\t\t\t\t\t\t\t<p> \r\n\t\t\t\t\t\t\t\t\t\t<div id=\"up-votes\">\r\n\t\t\t\t\t\t\t\t\t\t\t<form action=\"/index/id/up-vote\" method=\"POST\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" ><i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i></button> \r\n\t\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"down-votes\">\r\n\t\t\t\t\t\t\t\t\t\t\t<form action=\"/index/id/down-vote\" method=\"POST\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" role=\"button\"><i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i></button> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"votes\"> Upvotes <span class=\"badge\">{{post.postUpVotes}}</span></a> \r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"votes\"> Downvotes <span class=\"badge\">{{post.postDownVotes}}</span></a> \r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"votes\"> Comments <span id=\"comment\" class=\"glyphicon glyphicon-comment\" aria-hidden=\"true\"></span></a>\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_twitter.png\" class=\"social-post\" /></a>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_instagram.png\" class=\"social-post\" /></a>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_facebook.png\" class=\"social-post\" /></a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t                            <form action=\"/deleteReportPost/id\" method=\"DELETE\" enctype=\"multipart/form-data\" class=\"btn btn-default button-report-users\">\r\n\t\t\t\t\t\t\t\t\t<input type='submit' (click)=\"deletePost(post);\" class=\"btn btn-primary\" name='deleteComment' value='Delete post' style=\"background-color:rgba(255, 0, 0, 0.81)\"/> <span class=\"glyphicon glyphicon-ban-circle\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t<form action=\"/falseReportPost/id\" method=\"PUT\" enctype=\"multipart/form-data\" class=\"btn btn-default button-report-users\">\r\n\t\t\t\t\t\t\t\t\t<input type='submit' (click)=\"unmarkPost(post);\" class=\"btn btn-primary\" name='falsereport' value='Delete from report list ' /><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t                        </div>\r\n\t                    </div>"

/***/ }),

/***/ 384:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n\t                        <div *ngFor=\"let usu of users\" class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t<img alt=\"\" src=\"src/assets/avatarimg/{{usu.id}}.jpg\" class=\"profile-followers\" /> {{usu.username}}\r\n\t                            <form action=\"/deleteReportUser/id\" method=\"DELETE\" enctype=\"multipart/form-data\" class=\"btn btn-default button-report-users\">\r\n\t\t\t\t\t\t\t\t\t<input type='submit' (click)=\"deleteUser(usu)\" class=\"btn btn-primary\" name='deleteComment' value='Delete user' style=\"background-color:rgba(255, 0, 0, 0.81)\"/> <span class=\"glyphicon glyphicon-ban-circle\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t<form action=\"/falseReportUser/id\" method=\"PUT\" enctype=\"multipart/form-data\" class=\"btn btn-default button-report-users\">\r\n\t\t\t\t\t\t\t\t\t<input type='submit' (click)=\"unmarkUser(usu)\" class=\"btn btn-primary\" name='falsereport' value='Delete from report list ' /><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t                        </div>\r\n\t                    </div>"

/***/ }),

/***/ 385:
/***/ (function(module, exports) {

module.exports = "<div class='content'><header>\r\n        <div id=\"Up\"></div>\r\n        <div class=\"hidden-xs col-md-12\" id=\"title\">\r\n            <div>LA FILA DE ATRAS <img alt=\"Brand\" src=\"src/assets/img/logoTitulo_blanco.png\" /></div>\r\n        </div>\r\n    </header>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <app-best-posts></app-best-posts>\r\n            <!--Posts - Contenido central -->\r\n<!--Posts - Contenido central -->\r\n            <div  *ngIf=\"post;else notPost\" class=\"col-xs-12 col-md-6\">\r\n                <div class=\"side-middle\"> \r\n                <div>\r\n                    <div class=\"thumbnail\">\r\n                        <a><img class=\"img-post\" src=\"src/assets/files/{{post.id}}.jpg\" /></a>\r\n                        <form *ngIf=\"loginService.isLogged\" action=\"/reportPost/id\" method=\"PUT\" enctype=\"multipart/form-data\" class=\"reportLink\">\r\n                            <input type='submit' class=\"btn btn-primary\" (click)=\"apiPostsService.reportPost(post.id);\" name='report' value='Report' />\r\n                        </form>\r\n                        <!-- <a href=\"/reportPost/{{id}}\" class=\"reportLink\">Report</a>-->\r\n                        <div class=\"caption\">\r\n                            <h3>{{post.postTitle}}</h3>\r\n                            <p><a class=\"votes\" href=\"/user/{{post.postAuthor.username}}\">{{post.postAuthor.username}} </a>{{post.postDate}} <span class=\"label label-primary\">{{post.postTag}}</span></p>\r\n                            <p> \r\n                            <div id=\"up-votes\">\r\n\t                            <form action=\"/index/id/up-vote\" method=\"POST\">\r\n\t                            \t<button type=\"submit\" (click)=\"apiPostsService.upvotePost(post.id);\" class=\"btn btn-primary\" ><i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i></button> \r\n\t                            </form>\r\n                            </div>\r\n                            <div id=\"down-votes\">\r\n\t                            <form action=\"/index/id/down-vote\" method=\"POST\">\r\n\t                            \t<button type=\"submit\" (click)=\"apiPostsService.upvotePost(post.id);\" class=\"btn btn-primary\" role=\"button\"><i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i></button> \r\n\t                            \t\r\n\t                            </form>\r\n                            </div>\r\n                            \t<a class=\"votes\"> Upvotes <span class=\"badge\">{{post.postUpVotes}}</span></a> \r\n                            \t<a class=\"votes\"> Downvotes <span class=\"badge\">{{post.postDownVotes}}</span></a>\r\n                            <div>\r\n                                <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_twitter.png\" class=\"social-post\" /></a>\r\n                                <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_instagram.png\" class=\"social-post\" /></a>\r\n                                <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_facebook.png\" class=\"social-post\" /></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div> \r\n                    <ng-template #notPost>\r\n                        <p class=\"text-center text-info\">No hay posts<p>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n            <app-social-networks></app-social-networks>\r\n        </div>\r\n    </div>\r\n    <!-- Boton ir arriba-->\r\n    <div class=\"col-md-12 toup\">\r\n        <div class=\"toUp\"> <a href=\"#Up\" type=\"button\" class=\"btn btn-primary  btn-toUp btn-md navbar-right\"><span class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"false\"></span></a> </div>\r\n    </div>\r\n    \r\n</div>"

/***/ }),

/***/ 386:
/***/ (function(module, exports) {

module.exports = "<div class='content'><header>\r\n        <div id=\"Up\"></div>\r\n        <div class=\"hidden-xs col-md-12\" id=\"title\">\r\n            <div>LA FILA DE ATRAS <img alt=\"Brand\" src=\"src/assets/img/logoTitulo_blanco.png\" /></div>\r\n        </div>\r\n    </header>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <app-best-posts></app-best-posts>\r\n            <!--Posts - Contenido central -->\r\n            <div class=\"col-xs-12 col-md-6\">\r\n                <div class=\"side-middle\">\r\n                  <h2>Searched post: {{title}}</h2>\r\n                <div *ngIf=\"posts.length>0;else notPost\">\r\n                    <div *ngFor=\"let post of posts\" class=\"thumbnail\">\r\n                        <a [routerLink]=\"['/post',post.id]\"><img class=\"img-post\" src=\"src/assets/files/{{post.id}}.jpg\" /></a>\r\n                        <form *ngIf=\"loginService.isLogged\" action=\"/reportPost/id\" method=\"PUT\" enctype=\"multipart/form-data\" class=\"reportLink\">\r\n                            <input type='submit' class=\"btn btn-primary\" (click)=\"apiPostsService.reportPost(post.id);\" name='report' value='Report' />\r\n                        </form>\r\n                        <!-- <a href=\"/reportPost/{{id}}\" class=\"reportLink\">Report</a>-->\r\n                        <div class=\"caption\">\r\n                            <h3>{{post.postTitle}}</h3>\r\n                            <p><a class=\"votes\" href=\"/user/{{post.postAuthor.username}}\">{{post.postAuthor.username}} </a>{{post.postDate}} <span class=\"label label-primary\">{{post.postTag}}</span></p>\r\n                            <p> \r\n                            <div id=\"up-votes\">\r\n\t                            <form action=\"/index/id/up-vote\" method=\"POST\">\r\n\t                            \t<button type=\"submit\" (click)=\"apiPostsService.upvotePost(post.id);\" class=\"btn btn-primary\" ><i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i></button> \r\n\t                            </form>\r\n                            </div>\r\n                            <div id=\"down-votes\">\r\n\t                            <form action=\"/index/id/down-vote\" method=\"POST\">\r\n\t                            \t<button type=\"submit\" (click)=\"apiPostsService.upvotePost(post.id);\" class=\"btn btn-primary\" role=\"button\"><i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i></button> \r\n\t                            \t\r\n\t                            </form>\r\n                            </div>\r\n                            \t<a class=\"votes\"> Upvotes <span class=\"badge\">{{post.postUpVotes}}</span></a> \r\n                            \t<a class=\"votes\"> Downvotes <span class=\"badge\">{{post.postDownVotes}}</span></a> \r\n                            \t<a class=\"votes\"> Comments <span id=\"comment\" class=\"glyphicon glyphicon-comment\" aria-hidden=\"true\"></span></a>\r\n                            <div>\r\n                                <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_twitter.png\" class=\"social-post\" /></a>\r\n                                <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_instagram.png\" class=\"social-post\" /></a>\r\n                                <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_facebook.png\" class=\"social-post\" /></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div> \r\n                    <ng-template #notPost>\r\n                        <p class=\"text-center text-info\">No hay posts<p>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n            <app-social-networks></app-social-networks>\r\n        </div>\r\n    </div>\r\n    <!-- Boton ir arriba-->\r\n    <div class=\"col-md-12 toup\">\r\n        <div class=\"toUp\"> <a href=\"#Up\" type=\"button\" class=\"btn btn-primary  btn-toUp btn-md navbar-right\"><span class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"false\"></span></a> </div>\r\n    </div>\r\n    \r\n</div>"

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

module.exports = "\r\n                    <div class=\"setting-security\">\r\n                        <p class=\"font-notifications\">My profile and activity:</p>\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-body\">\r\n                                <p><span class=\"glyphicon glyphicon-phone\" aria-hidden=\"true\"></span><span class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></span></p>\r\n                                <p>\r\n                                    <input type=\"checkbox\" aria-label=\"...\">\r\n                                    <input type=\"checkbox\" aria-label=\"...\"> <span class=\"settings-security\">When someone start to follow me</span> </p>\r\n                                <p>\r\n                                    <input type=\"checkbox\" aria-label=\"...\">\r\n                                    <input type=\"checkbox\" aria-label=\"...\"> <span class=\"settings-security\">When my post become popular</span> </p>\r\n                                <p>\r\n                                    <input type=\"checkbox\" aria-label=\"...\">\r\n                                    <input type=\"checkbox\" aria-label=\"...\"> <span class=\"settings-security\">When a friend of Facebook start an account in La fila de atrás</span> </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr/>\r\n                    <div class=\"setting-security\">\r\n                        <p class=\"font-notifications\">Updates:</p>\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-body\">\r\n                                <p><span class=\"glyphicon glyphicon-phone\" aria-hidden=\"true\"></span><span class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></span></p>\r\n                                <p>\r\n                                    <input type=\"checkbox\" aria-label=\"...\">\r\n                                    <input type=\"checkbox\" aria-label=\"...\"> <span class=\"settings-security\">When there is a special event</span> </p>\r\n                                <p>\r\n                                    <input type=\"checkbox\" aria-label=\"...\">\r\n                                    <input type=\"checkbox\" aria-label=\"...\"> <span class=\"settings-security\">When a friend post something</span> </p>\r\n                                <p>\r\n                                    <input type=\"checkbox\" aria-label=\"...\">\r\n                                    <input type=\"checkbox\" aria-label=\"...\"> <span class=\"settings-security\">When I receive an email</span> </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n"

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

module.exports = "\r\n                    <div>\r\n                        <div class=\"setting-security\">\r\n                            <p>Friends search:</p>\r\n                            <div class=\"panel panel-default\">\r\n                                <div class=\"panel-body\">\r\n                                    <p>\r\n                                        <input type=\"checkbox\" aria-label=\"...\"><span class=\"settings-security\">Hide my profile from the friens search.</span></p>\r\n                                </div>\r\n                            </div>\r\n                            <small>Don´t allow to find my in La fila de atrás by e-mail, Facebook or Twitter.</small>\r\n                        </div>\r\n                        <div class=\"setting-security\">\r\n                            <p>Private account:</p>\r\n                            <div class=\"panel panel-default\">\r\n                                <div class=\"panel-body\">\r\n                                    <p>\r\n                                        <input type=\"checkbox\" aria-label=\"...\"><span class=\"settings-security\">Proteger mi perfil.</span></p>\r\n                                </div>\r\n                            </div>\r\n                            <small>Only the people that I give authorization can watch and follo my profile.</small>\r\n                        </div>\r\n                        <div class=\"setting-security\">\r\n                            <p>Can watch my profile at most:</p>\r\n                            <div class=\"panel panel-default\">\r\n                                <div class=\"panel-body\">\r\n                                    <p>\r\n                                        <input type=\"radio\" aria-label=\"...\"><span class=\"settings-security\">Only friends</span></p>\r\n                                    <p>\r\n                                        <input type=\"radio\" aria-label=\"...\"><span class=\"settings-security\">Friends of friends</span></p>\r\n                                    <p>\r\n                                        <input type=\"radio\" aria-label=\"...\"><span class=\"settings-security\">All</span></p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>"

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

module.exports = "\r\n                    <form action=\"/userChangePassword\" method=\"POST\">\r\n                    <div>\r\n                        <div class=\"input-group text-profile\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\">Your password</span>\r\n                            <input type=\"text\" [(ngModel)]=\"pass.oldPass\" class=\"form-control\" name=\"oldPass\" aria-describedby=\"basic-addon1\">\r\n                        </div>\r\n\r\n                        <div class=\"input-group text-profile\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\">New password</span>\r\n                            <input type=\"text\" [(ngModel)]=\"pass.newPass\" class=\"form-control\" name=\"newPass\" pattern=\"(?=.*[a-z])(?=.*[A-Z]).{8,}\" title=\"Must contain at least 8 characters with uppercase and lowercase letters.\" aria-describedby=\"basic-addon1\">\r\n                        </div>\r\n                    </div>\r\n                    <hr/>\r\n                    <div class=\"btn-group btn-group-lg profile-save-button\" role=\"group\" aria-label=\"...\">\r\n\t                \t<input type=\"submit\" (click)=\"changePassword();\" class=\"btn btn-default save-profile-button\" value=\"Save Changes\">\r\n\t            \t</div>\r\n                    </form>"

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

module.exports = " <header>\r\n        <div id=\"Up\"></div>\r\n        <div id=\"title\" class=\"hidden-xs hidden-sm\">LA FILA DE ATRAS <img alt=\"Brand\" src=\"src/assets/img/logoTitulo_blanco.png\" /></div>\r\n    </header>\r\n\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <!--Para dejar margen-->\r\n            <div class=\"hidden-xs col-sm-3 col-md-3\"></div>\r\n            <!--Contenido-->\r\n            <!--<div class=\"hidden-xs col-md-2\">\r\n\r\n            </div>-->\r\n            <!--Posts-->\r\n            <div class=\"col-xs-12 col-sm-6 col-md-5\">\r\n                <!-- Formulario -->\r\n                <div class=\"signup-method\">\r\n                    <form class=\"form-horizontal\" action=\"/register\" method=\"POST\">\r\n                        <fieldset>\r\n                            <div id=\"legend\">\r\n                                <legend>Register</legend>\r\n                                <span *ngIf=\"error\" class=\"text-danger\"><p>Something went wrong, try again.</p></span>\r\n                            </div>\r\n                            <div class=\"control-group\">\r\n                                <!-- Username -->\r\n                                <label class=\"control-label\" for=\"username\">Username</label>\r\n                                <div class=\"controls\">\r\n                                    <input type=\"text\" [(ngModel)]=\"username\" id=\"username\" name=\"username\" placeholder=\"\" pattern=\"[A-Za-z0-9]*\" title=\"Username can contain any letters or numbers, without spaces.\" class=\"input-xlarge\">\r\n                                    <p class=\"help-block\">Username can contain any letters or numbers, without spaces</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"control-group\">\r\n                                <!-- E-mail -->\r\n                                <label class=\"control-label\" for=\"email\">E-mail</label>\r\n                                <div class=\"controls\">\r\n                                    <input type=\"text\" [(ngModel)]=\"email\" id=\"email\" name=\"email\" placeholder=\"\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" title=\"We need a valid email.\" class=\"input-xlarge\">\r\n                                    <p class=\"help-block\">Please provide your E-mail</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"control-group\">\r\n                                <!-- Password-->\r\n                                <label class=\"control-label\" for=\"password\">Password</label>\r\n                                <div class=\"controls\">\r\n                                    <input type=\"password\" [(ngModel)]=\"password\" id=\"password\" name=\"password\" placeholder=\"\" pattern=\"(?=.*[a-z])(?=.*[A-Z]).{8,}\" title=\"Must contain at least 8 characters with uppercase and lowercase letters.\" class=\"input-xlarge\">\r\n                                    <p class=\"help-block\">Password should be at least 8 characters</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"control-group\">\r\n                                <!-- Button -->\r\n                                <div class=\"controls\">\r\n                                    <input class=\"btn btn-success\" (click)=\"signUp()\" type=\"submit\" value=\"Register\">\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                    </form>\r\n                </div>\r\n                <div class=\"signup-method\">\r\n                    <p><strong>You can also: </strong></p>\r\n                    <div>\r\n                        <a class=\"btn btn-block btn-social btn-twitter\"> <span class=\"fa fa-twitter\"></span> Sign up with Twitter </a>\r\n                        <a class=\"btn btn-block btn-social btn-facebook\"> <span class=\"fa fa-facebook\"></span> Sign up with Facebook </a>\r\n                        <a class=\"btn btn-block btn-social btn-google\"> <span class=\"fa fa-google\"></span> Sign up with Google+ </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--Redes sociales-->\r\n            <app-social-networks></app-social-networks>\r\n            <!--Para dejar margen-->\r\n            <div class=\"hidden-xs col-sm-1 col-md-1\"></div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!-- Boton ir arriba-->\r\n    <div class=\"col-md-12 toup\">\r\n\r\n        <div class=\"toUp\">\r\n            <a href=\"#Up\" type=\"button\" class=\"btn btn-primary  btn-toUp btn-md navbar-right\"><span class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"false\"></span></a>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ 391:
/***/ (function(module, exports) {

module.exports = "            <!--Redes sociales - Contenido derecha-->\r\n            <div class=\"hidden-xs col-md-3\">\r\n                <div id=\"RedesSociales\">\r\n                    <label>Siguenos en</label>\r\n                    <a href=\"https://twitter.com/LafiladeatrasFA\"><img src=\"src/assets/img/icon_twitter.png\" class=\"social\" /></a>\r\n                    <a href=\"https://www.instagram.com/lafiladeatras/\"><img src=\"src/assets/img/icon_instagram.png\" class=\"social\" /></a>\r\n                    <a href=\"#\"><img src=\"src/assets/img/icon_facebook.png\" class=\"social\" /></a>\r\n                </div>\r\n            </div>\r\n"

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

module.exports = "<div class='content'><header>\r\n        <div id=\"Up\"></div>\r\n        <div class=\"hidden-xs col-md-12\" id=\"title\">\r\n            <div>LA FILA DE ATRAS <img alt=\"Brand\" src=\"src/assets/img/logoTitulo_blanco.png\" /></div>\r\n        </div>\r\n    </header>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <app-best-posts></app-best-posts>\r\n            <!--Posts - Contenido central -->\r\n            <div class=\"col-xs-12 col-md-6\">\r\n                <div class=\"side-middle\"> \r\n                <div *ngIf=\"posts.length>0;else notPost\">\r\n                    <div *ngFor=\"let post of posts\" class=\"thumbnail\">\r\n                        <a [routerLink]=\"['/post',post.id]\"><img class=\"img-post\" src=\"src/assets/files/{{post.id}}.jpg\" /></a>\r\n                        <form *ngIf=\"loginService.isLogged\" action=\"/reportPost/id\" method=\"PUT\" enctype=\"multipart/form-data\" class=\"reportLink\">\r\n                            <input type='submit' class=\"btn btn-primary\" (click)=\"apiPostsService.reportPost(post.id);\" name='report' value='Report' />\r\n                        </form>\r\n                        <!-- <a href=\"/reportPost/{{id}}\" class=\"reportLink\">Report</a>-->\r\n                        <div class=\"caption\">\r\n                            <h3>{{post.postTitle}}</h3>\r\n                            <p><a class=\"votes\" [routerLink]=\"['/user',post.postAuthor.username]\">{{post.postAuthor.username}} </a>{{post.postDate}} <span class=\"label label-primary\">{{post.postTag}}</span></p>\r\n                            <p> \r\n                            <div id=\"up-votes\">\r\n\t                            <form action=\"/index/id/up-vote\" method=\"POST\">\r\n\t                            \t<button type=\"submit\" class=\"btn btn-primary\" ><i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i></button> \r\n\t                            </form>\r\n                            </div>\r\n                            <div id=\"down-votes\">\r\n\t                            <form action=\"/index/id/down-vote\" method=\"POST\">\r\n\t                            \t<button type=\"submit\" class=\"btn btn-primary\" role=\"button\"><i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i></button> \r\n\t                            \t\r\n\t                            </form>\r\n                            </div>\r\n                            \t<a class=\"votes\"> Upvotes <span class=\"badge\">{{post.postUpVotes}}</span></a> \r\n                            \t<a class=\"votes\"> Downvotes <span class=\"badge\">{{post.postDownVotes}}</span></a> \r\n                            \t<a class=\"votes\"> Comments <span id=\"comment\" class=\"glyphicon glyphicon-comment\" aria-hidden=\"true\"></span></a>\r\n                            <div>\r\n                                <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_twitter.png\" class=\"social-post\" /></a>\r\n                                <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_instagram.png\" class=\"social-post\" /></a>\r\n                                <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_facebook.png\" class=\"social-post\" /></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div> \r\n                    <ng-template #notPost>\r\n                        <p class=\"text-center text-info\">No hay posts<p>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n            <app-social-networks></app-social-networks>\r\n        </div>\r\n    </div>\r\n    <!-- Boton ir arriba-->\r\n    <div class=\"col-md-12 toup\">\r\n        <div class=\"toUp\"> <a href=\"#Up\" type=\"button\" class=\"btn btn-primary  btn-toUp btn-md navbar-right\"><span class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"false\"></span></a> </div>\r\n    </div>\r\n    \r\n</div>\r\n"

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

module.exports = " <div class='content'><header>\r\n        <div id=\"Up\"></div>\r\n        <div class=\"hidden-xs col-md-12\" id=\"title\">\r\n            <div>LA FILA DE ATRAS <img alt=\"Brand\" src=\"src/assets/img/logoTitulo_blanco.png\" /></div>\r\n        </div>\r\n    </header>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <app-best-posts></app-best-posts>\r\n\r\n            <!--Posts - Contenido central -->\r\n            <div class=\"col-xs-12 col-md-6\">\r\n                <div class=\"side-middle\"> \r\n                <div *ngIf=\"posts.length>0;else notPost\">\r\n                    <div *ngFor=\"let post of posts\" class=\"thumbnail\">\r\n                        <a [routerLink]=\"['/post',post.id]\"><img class=\"img-post\" src=\"src/assets/files/{{post.id}}.jpg\" /></a>\r\n                        <form *ngIf=\"loginService.isLogged\" action=\"/reportPost/id\" method=\"PUT\" enctype=\"multipart/form-data\" class=\"reportLink\">\r\n                            <input type='submit' class=\"btn btn-primary\" (click)=\"apiPostsService.reportPost(post.id);\" name='report' value='Report' />\r\n                        </form>\r\n                        <div class=\"caption\">\r\n                            <h3>{{post.postTitle}}</h3>\r\n                            <p><a class=\"votes\" [routerLink]=\"['/user',post.postAuthor.username]\">{{post.postAuthor.username}} </a>{{post.postDate}} <span class=\"label label-primary\">{{post.postTag}}</span></p>\r\n                            <p> \r\n                            <div id=\"up-votes\">\r\n\t                            <form action=\"/index/id/up-vote\" method=\"POST\">\r\n\t                            \t<button type=\"submit\" class=\"btn btn-primary\" ><i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i></button> \r\n\t                            </form>\r\n                            </div>\r\n                            <div id=\"down-votes\">\r\n\t                            <form action=\"/index/id/down-vote\" method=\"POST\">\r\n\t                            \t<button type=\"submit\" class=\"btn btn-primary\" role=\"button\"><i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i></button> \r\n\t                            \t\r\n\t                            </form>\r\n                            </div>\r\n                            \t<a class=\"votes\"> Upvotes <span class=\"badge\">{{post.postUpVotes}}</span></a> \r\n                            \t<a class=\"votes\"> Downvotes <span class=\"badge\">{{post.postDownVotes}}</span></a> \r\n                            \t<a class=\"votes\"> Comments <span id=\"comment\" class=\"glyphicon glyphicon-comment\" aria-hidden=\"true\"></span></a>\r\n                            <div>\r\n                                <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_twitter.png\" class=\"social-post\" /></a>\r\n                                <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_instagram.png\" class=\"social-post\" /></a>\r\n                                <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_facebook.png\" class=\"social-post\" /></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div> \r\n                    <ng-template #notPost>\r\n                        <p class=\"text-center text-info\">No hay posts<p>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n            <app-social-networks></app-social-networks>\r\n        </div>\r\n    </div>\r\n    <!-- Boton ir arriba-->\r\n    <div class=\"col-md-12 toup\">\r\n        <div class=\"toUp\"> <a href=\"#Up\" type=\"button\" class=\"btn btn-primary  btn-toUp btn-md navbar-right\"><span class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"false\"></span></a> </div>\r\n    </div>\r\n    \r\n</div>"

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"followers.length>0;else notFollowing\">\r\n  <div *ngFor=\"let following of followers\" class=\"\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-body\">\r\n        <a href=\"/user/{{following.username}}\" [routerLink]=\"['/user',following.username]\"> <img alt=\"\" src=\"src/assets/avatars/{{following.id}}.jpg\" class=\"profile-followers\" />{{following.username}}</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #notFollowing>\r\n  <p class=\"text-center text-info\">No le sigue nadie<p>\r\n</ng-template>\r\n"

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"following.length>0;else notFollowing\">\r\n  <div *ngFor=\"let follow of following\" class=\"\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-body\">\r\n        <a href=\"/user/{{follow.username}}\"  [routerLink]=\"['/user',follow.username]\"> <img alt=\"\" src=\"src/assets/avatars/{{follow.id}}.jpg\" class=\"profile-followers\" />{{follow.username}}</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #notFollowing>\r\n  <p class=\"text-center text-info\">No sigue a nadie<p>\r\n</ng-template>\r\n"

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"posts.length>0;else notPost\">\r\n  <div *ngFor=\"let post of posts\" class=\"thumbnail\">\r\n    <a href=\"/post/{{post.id}}\" [routerLink]=\"['/post',post.id]\"><img class=\"img-post\" src=\"src/assets/files/{{post.id}}.jpg\" /></a>\r\n    <form *ngIf=\"loginService.isLogged\" action=\"/reportPost/id\" method=\"PUT\" enctype=\"multipart/form-data\" class=\"reportLink\">\r\n      <input type='submit' class=\"btn btn-primary\" (click)=\"apiPostsService.reportPost(post.id);\" name='report' value='Report' />\r\n    </form>\r\n    <!-- <a href=\"/reportPost/{{id}}\" class=\"reportLink\">Report</a>-->\r\n    <div class=\"caption\">\r\n      <h3>{{post.postTitle}}</h3>\r\n      <p><a class=\"votes\" [routerLink]=\"['/user',post.postAuthor.username]\">{{post.username}} </a>{{post.postDate}} <span class=\"label label-primary\">{{post.postTag}}</span></p>\r\n      <p>\r\n        <div id=\"up-votes\">\r\n\t                            <form action=\"/index/id/up-vote\" method=\"POST\">\r\n\t                            \t<button type=\"submit\" (click)=\"apiPostsService.upvotePost(post.id);\" class=\"btn btn-primary\" ><i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i></button> \r\n\t                            </form>\r\n                            </div>\r\n                            <div id=\"down-votes\">\r\n\t                            <form action=\"/index/id/down-vote\" method=\"POST\">\r\n\t                            \t<button type=\"submit\" (click)=\"apiPostsService.upvotePost(post.id);\" class=\"btn btn-primary\" role=\"button\"><i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i></button> \r\n\t                            \t\r\n\t                            </form>\r\n                            </div>\r\n        <a class=\"votes\"> Upvotes <span class=\"badge\">{{post.postUpVotes}}</span></a>\r\n        <a class=\"votes\"> Downvotes <span class=\"badge\">{{post.postDownVotes}}</span></a>\r\n        <a class=\"votes\"> Comments <span id=\"comment\" class=\"glyphicon glyphicon-comment\" aria-hidden=\"true\"></span></a>\r\n        <div>\r\n          <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_twitter.png\" class=\"social-post\" /></a>\r\n          <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_instagram.png\" class=\"social-post\" /></a>\r\n          <a href=\"#\" class=\"social-network-post\"><img src=\"src/assets/img/icon_facebook.png\" class=\"social-post\" /></a>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #notPost>\r\n  <p class=\"text-center text-info\">No hay posts\r\n    <p>\r\n</ng-template>\r\n"

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

module.exports = "<header id=\"page-top\" [style.background-image]=\"background()\">\r\n  <div class=\"container header-info\">\r\n    <div class=\"header-user-info\"> <img id=\"imgUser\" class=\"img-center\" alt=\"\" src=\"./src/assets/avatars/{{user.id}}.jpg\" />\r\n      <div class=\"intro-text\">\r\n        <p><span class=\"name\">{{user.username}}</span></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"followers-container\">\r\n    <p></p>\r\n    <form  *ngIf=\"loginService.isLogged\" action=\"/user/{{user.username}}/follow\" method=\"POST\">\r\n      <button type=\"submit\" id=\"follow\" (click)=\"userService.followUser(user.id);\" class=\"btn btn-info\">Follow</button>\r\n    </form>\r\n  </div>\r\n</header>\r\n\r\n<div class=\"row\">\r\n  <div class=\"hidden-xs col-md-3\">\r\n    <div class=\"btn-group-vertical separation-profile\" role=\"group\" aria-label=\"...\">\r\n      <form action=\"/reportUser/{{user.id}}\" method=\"PUT\" enctype=\"multipart/form-data\" class=\"reportLink\">\r\n        <input type='submit' (click)=\"userService.reportUser(user.id)\" class=\"btn btn-primary\" name='report' value='Report' />\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-12 col-md-6\">\r\n    <div class=\"menu-profile\">\r\n                <ul class=\"nav nav-pills\">\r\n                    <li role=\"presentation\"><a (click)=\"goToMenu('posts');\">{{user.username}}'s Posts</a></li>\r\n                    <li role=\"presentation\"><a class=\"followers-following\" (click)=\"goToMenu('followers');\"> Followers <span class=\"badge badge-header\">{{numFollowers}}</span></a></li>\r\n                    <li role=\"presentation\"><a class=\"followers-following\" (click)=\"goToMenu('following');\"> Following <span class=\"badge badge-header\">{{numFollowing}}</span></a></li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"side-middle\" [ngSwitch]=\"html\">\r\n                <div *ngSwitchCase=\"'posts'\"><app-user-post></app-user-post></div>\r\n                <div *ngSwitchCase=\"'followers'\"><app-user-followers></app-user-followers></div>\r\n                <div *ngSwitchCase=\"'following'\"><app-user-following></app-user-following></div>\r\n                <div *ngSwitchDefault>...</div>\r\n            </div>\r\n        </div>\r\n</div>\r\n"

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

module.exports = "<header id=\"page-top\" [style.background-image]=\"background()\">\r\n        <div class=\"container header-info\">\r\n            <div class=\"header-user-info\"> <img class=\"img-center\" alt=\"\" src=\"./src/assets/avatars/{{loginService.user.id}}.jpg\" />\r\n                <div class=\"intro-text\">\r\n                    <p><span class=\"name\">{{loginService.user.username}}</span></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <div class=\"row\">\r\n        <!--Para dejar margen-->\r\n        <div class=\"hidden-xs col-sm-1 col-md-1\"></div>\r\n        <!--Posts-->\r\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n            <div class=\"panel panel-inverse panel-profile\">\r\n                <div class=\"panel-heading\">\r\n                    <h1><strong>Settings</strong></h1>\r\n                </div>\r\n                <div class=\"menu-profile\">\r\n                    <ul class=\"nav nav-pills\">\r\n                        <li role=\"presentation\"><a (click)=\"goToMenu('settings');\">Security</a></li>\r\n                        <li role=\"presentation\"><a (click)=\"goToMenu('password');\">Password</a></li>\r\n                        <li role=\"presentation\"><a (click)=\"goToMenu('notifications');\"> Notifications</a></li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"panel-body\" [ngSwitch]=\"html\">\r\n                  <div *ngSwitchCase=\"'settings'\"><app-settings-page></app-settings-page></div>\r\n                  <div *ngSwitchCase=\"'password'\"><app-settings-password></app-settings-password></div>\r\n                  <div *ngSwitchCase=\"'notifications'\"><app-settings-notifications></app-settings-notifications></div>\r\n                  <div *ngSwitchDefault>...</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Redes sociales-->\r\n        <div class=\"hidden-xs col-sm-2 col-md-5\">\r\n        </div>\r\n    </div>"

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user works!\r\n</p>\r\n"

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_api_posts_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_login_service__ = __webpack_require__(7);
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





var UserService = (function () {
    function UserService(http, apiService, loginService) {
        this.http = http;
        this.apiService = apiService;
        this.loginService = loginService;
    }
    UserService.prototype.ngOnInit = function () {
    };
    UserService.prototype.followUser = function (id) {
        var _this = this;
        var url = "http://localhost:8080/api/users/" + id + "/followers";
        var options = this.apiService.getOptions();
        return this.http.put(url, null, options).subscribe(function (response) {
            return response.json();
        }, function (error) {
            return _this.handleError(error);
        });
    };
    UserService.prototype.unfollowUser = function (id) {
        var _this = this;
        var url = "http://localhost:8080/api/users/" + id + "/followers";
        var options = this.apiService.getOptions();
        return this.http.delete(url, options).subscribe(function (response) {
            return response.json();
        }, function (error) {
            return _this.handleError(error);
        });
    };
    UserService.prototype.updateUser = function (user) {
        var _this = this;
        var url = "http://localhost:8080/api/users/put=" + this.loginService.user.id;
        var options = this.apiService.getOptions();
        return this.http.put(url, user, options).subscribe(function (response) {
            alert("User info updated.");
            return response.json();
        }, function (error) {
            alert("Couldn't update user info.");
            return _this.handleError(error);
        });
    };
    UserService.prototype.handleError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Server error (" + error.status + "): " + error.text());
    };
    UserService.prototype.reportUser = function (id) {
        var _this = this;
        var url = "http://localhost:8080/api/users/report=" + id;
        var options = this.apiService.getOptions();
        this.http.put(url, null, options).subscribe(function (response) {
            alert("User reported succesfully.");
            return response.json();
        }, function (error) {
            alert("Couldn't report user.");
            return _this.handleError(error);
        });
    };
    UserService.prototype.unreportUser = function (id) {
        var _this = this;
        var url = "http://localhost:8080/api/users/unreport=" + id;
        var options = this.apiService.getOptions();
        this.http.put(url, null, options).subscribe(function (response) {
            alert("User reported succesfully.");
            return response.json();
        }, function (error) {
            alert("Couldn't report user.");
            return _this.handleError(error);
        });
    };
    UserService.prototype.deleteUser = function (id) {
        var _this = this;
        var url = "http://localhost:8080/api/users/delete=" + id;
        var options = this.apiService.getOptions();
        return this.http.delete(url, options).subscribe(function (response) {
            alert("User deleted succesfully.");
            return response.json();
        }, function (error) {
            alert("Couldn't delete user.");
            return _this.handleError(error);
        });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_api_posts_service__["a" /* ApiPostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_api_posts_service__["a" /* ApiPostsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_login_service__["a" /* LoginService */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(231);


/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URL = 'http://localhost:8080/api';
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.isLogged = false;
        this.isNotLogged = true;
        this.isAdmin = false;
    }
    LoginService.prototype.getUser = function () {
        return this.user;
    };
    LoginService.prototype.isAdminMethod = function () {
        return this.isAdmin;
    };
    LoginService.prototype.reqIsLogged = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ withCredentials: true, headers: headers });
        this.http.get(URL + '/logIn', options).subscribe(function (response) { return _this.processLogInResponse(response); }, function (error) {
            if (error.status !== 401) {
                console.error('Error when asking if logged: ' +
                    JSON.stringify(error));
            }
        });
    };
    LoginService.prototype.processLogInResponse = function (response) {
        this.isLogged = true;
        this.isNotLogged = !this.isLogged;
        this.user = response.json();
        this.isAdmin = this.user.roles.indexOf('ROLE_ADMIN') !== -1;
        console.log(this.user);
    };
    LoginService.prototype.logIn = function (user, pass) {
        var _this = this;
        var userPass = user + ':' + pass;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Authorization': 'Basic ' + utf8_to_b64(userPass),
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.get(URL + '/logIn', options).subscribe(function (response) { return _this.processLogInResponse(response); }, function (error) {
            if (error.status !== 401) {
                console.error('Error when asking if logged: ' +
                    JSON.stringify(error));
            }
        });
    };
    LoginService.prototype.logOut = function () {
        var _this = this;
        return this.http.get(URL + '/logOut', { withCredentials: true }).subscribe(function (response) {
            _this.isLogged = false;
            _this.isNotLogged = !_this.isLogged;
            _this.isAdmin = false;
            return response;
        }, function (error) {
            return error;
        });
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LoginService);

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}
var _a;
//# sourceMappingURL=login.service.js.map

/***/ })

},[667]);
//# sourceMappingURL=main.bundle.js.map