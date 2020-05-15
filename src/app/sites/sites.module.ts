// System
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// Routes
import { SitesRoutingModule } from "./sites-routing.module";

// Composants
import { ListSitesComponent } from "./list-sites/list-sites.component";
import { DetailsSiteComponent } from "./details-site/details-site.component";
import { EditSiteComponent } from "./edit-site/edit-site.component";
import { SitesSearchComponent } from "./search-sites/search-sites.component";

// Forms
import { SiteFormComponent } from "./site-form/site-form.component";

// Directives
import { BorderCardDirective } from "./directives/border-card.directive";

// Pipes
import { SiteColorTypePipe } from "./pipes/site-color-type.pipe";

// Services
import { SitesService } from "./services/sites.service";

@NgModule({
  imports: [CommonModule, FormsModule, SitesRoutingModule],
  // CommonModule est comme BrowserModule mais ne lance pas l'application dans le navigateur, CommonModule suffit
  declarations: [
    ListSitesComponent,
    DetailsSiteComponent,
    BorderCardDirective,
    SiteColorTypePipe,
    EditSiteComponent,
    SiteFormComponent,
    SitesSearchComponent,
  ],
  providers: [SitesService],
})
export class SitesModule {}
