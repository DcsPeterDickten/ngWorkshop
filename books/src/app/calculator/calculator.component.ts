import { Component } from '@angular/core';

@Component({
  selector: 'books-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  x = '';
  y = '';
  result = 0;

  // ---------------------------------------------

  add() {
    this.result = this.getX() + this.getY();
  }

  subtract() {
    this.result = this.getX() - this.getY();
  }

  clear() {
    this.x = '';
    this.y = '';
    this.result = 0;
  }

  // ---------------------------------------------

  private getX(): number {
    return this.getValue(this.x);
  }

  private getY(): number {
    return this.getValue(this.y);
  }

  private getValue(text: string): number {
    return parseInt(text, 10) || 0;
  }

}
