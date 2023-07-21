import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ThemeService {
  private isDarkTheme$ = new BehaviorSubject<boolean>(false);

  toggleTheme(): void {
    this.isDarkTheme$.next(!this.isDarkTheme$.value);
  }

  get theme(): Observable<boolean> {
    return this.isDarkTheme$.asObservable();
  }
}
