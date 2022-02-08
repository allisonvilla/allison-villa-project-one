// FEATURE ONE: Newsletter Sign-Up on Homepage Scroll 

// Store HTML elements in variables
const newsletterPopUp = document.querySelector('#newsletterPopUp');
const closeSpan = document.querySelector('.close'); 

// Variable that states if the pop up has already happened 
let hasPoppedUp = false; 

// Prevent TypeErrors on other pages by checking if the elements exist first
if (closeSpan != null) {
    // After scrolling 900px from the top, show newsletter pop up
    window.onscroll = function() {
        if (window.pageYOffset > 900 && hasPoppedUp == false) {
            newsletterPopUp.style.visibility = 'visible'; 
            hasPoppedUp = true; 
        }
    }
    
    // Hide pop up when user clicks "I'm not interested"
    closeSpan.addEventListener ('click', function() {
        newsletterPopUp.style.visibility = 'hidden'; 
    }); 
}

// FEATURE TWO: Comment Confirmation Message on Blog Page 

// Store HTML elements in variables
const tyMessage = document.querySelector('#thankYouMessage');
const commentForm = document.querySelector('#commentForm'); 
const commenterName = document.querySelector('#name'); 

// Prevent TypeErrors on other pages by checking if the elements exist first
if (commentForm != null) {
    commentForm.addEventListener ('submit', function(e) {
        e.preventDefault(); 
        // Store submitted name in a variable 
        let username = commenterName.value; 
        // Show the thank you message
        tyMessage.style.display = 'inline-block'; 
        tyMessage.textContent = `Thanks for submitting a comment, ${username}! It has been sent for approval. 😊`; 
        // Clear the form
        commentForm.reset(); 
    }); 
    
    // Hide the thank you message when user clicks anywhere on the page
    window.onclick = function() {
        tyMessage.style.display = 'none'; 
    }
}