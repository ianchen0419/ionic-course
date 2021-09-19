import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New Your City.',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg',
      149.99,
      new Date('2019-01-01'),
      new Date('2019-12-31')
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A romattic place in Paris!',
      'https://live.staticflickr.com/614/31628747276_00dedc1560_b.jpg',
      189.99,
      new Date('2019-01-01'),
      new Date('2019-12-31')
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://i1.trekearth.com/photos/138102/dsc_0681.jpg',
      99.99,
      new Date('2019-01-01'),
      new Date('2019-12-31')
    ),
  ];

  get places() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string) {
    // eslint-disable-next-line no-underscore-dangle
    return {...this._places.find(p => p.id === id)};
  }
}
