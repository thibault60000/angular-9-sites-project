import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Site } from "./objects/site";
import { SITES } from "./mocks/mock-sites";

@Component({
  selector: "details-site",
  templateUrl: "./app/details-site.component.html",
})
export class DetailsSiteComponent implements OnInit {
  sites: Site[] = null;
  site: Site = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  // Initialisation
  ngOnInit(): void {
    this.sites = SITES;

    let id = +this.route.snapshot.paramMap.get("id");
    for (let i = 0; i < this.sites.length; i++) {
      if (this.sites[i].id == id) {
        this.site = this.sites[i];
      }
    }
  }

  // Retour
  goBack(): void {
    this.router.navigate(["/sites"]);
  }
}
