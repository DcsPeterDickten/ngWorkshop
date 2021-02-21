import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component';
import { BookFilterPipe } from './book-filter.pipe';
import { SharedModule } from '../shared/shared.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BookListComponent,
    BookFilterPipe,
    BookDetailsComponent,
  ],
  imports: [
    BrowserModule, FormsModule, SharedModule, RouterModule, HttpClientModule
  ],
  providers: [],
  exports: [BookListComponent, BookDetailsComponent]
})
export class BooksModule { }
