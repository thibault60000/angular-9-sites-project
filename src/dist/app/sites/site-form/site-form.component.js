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
var router_1 = require("@angular/router");
var sites_service_1 = require("../services/sites.service");
var site_1 = require("../objects/site");
var SiteFormComponent = /** @class */ (function () {
    // Constructeur
    function SiteFormComponent(sitesService, router) {
        this.sitesService = sitesService;
        this.router = router;
    }
    // Initialisation de la propriété types
    SiteFormComponent.prototype.ngOnInit = function () {
        this.types = this.sitesService.getSiteTypes();
    };
    // Détermine si le type passé en paramètres appartient ou non au site  en cours d'édition.
    SiteFormComponent.prototype.hasType = function (type) {
        var index = this.site.types.indexOf(type);
        if (index > -1)
            return true;
        return false;
    };
    // Méthode appelée lorsque l'utilisateur ajoute ou retire un type au pokémon en cours d'édition.
    SiteFormComponent.prototype.selectType = function ($event, type) {
        var checked = $event.target.checked;
        if (checked) {
            this.site.types.push(type);
        }
        else {
            var index = this.site.types.indexOf(type);
            if (index > -1) {
                this.site.types.splice(index, 1);
            }
        }
    };
    // Valide le nombre de types pour chaque pokémon
    SiteFormComponent.prototype.isTypesValid = function (type) {
        if (this.site.types.length === 1 && this.hasType(type)) {
            return false;
        }
        if (this.site.types.length >= 3 && !this.hasType(type)) {
            return false;
        }
        return true;
    };
    // La méthode appelée lorsque le formulaire est soumis.
    SiteFormComponent.prototype.onSubmit = function () {
        console.log("Submit form !");
        var link = ["/site", this.site.id];
        this.router.navigate(link);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", site_1.Site)
    ], SiteFormComponent.prototype, "site", void 0);
    SiteFormComponent = __decorate([
        core_1.Component({
            selector: "site-form",
            templateUrl: "./app/sites/site-form/site-form.component.html",
            styleUrls: ["./app/sites/site-form/site-form.component.css"],
        }),
        __metadata("design:paramtypes", [sites_service_1.SitesService, router_1.Router])
    ], SiteFormComponent);
    return SiteFormComponent;
}());
exports.SiteFormComponent = SiteFormComponent;
//# sourceMappingURL=site-form.component.js.map