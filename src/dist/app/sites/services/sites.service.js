"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var SitesService = /** @class */ (function () {
    // Constructeur
    function SitesService(http) {
        this.http = http;
        // Variables
        this.url = "api/sites";
    }
    // Méthode log
    SitesService.prototype.log = function (log) {
        console.info(log);
    };
    // Méthode HandleError
    SitesService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = "operation"; }
        return function (error) {
            console.log(error);
            console.log(operation + " --- ERREUR --- " + error.message);
            return rxjs_1.of(result); // Of transforme les données en Observable
        };
    };
    // Retourne tous les sites
    SitesService.prototype.getSites = function () {
        var _this = this;
        return this.http.get(this.url).pipe(operators_1.tap(function (_) { return _this.log("sites récupérés"); }), operators_1.catchError(this.handleError("getSites", [])));
    };
    // Editer un site
    SitesService.prototype.editSite = function (site) {
        var _this = this;
        var httpOptions = {
            headers: new http_1.HttpHeaders({ "Content-Type": "application/json" }),
        };
        return this.http.put(this.url, site, httpOptions).pipe(operators_1.tap(function (_) { return _this.log("site \u00E9dit\u00E9 avec ID=" + site.id); }), operators_1.catchError(this.handleError("editSite, avec id=" + site.id)));
    };
    // Retourne le site avec l'identifiant passé en paramètre
    SitesService.prototype.getSite = function (id) {
        var _this = this;
        var url = this.url + "/" + id;
        return this.http.get(url).pipe(operators_1.tap(function (_) { return _this.log("site r\u00E9cup\u00E9r\u00E9 avec ID=" + id); }), operators_1.catchError(this.handleError("getSite, avec id=" + id)));
    };
    SitesService.prototype.getSiteTypes = function () {
        return [
            "dessin",
            "collaboratif",
            "scrum",
            "css",
            "design",
            "tutoriel",
            "code",
            "framework",
        ];
    };
    SitesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SitesService);
    return SitesService;
}());
exports.SitesService = SitesService;
//# sourceMappingURL=sites.service.js.map