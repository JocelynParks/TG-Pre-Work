console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');

// Using the event loop to take a look at code in the code editor. So I ran the code given, that passes a function that delays the setTimout method. this causes the message to be logged last. And even after changing the milliseconds to 0 it did not affect the order it was logged (still printed last)
