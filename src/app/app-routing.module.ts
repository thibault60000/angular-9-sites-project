import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListSitesComponent } from "./list-sites.component";
import { DetailsSiteComponent } from "./details-site.component";
import { PageNotFoundComponent } from "./page-not-found.component";

// routes
const appRoutes: Routes = [
  { path: "sites", component: ListSitesComponent },
  { path: "site/:id", component: DetailsSiteComponent },
  { path: "", redirectTo: "sites", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
