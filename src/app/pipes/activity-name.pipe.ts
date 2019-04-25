import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "activityName"})
export class ActivityNamePipe implements PipeTransform{
  public transform(value: number): string {
    let activitiesMapping = ["Фитнес", "Бокс", "Йога", "Кросфит", "Зумба", "Пилатес"];
    return activitiesMapping[value - 1];
  }
}