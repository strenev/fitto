import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { CardsService, Card } from '../services/cards.service';
import { Booking, BookingsService } from '../services/bookings.service';

@Component({
    selector: 'booking-detail',
    templateUrl: 'booking-detail.component.html',
    styleUrls: ['booking-detail.component.scss']
})
export class BookingDetailComponent implements OnInit, OnDestroy {

    @Input() booking: Booking;

    constructor(
        private modalController: ModalController,
        private bookingsService: BookingsService,
        private toastController: ToastController) {
    }

    ngOnInit() { }

    public dismissModal() {
        this.modalController.dismiss();
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Booking canceled',
            duration: 2000,
            color: 'primary'
        });
        toast.present();
    }

    public cancelBooking(booking: Booking) {
        const updatedBooking = booking;
        updatedBooking.status = false;
        this.bookingsService.updateBooking(updatedBooking, booking.id).then(() => {
            this.modalController.dismiss();
            this.presentToast();
        });
    }

    ngOnDestroy() { }

}
