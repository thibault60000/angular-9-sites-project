import { Component } from "@angular/core";

@Component({
  selector: "page-404",
  template: `
    <div class="center">
      <div>
        <img src="https://www.innoludic.com/images/bg_404.png" />
      </div>
      <div>
        <a routerLink="/sites" class="waves-effect waves-teal btn-flat">
          Retourner à l' accueil
        </a>
      </div>
    </div>
  `,
})
export class PageNotFoundComponent {}
