import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { ComposeMessageComponent } from './compose-message.component';

const appRoutes: Routes = [
    { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
    { path: '', redirectTo: '/heroes', pathMatch: "full" },
    { path: '**', component: NotFoundComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { enableTracing: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }