import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { OnInit } from "@angular/core";

// Imports Relatifs
import { Site } from "./objects/site";
import { SITES } from "./mocks/mock-sites";

@Component({
  selector: "list-site",
  templateUrl: `./app/list-sites.component.html`,
  styleUrls: [`./app/list-sites.component.css`],
})
export class ListSitesComponent implements OnInit {
  // Variables
  sites: Site[] = null;

  constructor(private router: Router) {}

  // Initialization
  ngOnInit() {
    this.sites = SITES;
  }

  // Select a Site to redirect
  selectSite(site: Site) {
    let link = ["/site", site.id];
    this.router.navigate(link);
  }
}
