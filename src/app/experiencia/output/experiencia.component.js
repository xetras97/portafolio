"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ExperienciaComponent = void 0;
var core_1 = require("@angular/core");
var ExperienciaComponent = /** @class */ (function () {
    function ExperienciaComponent(loggedService, apiService) {
        this.loggedService = loggedService;
        this.apiService = apiService;
    }
    ExperienciaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.obtenerDatosPersonales("experiencias").subscribe(function (data) {
            _this.myExperienciaData = data;
            console.log(_this.myExperienciaData);
        });
    };
    ExperienciaComponent.prototype.setId = function (id) {
        this.apiService.obtenerId(id);
    };
    ExperienciaComponent.prototype.setComponente = function (componente) {
        this.apiService.obtenerComponente(componente);
    };
    ExperienciaComponent.prototype.actualizarExperiencia = function () {
        this.ngOnInit();
    };
    ExperienciaComponent = __decorate([
        core_1.Component({
            selector: 'app-experiencia',
            templateUrl: './experiencia.component.html',
            styleUrls: ['./experiencia.component.css']
        })
    ], ExperienciaComponent);
    return ExperienciaComponent;
}());
exports.ExperienciaComponent = ExperienciaComponent;
