// Create a new XMLHttpRequest object using the new operator, and save it in a const called xhr.
const xhr = new XMLHttpRequest();

// save the following URL to a const called url
const url = 'https://api-to-call.com/endpoint';

// Create a new const called data / convert a value to a JSON string
const data = JSON.stringify({id: '200'});

// Set the responseType property of the xhr object to be 'json'
xhr.responseType = 'json';

//Set the xhr.onreadystatechange event handler equal to an anonymous arrow function
// add a conditional statement that checks to see if the readyState of xhr is equal to XMLHttpRequest.DONE
xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
}

// call the .open() method on the xhr object and pass it 'POST' and url as arguments.
// call the .send() method on the xhr object and pass data as an argument
xhr.open('POST', url);
xhr.send(data);

// Here I created a complete AJAX POST request step by  (total 9 steps)
