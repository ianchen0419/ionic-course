import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, LoadingController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoading = false;
  isLogin = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
  ) { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(IonContent) content: IonContent;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('f') myForm: NgForm;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('f', {read: ElementRef}) myFormEl: ElementRef;

  ngOnInit() {
    setTimeout(() => {
      const login = this.myForm.controls.email;
      login.setErrors({
        notUnique: true
      });
      login.markAsTouched();
      const formControlTop = this.myFormEl.nativeElement.querySelector('input').offsetTop;
      this.content.scrollToPoint(0, formControlTop, 300);
    }, 2000);
  }

  onLogin() {
    this.isLoading = true;
    this.authService.login();
    this.loadingCtrl.create({
      keyboardClose: true,
      // spinner: 'bubbles',
      message: 'Logging in...'
    }).then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        this.router.navigateByUrl('/places/tabs/discover');
        loadingEl.dismiss();
        this.isLoading = false;
      }, 1000);
    });
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }

    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);

    if(this.isLogin) {
      //send a request to login servers
    } else {
      //send a request to signup servers
    }
  }

  onSwitchAuthMode(){
    this.isLogin = !this.isLogin;
  }


}
