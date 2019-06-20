import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisplayRatingComponent } from './display-rating.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: DisplayRatingComponent }])
  ],
  declarations: [DisplayRatingComponent],
  exports: [DisplayRatingComponent]
})
export class DisplayRatingModule {}