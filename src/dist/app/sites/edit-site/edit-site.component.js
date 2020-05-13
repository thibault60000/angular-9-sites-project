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
// System
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// Services
var sites_service_1 = require("../services/sites.service");
var EditSiteComponent = /** @class */ (function () {
    function EditSiteComponent(route, sitesService) {
        this.route = route;
        this.sitesService = sitesService;
        this.site = null;
    }
    EditSiteComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params["id"];
        this.site = this.sitesService.getSite(id);
    };
    EditSiteComponent = __decorate([
        core_1.Component({
            selector: "edit-site",
            template: "\n    <h2 class=\"header center\">Editer {{ site?.name }}</h2>\n    <p class=\"center\">\n      <img *ngIf=\"site\" [src]=\"site.image\" />\n    </p>\n    <site-form [site]=\"site\"></site-form>\n  ",
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            sites_service_1.SitesService])
    ], EditSiteComponent);
    return EditSiteComponent;
}());
exports.EditSiteComponent = EditSiteComponent;
//# sourceMappingURL=edit-site.component.js.map