import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Trainer, TrainersService } from '../services/trainers.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: 'trainer-detail.component.html',
  styleUrls: ['trainer-detail.component.scss']
})
export class TrainerDetailComponent implements OnInit, OnDestroy {

  trainerId: string;
  sub: any;
  trainer: Trainer;

  constructor(private route: ActivatedRoute, private trainersService: TrainersService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.trainerId = params['trainerId'];
    });
    this.trainersService.getTrainer(this.trainerId).subscribe(res => {
      this.trainer = res[0];
    });
  }

  ngOnDestroy() {

  }

}
