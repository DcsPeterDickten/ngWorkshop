import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BookInterface } from '../book-interface';

@Component({
  selector: 'books-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnChanges, OnDestroy {

  books: BookInterface[] = [
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
  filterText = '';
  imageWidth = 50;
  imageIsVisible = true;

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  toggleCover() {
    this.imageIsVisible = !this.imageIsVisible;
  }

  userHasRated(event) {
    console.log({ event });
    const currentBook = this.books.find((book) => book.isbn === event);
    currentBook.rating = Math.min(5, this.round(currentBook.rating + 0.1));
  }

  round(v: number): number {
    return Math.floor(v * 100 + 0.5) / 100;
  }
}
