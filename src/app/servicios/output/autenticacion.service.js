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
var http_1 = require("@angular/common/http");
var AutenticacionService = /** @class */ (function () {
    function AutenticacionService() {
        this.url = constructor(private, http, http_1.HttpClient);
    }
    AutenticacionService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AutenticacionService);
    return AutenticacionService;
}());
exports.AutenticacionService = AutenticacionService;
{ }
