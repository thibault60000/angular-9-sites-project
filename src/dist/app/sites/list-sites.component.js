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
var sites_service_1 = require("./services/sites.service");
var ListSitesComponent = /** @class */ (function () {
    // Constructeur
    function ListSitesComponent(router, sitesService) {
        this.router = router;
        this.sitesService = sitesService;
        // Variables
        this.sites = null;
    }
    // Initialization
    ListSitesComponent.prototype.ngOnInit = function () {
        this.sites = this.sitesService.getSites();
    };
    // Select a Site to redirect
    ListSitesComponent.prototype.selectSite = function (site) {
        var link = ["/site", site.id];
        this.router.navigate(link);
    };
    ListSitesComponent = __decorate([
        core_1.Component({
            selector: "list-site",
            templateUrl: "./app/sites/list-sites.component.html",
            styleUrls: ["./app/sites/list-sites.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, sites_service_1.SitesService])
    ], ListSitesComponent);
    return ListSitesComponent;
}());
exports.ListSitesComponent = ListSitesComponent;
//# sourceMappingURL=list-sites.component.js.map