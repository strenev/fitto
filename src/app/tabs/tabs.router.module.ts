import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { ActivityDetailComponent } from '../activity-detail/activity-detail.component';
import { ActivitiesComponent } from '../activities/activities.component';
import { TrainerDetailComponent } from '../trainer-detail/trainer-detail.component';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // {
      //   path: 'home',
      //   component: HomeComponent,
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: '../home/home.module#HomeModule'
      //     }
      //   ]
      // },
      {
        path: 'activities',
        component: ActivitiesComponent,
        children: [
          {
            path: '',
            loadChildren: '../activities/activities.module#ActivitiesModule'
          }
        ]
      },
      {
        path: 'activities/:activityId',
        component: ActivityDetailComponent,
        children: [{
          path: '',
          loadChildren: '../activity-detail/activity-detail.module#ActivityDetailModule'
        }]
      },
      {
        path: 'activities/:activityId/:trainerId',
        component: TrainerDetailComponent,
        children: [{
          path: '',
          loadChildren: '../trainer-detail/trainer-detail.module#TrainerDetailModule'
        }]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfileModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/activities',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/activities',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
