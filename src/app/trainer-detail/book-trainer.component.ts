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
    public currentDate: Date;
    public minDate: string;
    public maxDate: string;

    constructor(
        private modalController: ModalController,
        private bookingsService: BookingsService,
        private toastController: ToastController,
        private authService: AuthenticationService) {
    }

    ngOnInit() {
        this.userDetails = this.authService.userDetails();
        this.currentDate = new Date();
        this.minDate = this.generateMinDate(this.currentDate);
        this.maxDate = this.generateMaxDate(this.currentDate);
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

    public generateMinDate(currentDate: Date): string {
        if (currentDate.getMonth() < 10) {
            return `${currentDate.getFullYear()}-0${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
        } else {
            return `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
        }
    }

    public generateMaxDate(currentDate: Date): string {
        if ((currentDate.getMonth() + 1) < 9) {
            return `${currentDate.getFullYear()}-0${currentDate.getMonth() + 2}-${currentDate.getDate()}`;
        } else {
            return `${currentDate.getFullYear()}-${currentDate.getMonth() + 2}-${currentDate.getDate()}`;
        }
    }

    ngOnDestroy() {

    }

}
