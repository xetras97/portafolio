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
var forms_1 = require("@angular/forms");
var AppComponent = /** @class */ (function () {
    function AppComponent(socialNet, logged, formBuilder) {
        this.socialNet = socialNet;
        this.logged = logged;
        this.formBuilder = formBuilder;
        this.title = 'naon-frontend';
        this.multiple = false;
        this.single = false;
        this.filesDeletePic = [];
        this.filesDeleteBanner = [];
        this.afuConfig = {
            uploadAPI: {
                url: "https://portfolio-arg-programa-backend.herokuapp.com/upload",
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
        this.desarrolladorForm = this.formBuilder.group({
            "nombreDesarrollador": [null, [forms_1.Validators.required]],
            "apellido": [null, [forms_1.Validators.required]],
            "titulo": [null, [forms_1.Validators.required]],
            "descripcion": [null, [forms_1.Validators.required]],
            "tituloSecundario": [null, [forms_1.Validators.required]],
            "github": [null, [forms_1.Validators.required]],
            "linkedin": [null, [forms_1.Validators.required]],
            "instagram": [null, [forms_1.Validators.required]]
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
    Object.defineProperty(AppComponent.prototype, "NombreDesarrollador", {
        get: function () {
            return this.desarrolladorForm.get("nombreDesarrollador");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "Apellido", {
        get: function () {
            return this.desarrolladorForm.get("apellido");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "Titulo", {
        get: function () {
            return this.desarrolladorForm.get("titulo");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "Descripcion", {
        get: function () {
            return this.desarrolladorForm.get("descripcion");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "TituloSecundario", {
        get: function () {
            return this.desarrolladorForm.get("tituloSecundario");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "Github", {
        get: function () {
            return this.desarrolladorForm.get("github");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "Linkedin", {
        get: function () {
            return this.desarrolladorForm.get("linkedin");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "Instagram", {
        get: function () {
            return this.desarrolladorForm.get("instagram");
        },
        enumerable: false,
        configurable: true
    });
    AppComponent.prototype.deletePic = function () {
        var _this = this;
        if (this.filesDeletePic.length > 0) {
            this.filesDeletePic.forEach(function (file) {
                _this.socialNet.deleteFiles(file).subscribe();
            });
            this.filesDeletePic = [];
        }
    };
    AppComponent.prototype.deleteBanner = function () {
        var _this = this;
        if (this.filesDeleteBanner.length > 0) {
            this.filesDeleteBanner.forEach(function (file) {
                _this.socialNet.deleteFiles(file).subscribe();
            });
            this.filesDeleteBanner = [];
        }
    };
    AppComponent.prototype.resetFiles = function () {
        this.single = true;
        this.resetPic();
        this.resetBanner();
    };
    AppComponent.prototype.resetPic = function () {
        this.filePic = undefined;
    };
    AppComponent.prototype.resetBanner = function () {
        this.fileBanner = undefined;
    };
    AppComponent.prototype.picSelected = function (evento) {
        this.single = false;
        this.deletePic();
        this.filePic = evento.target.files[0].name;
        this.filesDeletePic.push(evento.target.files[0].name);
    };
    AppComponent.prototype.bannerSelected = function (evento) {
        this.single = false;
        this.deleteBanner();
        this.fileBanner = evento.target.files[0].name;
        this.filesDeleteBanner.push(evento.target.files[0].name);
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
            data.img = 'https://portfolio-arg-programa-backend.herokuapp.com/files/' + this.filePic;
        }
        if (this.fileBanner != undefined) {
            data.banner = 'https://portfolio-arg-programa-backend.herokuapp.com/files/' + this.fileBanner;
        }
        var dataToSend = data;
        this.filesDeleteBanner = [];
        this.filesDeletePic = [];
        return this.socialNet.enviarDatos("desarrollador", dataToSend).subscribe();
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
