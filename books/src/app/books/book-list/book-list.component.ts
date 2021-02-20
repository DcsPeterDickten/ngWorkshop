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
      rating: 4.9
    },
    {
      isbn: '1234567891',
      title: 'Angular 12 rocks even more',
      price: 13.99,
      rating: 5.0
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
