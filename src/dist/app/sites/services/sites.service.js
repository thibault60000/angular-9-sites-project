"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_sites_1 = require("../mocks/mock-sites");
var SitesService = /** @class */ (function () {
    function SitesService() {
    }
    // Retourne tous les sites
    SitesService.prototype.getSites = function () {
        return mock_sites_1.SITES;
    };
    // Retourne le site avec l'identifiant passé en paramètre
    SitesService.prototype.getSite = function (id) {
        var sites = this.getSites();
        var site = sites.filter(function (s) { return s.id === id; });
        return site[0];
    };
    SitesService.prototype.getSiteTypes = function () {
        return ["dessin", "collaboratif", "scrum", "css", "design", "tutoriel", "code", "framework"];
    };
    SitesService = __decorate([
        core_1.Injectable()
    ], SitesService);
    return SitesService;
}());
exports.SitesService = SitesService;
//# sourceMappingURL=sites.service.js.map