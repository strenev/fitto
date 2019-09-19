import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { ActivityDetailComponent } from '../activity-detail/activity-detail.component';
import { ActivitiesComponent } from '../activities/activities.component';
import { TrainerDetailComponent } from '../trainer-detail/trainer-detail.component';
import { OffersComponent } from '../offers/offers.component';
import { ProfileComponent } from '../profile/profile.component';
import { BookingsComponent } from '../bookings/bookings.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
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
        path: 'offers',
        component: OffersComponent,
        children: [
          {
            path: '',
            loadChildren: '../offers/offers.module#OffersModule'
          }
        ]
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
        path: 'bookings',
        component: BookingsComponent,
        children: [
          {
            path: '',
            loadChildren: '../bookings/bookings.module#BookingsModule'
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
