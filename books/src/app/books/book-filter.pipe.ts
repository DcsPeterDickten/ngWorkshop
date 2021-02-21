import { Pipe, PipeTransform } from '@angular/core';
import { BookInterface } from './book-interface';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(bookList: BookInterface[], filterText: string = ''): BookInterface[] {

    if (!bookList?.length) {
      return [];
    }

    const filter = filterText.toLocaleLowerCase();
    return bookList.filter((book) => (book.title || '').toLocaleLowerCase().indexOf(filter) >= 0);
  }

}
