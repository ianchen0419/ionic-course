import { Injectable } from '@angular/core';
import { Place } from '../places/place.model';
import { Booking } from './booking.module';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private _bookings: Booking[] = [
    {
      id: 'xyz',
      placeId: 'p1',
      placeTitle: 'Manhattan Mansion',
      guestNumber: 2,
      userId: 'abc',
    }
  ];

  get bookings() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._bookings];
  }
}
