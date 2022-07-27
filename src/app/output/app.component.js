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
        this.afuConfig = {
            uploadAPI: {
                url: "http://localhost:8080/upload",
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhcmdwcm9ncmFtYSIsImlhdCI6MTY1ODY4NjY5NSwiZXhwIjoxNjU4NzI5ODk1fQ.e3DqTd4o3ax2jhUWEX9HuMy4DiXnB2wZqSCWe-4Hl_Rzkw_pw-muPCKOuXgdk2K-Sm2zmvON-Ds0tk1BMZhRLQ"
                }
            },
            multiple: false,
            formatsAllowed: ".jpg,.png",
            maxSize: 1,
            hideProgressBar: false,
            hideResetBtn: true,
            hideSelectBtn: false,
            fileNameIndex: false,
            autoUpload: true,
            replaceTexts: {
                selectFileBtn: 'Seleccionar Imagenes',
                uploadBtn: 'Cargar',
                dragNDropBox: 'Arrastra aqui',
                afterUploadMsg_success: 'Cargado correctamente',
                afterUploadMsg_error: 'Fallo la carga',
                sizeLimit: 'Tamaño maximo'
            }
        };
        this.multiple = false;
        this.single = false;
        this.filesNameList = [];
        this.desarrolladorForm = this.formBuilder.group({
            "nombreDesarrollador": [null, null],
            "apellido": [null, null],
            "titulo": [null, null],
            "descripcion": [null, null],
            "tituloSecundario": [null, null],
            "github": [null, null],
            "linkedin": [null, null],
            "instagram": [null, null]
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socialNet.obtenerDatosPersonales("desarrollador").subscribe(function (data) {
            _this.desarrollador = data[0];
            _this.rellenar();
        });
        this.logged.isLoggedIn();
    };
    AppComponent.prototype.resetFiles = function () {
        this.single = true;
        this.filePic = undefined;
        this.fileBanner = undefined;
        console.log(this.filePic);
        console.log(this.fileBanner);
    };
    AppComponent.prototype.picSelected = function (evento) {
        this.single = false;
        this.filePic = evento.target.files[0].name;
        console.log(this.filePic);
    };
    AppComponent.prototype.bannerSelected = function (evento) {
        this.single = false;
        this.fileBanner = evento.target.files[0].name;
        console.log(this.fileBanner);
    };
    AppComponent.prototype.postEducacionBd = function () {
        var formData = this.desarrolladorForm.value;
        var data = {
            "idDesarrollador": 1,
            "nombre": formData.nombreDesarrollador,
            "apellido": formData.apellido,
            "titulo": formData.titulo,
            "img": this.desarrollador.img,
            "descripcion": formData.descripcion,
            "tituloSecundario": formData.tituloSecundario,
            "github": formData.github,
            "linkedin": formData.linkedin,
            "instagram": formData.instagram,
            "banner": this.desarrollador.banner
        };
        if (this.filePic != undefined) {
            data.img = 'http://localhost:8080/files/' + this.filePic;
        }
        if (this.fileBanner != undefined) {
            data.banner = 'http://localhost:8080/files/' + this.fileBanner;
        }
        var dataToSend = data;
        console.log(dataToSend);
        return this.socialNet.enviarDatos("desarrollador", dataToSend).subscribe(function (xd) { return console.log(xd); });
    };
    AppComponent.prototype.rellenar = function () {
        this.desarrolladorForm.setValue({
            "nombreDesarrollador": this.desarrollador.nombre,
            "apellido": this.desarrollador.apellido,
            "titulo": this.desarrollador.titulo,
            "descripcion": this.desarrollador.descripcion,
            "tituloSecundario": this.desarrollador.tituloSecundario,
            "github": this.desarrollador.github,
            "linkedin": this.desarrollador.linkedin,
            "instagram": this.desarrollador.instagram
        });
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
