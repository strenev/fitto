import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Activity {
  id?: string;
  name: string;
}
 
@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private activitiesCollection: AngularFirestoreCollection<Activity>;
  private db: AngularFirestore;
  private activities: Observable<Activity[]>;
 
  constructor(db: AngularFirestore) {
    this.activitiesCollection = db.collection<Activity>('activities');
    this.db = db;
    this.activities = this.activitiesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

  }

  getActivities(){
    return this.activities;
  }

  getActivitybyId(id) {
    return this.activitiesCollection.doc<Activity>(id).valueChanges();
  }

  getActivitiesByType(type) {
    return this.db.collection<Activity>('activities', ref => ref.where('type', '==', type)).valueChanges();
  }

  updateActivity(activity: Activity, id: string) {
    return this.activitiesCollection.doc(id).update(activity);
  }

  addActivity(activity: Activity) {
    return this.activitiesCollection.add(activity);
  }

  removeActivitybyId(id) {
    return this.activitiesCollection.doc(id).delete();
  }

}