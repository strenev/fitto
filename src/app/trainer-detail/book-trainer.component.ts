import { Component, OnInit, OnDestroy, Input, Pipe, PipeTransform } from '@angular/core';
import { Trainer, TrainersService } from '../services/trainers.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { BookingsService } from '../services/bookings.service';

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

    constructor(private modalController: ModalController, private bookingsService: BookingsService) {
    }

    ngOnInit() {
        console.log(this.trainer)
    }

    private dismissModal() {
        this.modalController.dismiss();
    }

    private confirmBooking() {
        const booking = {
            bookingTime: this.bookingTime,
            bookingDate: this.bookingDate,
            bookingInfo: this.bookingInfo,
            trainerId: this.trainer.id
        }

        this.bookingsService.addBooking(booking).then(() => {
            this.modalController.dismiss();
        })

        console.log(booking);
    }

    ngOnDestroy() {

    }

}