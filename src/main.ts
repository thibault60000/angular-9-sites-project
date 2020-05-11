import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

// Navigator web => We can use Electron or Ionic
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
