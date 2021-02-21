import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    RatingComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  exports: [RatingComponent]
})
export class SharedModule { }
