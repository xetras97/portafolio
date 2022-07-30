"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiService = void 0;
var core_1 = require("@angular/core");
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.id = 1;
        this.componente = "";
        this.url = "http://localhost:8080/ver/";
        this.urlPost = "http://localhost:8080/new/";
        this.urlDelete = "http://localhost:8080/delete/";
    }
    ApiService.prototype.obtenerDatosPersonales = function (componente) {
        return this.http.get(this.url + componente);
    };
    ApiService.prototype.obtenerPorId = function (componente, id) {
        return this.http.get(this.url + componente + "/" + id);
    };
    ApiService.prototype.enviarDatos = function (componente, objeto) {
        return this.http.post(this.urlPost + componente, objeto);
    };
    ApiService.prototype.deleteFiles = function (fileName) {
        return this.http.get(this.urlDelete + fileName);
    };
    ApiService.prototype.deleteBd = function (componente, id) {
        return this.http["delete"](this.urlDelete + componente + '/' + id);
    };
    ApiService.prototype.obtenerId = function (idNumber) {
        this.id = idNumber;
        console.log(this.id);
    };
    ApiService.prototype.obtenerComponente = function (componente) {
        this.componente = componente;
        console.log(this.componente);
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
