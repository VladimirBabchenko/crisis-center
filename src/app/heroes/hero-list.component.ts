import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Component, OnInit } from '@angular/core';

import { Hero, HeroService } from './hero.service';

@Component({
    templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {
    heroes$: Observable<Hero[]>;

    private selectedId: number;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.getHero();
    }

    getHero() {
        this.heroes$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                this.selectedId = +params.get('id');
                return this.heroService.getHeroes();
            })
        );
    }
}
