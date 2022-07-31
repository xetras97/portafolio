"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewModalsComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var NewModalsComponent = /** @class */ (function () {
    function NewModalsComponent(apiService, formBuilder) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.multiple = false;
        this.single = false;
        this.filesNameList = [];
        this.filesDeleteList = [];
        this.filesMultipleDeleteList = [];
        this.idExperiencia = 0;
        this.idHabilidad = 0;
        this.idProyecto = 0;
        this.idEstudios = 0;
        this.multipleConfig = {
            uploadAPI: {
                url: "https://portfolio-arg-programa-backend.herokuapp.com/upload"
            },
            multiple: true,
            formatsAllowed: ".jpg,.png",
            maxSize: 5,
            hideProgressBar: false,
            hideResetBtn: true,
            hideSelectBtn: false,
            fileNameIndex: false,
            autoUpload: true,
            replaceTexts: {
                selectFileBtn: 'Seleccionar Imagenes',
                afterUploadMsg_success: 'Cargado correctamente',
                afterUploadMsg_error: 'Fallo la carga',
                sizeLimit: 'Tamaño maximo'
            }
        };
        this.afuConfig = {
            uploadAPI: {
                url: "https://portfolio-arg-programa-backend.herokuapp.com/upload"
            },
            theme: "dragNDrop",
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
        this.experienciaNewModal = this.formBuilder.group({
            "empresa": [null, [forms_1.Validators.required]],
            "cargo": [null, [forms_1.Validators.required]],
            "periodo": [null, [forms_1.Validators.required]],
            "funcion": [null, [forms_1.Validators.required]]
        });
        this.skillsNewModal = this.formBuilder.group({
            "nombre": [null, [forms_1.Validators.required]],
            "nivel": [null, [forms_1.Validators.required]]
        });
        this.softSkillsNewModal = this.formBuilder.group({
            "nombre": [null, [forms_1.Validators.required]]
        });
        this.languagesNewModal = this.formBuilder.group({
            "nombre": [null, [forms_1.Validators.required]],
            "nivel": [null, [forms_1.Validators.required]]
        });
        this.projectsNewModal = this.formBuilder.group({
            "nombre": [null, [forms_1.Validators.required]],
            "descripcion": [null, [forms_1.Validators.required]],
            "stack": [null, [forms_1.Validators.required]],
            "web": [null, [forms_1.Validators.required]],
            "github": [null, [forms_1.Validators.required]],
            "año": [null, [forms_1.Validators.required]],
            "observaciones": [null, null]
        });
        this.estudiosNewModal = this.formBuilder.group({
            "title": [null, [forms_1.Validators.required]],
            "year": [null, [forms_1.Validators.required]],
            "institute": [null, [forms_1.Validators.required]],
            "time": [null, null]
        });
    }
    NewModalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.obtenerDatosPersonales("experiencias").subscribe(function (data) {
            _this.idExperiencia = data.length;
        });
        this.apiService.obtenerDatosPersonales("habilidades").subscribe(function (data) {
            _this.idHabilidad = data.length;
        });
        this.apiService.obtenerDatosPersonales("proyectos").subscribe(function (data) {
            _this.idProyecto = data.length;
        });
        this.apiService.obtenerDatosPersonales("estudios").subscribe(function (data) {
            _this.idEstudios = data.length;
        });
    };
    Object.defineProperty(NewModalsComponent.prototype, "Empresa", {
        get: function () {
            return this.experienciaNewModal.get("empresa");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewModalsComponent.prototype, "Cargo", {
        get: function () {
            return this.experienciaNewModal.get("cargo");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewModalsComponent.prototype, "Periodo", {
        get: function () {
            return this.experienciaNewModal.get("periodo");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewModalsComponent.prototype, "Funcion", {
        get: function () {
            return this.experienciaNewModal.get("funcion");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewModalsComponent.prototype, "NombreSkill", {
        get: function () {
            return this.skillsNewModal.get("nombre");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewModalsComponent.prototype, "NivelSkill", {
        get: function () {
            return this.skillsNewModal.get("nivel");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewModalsComponent.prototype, "NombreSoft", {
        get: function () {
            return this.softSkillsNewModal.get("nombre");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewModalsComponent.prototype, "NombreLanguages", {
        get: function () {
            return this.languagesNewModal.get("nombre");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewModalsComponent.prototype, "NivelLanguages", {
        get: function () {
            return this.languagesNewModal.get("nivel");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewModalsComponent.prototype, "NombreProject", {
        get: function () {
            return this.projectsNewModal.get("nombre");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewModalsComponent.prototype, "Descripcion", {
        get: function () {
            return this.projectsNewModal.get("descripcion");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewModalsComponent.prototype, "Stack", {
        get: function () {
            return this.projectsNewModal.get("stack");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewModalsComponent.prototype, "Web", {
        get: function () {
            return this.projectsNewModal.get("web");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewModalsComponent.prototype, "Github", {
        get: function () {
            return this.projectsNewModal.get("github");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewModalsComponent.prototype, "Anio", {
        get: function () {
            return this.projectsNewModal.get("año");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewModalsComponent.prototype, "Title", {
        get: function () {
            return this.estudiosNewModal.get("title");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewModalsComponent.prototype, "Year", {
        get: function () {
            return this.estudiosNewModal.get("year");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewModalsComponent.prototype, "Institute", {
        get: function () {
            return this.estudiosNewModal.get("institute");
        },
        enumerable: false,
        configurable: true
    });
    NewModalsComponent.prototype.resetFiles = function () {
        var _this = this;
        this.single = true;
        if (this.filesDeleteList.length > 0) {
            this.filesDeleteList.forEach(function (file) {
                _this.apiService.deleteFiles(file).subscribe();
            });
            this.filesDeleteList = [];
        }
        this.fileName = undefined;
    };
    NewModalsComponent.prototype.resetMultipleFiles = function () {
        var _this = this;
        this.multiple = true;
        if (this.filesMultipleDeleteList.length > 0) {
            this.filesMultipleDeleteList.forEach(function (file) {
                _this.apiService.deleteFiles(file).subscribe();
            });
            this.filesMultipleDeleteList = [];
        }
        this.filesNameList = [];
    };
    NewModalsComponent.prototype.fileSelected = function (evento) {
        this.single = false;
        this.fileName = evento.target.files[0].name;
        this.filesDeleteList.push(evento.target.files[0].name);
    };
    NewModalsComponent.prototype.multipleFileSelected = function (evento) {
        this.multiple = false;
        for (var index = 0; index < evento.target.files.length; index++) {
            this.filesNameList.push(evento.target.files[index].name);
            this.filesMultipleDeleteList.push(evento.target.files[index].name);
        }
    };
    NewModalsComponent.prototype.postNewExperienciaBd = function () {
        var _this = this;
        var formData = this.experienciaNewModal.value;
        var data = {
            "idExperiencia": this.idExperiencia,
            "empresa": formData.empresa,
            "cargo": formData.cargo,
            "periodo": formData.periodo,
            "funcion": formData.funcion,
            "img": ""
        };
        if (this.fileName != undefined) {
            data.img = 'https://portfolio-arg-programa-backend.herokuapp.com/files/' + this.fileName;
        }
        var dataToSend = data;
        return this.apiService.enviarDatos("experiencia", dataToSend).subscribe(function (data) {
            _this.idExperiencia++;
        });
    };
    NewModalsComponent.prototype.postNewSkillsBd = function () {
        var _this = this;
        var formData = this.skillsNewModal.value;
        var data = {
            "idHabilidades": this.idHabilidad,
            "nombre": formData.nombre,
            "tipo": "Dura",
            "nivel": formData.nivel,
            "img": "",
            "otro": null
        };
        if (this.fileName != undefined) {
            data.img = 'https://portfolio-arg-programa-backend.herokuapp.com/files/' + this.fileName;
        }
        var dataToSend = data;
        return this.apiService.enviarDatos("habilidad", dataToSend).subscribe(function (data) {
            _this.idHabilidad++;
        });
    };
    NewModalsComponent.prototype.postNewSoftBd = function () {
        var _this = this;
        var formData = this.softSkillsNewModal.value;
        var data = {
            "idHabilidades": this.idHabilidad,
            "nombre": formData.nombre,
            "tipo": "Blanda"
        };
        var dataToSend = data;
        return this.apiService.enviarDatos("habilidad", dataToSend).subscribe(function (data) {
            _this.idHabilidad++;
        });
    };
    NewModalsComponent.prototype.postNewLanguagesBd = function () {
        var _this = this;
        var formData = this.languagesNewModal.value;
        var data = {
            "idHabilidades": this.idHabilidad,
            "nombre": formData.nombre,
            "tipo": "Idioma",
            "otro": formData.nivel
        };
        var dataToSend = data;
        return this.apiService.enviarDatos("habilidad", dataToSend).subscribe(function (data) {
            _this.idHabilidad++;
        });
    };
    NewModalsComponent.prototype.postNewProjectsBd = function () {
        var _this = this;
        var formData = this.projectsNewModal.value;
        var data = {
            "idProyectos": this.idProyecto,
            "nombre": formData.nombre,
            "imagen": "",
            "descripcion": formData.descripcion,
            "stack": formData.stack,
            "web": formData.web,
            "github": formData.github,
            "año": formData.año,
            "observaciones": formData.observaciones,
            "img2": "",
            "img3": "",
            "img4": "",
            "img5": "",
            "img6": ""
        };
        if (this.fileName != undefined) {
            data.imagen = 'https://portfolio-arg-programa-backend.herokuapp.com/files/' + this.fileName;
        }
        if (this.filesNameList.length != 0) {
            if (this.filesNameList[0] != undefined) {
                data.img2 = 'https://portfolio-arg-programa-backend.herokuapp.com/files/' + this.filesNameList[0];
            }
            if (this.filesNameList[1] != undefined) {
                data.img3 = 'https://portfolio-arg-programa-backend.herokuapp.com/files/' + this.filesNameList[1];
            }
            if (this.filesNameList[2] != undefined) {
                data.img4 = 'https://portfolio-arg-programa-backend.herokuapp.com/files/' + this.filesNameList[2];
            }
            if (this.filesNameList[3] != undefined) {
                data.img5 = 'https://portfolio-arg-programa-backend.herokuapp.com/files/' + this.filesNameList[3];
            }
            if (this.filesNameList[4] != undefined) {
                data.img6 = 'https://portfolio-arg-programa-backend.herokuapp.com/files/' + this.filesNameList[4];
            }
        }
        var dataToSend = data;
        return this.apiService.enviarDatos("proyectos", dataToSend).subscribe(function (data) {
            _this.idProyecto++;
        });
    };
    NewModalsComponent.prototype.postNewEducacionBd = function () {
        var _this = this;
        var formData = this.estudiosNewModal.value;
        var data = {
            "idEducacion": this.idEstudios,
            "titulo": formData.title,
            "anio": formData.year,
            "institucion": formData.institute,
            "img": "",
            "periodo": formData.time
        };
        if (this.fileName != undefined) {
            data.img = 'https://portfolio-arg-programa-backend.herokuapp.com/files/' + this.fileName;
        }
        var dataToSend = data;
        this.filesDeleteList = [];
        return this.apiService.enviarDatos("estudios", dataToSend).subscribe(function (data) {
            _this.idEstudios++;
        });
    };
    NewModalsComponent.prototype.resetForms = function () {
        this.skillsNewModal.reset();
        this.softSkillsNewModal.reset();
        this.languagesNewModal.reset();
        this.projectsNewModal.reset();
        this.experienciaNewModal.reset();
        this.estudiosNewModal.reset();
        this.multiple = true;
        this.single = true;
    };
    NewModalsComponent = __decorate([
        core_1.Component({
            selector: 'app-new-modals',
            templateUrl: './new-modals.component.html',
            styleUrls: ['./new-modals.component.css']
        })
    ], NewModalsComponent);
    return NewModalsComponent;
}());
exports.NewModalsComponent = NewModalsComponent;
