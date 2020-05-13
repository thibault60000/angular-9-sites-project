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
var common_1 = require("@angular/common");
// Routes
var sites_routing_module_1 = require("./sites-routing.module");
// Composants
var list_sites_component_1 = require("./list-sites.component");
var details_site_component_1 = require("./details-site.component");
// Directives
var border_card_directive_1 = require("./directives/border-card.directive");
// Pipes
var site_color_type_pipe_1 = require("./pipes/site-color-type.pipe");
// Services
var sites_service_1 = require("./services/sites.service");
var SitesModule = /** @class */ (function () {
    function SitesModule() {
    }
    SitesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, sites_routing_module_1.SitesRoutingModule],
            // CommonModule est comme BrowserModule mais ne lance pas l'application dans le navigateur, CommonModule suffit
            declarations: [
                list_sites_component_1.ListSitesComponent,
                details_site_component_1.DetailsSiteComponent,
                border_card_directive_1.BorderCardDirective,
                site_color_type_pipe_1.SiteColorTypePipe,
            ],
            providers: [sites_service_1.SitesService],
        })
    ], SitesModule);
    return SitesModule;
}());
exports.SitesModule = SitesModule;
//# sourceMappingURL=sites.module.js.map