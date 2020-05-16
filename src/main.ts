// System
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// Modules
import { AppModule } from "./app/app.module";

// Production Mode
import { enableProdMode } from "@angular/core";

// Activer le mode production uniquement si on n'est pas en dev local
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

// Navigateur web => On peut utilise Electron ou Ionic par exemple
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));

  