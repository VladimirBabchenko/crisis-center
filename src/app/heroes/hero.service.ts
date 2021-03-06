import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

export class Hero {
    constructor(public id: number, public name: string) { }
}

const HEROES = [
    new Hero(11, 'Mr. Nice'),
    new Hero(12, 'Narco'),
    new Hero(13, 'Bombasto'),
    new Hero(14, 'Celeritas'),
    new Hero(15, 'Magneta'),
    new Hero(16, 'RubberMan')
]

@Injectable()
export class HeroService {

    constructor() { }

    getHeroes(): Observable<Hero[]> {
        return of(HEROES);
    }

    getHero(id: number | string): Observable<Hero> {
        return this.getHeroes().pipe(
            map(heroes => heroes.find(hero => hero.id === +id))
        )
    }
}