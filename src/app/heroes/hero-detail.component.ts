import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

import { slideInDownAnimation } from '../animations';

import { HeroService, Hero } from './hero.service';

@Component({
    templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    hero$: Observable<Hero>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private heroService: HeroService
    ) { }

    ngOnInit() {
        this.getHero();
    }

    getHero() {
        this.hero$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.heroService.getHero(params.get('id')))
        )
    }

    goToHeroes(hero: Hero) {
        let heroId = hero ? hero.id : null;
        this.router.navigate(['/heroes', { id: hero.id, foo: 'foo' }]);
    }
    // getHero() {
    //     let id = +this.route.snapshot.paramMap.get('id');
    //     return this.heroService.getHero(id).subscribe(hero => this.hero$ = hero)
    // }

}