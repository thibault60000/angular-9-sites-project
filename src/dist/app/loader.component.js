"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent = __decorate([
        core_1.Component({
            selector: "app-loader",
            template: " <div class=\"lds-hourglass\"></div> ",
            styles: [
                "\n      .lds-hourglass {\n        position: absolute;\n        top: 35vh;\n        left: 48%;\n        display: inline-block;\n        position: relative;\n        width: 80px;\n        height: 80px;\n      }\n      .lds-hourglass:after {\n        content: \" \";\n        display: block;\n        border-radius: 50%;\n        width: 0;\n        height: 0;\n        margin: 8px;\n        box-sizing: border-box;\n        border: 50px solid #08003c;\n        border-color: #08003c transparent #08003c transparent;\n        animation: lds-hourglass 1.2s infinite;\n      }\n      @keyframes lds-hourglass {\n        0% {\n          transform: rotate(0);\n          animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n        }\n        50% {\n          transform: rotate(900deg);\n          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n        }\n        100% {\n          transform: rotate(1800deg);\n        }\n      }\n    ",
            ],
        })
    ], LoaderComponent);
    return LoaderComponent;
}());
exports.LoaderComponent = LoaderComponent;
//# sourceMappingURL=loader.component.js.map