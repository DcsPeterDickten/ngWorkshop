import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { BookInterface } from '../book-interface';

@Component({
  selector: 'books-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnChanges, OnDestroy {

  books: BookInterface[] = [];
  filterText = '';
  imageWidth = 50;
  imageIsVisible = true;

  constructor(private bookDataservice: BookDataService) {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.books = this.bookDataservice.getBooks();
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
