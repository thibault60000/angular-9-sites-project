import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: `./app/app.component.html`,
  styleUrls: [`./app/app.component.css`]
})
export class AppComponent{
  constructor(private router: Router, private titleService: Title) {}

  // Go To Site List
  goSitesList() {
    let link = ["site/all"];
    this.router.navigate(link);
  }

  ngOnInit() {
    this.titleService.setTitle("FUD");
  }


}
