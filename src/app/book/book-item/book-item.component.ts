import { Book } from './../models/book.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Output() sendTitle = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  send() {
    this.sendTitle.emit(this.book.title);
  }
}
