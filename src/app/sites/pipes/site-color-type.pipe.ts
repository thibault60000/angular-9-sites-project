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
        color = "red";
        break;
      case "dessin":
        color = "blue";
        break;
      case "scrum":
        color = "green";
        break;
      case "javascript":
        color = "brown";
        break;
      case "ux":
        color = "grey";
        break;
      case "design":
        color = "light-blue";
        break;
      case "code":
        color = "deep-purple";
        break;
      case "css":
        color = "yellow";
        break;
      default:
        color = "light-grey";
        break;
    }

    return "chip " + color;
  }
}
