import { Component, OnInit } from '@angular/core';
import { Activity, ActivitiesService } from '../services/activities.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab-activities',
  templateUrl: 'activities.component.html',
  styleUrls: ['activities.component.scss']
})

export class ActivitiesComponent implements OnInit {

  activities: Activity[];
  filteredActivities: Activity[];
  showSpinner: boolean = true;

  constructor(private activitiesService: ActivitiesService,
    private router: Router) {
  }

  ngOnInit() {
    this.activitiesService.getActivities().subscribe(res => {
      this.activities = res;
      this.showSpinner = false;
    });
  }

  onSelect(activityId: any): void {
    this.router.navigateByUrl(this.router.url + '/' + activityId);
  }

}
