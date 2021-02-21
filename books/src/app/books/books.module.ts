import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component';
import { BookFilterPipe } from './book-filter.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BookListComponent,
    BookFilterPipe,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, SharedModule
  ],
  providers: [],
  exports: [BookListComponent]
})
export class BooksModule { }
