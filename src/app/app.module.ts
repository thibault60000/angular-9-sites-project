// System
import { NgModule } from "@angular/core";
import { BrowserModule, Title } from "@angular/platform-browser";

// HTTP
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

// Routing
import { AppRoutingModule } from "./app-routing.module";

// Composants
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./pages/not-found/page-not-found.component";

// Modules
// System
import { FormsModule } from "@angular/forms";

// Modules
import { SitesModule } from "./pages/site/sites.module";
import { LoginRoutingModule } from "./pages/authentication/login-routing.module";

// Services
import { InMemoryDataService } from "./services/in-memory-data.service";
import { AuthService } from "./services/auth.service";

// Components
import { LoginComponent } from "./pages/authentication/login.component";

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
  providers: [AuthService, Title],
})
export class AppModule {}
