"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, autenticacionService, ruta, appcomponent) {
        this.formBuilder = formBuilder;
        this.autenticacionService = autenticacionService;
        this.ruta = ruta;
        this.appcomponent = appcomponent;
        this.checked = true;
        this.form = this.formBuilder.group({
            "username": ['', [forms_1.Validators.required]],
            "password": ['', [forms_1.Validators.required]]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(LoginComponent.prototype, "Username", {
        get: function () {
            return this.form.get("username");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "Password", {
        get: function () {
            return this.form.get("password");
        },
        enumerable: false,
        configurable: true
    });
    LoginComponent.prototype.onEnviar = function (event) {
        event.preventDefault;
        this.autenticacionService.iniciarSesion(this.form.value).subscribe(function (data) {
            console.log("DATA:" + JSON.stringify(data));
            window.location.reload();
        });
    };
    LoginComponent.prototype.checkLogIn = function () {
        var _this = this;
        setTimeout(function () {
            if (sessionStorage.getItem("currentUser")) {
                _this.checked = true;
            }
            else {
                _this.checked = false;
            }
        }, 3000);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
