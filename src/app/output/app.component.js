"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(socialNet, logged, formBuilder) {
        this.socialNet = socialNet;
        this.logged = logged;
        this.formBuilder = formBuilder;
        this.title = 'naon-frontend';
        this.titulo = "";
        this.prueba = this.formBuilder.group({
            "titulo": [null, null],
            "año": [null, null],
            "institucion": [null, null],
            "imagen": [null, null],
            "periodo": [null, null]
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socialNet.obtenerDatosPersonales("desarrollador").subscribe(function (data) {
            _this.desarrollador = data[0];
        });
        this.logged.isLoggedIn();
    };
    AppComponent.prototype.obtenerModal = function (id) {
        var _this = this;
        this.socialNet.obtenerPorId("estudios", id).subscribe(function (data) {
            _this.titulo = data.titulo;
        });
        //ABRIR MODAL;
    };
    AppComponent.prototype.cambiarModal = function () {
        this.prueba.patchValue({
            "periodo": "DALE GATO"
        });
        console.log("se ejecuto");
        console.log(this.prueba.value);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
