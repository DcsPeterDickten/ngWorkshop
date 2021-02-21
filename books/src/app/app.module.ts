import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { BooksModule } from './books/books.module';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, BooksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
