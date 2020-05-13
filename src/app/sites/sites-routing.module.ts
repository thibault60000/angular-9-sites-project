// System
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Composants
import { ListSitesComponent } from "./list-sites/list-sites.component";
import { DetailsSiteComponent } from "./details-site/details-site.component";
import { EditSiteComponent } from "./edit-site/edit-site.component";

// les routes du module Pokémon
const sitesRoutes: Routes = [
  { path: "sites", component: ListSitesComponent },
  { path: "site/edit/:id", component: EditSiteComponent },
  { path: "site/:id", component: DetailsSiteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(sitesRoutes)],
  exports: [RouterModule],
})
export class SitesRoutingModule {}
