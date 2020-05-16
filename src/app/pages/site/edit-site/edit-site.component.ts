// System
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

// Objects
import { Site } from "../../../objects/site";

// Services
import { SitesService } from "../../../services/sites.service";

@Component({
  selector: "edit-site",
  template: `
    <h2 class="header center">Editer {{ site?.name }}</h2>
    <p class="center">
      <img *ngIf="site" [src]="site.image" />
    </p>
    <site-form [site]="site"></site-form>
  `,
})
export class EditSiteComponent implements OnInit {
  site: Site = null;

  constructor(
    private route: ActivatedRoute,
    private sitesService: SitesService
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.getSite(id);
  }

  // Get Site avec son ID
  getSite(id: number): void {
    this.sitesService.getSite(id).subscribe(site => this.site = site);
  }
}
