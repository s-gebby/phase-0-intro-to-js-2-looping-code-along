// Code your solutions in this file

function countDown(startingNumber) {
  while (startingNumber >= 0) {
    console.log(startingNumber);
    startingNumber--;
  }
}

function writeCards(names, eventName) {
  const thankYouMessages = [];

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;

    thankYouMessages.push(message);
  }

  return thankYouMessages;
}
