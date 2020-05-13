import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SitesService } from "./services/sites.service";
import { Site } from "./objects/site";

@Component({
  selector: "site-form",
  templateUrl: "./app/sites/site-form.component.html",
  styleUrls: ["./app/sites/site-form.component.css"],
})
export class SiteFormComponent implements OnInit {
  // Propriété d'entrée
  @Input() site: Site;

  // Les types de site
  types: Array<string>;

  // Constructeur
  constructor(private sitesService: SitesService, private router: Router) {}

  // Initialisation de la propriété types
  ngOnInit() {
    this.types = this.sitesService.getSiteTypes();
  }

  // Détermine si le type passé en paramètres appartient ou non au site  en cours d'édition.
  hasType(type: string): boolean {
    let index = this.site.types.indexOf(type);
    if (index > -1) return true;
    return false;
  }

  // Méthode appelée lorsque l'utilisateur ajoute ou retire un type au pokémon en cours d'édition.
  selectType($event: any, type: string): void {
    let checked = $event.target.checked;
    if (checked) {
      this.site.types.push(type);
    } else {
      let index = this.site.types.indexOf(type);
      if (index > -1) {
        this.site.types.splice(index, 1);
      }
    }
  }

  // Valide le nombre de types pour chaque pokémon
  isTypesValid(type: string): boolean {
    if (this.site.types.length === 1 && this.hasType(type)) {
      return false;
    }
    if (this.site.types.length >= 3 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  // La méthode appelée lorsque le formulaire est soumis.
  onSubmit(): void {
    console.log("Submit form !");
    let link = ["/site", this.site.id];
    this.router.navigate(link);
  }
}
