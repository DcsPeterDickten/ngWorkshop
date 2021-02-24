import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './books/book-list/book-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BooksGuard } from './books/books.guard';

const routing: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'books/:isbn', component: BookDetailsComponent, canActivate: [BooksGuard] },
  { path: 'books', component: BookListComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    HttpClientModule,
    BooksModule,
    RouterModule.forRoot(routing, { enableTracing: false, initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
