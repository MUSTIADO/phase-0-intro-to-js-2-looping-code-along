// Function to generate thank you messages for each name in the array
function writeCards(names) {
  const messages = [];
  // Iterate through each name in the array
  for (let i = 0; i < names.length; i++) {
    // Construct the thank you message and push it to the messages array
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  // Return the array of thank you messages
  return messages;
}

// Test the writeCards function
const names = ["Guadalupe", "Ollie", "Aki"];
const thankYouMessages = writeCards(names);
console.log(thankYouMessages);

// Function to perform countdown
function countDown(start) {
  // Loop from start value down to zero
  for (let i = start; i >= 0; i--) {
      // Print the current value of i
      console.log(i);
  }
}

// Test the countDown function
countDown(10);
