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
// Services
var sites_service_1 = require("../services/sites.service");
var DetailsSiteComponent = /** @class */ (function () {
    // Constructeur
    function DetailsSiteComponent(route, router, sitesService) {
        this.route = route;
        this.router = router;
        this.sitesService = sitesService;
        this.site = null;
    }
    // Initialisation
    DetailsSiteComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.paramMap.get("id");
        this.getSite(id);
    };
    // Get Site avec son ID
    DetailsSiteComponent.prototype.getSite = function (id) {
        var _this = this;
        this.sitesService.getSite(id).subscribe(function (site) { return _this.site = site; });
    };
    // Retour page principale
    DetailsSiteComponent.prototype.goBack = function () {
        this.router.navigate(["/sites"]);
    };
    // Aller à l'édition d'un site
    DetailsSiteComponent.prototype.goEdit = function (site) {
        var link = ["/site/edit", site.id];
        this.router.navigate(link);
    };
    DetailsSiteComponent = __decorate([
        core_1.Component({
            selector: "details-site",
            templateUrl: "./app/sites/details-site/details-site.component.html",
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            sites_service_1.SitesService])
    ], DetailsSiteComponent);
    return DetailsSiteComponent;
}());
exports.DetailsSiteComponent = DetailsSiteComponent;
//# sourceMappingURL=details-site.component.js.map