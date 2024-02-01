// extractUserId.js

// Get the meta tag with id attribute as "userId"
const metaTag = document.querySelector('meta[id="userId"]');

// Create a new div element for displaying User ID
const userIdDisplay = document.createElement('div');
userIdDisplay.id = 'userIdDisplay';

// Check if the meta tag with id "userId" exists
if (metaTag) {
  // Extract the value from the content attribute
  const userId = metaTag.getAttribute('content');
  
  // Display the userId in the dynamically created div
  userIdDisplay.textContent = 'User ID: ' + userId;

  // Append the div to the body of the document
  document.body.appendChild(userIdDisplay);
} else {
  // If meta tag is not found, display "User ID not found"
  userIdDisplay.textContent = 'User ID not found';
  
  // Append the div to the body of the document
  document.body.appendChild(userIdDisplay);
}
