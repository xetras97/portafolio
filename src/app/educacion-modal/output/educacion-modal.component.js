"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EducacionModalComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var EducacionModalComponent = /** @class */ (function () {
    function EducacionModalComponent(educacion, formBuilder, activeModal) {
        this.educacion = educacion;
        this.formBuilder = formBuilder;
        this.activeModal = activeModal;
        //Imagen Upload
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
        this.single = false;
        this.filesDeleteList = [];
        this.test = this.formBuilder.group({
            "title": [null, [forms_1.Validators.required]],
            "year": [null, [forms_1.Validators.required]],
            "institute": [null, [forms_1.Validators.required]],
            "time": [null, null]
        });
    }
    EducacionModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.educacion.obtenerDatosPersonales("estudios").subscribe(function (data) {
            _this.dataForm = data;
        });
    };
    Object.defineProperty(EducacionModalComponent.prototype, "Title", {
        get: function () {
            return this.test.get("title");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EducacionModalComponent.prototype, "Year", {
        get: function () {
            return this.test.get("year");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EducacionModalComponent.prototype, "Institute", {
        get: function () {
            return this.test.get("institute");
        },
        enumerable: false,
        configurable: true
    });
    EducacionModalComponent.prototype.setDefaultForm = function () {
        var id = this.educacion.id;
        return this.setForm(this.dataForm[id].titulo, this.dataForm[id].anio, this.dataForm[id].institucion, this.dataForm[id].periodo);
    };
    EducacionModalComponent.prototype.setForm = function (titulo, año, institucion, periodo) {
        this.test.setValue({
            "title": titulo,
            "year": año,
            "institute": institucion,
            "time": periodo
        });
    };
    EducacionModalComponent.prototype.resetForm = function () {
        this.test.reset();
        this.single = true;
    };
    EducacionModalComponent.prototype.resetFiles = function () {
        var _this = this;
        this.single = true;
        if (this.filesDeleteList.length > 0) {
            this.filesDeleteList.forEach(function (file) {
                _this.educacion.deleteFiles(file).subscribe();
            });
            this.filesDeleteList = [];
        }
        this.fileName = undefined;
        console.log(this.fileName);
    };
    EducacionModalComponent.prototype.fileSelected = function (evento) {
        this.single = false;
        this.fileName = evento.target.files[0].name;
        this.filesDeleteList.push(evento.target.files[0].name);
        console.log(this.filesDeleteList);
    };
    EducacionModalComponent.prototype.postEducacionBd = function () {
        var id = this.educacion.id;
        var formData = this.test.value;
        var data = {
            "idEducacion": id,
            "titulo": formData.title,
            "anio": formData.year,
            "institucion": formData.institute,
            "img": this.dataForm[id].img,
            "periodo": formData.time
        };
        if (this.fileName != undefined) {
            data.img = 'http://localhost:8080/files/' + this.fileName;
        }
        var dataToSend = data;
        this.filesDeleteList = [];
        console.log(dataToSend);
        return this.educacion.enviarDatos("estudios", dataToSend).subscribe();
    };
    EducacionModalComponent = __decorate([
        core_1.Component({
            selector: 'app-educacion-modal',
            templateUrl: './educacion-modal.component.html',
            styleUrls: ['./educacion-modal.component.css']
        })
    ], EducacionModalComponent);
    return EducacionModalComponent;
}());
exports.EducacionModalComponent = EducacionModalComponent;
