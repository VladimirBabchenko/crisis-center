import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminComponent } from './admin.component';
import { ManageCrisesComponent } from './manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes.component';

import { AuthGuard } from '../auth-guard.service';

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                children: [
                    { path: 'crises', component: ManageCrisesComponent },
                    { path: 'heroes', component: ManageHeroesComponent },
                    { path: '', component: AdminDashboardComponent }
                ]
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AdminRoutingModule { }