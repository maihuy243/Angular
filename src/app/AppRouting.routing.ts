import { LayoutPageComponent } from './Layout/LayoutPage/LayoutPage.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Page/Dashboard/Dashboard.component';
import { GroupOrdersComponent } from './Page/GroupOrders/GroupOrders.component';
import { LayoutErrorComponent } from './Layout/LayoutError/LayoutError.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'groups',
        component: GroupOrdersComponent,
      },
    ],
  },
  {
    path: '',
    component: LayoutErrorComponent,
    children: [
      {
        path: '**',
        component: DashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
