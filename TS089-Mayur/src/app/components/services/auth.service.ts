import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signup(name: string, email: string, password: string) {
    // Mocking backend interaction
    return of({ name, email }).pipe(delay(1000));
  }

  login(email: string, password: string) {
    // Mocking backend interaction
    return of({ email }).pipe(delay(1000));
  }
}
