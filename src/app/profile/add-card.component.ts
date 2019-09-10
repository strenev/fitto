import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { CardsService, Card } from '../services/cards.service';

@Component({
    selector: 'add-card',
    templateUrl: 'add-card.component.html',
    styleUrls: ['add-card.component.scss']
})
export class AddCardComponent implements OnInit, OnDestroy {

    @Input() user: any;

    public holderName: string;
    public cardNumber: string;
    public expirationDate: string;
    public cvv: string;
    public uid: string;

    constructor(
        private modalController: ModalController,
        private cardsService: CardsService,
        private toastController: ToastController) {
    }

    ngOnInit() {
    }

    public dismissModal() {
        this.modalController.dismiss();
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Adding card successful',
            duration: 2000,
            color: 'primary'
        });
        toast.present();
    }

    public confirmPayment() {
        const card: Card = {
            holderName: this.holderName,
            cardNumber: this.cardNumber,
            expirationDate: this.expirationDate,
            cvv: this.cvv,
            uid: this.user.uid
        };

        this.cardsService.addCard(card).then(() => {
            this.modalController.dismiss();
            this.presentToast();
        });

    }

    ngOnDestroy() { }

}
