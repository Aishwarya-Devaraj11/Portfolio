import { MyworksComponent } from './myworks/myworks.component';

import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { LayoutComponent } from './layout/layout.component';
import { OutputComponent } from './output/output.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:"", component:LayoutComponent},
    {path:"home", component:HomeComponent},
    {path:"details",component:DetailsComponent},
    {path:"output",component:OutputComponent},
    {path:"myworks",component:MyworksComponent},
    {path:"dashboard",component:DashboardComponent}
];
