import { Injectable } from '@angular/core';
import { BookInterface } from './book-interface';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  getBooks(): BookInterface[] {

    return [
      {
        isbn: '1234567890',
        title: 'Angular 11 rocks',
        price: 12.99,
        rating: 4.0,
        coverUrl: 'https://m.media-amazon.com/images/I/61+Qbwu03kL._AC_UL320_.jpg'
      },
      {
        isbn: '1234567891',
        title: 'Angular 12 rocks even more',
        price: 13.99,
        rating: 5.0,
        coverUrl: 'https://m.media-amazon.com/images/I/61H1nLnd7rL._AC_UL320_.jpg'
      }
    ];


  }
}
