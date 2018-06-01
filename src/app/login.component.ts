import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    message: string;

    constructor(public authService: AuthService, public router: Router) {
        this.setMessage();
     }

     setMessage() {
         this.message = 'Logged' + (this.authService.isLoggedIn ? 'in' : 'out');
     }

     login() {
         this.message = 'Trying to log in...';

         this.authService.login().
            subscribe(() => {
                this.setMessage();

                if (this.authService.isLoggedIn) {
                    let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/crisis-center/admin';

                    let navigationExtras: NavigationExtras = {
                        queryParamsHandling: 'preserve',
                        preserveFragment: true
                    }

                    this.router.navigate([redirect]);
                }
            });
     }

     logout() {
         this.authService.logout();
         this.setMessage();
     }
}