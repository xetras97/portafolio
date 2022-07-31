"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditModalsComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var EditModalsComponent = /** @class */ (function () {
    function EditModalsComponent(apiService, formBuilder, activeModal) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.activeModal = activeModal;
        this.multiple = false;
        this.single = false;
        this.filesNameList = [];
        this.filesDeleteList = [];
        this.filesMultipleDeleteList = [];
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
        this.skillsModals = this.formBuilder.group({
            "nombre": [null, [forms_1.Validators.required]],
            "nivel": [null, [forms_1.Validators.required]]
        });
        this.softSkillsModal = this.formBuilder.group({
            "nombre": [null, [forms_1.Validators.required]]
        });
        this.languagesModal = this.formBuilder.group({
            "nombre": [null, [forms_1.Validators.required]],
            "nivel": [null, [forms_1.Validators.required]]
        });
        this.projectsModal = this.formBuilder.group({
            "nombre": [null, [forms_1.Validators.required]],
            "descripcion": [null, [forms_1.Validators.required]],
            "stack": [null, [forms_1.Validators.required]],
            "web": [null, [forms_1.Validators.required]],
            "github": [null, [forms_1.Validators.required]],
            "año": [null, [forms_1.Validators.required]],
            "observaciones": [null, null]
        });
        this.experienciaModal = this.formBuilder.group({
            "empresa": [null, [forms_1.Validators.required]],
            "cargo": [null, [forms_1.Validators.required]],
            "periodo": [null, [forms_1.Validators.required]],
            "funcion": [null, [forms_1.Validators.required]]
        });
    }
    EditModalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.obtenerDatosPersonales("habilidades").subscribe(function (data) {
            _this.dataForm = data;
        });
        this.apiService.obtenerDatosPersonales("proyectos").subscribe(function (data) {
            _this.projectsForm = data;
        });
        this.apiService.obtenerDatosPersonales("experiencias").subscribe(function (data) {
            _this.experienciaForm = data;
        });
    };
    Object.defineProperty(EditModalsComponent.prototype, "NombreSkill", {
        get: function () {
            return this.skillsModals.get("nombre");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditModalsComponent.prototype, "NivelSkill", {
        get: function () {
            return this.skillsModals.get("nivel");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditModalsComponent.prototype, "NombreSoft", {
        get: function () {
            return this.softSkillsModal.get("nombre");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditModalsComponent.prototype, "NombreLanguages", {
        get: function () {
            return this.languagesModal.get("nombre");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditModalsComponent.prototype, "NivelLanguages", {
        get: function () {
            return this.languagesModal.get("nivel");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditModalsComponent.prototype, "NombreProject", {
        get: function () {
            return this.projectsModal.get("nombre");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditModalsComponent.prototype, "Descripcion", {
        get: function () {
            return this.projectsModal.get("descripcion");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditModalsComponent.prototype, "Stack", {
        get: function () {
            return this.projectsModal.get("stack");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditModalsComponent.prototype, "Web", {
        get: function () {
            return this.projectsModal.get("web");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditModalsComponent.prototype, "Github", {
        get: function () {
            return this.projectsModal.get("github");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditModalsComponent.prototype, "Anio", {
        get: function () {
            return this.projectsModal.get("año");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditModalsComponent.prototype, "Empresa", {
        get: function () {
            return this.experienciaModal.get("empresa");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditModalsComponent.prototype, "Cargo", {
        get: function () {
            return this.experienciaModal.get("cargo");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditModalsComponent.prototype, "Periodo", {
        get: function () {
            return this.experienciaModal.get("periodo");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditModalsComponent.prototype, "Funcion", {
        get: function () {
            return this.experienciaModal.get("funcion");
        },
        enumerable: false,
        configurable: true
    });
    EditModalsComponent.prototype.setDefaultForm = function () {
        var id = this.apiService.id;
        return this.setForm(this.dataForm[id].nombre, this.dataForm[id].nivel);
    };
    EditModalsComponent.prototype.setLanguageForm = function () {
        var id = this.apiService.id;
        return this.setForm(this.dataForm[id].nombre, this.dataForm[id].otro);
    };
    EditModalsComponent.prototype.setForm = function (nombre, nivel) {
        this.skillsModals.setValue({
            "nombre": nombre,
            "nivel": nivel
        });
        this.languagesModal.setValue({
            "nombre": nombre,
            "nivel": nivel
        });
    };
    EditModalsComponent.prototype.setSoft = function (nombre) {
        this.softSkillsModal.setValue({
            "nombre": nombre
        });
    };
    EditModalsComponent.prototype.setSoftDefaultForm = function () {
        var id = this.apiService.id;
        return this.setSoft(this.dataForm[id].nombre);
    };
    EditModalsComponent.prototype.setProject = function (nombre, descripcion, stack, web, github, año, observaciones) {
        this.projectsModal.setValue({
            "nombre": nombre,
            "descripcion": descripcion,
            "stack": stack,
            "web": web,
            "github": github,
            "año": año,
            "observaciones": observaciones
        });
    };
    EditModalsComponent.prototype.setProjectDefaultForm = function () {
        var id = this.apiService.id;
        return this.setProject(this.projectsForm[id].nombre, this.projectsForm[id].descripcion, this.projectsForm[id].stack, this.projectsForm[id].web, this.projectsForm[id].github, this.projectsForm[id].año, this.projectsForm[id].observaciones);
    };
    EditModalsComponent.prototype.setExperiencia = function (empresa, cargo, periodo, funcion) {
        this.experienciaModal.setValue({
            "empresa": empresa,
            "cargo": cargo,
            "periodo": periodo,
            "funcion": funcion
        });
    };
    EditModalsComponent.prototype.setExperienciaDefaultForm = function () {
        var id = this.apiService.id;
        return this.setExperiencia(this.experienciaForm[id].empresa, this.experienciaForm[id].cargo, this.experienciaForm[id].periodo, this.experienciaForm[id].funcion);
    };
    EditModalsComponent.prototype.resetForm = function () {
        this.skillsModals.reset();
        this.softSkillsModal.reset();
        this.languagesModal.reset();
        this.projectsModal.reset();
        this.experienciaModal.reset();
        this.multiple = true;
        this.single = true;
    };
    EditModalsComponent.prototype.resetFiles = function () {
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
    EditModalsComponent.prototype.resetMultipleFiles = function () {
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
    EditModalsComponent.prototype.fileSelected = function (evento) {
        this.single = false;
        this.fileName = evento.target.files[0].name;
        this.filesDeleteList.push(evento.target.files[0].name);
    };
    EditModalsComponent.prototype.multipleFileSelected = function (evento) {
        this.multiple = false;
        for (var index = 0; index < evento.target.files.length; index++) {
            this.filesNameList.push(evento.target.files[index].name);
            this.filesMultipleDeleteList.push(evento.target.files[index].name);
        }
    };
    EditModalsComponent.prototype.postSkillsBd = function () {
        var id = this.apiService.id;
        var formData = this.skillsModals.value;
        var data = {
            "idHabilidades": id,
            "nombre": formData.nombre,
            "tipo": "Dura",
            "nivel": formData.nivel,
            "img": this.dataForm[id].img,
            "otro": null
        };
        if (this.fileName != undefined) {
            data.img = 'https://portfolio-arg-programa-backend.herokuapp.com/files/' + this.fileName;
        }
        var dataToSend = data;
        return this.apiService.enviarDatos("habilidad", dataToSend).subscribe();
    };
    EditModalsComponent.prototype.postSoftBd = function () {
        var id = this.apiService.id;
        var formData = this.softSkillsModal.value;
        var data = {
            "idHabilidades": id,
            "nombre": formData.nombre,
            "tipo": "Blanda"
        };
        var dataToSend = data;
        return this.apiService.enviarDatos("habilidad", dataToSend).subscribe();
    };
    EditModalsComponent.prototype.postLanguagesBd = function () {
        var id = this.apiService.id;
        var formData = this.languagesModal.value;
        var data = {
            "idHabilidades": id,
            "nombre": formData.nombre,
            "tipo": "Idioma",
            "otro": formData.nivel
        };
        var dataToSend = data;
        return this.apiService.enviarDatos("habilidad", dataToSend).subscribe();
    };
    EditModalsComponent.prototype.postProjectsBd = function () {
        var id = this.apiService.id;
        var formData = this.projectsModal.value;
        var data = {
            "idProyectos": id,
            "nombre": formData.nombre,
            "imagen": this.projectsForm[id].imagen,
            "descripcion": formData.descripcion,
            "stack": formData.stack,
            "web": formData.web,
            "github": formData.github,
            "año": formData.año,
            "observaciones": formData.observaciones,
            "img2": this.projectsForm[id].img2,
            "img3": this.projectsForm[id].img3,
            "img4": this.projectsForm[id].img4,
            "img5": this.projectsForm[id].img5,
            "img6": this.projectsForm[id].img6
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
        return this.apiService.enviarDatos("proyectos", dataToSend).subscribe();
    };
    EditModalsComponent.prototype.postExperienciaBd = function () {
        var id = this.apiService.id;
        var formData = this.experienciaModal.value;
        var data = {
            "idExperiencia": id,
            "empresa": formData.empresa,
            "cargo": formData.cargo,
            "periodo": formData.periodo,
            "funcion": formData.funcion,
            "img": this.experienciaForm[id].img
        };
        if (this.fileName != undefined) {
            data.img = 'https://portfolio-arg-programa-backend.herokuapp.com/files/' + this.fileName;
        }
        var dataToSend = data;
        return this.apiService.enviarDatos("experiencia", dataToSend).subscribe();
    };
    EditModalsComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-modals',
            templateUrl: './edit-modals.component.html',
            styleUrls: ['./edit-modals.component.css']
        })
    ], EditModalsComponent);
    return EditModalsComponent;
}());
exports.EditModalsComponent = EditModalsComponent;
