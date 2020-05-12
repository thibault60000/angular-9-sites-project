"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/*
 * Affiche la couleur correspondant au type de site
 * Exemple : {{ site.type | siteTypeColor }}
 */
var SiteColorTypePipe = /** @class */ (function () {
    function SiteColorTypePipe() {
    }
    SiteColorTypePipe.prototype.transform = function (type) {
        var color;
        switch (type) {
            case "collaboratif":
                color = "red lighten-1";
                break;
            case "dessin":
                color = "blue lighten-1";
                break;
            case "scrum":
                color = "green lighten-1";
                break;
            case "javascript":
                color = "brown lighten-1";
                break;
            case "ux":
                color = "grey lighten-3";
                break;
            case "design":
                color = "blue lighten-3";
                break;
            case "code":
                color = "deep-purple accent-1";
                break;
            default:
                color = "grey";
                break;
        }
        return "chip " + color + " white-text";
    };
    SiteColorTypePipe = __decorate([
        core_1.Pipe({ name: "siteTypeColor" })
    ], SiteColorTypePipe);
    return SiteColorTypePipe;
}());
exports.SiteColorTypePipe = SiteColorTypePipe;
//# sourceMappingURL=site-color-type.pipe.js.map