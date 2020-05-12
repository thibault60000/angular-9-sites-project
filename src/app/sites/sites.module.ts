import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Routes
import { SitesRoutingModule } from "./sites-routing.module";

// Composants
import { ListSitesComponent } from "./list-sites.component";
import { DetailsSiteComponent } from "./details-site.component";

// Directives
import { BorderCardDirective } from "./directives/border-card.directive";

// Pipes
import { SiteColorTypePipe } from "./pipes/site-color-type.pipe";

@NgModule({
  imports: [CommonModule, SitesRoutingModule],
  // CommonModule est comme BrowserModule mais ne lance pas l'application dans le navigateur, CommonModule suffit
  declarations: [
    ListSitesComponent,
    DetailsSiteComponent,
    BorderCardDirective,
    SiteColorTypePipe,
  ],
  providers: [],
})
export class SitesModule {}
