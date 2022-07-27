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
var EditModalsComponent = /** @class */ (function () {
    function EditModalsComponent(apiService, formBuilder, activeModal) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.activeModal = activeModal;
        this.multipleConfig = {
            uploadAPI: {
                url: "http://localhost:8080/upload"
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
                url: "http://localhost:8080/upload"
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
        this.multiple = false;
        this.single = false;
        this.filesNameList = [];
        this.skillsModals = this.formBuilder.group({
            "nombre": [null, null],
            "nivel": [null, null]
        });
        this.softSkillsModal = this.formBuilder.group({
            "nombre": [null, null]
        });
        this.languagesModal = this.formBuilder.group({
            "nombre": [null, null],
            "nivel": [null, null]
        });
        this.projectsModal = this.formBuilder.group({
            "nombre": [null, null],
            "descripcion": [null, null],
            "stack": [null, null],
            "web": [null, null],
            "github": [null, null],
            "año": [null, null],
            "observaciones": [null, null]
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
    };
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
    EditModalsComponent.prototype.resetForm = function () {
        this.skillsModals.reset();
        this.softSkillsModal.reset();
        this.languagesModal.reset();
        this.projectsModal.reset();
    };
    EditModalsComponent.prototype.resetFiles = function () {
        this.single = true;
        this.fileName = undefined;
        console.log(this.fileName);
    };
    EditModalsComponent.prototype.resetMultipleFiles = function () {
        this.multiple = true;
        this.filesNameList = [];
        console.log(this.filesNameList);
    };
    EditModalsComponent.prototype.fileSelected = function (evento) {
        this.single = false;
        this.fileName = evento.target.files[0].name;
        console.log(this.fileName);
    };
    EditModalsComponent.prototype.multipleFileSelected = function (evento) {
        this.multiple = false;
        for (var index = 0; index < evento.target.files.length; index++) {
            this.filesNameList.push(evento.target.files[index].name);
        }
        console.log(this.filesNameList);
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
            data.img = 'http://localhost:8080/files/' + this.fileName;
        }
        var dataToSend = data;
        return this.apiService.enviarDatos("habilidad", dataToSend).subscribe(function (xd) { return console.log(xd); });
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
        return this.apiService.enviarDatos("habilidad", dataToSend).subscribe(function (xd) { return console.log(xd); });
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
        return this.apiService.enviarDatos("habilidad", dataToSend).subscribe(function (xd) { return console.log(xd); });
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
            data.imagen = 'http://localhost:8080/files/' + this.fileName;
        }
        if (this.filesNameList.length != 0) {
            if (this.filesNameList[0] != undefined) {
                data.img2 = 'http://localhost:8080/files/' + this.filesNameList[0];
            }
            if (this.filesNameList[1] != undefined) {
                data.img3 = 'http://localhost:8080/files/' + this.filesNameList[1];
            }
            if (this.filesNameList[2] != undefined) {
                data.img4 = 'http://localhost:8080/files/' + this.filesNameList[2];
            }
            if (this.filesNameList[3] != undefined) {
                data.img5 = 'http://localhost:8080/files/' + this.filesNameList[3];
            }
            if (this.filesNameList[4] != undefined) {
                data.img6 = 'http://localhost:8080/files/' + this.filesNameList[4];
            }
        }
        var dataToSend = data;
        console.log(dataToSend);
        console.log(this.filesNameList[4]);
        return this.apiService.enviarDatos("proyectos", dataToSend).subscribe(function (xd) { return console.log(xd); });
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
