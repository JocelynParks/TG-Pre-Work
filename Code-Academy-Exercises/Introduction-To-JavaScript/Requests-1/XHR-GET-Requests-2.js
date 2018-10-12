// create the XMLHttpRequest object using the new operator
const xhr = new XMLHttpRequest();

//save the following URL to a const called url
const url = 'https://api-to-call.com/endpoint';

// Set the responseType property of the xhr object to equal 'json'
xhr.responseType = 'json';

// Set the xhr.onreadystatechange event handler equal to an anonymous arrow function
// also add conditional statement to see if the request was finished
// if it is done return the response property of xhr
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
}

// call the .open() method on the xhr object and pass it 'GET' and url as arguments
xhr.open('GET', url);

// call the .send() method on the xhr object
xhr.send();
//Reconstructed XHR GET by requesting until we have written a complete GET request. Diagram avaliable for help.
