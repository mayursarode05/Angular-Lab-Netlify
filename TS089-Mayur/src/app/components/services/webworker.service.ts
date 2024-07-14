import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebWorkerService {
  private worker: Worker;

  constructor() {
    // Initialize the web worker
    this.worker = new Worker(new URL('./app.worker', import.meta.url));
  }

  runWebWorker(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      // Message handler for receiving messages from the web worker
      this.worker.onmessage = ({ data: message }) => {
        resolve(message);
      };

      // Error handler for web worker errors
      this.worker.onerror = (error) => {
        reject(error);
      };

      // Post message to the web worker
      this.worker.postMessage(data);
    });
  }
}
