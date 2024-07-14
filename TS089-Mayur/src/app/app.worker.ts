// src/app.worker.ts

// Respond to message from parent thread
self.addEventListener('message', ({ data }) => {
    // Perform heavy computation or any task here
    const result = data + 1;
  
    // Post message back to the parent thread
    self.postMessage(result);
  });
  