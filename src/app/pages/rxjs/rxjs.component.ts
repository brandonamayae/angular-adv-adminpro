import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, filter, interval, map, retry, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {
  intervalSubs: Subscription;

  constructor() {
    // this.retornaObservable().pipe(
    //   retry(2)
    // ).subscribe(
    //   valor => console.log('Subs:', valor),
    //   (err) => console.warn('Error', err),
    //   () => console.info('Completo')
    // );
    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }

  retornaIntervalo(): Observable<number> {
    return interval(100).pipe(
      map(valor => valor + 1),
      filter(valor => (valor % 2 === 0) ? true : false),
      // take(10)
    );
  }

  retornaObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>(observer => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i llego el valor de 2');
        }
      }, 1000)
    });
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }
}
