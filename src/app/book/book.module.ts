import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-item/book-item.component';
import { HttpClientModule } from '@angular/common/http';
import { BookRoutingModule } from './book-routing.module';

@NgModule({
  declarations: [BookListComponent, BookItemComponent],
  imports: [CommonModule, BookRoutingModule, HttpClientModule],
})
export class BookModule {}
