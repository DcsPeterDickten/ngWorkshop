import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'books-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books = [
    {
      isbn: '1234567890',
      title: 'Angular 11 rocks',
      price: 12.99,
      rating: 4.9,
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

  imageWidth = 50;
  imageIsVisible = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCover() {
    this.imageIsVisible = !this.imageIsVisible;
  }

}
