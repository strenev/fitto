import { Component, OnInit } from '@angular/core';
import { Activity, ActivitiesService } from '../services/activities.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab-activities',
  templateUrl: 'activities.component.html',
  styleUrls: ['activities.component.scss']
})

export class ActivitiesComponent implements OnInit {

  activities: Observable<Activity[]>;

  constructor(
    private activitiesService: ActivitiesService,
    private router: Router,
    private navCtrl: NavController,
    private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.activities = this.activitiesService.getActivities();
  }

  onSelect(activityId: any): void {
    this.router.navigateByUrl(this.router.url + '/' + activityId);
  }

}
