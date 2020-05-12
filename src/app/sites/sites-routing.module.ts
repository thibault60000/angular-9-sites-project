import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListSitesComponent } from "./list-sites.component";
import { DetailsSiteComponent } from "./details-site.component";

// les routes du module Pokémon
const sitesRoutes: Routes = [
  { path: "sites", component: ListSitesComponent },
  { path: "site/:id", component: DetailsSiteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(sitesRoutes)],
  exports: [RouterModule],
})
export class SitesRoutingModule {}
