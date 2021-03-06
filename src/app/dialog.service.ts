import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class DialogService {
    confirm(message?: string): Observable<boolean> {
        const confirmation = window.confirm(message || 'Is it OK');
        return of(confirmation);
    }
}