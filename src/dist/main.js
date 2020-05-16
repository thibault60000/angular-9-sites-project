"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// System
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
// Modules
var app_module_1 = require("./app/app.module");
// Production Mode
var core_1 = require("@angular/core");
// Activer le mode production uniquement si on n'est pas en dev local
if (!/localhost/.test(document.location.host)) {
    core_1.enableProdMode();
}
// Navigateur web => On peut utilise Electron ou Ionic par exemple
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map