const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint');
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
}
// Boilerplate code necessary to create a GET request using the async and await
// Using an async function that will return a promise
// await can only be used in an async function and allows a program to run while waiting for a promise to resolve
// In a try...catch statement, code in the try block will be run and in the event of an exception/error, the code in the catch statement will run.
