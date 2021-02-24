import { of } from "rxjs";
import { BookDataService } from "./book-data.service";
import { BookInterface } from "./book-interface";



describe('BookDataService', () => {

  const template: BookInterface = { title: '', isbn: '', price: 0, rating: 0 };
  const book1 = { ...template, title: 'Angular 11 rocks' };
  const book2 = { ...template, title: 'Angular 12 rocks even more' };
  const bookList = [book1, book2];

  let srv: BookDataService;
  let mockHttp: any;

  beforeAll(() => {

    mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    srv = new BookDataService(mockHttp);
  });

  it('should be created', () => {
    mockHttp.get.and.returnValue(of(book1));
  });
  
});
