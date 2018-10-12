// Call the fetch() function, pass it the URL
fetch('https://api-to-call.com/endpoint', {
  // // fetch() function will contain two properties: method, with a value of 'POST', and body, with a value of JSON.stringify({id: '200'})
  method: 'POST',
  body: JSON.stringify({id: "200"})
  //Chain a .then() method to the fetch() function and pass it the success callback function as its first parameter. Pass in response as an argument for the callback function.
}).then(response => {
  //check the ok property of the response object inside of a conditional statement.
  if(response.ok){
	  return response.json();
  }
  // create a new error
	throw new Error('Request failed!');
}, networkError => {
  // Create the failure callback function
  console.log(networkError.message);
}).then(jsonResponse => {
  //view the JSON that was returned from the previous .then()
  console.log(jsonResponse);
})

// Created a complete POST request using fetch() and .then()
