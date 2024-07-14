import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
    // Initial state value
    private initialState = { key: 'value' };

    // Create a BehaviorSubject to hold the state
    private stateSubject = new BehaviorSubject<any>(this.initialState);
    
    // Create a Subject for multicasting
    private multicastSubject = new Subject<any>();
  
    // Expose the state as an observable
    state$ = this.stateSubject.asObservable();
    
    // Expose the multicast observable
    multicast$ = this.multicastSubject.asObservable();
  
    constructor() { }
  
    // Method to update the state
    updateState(newState: any) {
      this.stateSubject.next(newState);
    }
  
    // Method to emit a value to the multicast subject
    emitToMulticast(newValue: any) {
      this.multicastSubject.next(newValue);
    }
  
    // Method to emit an error
    emitError(error: any) {
      this.multicastSubject.error(error);
    }
  
    // Method to complete the subject
    completeMulticast() {
      this.multicastSubject.complete();
    }}
