# Notizen

@MartinaKraus11

## Templates:

- innerhalb `{{ }}` kann JavaScript stehen :)

## Module:

- imports: Module, Libraries und so; declarations: nur die Components
- exports: Komponenten, die aus dem Modul exportiert werden sollen

## Komponenten

Komponenten-Klassen haben einen @Component decorator

## Hilfreiche Links:

- angular-checklist.io
- angular.io/guide/cheatsheet

## Neue Komponente erstellen:

ng generate component -> Abkürzung: ng g c modul/komponente

## Gute Best Practice:

für jedes Feature ein Modul erstellen
ng generate module -> ng g m

Dran denken, dass die Komponenten, die in anderen Modulen wiederverwendet werden sollen zu exportieren

## Angular display pipes sind cool:

```html
<pre>{{ books | json }}</pre>

{{ datum | date: format: "yyyy-MM" }} {{ book | uppercase }}
```

\*ngFor und \*ngIf sind structure Direktiven, structure directive haben \* als prefix

Events: runde Klammern. Event übergeben mit \$event, z.B.

```html
<button (click)="clickHandler($event)">Click Me</button>
```

Beim importieren von EventEmitter aufpassen, dass man den von @angular/core importiert (VSCode nimmt gerne mal den von protractor)

## Services und Dependency Injection

- Services haben einen @Injectable Decorator
- Services in Angular sind immer Singletons
- Angular kann Dependency Injection von sich aus.
- constructor(private myService: MyService) <- myService wird in die Komponente injected

## Observables

- Observables sind das geilste auf der Welt
- Observables sind Streams, auf die man sich subscriben kann
- Observables sind bidirektional
- Subscriptions bleiben ewig bestehen, es sei denn man zerstört sie wieder
- ngOnDestroy: this.subscription.unsubscribe() to the rescue

- viel cooler: die async pipe, {{ books$ | async | json }}
- das Coole an der async Pipe: sie macht das unsubscribe von selbst :-)
- async pipe funzt auch in ngFor: \*ngFor="let book of (books\$ | async)"
- aliasse verwenden um das gepipete async book wiederzuverwenden:
  \*ngIf="books\$ | async as books" , dann

## LifeCycle-Methoden

- am besten nie Code im Constructor schreiben, stattdessen LifeCycle-Methoden verwenden
- ngOnInit
- ngOnDestroy
- AfterContentChecked, AfterContentInit, AfterViewChecked, ...

## Observable-Pipes

```js
this.books$ = this.bookDataService.getBooks().pipe(
  filter((books: Book[]) => books.length > 0),
  catchError((err) => {
    console.error(err);
    return of([]);
  })
);
```

catchError: als Returnwert muss trotzdem dann Observable<Book[]>

- EMPTY: gibt ein leeres void zurück, Subscription wird geschlossen
- NEVER: gibt nichts zurück (tut so als wär nix passiert)
- of([]) gibt ein leeres Array zurück

## Routing

- Lazy-Loading

```
{
    path: 'books',
    loadChildren: () => import('./book/book.module').then((m) => m.BookModule),
}
```

- es gibt nur ein einziges RouterModule.forRoot
- immer von der spezifischsten zur unspezifischsten Route :)
