import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { NavController, ModalController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { AddCardComponent } from './add-card.component';
import { CardsService, Card } from '../services/cards.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user: any;
  public existingCard: Card;

  constructor(
    private authService: AuthenticationService,
    private navCtrl: NavController,
    private modalController: ModalController,
    private cardsService: CardsService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.cardsService.getCardByUser(this.user.uid).subscribe(res => {
          this.existingCard = res[0];
          console.log(res[0]);
        });
      }
    });
  }

  logout() {
    this.authService.logoutUser()
      .then(res => { })
      .catch(error => { })
      .finally(() => {
        this.navCtrl.navigateRoot('/login')
      })
  }

  async addCard() {
    const modal = await this.modalController.create({
      component: AddCardComponent,
      componentProps: { user: this.user }
    });
    return await modal.present();
  }

  maskCard(cardNumber: string) {
    return `**** **** **** ${cardNumber.substring(12, 16)}`;
  }

}
