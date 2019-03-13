import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ActivitiesModule } from '../activities/activities.module';
import { ActivityDetailModule } from '../activity-detail/activity-detail.module';
import { TrainerDetailModule } from '../trainer-detail/trainer-detail.module';
import { HomeModule } from '../home/home.module';
import { ProfileModule } from '../profile/profile.module';
import { FavouritesModule } from '../favourites/favourites.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    ActivitiesModule,
    ActivityDetailModule,
    TrainerDetailModule,
    HomeModule,
    ProfileModule,
    FavouritesModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
