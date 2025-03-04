import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  // Simulated secure login; in production, use secure HTTP requests.
  login(): Observable<boolean> {
    alert('arrive')
    this.isAuthenticatedSubject.next(true);
    return of(true);
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}