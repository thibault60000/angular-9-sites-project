// System
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Composants
import { ListSitesComponent } from "./list-sites/list-sites.component";
import { DetailsSiteComponent } from "./details-site/details-site.component";
import { EditSiteComponent } from "./edit-site/edit-site.component";

// Guard
import { AuthGuard } from "../../services/auth-guard.service";

// les routes du module Pokémon
const sitesRoutes: Routes = [
  {
    path: "site",
    canActivate: [AuthGuard],
    children: [
      { path: "all", component: ListSitesComponent },
      {
        path: "edit/:id",
        component: EditSiteComponent,
        canActivate: [AuthGuard],
      },
      { path: ":id", component: DetailsSiteComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(sitesRoutes)],
  exports: [RouterModule],
})
export class SitesRoutingModule {}
