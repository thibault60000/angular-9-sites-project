import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";

// Services
import { SitesService } from "../services/sites.service";

// Objects
import { Site } from "../objects/site";

@Component({
  selector: "details-site",
  templateUrl: "./app/sites/details-site/details-site.component.html",
  styles: [".loader { position: }"],
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
    this.getSite(id);
  }

  // Supprimer site
  delete(site: Site): void {
    this.sitesService.deleteSite(site).subscribe((_) => this.goBack());
  }
  // Get Site avec son ID
  getSite(id: number): void {
    this.sitesService.getSite(id).subscribe((site) => (this.site = site));
  }

  // Retour page principale
  goBack(): void {
    this.router.navigate(["/site/all"]);
  }

  // Aller à l'édition d'un site
  goEdit(site: Site): void {
    let link = ["site/edit", site.id];
    this.router.navigate(link);
  }
}
