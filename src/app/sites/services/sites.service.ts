import { Injectable } from "@angular/core";
import { Site } from "../objects/site";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class SitesService {
  // Constructeur
  constructor(private http: HttpClient) {}

  // Variables
  private url: string = "api/sites";

  // Méthode log
  private log(log: string) {
    console.info(log);
  }

  // Méthode HandleError
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} --- ERREUR --- ${error.message}`);

      return of(result as T); // Of transforme les données en Observable
    };
  }

  // Retourne tous les sites
  getSites(): Observable<Site[]> {
    return this.http.get<Site[]>(this.url).pipe(
      tap((_) => this.log("sites récupérés")),
      catchError(this.handleError("getSites", []))
    );
  }

  // Editer un site
  editSite(site: Site): Observable<Site> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };

    return this.http.put(this.url, site, httpOptions).pipe(
      tap((_) => this.log(`site édité avec ID=${site.id}`)),
      catchError(this.handleError<any>(`editSite, avec id=${site.id}`))
    );
  }

  // Retourne le site avec l'identifiant passé en paramètre
  getSite(id: number): Observable<Site> {
    const url = `${this.url}/${id}`;

    return this.http.get<Site>(url).pipe(
      tap((_) => this.log(`site récupéré avec ID=${id}`)),
      catchError(this.handleError<Site>(`getSite, avec id=${id}`))
    );
  }

  getSiteTypes(): string[] {
    return [
      "dessin",
      "collaboratif",
      "scrum",
      "css",
      "design",
      "tutoriel",
      "code",
      "framework",
    ];
  }
}
