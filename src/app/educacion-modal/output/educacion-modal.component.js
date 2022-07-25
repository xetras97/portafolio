"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.EducacionModalComponent = void 0;
var core_1 = require("@angular/core");
var EducacionModalComponent = /** @class */ (function () {
    function EducacionModalComponent(educacion, formBuilder, activeModal) {
        this.educacion = educacion;
        this.formBuilder = formBuilder;
        this.activeModal = activeModal;
        //Imagen Upload
        this.afuConfig = {
            uploadAPI: {
                url: "http://localhost:8080/upload",
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhcmdwcm9ncmFtYSIsImlhdCI6MTY1ODY4NjY5NSwiZXhwIjoxNjU4NzI5ODk1fQ.e3DqTd4o3ax2jhUWEX9HuMy4DiXnB2wZqSCWe-4Hl_Rzkw_pw-muPCKOuXgdk2K-Sm2zmvON-Ds0tk1BMZhRLQ"
                }
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
        this.test = this.formBuilder.group({
            "title": [null, null],
            "year": [null, null],
            "institute": [null, null],
            "time": [null, null]
        });
    }
    EducacionModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.educacion.obtenerDatosPersonales("estudios").subscribe(function (data) {
            _this.dataForm = data;
        });
    };
    EducacionModalComponent.prototype.setDefaultForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                id = this.educacion.id;
                return [2 /*return*/, this.setForm(this.dataForm[id].titulo, this.dataForm[id].año, this.dataForm[id].institucion, this.dataForm[id].periodo)];
            });
        });
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
    };
    EducacionModalComponent.prototype.resetFiles = function () {
        this.single = true;
        this.fileName = undefined;
        console.log(this.fileName);
    };
    EducacionModalComponent.prototype.fileSelected = function (evento) {
        this.single = false;
        this.fileName = evento.target.files[0].name;
        console.log(this.fileName);
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
