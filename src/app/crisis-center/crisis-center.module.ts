import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterRouting } from './crisis-center.routing.module';
import { CrisisService } from './crisis.service';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';

@NgModule({
    declarations: [
        CrisisCenterComponent,
        CrisisListComponent,
        CrisisCenterHomeComponent,
        CrisisDetailComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        CrisisCenterRouting
    ],
    providers: [
        CrisisService
    ]
})
export class CrisisCenterModule { }