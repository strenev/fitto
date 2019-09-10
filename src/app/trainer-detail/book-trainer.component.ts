import { Component, OnInit, OnDestroy, Input, Pipe, PipeTransform } from '@angular/core';
import { Trainer, TrainersService } from '../services/trainers.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalController, ToastController } from '@ionic/angular';
import { BookingsService, Booking } from '../services/bookings.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'book-trainer',
    templateUrl: 'book-trainer.component.html',
    styleUrls: ['book-trainer.component.scss']
})
export class BookTrainerComponent implements OnInit, OnDestroy {

    @Input() trainer: Trainer;
    public bookingDate: Date;
    public bookingTime: Date;
    public bookingInfo: string;

    public userDetails: any;

    constructor(
        private modalController: ModalController,
        private bookingsService: BookingsService,
        private toastController: ToastController,
        private authService: AuthenticationService) {
    }

    ngOnInit() {
        this.userDetails = this.authService.userDetails();
    }

    public dismissModal() {
        this.modalController.dismiss();
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Booking successful',
            duration: 2000,
            color: 'primary'
        });
        toast.present();
    }

    public confirmBooking() {
        const booking: Booking = {
            bookingTime: this.bookingTime,
            bookingDate: this.bookingDate,
            bookingInfo: this.bookingInfo || '',
            trainerName: this.trainer.name,
            trainerImage: this.trainer.imageUrl,
            activity: this.trainer.activity,
            bookedBy: this.userDetails.uid,
            location: this.trainer.address,
            status: true
        };

        this.bookingsService.addBooking(booking).then(() => {
            this.modalController.dismiss();
            this.presentToast();
        });

    }

    ngOnDestroy() {

    }

}
