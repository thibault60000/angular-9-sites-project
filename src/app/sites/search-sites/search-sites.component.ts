import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { Observable, Subject, of } from "rxjs";

import { SitesService } from "../services/sites.service";
import { Site } from "../objects/site";

@Component({
  selector: "sites-search",
  templateUrl: "./app/sites/search-sites/search-sites.component.html",
})
export class SitesSearchComponent implements OnInit {
  private searchTerms = new Subject<string>();
  sites$: Observable<Site[]>;

  constructor(private sitesServices: SitesService, private router: Router) {}

  // Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
  search(term: string): void {
    this.searchTerms.next(term);
    console.log("ok");
  }

  ngOnInit(): void {
    this.sites$ = this.searchTerms.pipe(
      // attendre 300ms de pause entre chaque requête
      debounceTime(300),
      // ignorer la recherche en cours si c'est la même que la précédente
      distinctUntilChanged(),
      // on retourne la liste des résultats correpsondant aux termes de la recherche
      switchMap((term: string) => this.sitesServices.searchSites(term))
    );
    console.log(this.sites$);
  }

  gotoDetails(site: Site): void {
    let link = ["/site", site.id];
    this.router.navigate(link);
  }
}
