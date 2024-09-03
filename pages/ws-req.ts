export default (ws, message) => {

  let counter = 0;

  function generateUniqueId() {
    const timestamp = Date.now(); // Current timestamp in milliseconds
    counter = (counter + 1) % 1000; // Simple counter that resets after 1000
    return `${timestamp}-${counter}`;
  }

  const pendingRequests = new Map();

  // Handle incoming messages from the server
  ws.onmessage = (event) => {
    const response = JSON.parse(event.data);
    const { id, result } = response;

    // Check if there's a pending request with this ID
    if (pendingRequests.has(id)) {
      const resolve = pendingRequests.get(id);
      pendingRequests.delete(id); // Remove the request from the map
      resolve(result); // Resolve the promise with the server's response
    }
  };

  // Function to send a message and wait for a response

  return new Promise((resolve, reject) => {
    const requestId = generateUniqueId(); // Generate a unique ID for this request
    message.id = requestId; // Attach the ID to the message

    // Store the resolve function to be called later
    pendingRequests.set(requestId, resolve);

    // Send the message to the server
    ws.send(JSON.stringify(message));

    // Optional: Set a timeout to reject the promise if no response is received
    setTimeout(() => {
      if (pendingRequests.has(requestId)) {
        pendingRequests.delete(requestId);
        reject(new Error('Request timed out'));
      }
    }, 5000); // 5-second timeout
  });
}