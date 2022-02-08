// Currently, unless you comment out Feature One, Feature Two will not work because of a TypeError (variables defined in Feature One are null on the blog page)

// After some googling, I'm using `try...finally` to make my second feature run regardless of the TypeError. I'm sure this is not best practice, but it works for now until I figure out how to make specific JS blocks only run on specific pages. 😅

try {

// FEATURE ONE: Newsletter Sign-Up on Homepage Scroll 

// Store HTML elements in variables
const newsletterPopUp = document.querySelector('#newsletterPopUp');
const closeSpan = document.querySelector('.close'); 

// Variable that states if the pop up has already happened 
let hasPoppedUp = false; 

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

} finally {

// FEATURE TWO: Comment Confirmation Message on Blog Page 

// Store HTML elements in variables
const tyMessage = document.querySelector('#thankYouMessage');
const commentForm = document.querySelector('#commentForm'); 
const commenterName = document.querySelector('#name'); 

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