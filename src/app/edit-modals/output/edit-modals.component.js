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
    function EditModalsComponent(educacion, formBuilder, activeModal) {
        this.educacion = educacion;
        this.formBuilder = formBuilder;
        this.activeModal = activeModal;
        this.skillsModal = this.formBuilder.group({
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
        this.educacion.obtenerDatosPersonales("habilidades").subscribe(function (data) {
            _this.dataForm = data;
        });
        this.educacion.obtenerDatosPersonales("proyectos").subscribe(function (data) {
            _this.projectsForm = data;
        });
    };
    EditModalsComponent.prototype.setDefaultForm = function () {
        var id = this.educacion.id;
        return this.setForm(this.dataForm[id].nombre, this.dataForm[id].nivel);
    };
    EditModalsComponent.prototype.setLanguageForm = function () {
        var id = this.educacion.id;
        return this.setForm(this.dataForm[id].nombre, this.dataForm[id].otro);
    };
    EditModalsComponent.prototype.setForm = function (nombre, nivel) {
        this.skillsModal.setValue({
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
        var id = this.educacion.id;
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
        var id = this.educacion.id;
        return this.setProject(this.projectsForm[id].nombre, this.projectsForm[id].descripcion, this.projectsForm[id].stack, this.projectsForm[id].web, this.projectsForm[id].github, this.projectsForm[id].año, this.projectsForm[id].observaciones);
    };
    EditModalsComponent.prototype.resetForm = function () {
        this.skillsModal.reset();
        this.softSkillsModal.reset();
        this.languagesModal.reset();
        this.projectsModal.reset();
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
