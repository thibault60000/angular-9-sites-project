import { Pipe, PipeTransform } from "@angular/core";

/*
 * Affiche la couleur correspondant au type de site
 * Exemple : {{ site.type | siteTypeColor }}
 */

@Pipe({ name: "siteTypeColor" })
export class SiteColorTypePipe implements PipeTransform {
  transform(type: string): string {
    let color: string;

    switch (type) {
      case "collaboratif":
        color = "red lighten-1";
        break;
      case "dessin":
        color = "blue lighten-1";
        break;
      case "scrum":
        color = "green lighten-1";
        break;
      case "javascript":
        color = "brown lighten-1";
        break;
      case "ux":
        color = "grey lighten-3";
        break;
      case "design":
        color = "blue lighten-3";
        break;
      case "code":
        color = "deep-purple accent-1";
        break;
      default:
        color = "grey";
        break;
    }

    return "chip " + color + " white-text";
  }
}
