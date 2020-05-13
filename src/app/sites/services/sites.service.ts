import { Injectable } from "@angular/core";
import { Site } from "../objects/site";
import { SITES } from "../mocks/mock-sites";

@Injectable()
export class SitesService {
  // Retourne tous les sites
  getSites(): Site[] {
    return SITES;
  }

  // Retourne le site avec l'identifiant passé en paramètre
  getSite(id: number): Site {
    let sites = this.getSites();
    const site = sites.filter((s) => s.id === id);
    return site[0];
  }

  getSiteTypes(): string[] {
    return ["dessin", "collaboratif", "scrum", "css", "design", "tutoriel", "code", "framework"];
  }
}
