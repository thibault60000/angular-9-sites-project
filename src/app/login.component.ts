import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  selector: "login",
  template: `
    <!-- Login Page -->
    <div class="login-page">
      <div class="card-content">
        <span class="card-title">Page de connexion</span>
        <p>
          <em>{{ message }}</em>
        </p>
      </div>
      <!-- Formulaire -->
      <form #loginForm="ngForm">
        <!-- Name -->
        <div>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            [(ngModel)]="name"
            name="name"
            required
          />
        </div>
        <!-- Password -->
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            [(ngModel)]="password"
            name="password"
            required
          />
        </div>
      </form>
      <!-- end form -->

      <!-- Action buttons  -->
      <div class="card-action center">
        <a (click)="login()" class="login-btn" *ngIf="!authService.isLoggedIn"
          >Se connecter</a
        >
        <a class="logout-btn" (click)="logout()" *ngIf="authService.isLoggedIn"
          >Se déconnecter</a
        >
      </div>
    </div>
  `,
})
export class LoginComponent {
  message: string = "Vous êtes déconnecté. (admin/admin)";
  private name: string;
  private password: string;

  constructor(private authService: AuthService, private router: Router) {}

  // Informe l'utilisateur sur son authentfication.
  setMessage() {
    this.message = this.authService.isLoggedIn
      ? "Vous êtes connecté."
      : "Identifiant ou mot de passe incorrect.";
  }

  // Connecte l'utilisateur auprès du Guard
  login() {
    this.message = "Tentative de connexion en cours ...";
    this.authService.login(this.name, this.password).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Récupère l'URL de redirection depuis le service d'authentification
        // Si aucune redirection n'a été définis, redirige l'utilisateur vers la liste des pokemons.
        let redirect = this.authService.redirectUrl
          ? this.authService.redirectUrl
          : "/site/all";
        // Redirige l'utilisateur
        this.router.navigate([redirect]);
      } else {
        this.password = "";
      }
    });
  }

  // Déconnecte l'utilisateur
  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
