"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PersonalInfoComponent = void 0;
var core_1 = require("@angular/core");
var PersonalInfoComponent = /** @class */ (function () {
    function PersonalInfoComponent(personalData, logged) {
        this.personalData = personalData;
        this.logged = logged;
    }
    PersonalInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personalData.obtenerDatosPersonales("desarrollador").subscribe(function (data) {
            _this.miPersonalData = data[0];
        });
    };
    PersonalInfoComponent.prototype.actualizarDatosPersonales = function () {
        this.ngOnInit();
    };
    PersonalInfoComponent = __decorate([
        core_1.Component({
            selector: 'app-personal-info',
            templateUrl: './personal-info.component.html',
            styleUrls: ['./personal-info.component.css']
        })
    ], PersonalInfoComponent);
    return PersonalInfoComponent;
}());
exports.PersonalInfoComponent = PersonalInfoComponent;
