"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("./auth.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.message = "Vous êtes déconnecté. (admin/admin)";
    }
    // Informe l'utilisateur sur son authentfication.
    LoginComponent.prototype.setMessage = function () {
        this.message = this.authService.isLoggedIn
            ? "Vous êtes connecté."
            : "Identifiant ou mot de passe incorrect.";
    };
    // Connecte l'utilisateur auprès du Guard
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.message = "Tentative de connexion en cours ...";
        this.authService.login(this.name, this.password).subscribe(function () {
            _this.setMessage();
            if (_this.authService.isLoggedIn) {
                // Récupère l'URL de redirection depuis le service d'authentification
                // Si aucune redirection n'a été définis, redirige l'utilisateur vers la liste des pokemons.
                var redirect = _this.authService.redirectUrl
                    ? _this.authService.redirectUrl
                    : "/site/all";
                // Redirige l'utilisateur
                _this.router.navigate([redirect]);
            }
            else {
                _this.password = "";
            }
        });
    };
    // Déconnecte l'utilisateur
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        this.setMessage();
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            template: "\n    <!-- Login Page -->\n    <div class=\"login-page\">\n      <div class=\"card-content\">\n        <span class=\"card-title\">Page de connexion</span>\n        <p>\n          <em>{{ message }}</em>\n        </p>\n      </div>\n      <!-- Formulaire -->\n      <form #loginForm=\"ngForm\">\n        <!-- Name -->\n        <div>\n          <label for=\"name\">Name</label>\n          <input\n            type=\"text\"\n            id=\"name\"\n            [(ngModel)]=\"name\"\n            name=\"name\"\n            required\n          />\n        </div>\n        <!-- Password -->\n        <div>\n          <label for=\"password\">Password</label>\n          <input\n            type=\"password\"\n            id=\"password\"\n            [(ngModel)]=\"password\"\n            name=\"password\"\n            required\n          />\n        </div>\n      </form>\n      <!-- end form -->\n\n      <!-- Action buttons  -->\n      <div class=\"card-action center\">\n        <a (click)=\"login()\" class=\"login-btn\" *ngIf=\"!authService.isLoggedIn\"\n          >Se connecter</a\n        >\n        <a class=\"logout-btn\" (click)=\"logout()\" *ngIf=\"authService.isLoggedIn\"\n          >Se d\u00E9connecter</a\n        >\n      </div>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map