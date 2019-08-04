import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthenticationService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.navCtrl.navigateRoot('/login')
      })
  }

}
