import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Crisis, CrisisService } from './crisis.service';

import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

@Component({
    templateUrl: './crisis-list.component.html'
})
export class CrisisListComponent implements OnInit {
    crises$: Observable<Crisis[]>;

    constructor(
        private route: ActivatedRoute,
        private crisisService: CrisisService
    ) { }

    ngOnInit() {
        this.getCrises();
     }

    getCrises() {
        this.crises$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                return this.crisisService.getCrises()
            })
        )
    }
}