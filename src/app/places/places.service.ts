/* eslint-disable arrow-body-style */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New Your City.',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg',
      149.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A romattic place in Paris!',
      'https://live.staticflickr.com/614/31628747276_00dedc1560_b.jpg',
      189.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://i1.trekearth.com/photos/138102/dsc_0681.jpg',
      99.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
    ),
  ]);

  get places() {
    // eslint-disable-next-line no-underscore-dangle
    return this._places.asObservable();
  }

  constructor(private authService: AuthService) { }

  getPlace(id: string) {
    // eslint-disable-next-line no-underscore-dangle
    return this.places.pipe(
      take(1),
      map(places => {
        return {...places.find(p => p.id === id)};
      })
    );

  }

  addPlace(title: string, description: string, price: number, dateFrom:  Date, dateTo: Date) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      'https://i1.trekearth.com/photos/138102/dsc_0681.jpg',
      price,
      dateFrom,
      dateTo,
      this.authService.userId,
    );
    this.places.pipe(take(1)).subscribe(places => {
      this._places.next(places.concat(newPlace));
    });

  }
}
