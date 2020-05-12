import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

// Composants
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found.component";

// Modules
import { SitesModule } from "./sites/sites.module";

// Directives

// Pipes

@NgModule({
  // BrwoserModule en 1er, et le AppRouting à la fin
  imports: [BrowserModule, SitesModule, AppRoutingModule],
  declarations: [AppComponent, PageNotFoundComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
