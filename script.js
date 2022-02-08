// TO-DO

// Planned Features:
// Email newsletter subscribe form after scrolling through homepage

// COMMENT SUBMIT CONFIRMATION 
// Store HTML elements in variables
const commentSubmit = document.querySelector('#commentSubmit');
const tyMessage = document.querySelector('#thankYouMessage');
const commentForm = document.querySelector('#commentForm'); 
const commenterName = document.querySelector('#name'); 
const commenterEmail = document.querySelector('#email'); 
const commentContent = document.querySelector('#comment'); 

commentForm.addEventListener ('submit', function(e) {
    e.preventDefault(); 
    // Store submitted name in a variable 
    let username = commenterName.value; 
    // Show the thank you message
    tyMessage.style.display = 'inline-block'; 
    tyMessage.textContent = `Thanks for submitting a comment, ${username}! It has been sent for approval. 💌`; 
    // Clear the form
    commenterName.value = '';
    commenterEmail.value = '';
    commentContent.value = '';
}); 

// Hide the thank you message when user clicks anywhere on the page
window.onclick = function() {
    tyMessage.style.display = 'none'; 
}