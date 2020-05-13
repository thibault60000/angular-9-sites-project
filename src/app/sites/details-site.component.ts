import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";

// Services
import { SitesService } from "./services/sites.service";

// Objects
import { Site } from "./objects/site";

@Component({
  selector: "details-site",
  templateUrl: "./app/sites/details-site.component.html"
})
export class DetailsSiteComponent implements OnInit {
  site: Site = null;

  // Constructeur
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sitesService: SitesService
  ) {}

  // Initialisation
  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get("id");
    this.site = this.sitesService.getSite(id);
  }

  // Retour page principale
  goBack(): void {
    this.router.navigate(["/sites"]);
  }
}
