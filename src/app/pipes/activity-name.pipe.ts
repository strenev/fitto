import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "activityName"})
export class ActivityNamePipe implements PipeTransform{
  public transform(value: number): string {
    let activitiesMapping = ["Fitness", "Boxing", "Yoga", "Crossfit", "Zumba", "Pilates"];
    return activitiesMapping[value - 1];
  }
}