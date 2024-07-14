import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { AppStateService } from '../services/appstate.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-example',
  standalone:true,
  imports:[JsonPipe],
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css']
})
export class ExampleComponent implements OnInit {
  state: any;
  multicastState: any;
  subscriptions: Subscription[] = [];

  constructor(private appStateService: AppStateService) { }

  ngOnInit(): void {
    // Subscribe to the state changes
    const stateSubscription = this.appStateService.state$.subscribe(state => {
      this.state = state;
      console.log('State updated:', state);
    });

    // Subscribe to the multicast observable
    const multicastSubscription1 = this.appStateService.multicast$.subscribe(
      value => {
        this.multicastState = value;
        console.log('Multicast value (Observer 1):', value);
      },
      error => console.error('Multicast error (Observer 1):', error),
      () => console.log('Multicast completed (Observer 1)')
    );

    const multicastSubscription2 = this.appStateService.multicast$.subscribe(
      value => console.log('Multicast value (Observer 2):', value),
      error => console.error('Multicast error (Observer 2):', error),
      () => console.log('Multicast completed (Observer 2)')
    );

    this.subscriptions.push(stateSubscription, multicastSubscription1, multicastSubscription2);
  }

  // Method to update the state
  updateState() {
    const newState = { key: 'Welcome to the world of Anime, Enjoy your stay!' };
    this.appStateService.updateState(newState);
  }

  // Method to emit a value to the multicast subject
  emitToMulticast() {
    const multicastValue = { message: 'Hello from Multicast!' };
    this.appStateService.emitToMulticast(multicastValue);
  }

  // Method to emit an error to the multicast subject
  emitError() {
    this.appStateService.emitError('An error occurred in the multicast!');
  }

  // Method to complete the multicast subject
  completeMulticast() {
    this.appStateService.completeMulticast();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
