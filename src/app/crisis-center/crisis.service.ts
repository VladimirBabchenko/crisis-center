import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export class Crisis {
    constructor(public id: number, public name: string) { }
}

const Crises = [
    new Crisis(1, 'Dragon Burning Cities'),
    new Crisis(2, 'Sky Rains Great White Sharks'),
    new Crisis(3, 'Giant Asteroid Heading For Earth'),
    new Crisis(4, 'Procrastinators Meeting Delayed Again'),
]

import { Injectable } from '@angular/core';

@Injectable()
export class CrisisService {
    private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(Crises);

    getCrises() {
        return this.crises$;
    }

    getCrisis(id: number | string): Observable<Crisis> {
        return this.getCrises().pipe(
            map(crises => crises.find(crisis => crisis.id === +id))
        )
    }
}