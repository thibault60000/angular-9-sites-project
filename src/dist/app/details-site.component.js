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
var mock_sites_1 = require("./mocks/mock-sites");
var DetailsSiteComponent = /** @class */ (function () {
    function DetailsSiteComponent(route, router) {
        this.route = route;
        this.router = router;
        this.sites = null;
        this.site = null;
    }
    // Initialisation
    DetailsSiteComponent.prototype.ngOnInit = function () {
        this.sites = mock_sites_1.SITES;
        var id = +this.route.snapshot.paramMap.get("id");
        for (var i = 0; i < this.sites.length; i++) {
            if (this.sites[i].id == id) {
                this.site = this.sites[i];
            }
        }
    };
    // Retour
    DetailsSiteComponent.prototype.goBack = function () {
        this.router.navigate(["/site/all"]);
    };
    DetailsSiteComponent = __decorate([
        core_1.Component({
            selector: "details-site",
            templateUrl: "./app/details-site.component.html",
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
    ], DetailsSiteComponent);
    return DetailsSiteComponent;
}());
exports.DetailsSiteComponent = DetailsSiteComponent;
//# sourceMappingURL=details-site.component.js.map