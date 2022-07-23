"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AutenticacionService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var AutenticacionService = /** @class */ (function () {
    function AutenticacionService(http) {
        this.http = http;
        this.url = "http://localhost:8080/auth/login";
        console.log("esta corriendo");
        this.currentUserSubject = new rxjs_1.BehaviorSubject(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
    }
    AutenticacionService.prototype.iniciarSesion = function (credenciales) {
        return this.http.post(this.url, credenciales).pipe(operators_1.map(function (data) {
            sessionStorage.setItem('currentUser', JSON.stringify(data));
            return data;
        }));
    };
    AutenticacionService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AutenticacionService);
    return AutenticacionService;
}());
exports.AutenticacionService = AutenticacionService;
