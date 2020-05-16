// System
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// HTTP
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

// Routing
import { AppRoutingModule } from "./app-routing.module";

// Composants
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found.component";

// Modules
// System
import { FormsModule } from "@angular/forms";

// Modules
import { SitesModule } from "./sites/sites.module";
import { LoginRoutingModule } from "./login-routing.module";

// Services
import { InMemoryDataService } from "./in-memory-data.service";
import { AuthService } from "./auth.service";

// Components
import { LoginComponent } from "./login.component";

@NgModule({
  // BrowserModule en 1er, et le AppRouting à la fin
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    SitesModule,
    LoginRoutingModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, PageNotFoundComponent, LoginComponent],
  bootstrap: [AppComponent],
  providers: [AuthService],
})
export class AppModule {}
