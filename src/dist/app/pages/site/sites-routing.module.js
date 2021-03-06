"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// System
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// Composants
var list_sites_component_1 = require("./list-sites/list-sites.component");
var details_site_component_1 = require("./details-site/details-site.component");
var edit_site_component_1 = require("./edit-site/edit-site.component");
// Guard
var auth_guard_service_1 = require("../../services/auth-guard.service");
// les routes du module Pokémon
var sitesRoutes = [
    {
        path: "site",
        canActivate: [auth_guard_service_1.AuthGuard],
        children: [
            { path: "all", component: list_sites_component_1.ListSitesComponent },
            {
                path: "edit/:id",
                component: edit_site_component_1.EditSiteComponent,
                canActivate: [auth_guard_service_1.AuthGuard],
            },
            { path: ":id", component: details_site_component_1.DetailsSiteComponent },
        ],
    },
];
var SitesRoutingModule = /** @class */ (function () {
    function SitesRoutingModule() {
    }
    SitesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(sitesRoutes)],
            exports: [router_1.RouterModule],
        })
    ], SitesRoutingModule);
    return SitesRoutingModule;
}());
exports.SitesRoutingModule = SitesRoutingModule;
//# sourceMappingURL=sites-routing.module.js.map