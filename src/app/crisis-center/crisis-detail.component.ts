import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { slideInDownAnimation } from '../animations';
import { Crisis, CrisisService } from './crisis.service';
import { switchMap } from 'rxjs/operators';

@Component({
    templateUrl: './crisis-detail.component.html',
    styles: [
        'input {width: 20em}'
    ],
    animations: [
        slideInDownAnimation
    ]
})
export class CrisisDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    crisis$: Observable<Crisis>;
    editName: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private crisisService: CrisisService
    ) { }

    ngOnInit() {
        this.getCrisis();
    }

    cancel() {
        this.goToCrises();
    }

    getCrisis() {
        this.crisis$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                return this.crisisService.getCrisis(params.get('id'))
            })
        )
    }

    goToCrises() {
        this.router.navigate(['../', { foo: 'foo' }], { relativeTo: this.route });
    }
}