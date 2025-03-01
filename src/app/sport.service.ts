import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Sport = 'NFL' | 'NBA' | 'MLB';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  private sportSubject = new BehaviorSubject<Sport>('NFL');
  currentSport$ = this.sportSubject.asObservable();

  setSport(sport: Sport): void {
    this.sportSubject.next(sport);
  }

  get currentSport(): Sport {
    return this.sportSubject.value;
  }
}