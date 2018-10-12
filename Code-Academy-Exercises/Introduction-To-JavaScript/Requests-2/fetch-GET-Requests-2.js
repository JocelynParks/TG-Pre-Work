// Chain a .then() method to the end of the fetch() function and pass it the success callback arrow function as its first argument. The success callback function takes one parameter, response
//Inside of the response callback function, check the ok property of response inside of a conditional statement. In the code block of the conditional statement, return response.json()
fetch('https://api-to-call.com/endpoint').then(response => {
  if (response.ok) {
    return response.json();
  }
  // create a new error
  throw new Error('Request failed!');
  // Add a second argument to .then(), it will be an arrow function that will handle our failures
}, networkError => {
  console.log(networkError.message);
  // Pass the new .then() method a callback function that takes jsonResponse as its parameter and return jsonResponse
}).then(jsonResponse => {
  return jsonResponse;
});

// I reconstructed the boilerplate code necessary to create a GET request using the fetch() function step-by-step
