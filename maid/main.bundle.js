webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

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

module.exports = "<router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_form__ = __webpack_require__("../../../../../src/app/views/form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: 'form', component: __WEBPACK_IMPORTED_MODULE_3__views_form__["a" /* FormComponent */] },
    { path: '',
        redirectTo: '/form',
        pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__views_form__["a" /* FormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            )
            // other imports here
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/form.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/form.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding:10px; padding-left:20px; padding-right:20px;\">\n\n    <div class=\"row\">\n        <div class=\"col\">\n            <h2>Customer</h2>\n            <div class=\"form-group\">\n                <label>First Name</label>\n                <input type=\"text\" [(ngModel)]=\"firstName\" class=\"form-control\">\n                <label style=\"margin-top: 10px;\">Last Name</label>\n                <input [(ngModel)]=\"lastName\" type=\"text\" class=\"form-control\">\n                <label style=\"margin-top: 10px;\">Comments</label>\n                <textarea [(ngModel)]=\"comments\" class=\"form-control\" rows=\"5\"></textarea>\n            </div>\n        </div>\n\n        <div class=\"col\">\n            <h2>Contact</h2>\n            <div class=\"form-group\">\n                <label>Cell</label>\n                <input [(ngModel)]=\"cellNumber\" type=\"text\" class=\"form-control\">\n                <label style=\"margin-top: 10px;\">Work</label>\n                <input [(ngModel)]=\"workNumber\" type=\"text\" class=\"form-control\">\n                <label style=\"margin-top: 10px;\">Email</label>\n                <input [(ngModel)]=\"email\" type=\"text\" class=\"form-control\">\n            </div>\n        </div>\n    </div>\n    \n    <div style=\"margin-top: 15px;\" class=\"row\">\n        <div class=\"col\">\n            <h2>Residence</h2>\n            <div class=\"form-group\">\n                <label>Address</label>\n                <input [(ngModel)]=\"address\" type=\"text\" class=\"form-control\">\n                <label style=\"margin-top: 10px;\">Square Feet</label>\n                <input [(ngModel)]=\"squareFeet\" type=\"number\" class=\"form-control\">\n            </div>\n        </div>\n\n        <div class=\"col\">\n            <h2>Estimates</h2>\n            <p>Rate: ${{getPrice()}}</p>\n            <p>1 Maid: {{getTime(1)}}</p>\n            <p>2 Maids: {{getTime(2)}}</p>\n            <p>3 Maids: {{getTime(3)}}</p>\n            <p>4 Maids: {{getTime(4)}}</p>\n        </div>\n    </div>\n\n    <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"generatePDF()\" type=\"submit\">Generate</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jspdf__ = __webpack_require__("../../../../jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jspdf__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FormComponent = (function () {
    function FormComponent() {
        this.firstName = "";
        this.lastName = "";
        this.comments = "";
        this.workNumber = "";
        this.cellNumber = "";
        this.email = "";
        this.address = "";
        this.squareFeet = 1600;
        this.dollarsPerMaid = 40;
    }
    FormComponent.prototype.getPrice = function () {
        return (this.squareFeet / 400) * this.dollarsPerMaid;
    };
    FormComponent.prototype.getTime = function (maids) {
        var hours = (this.squareFeet / 400) / maids;
        var minutes = (hours - Math.floor(hours)) * 60;
        hours = Math.floor(hours);
        minutes = Math.round(minutes);
        var timeString = "";
        if (hours > 0) {
            timeString += hours + " hour";
            if (hours != 1) {
                timeString += "s";
            }
        }
        if (minutes > 0) {
            timeString += " " + minutes + " minute";
            if (minutes != 1) {
                timeString += "s";
            }
        }
        return timeString;
    };
    FormComponent.prototype.generatePDF = function () {
        var doc = new __WEBPACK_IMPORTED_MODULE_1_jspdf__();
        var currentY = 20;
        var addInfo = function (label, data) {
            doc.text(label + ":", 20, currentY);
            doc.text(data, 20 + doc.getTextWidth(label) * 1.3, currentY);
            currentY += 20;
        };
        addInfo("First Name", this.firstName);
        addInfo("Last Name", this.lastName);
        addInfo("Work Number", this.workNumber);
        addInfo("Cell Number", this.cellNumber);
        addInfo("Email", this.email);
        addInfo("Address", this.address);
        addInfo("Square Feet", this.squareFeet.toString());
        currentY += 25;
        addInfo("Cost", this.getPrice().toString());
        addInfo("1 Maid", this.getTime(1));
        addInfo("2 Maid", this.getTime(2));
        addInfo("3 Maid", this.getTime(3));
        addInfo("4 Maid", this.getTime(4));
        doc.autoPrint(); // <<--------------------- !!
        window.open(doc.output('bloburl'), '_blank');
    };
    return FormComponent;
}());
FormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'form',
        template: __webpack_require__("../../../../../src/app/views/form.html"),
        styles: [__webpack_require__("../../../../../src/app/views/form.css")]
    })
], FormComponent);

//# sourceMappingURL=form.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map