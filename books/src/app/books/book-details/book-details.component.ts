import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'books-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  public isbn: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.isbn = this.route.snapshot.paramMap.get("isbn")
  }

}
