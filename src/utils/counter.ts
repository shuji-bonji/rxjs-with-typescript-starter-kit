import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class Counter {
  private count$ = new BehaviorSubject<number>(0);

  increment(): void {
    this.count$.next(this.count$.value + 1);
  }

  decrement(): void {
    this.count$.next(this.count$.value - 1);
  }

  reset(): void {
    this.count$.next(0);
  }

  getCount(): Observable<number> {
    return this.count$.asObservable();
  }

  getDoubleCount(): Observable<number> {
    return this.count$.pipe(
      map(count => count * 2)
    );
  }
}