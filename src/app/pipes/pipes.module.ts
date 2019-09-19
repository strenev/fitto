import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivityNamePipe } from './activity-name.pipe';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  declarations: [ActivityNamePipe, ReversePipe],
  exports: [ActivityNamePipe, ReversePipe]
})

export class PipesModule { }
