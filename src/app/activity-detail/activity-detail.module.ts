import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivityDetailComponent, ActivityNamePipe } from './activity-detail.component';
import { DisplayRatingComponent } from './display-rating-component/display-rating.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ActivityDetailComponent }])
  ],
  declarations: [ActivityDetailComponent, ActivityNamePipe, DisplayRatingComponent]
})
export class ActivityDetailModule {}
