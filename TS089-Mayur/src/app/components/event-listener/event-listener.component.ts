import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { catchError, filter, fromEvent, mergeMap, of, retry, switchMap, tap } from 'rxjs';
import { debounceTime,map } from 'rxjs';

@Component({
  selector: 'app-event-listener',
  standalone: true,
  imports: [],
  templateUrl: './event-listener.component.html',
  styleUrl: './event-listener.component.css'
})
export class EventListenerComponent {

  @ViewChild('clickButton', { static: true }) clickButton!: ElementRef;
  @ViewChild('inputField', { static: true }) inputField!: ElementRef;
  
  constructor() {}

  ngAfterViewInit() {
    // Observable from button click events
    const buttonClick$ = fromEvent(this.clickButton.nativeElement, 'click').pipe(
      tap(event => console.log('Button clicked:', event)), // Log the click event
      map(() => Math.random()), // Transform the event to a random number
      filter(randomNumber => randomNumber > 0.5) // Only pass numbers greater than 0.5
    );

    // Subscribe to the button click observable
    buttonClick$.subscribe({
      next: value => console.log('Random number > 0.5:', value),
      error: err => console.error('Error:', err),
      complete: () => console.log('Completed')
    });

    // Observable from input field events
    const inputEvent$ = fromEvent(this.inputField.nativeElement, 'input').pipe(
      map((event: any) => event.target.value),
      filter(value => value.length > 3), // Only pass values with length greater than 3
      debounceTime(300), // Debounce input events by 300ms
      tap(value => console.log('Input value (debounced):', value)),
      mergeMap(value => this.mockApiCall(value)), // Perform a mock API call
      retry(2), // Retry up to 2 times on error
      catchError(err => {
        console.error('Caught error:', err);
        return of(`Error: ${err.message}`); // Return an observable with an error message
      })
    );

    // Subscribe to the input field observable
    inputEvent$.subscribe({
      next: value => console.log('Final value:', value),
      error: err => console.error('Error:', err),
      complete: () => console.log('Completed')
    });
  }

  // Mock API call method
  mockApiCall(value: string) {
    return of(`Processed value: ${value}`).pipe(
      switchMap(processedValue => {
        if (Math.random() > 0.7) {
          throw new Error('Random API error');
        }
        return of(processedValue);
      })
    );
  }
}
