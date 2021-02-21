import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookInterface } from './book-interface';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  private URL_BACKEND = 'http://localhost:3000';

  constructor(public http: HttpClient) { }

  getBooks(): Observable<BookInterface[]> {
    const URL = `${this.URL_BACKEND}/books`;
    console.log({ URL });
    return this.http.get<BookInterface[]>(URL);
  }
}
