import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

// Composants
import { AppComponent } from "./app.component";
import { ListSitesComponent } from "./list-sites.component";
import { DetailsSiteComponent } from "./details-site.component";
import { PageNotFoundComponent } from "./page-not-found.component";
// Directives
import { BorderCardDirective } from "./directives/border-card.directive";

// Pipes
import { SiteColorTypePipe } from "./pipes/site-color-type.pipe";

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    AppComponent,
    BorderCardDirective,
    SiteColorTypePipe,
    ListSitesComponent,
    DetailsSiteComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
