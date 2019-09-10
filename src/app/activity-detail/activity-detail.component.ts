import { Component, OnInit, OnDestroy, Input, Pipe, PipeTransform } from '@angular/core';
import { Trainer, TrainersService } from '../services/trainers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-activity-detail',
  templateUrl: 'activity-detail.component.html',
  styleUrls: ['activity-detail.component.scss']
})
export class ActivityDetailComponent implements OnInit, OnDestroy {

  activityId: number;
  sub: any;
  trainers: Observable<Trainer[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private trainersService: TrainersService) {
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.activityId = +params['activityId'];
    });

    this.trainers = this.trainersService.getTrainersByActivity(this.activityId);

  }

  onSelect(trainerId: any): void {
    this.router.navigateByUrl(this.router.url + '/' + trainerId);
  }

  ngOnDestroy() { }

}
