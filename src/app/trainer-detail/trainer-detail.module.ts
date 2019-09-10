import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrainerDetailComponent } from './trainer-detail.component';
import { PipesModule } from '../pipes/pipes.module';
import { ActivityDetailModule } from '../activity-detail/activity-detail.module';
import { DisplayRatingModule } from '../activity-detail/display-rating-component/display-rating.module';
import { BookTrainerComponent } from './book-trainer.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TrainerDetailComponent }]),
    PipesModule,
    ActivityDetailModule,
    DisplayRatingModule
  ],
  declarations: [TrainerDetailComponent, BookTrainerComponent],
  entryComponents: [BookTrainerComponent]
})

export class TrainerDetailModule { }
