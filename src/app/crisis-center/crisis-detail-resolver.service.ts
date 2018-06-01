import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, take } from 'rxjs/operators';

import { Crisis, CrisisService } from './crisis.service';

@Injectable()
export class CrisisDetailResolver implements Resolve<Crisis> {
    constructor(private crisisService: CrisisService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> {
        let id = route.paramMap.get('id');

        return this.crisisService.getCrisis(id).pipe(
            take(1),
            map(crisis => {
                if(crisis) {
                    return crisis;
                } else {
                    this.router.navigate(['/crisis-center']);
                    return null;
                }
            })
        )
     }
}