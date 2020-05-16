import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: `./app/app.component.html`,
  styleUrls: [`./app/app.component.css`]
})
export class AppComponent{
  constructor(private router: Router) {}

  goSitesList() {
    let link = ["site/all"];
    this.router.navigate(link);
  }
}
