import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';

import { HeroService } from './hero.service';
import { HeroesRoutingModule } from './heroes.routing.module';

@NgModule({
    declarations: [
        HeroListComponent,
        HeroDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HeroesRoutingModule
    ],
    providers: [
        HeroService
    ]
})
export class HeroesModule { }