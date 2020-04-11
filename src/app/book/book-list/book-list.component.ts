import { BookDataService } from './../services/book-data.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { Observable, of, EMPTY, NEVER } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]> = of([]);

  constructor(private bookDataService: BookDataService) {}

  ngOnInit(): void {
    this.books$ = this.bookDataService.getBooks().pipe(
      filter((books: Book[]) => books.length > 0),
      catchError((err) => {
        console.error(err);
        return of([]);
      })
    );
  }

  clickHandler(title: string) {
    console.log(title);
  }
}
