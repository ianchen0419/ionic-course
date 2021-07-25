import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      if(!param.placeId){
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }

      this.place=this.placesService.getPlace(param.placeId);
    });

  }

  onBookPlace(){
    // this.router.navigateByUrl('/places/tabs/discover');
    this.navCtrl.navigateBack('/places/tabs/discover');
    // this.navCtrl.pop();
  }
}
