import { BookFilterPipe } from "./book-filter.pipe";
import { BookInterface } from "./book-interface";

describe('BookFilterPipe', () => {

  let pipe: BookFilterPipe;


  const template: BookInterface = { title: '', isbn: '', price: 0, rating: 0 };

  const book1 = { ...template, title: 'Angular 11 rocks' };
  const book2 = { ...template, title: 'Angular 12 rocks even more' };
  const bookList = [book1, book2];

  beforeEach(() => {
    pipe = new BookFilterPipe();
  });

  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  it('should work with empty lists', () => {
    const result = pipe.transform([], 'xxx');
    expect(result).toEqual([]);
  });

  it('should work with null as list', () => {
    const result = pipe.transform(null, 'xxx');
    expect(result).toEqual([]);
  });

  it('should filter other multiple wrong entries', () => {
    const result = pipe.transform(bookList, 'xxx');
    expect(result).toEqual([]);
  });

  it('should filter one wrong entries', () => {
    const result = pipe.transform(bookList, '12');
    expect(result).toEqual([book2]);
  });

  it('should keep all correct  entries', () => {
    const result = pipe.transform(bookList, 'Angular');
    expect(result).toEqual(bookList);
  });

});
