import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'books-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  @Input()
  stars: number;

  @Input()
  id: string;

  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();

  clickedOnRating() {
    this.notify.emit(this.id);
  }
}
