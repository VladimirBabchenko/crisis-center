import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs/observable/of';
import { tap, delay } from 'rxjs/operators';

@Injectable()
export class AuthService {
    isLoggedIn = false;
    redirectUrl: string;

    login(): Observable<boolean> {
        return of(true).pipe(
            delay(1000),
            tap(val => this.isLoggedIn = true)
        )
    }

    logout() {
        this.isLoggedIn = false;
    }
}