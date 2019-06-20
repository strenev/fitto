import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivityDetailComponent } from './activity-detail.component';
import { PipesModule } from '../pipes/pipes.module';
import { DisplayRatingModule } from './display-rating-component/display-rating.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ActivityDetailComponent }]),
    PipesModule,
    DisplayRatingModule
  ],
  declarations: [ActivityDetailComponent]
})
export class ActivityDetailModule {}
