import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {


  validations_form: FormGroup;
  errorMessage: string;
  successMessage: string;
  loading: boolean;

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  tryRegister(value) {
    this.loading = true;
    this.authService.registerUser(value)
      .then(result => {
        this.errorMessage = '';
        this.successMessage = 'Your account has been created.';

        this.authService.loginUser(value)
          .then(res => {
            this.errorMessage = '';
            this.loading = false;
            this.navCtrl.navigateForward('/tabs/activities');
          }, err => {
            this.errorMessage = err.message;
            this.loading = false;
          });

      }, err => {
        this.errorMessage = err.message;
        this.successMessage = '';
        this.loading = false;
      });
  }

  goLoginPage() {
    this.navCtrl.navigateBack('/login');
  }

}
