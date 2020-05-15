import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { OnInit } from "@angular/core";

// Services
import { SitesService } from "../services/sites.service";

// Imports Relatifs
import { Site } from "../objects/site";

@Component({
  selector: "list-site",
  templateUrl: `./app/sites/list-sites/list-sites.component.html`,
  styleUrls: [`./app/sites/list-sites/list-sites.component.css`],
})
export class ListSitesComponent implements OnInit {
  // Variables
  sites: Site[] = null;

  // Constructeur
  constructor(private router: Router, private sitesService: SitesService) {}

  // Initialization
  ngOnInit() {
    this.getSites();
  }

  // Get Liste des Sites
  getSites(): void {
    this.sitesService.getSites().subscribe((sites) => (this.sites = sites));
  }
  // Select a Site to redirect
  selectSite(site: Site) {
    let link = ["/site", site.id];
    this.router.navigate(link);
  }
}
