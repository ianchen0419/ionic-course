import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  place: Place;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      if(!param.placeId){
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }

      // this.place=this.placesService.places.find(p => p.id === param.placeId);
      this.place=this.placesService.getPlace(param.placeId);
    });
  }

}
