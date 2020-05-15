// System
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// HTTP
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

// Routing
import { AppRoutingModule } from "./app-routing.module";

// Composants
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found.component";

// Modules
import { SitesModule } from "./sites/sites.module";
import { InMemoryDataService } from "./in-memory-data.service";

@NgModule({
  // BrwoserModule en 1er, et le AppRouting à la fin
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    SitesModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, PageNotFoundComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
