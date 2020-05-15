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
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var sites_service_1 = require("../services/sites.service");
var SitesSearchComponent = /** @class */ (function () {
    function SitesSearchComponent(sitesServices, router) {
        this.sitesServices = sitesServices;
        this.router = router;
        this.searchTerms = new rxjs_1.Subject();
    }
    // Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
    SitesSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
        console.log("ok");
    };
    SitesSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sites$ = this.searchTerms.pipe(
        // attendre 300ms de pause entre chaque requête
        operators_1.debounceTime(300), 
        // ignorer la recherche en cours si c'est la même que la précédente
        operators_1.distinctUntilChanged(), 
        // on retourne la liste des résultats correpsondant aux termes de la recherche
        operators_1.switchMap(function (term) { return _this.sitesServices.searchSites(term); }));
        console.log(this.sites$);
    };
    SitesSearchComponent.prototype.gotoDetails = function (site) {
        var link = ["/site", site.id];
        this.router.navigate(link);
    };
    SitesSearchComponent = __decorate([
        core_1.Component({
            selector: "sites-search",
            templateUrl: "./app/sites/search-sites/search-sites.component.html",
        }),
        __metadata("design:paramtypes", [sites_service_1.SitesService, router_1.Router])
    ], SitesSearchComponent);
    return SitesSearchComponent;
}());
exports.SitesSearchComponent = SitesSearchComponent;
//# sourceMappingURL=search-sites.component.js.map