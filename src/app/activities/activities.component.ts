import { Component, OnInit } from '@angular/core';
import { Activity, ActivitiesService } from '../services/activities.service';
import { Router, ActivatedRoute } from '@angular/router';

export enum ActivityFilter {
  Sports = 0,
  Wellness = 1,
  Beauty = 2
}

@Component({
  selector: 'app-tab-activities',
  templateUrl: 'activities.component.html',
  styleUrls: ['activities.component.scss']
})

export class ActivitiesComponent implements OnInit {

  activities: Activity[];
  filteredActivities: Activity[];
  activityFilter: number = ActivityFilter.Sports;
  ActivityFilter = ActivityFilter;

  showSpinner: boolean = true;

  constructor(private activitiesService: ActivitiesService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.activitiesService.getActivitiesByType(this.activityFilter).subscribe(res => {
      this.activities = res;
      this.showSpinner = false;
    });
  }

  selectActivityByType(activityFilter: number) {
    this.activityFilter = activityFilter;
    this.showSpinner = true;
    this.activities = [];
    this.activitiesService.getActivitiesByType(this.activityFilter).subscribe(res => {
      this.activities = res;
      this.showSpinner = false;
    });
  }

  onSelect(activityId: any): void {
    this.router.navigateByUrl(this.router.url + '/' + activityId);
  }

}
