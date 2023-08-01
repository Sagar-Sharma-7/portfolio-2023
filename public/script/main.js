// Text to display with typewriter effect
const textToType = 'I M SAGAR SHARMA <span class="highlight">UI/UX</span> DESIGNER & FRONTEND DEVELOPER '

// Speed of typewriter effect (in milliseconds)
const typingSpeed = 50;
// Time to wait before deleting the text (in milliseconds)
const deleteDelay = 1000;
// Time to wait after deleting all the text (in milliseconds)
const pauseBetweenTypingAndDeleting = 2000;

// Function to create typewriter effect
function typewriterEffect() {
    const typewriterDiv = document.querySelector(".intro");
    let i = 0;
    let isDeleting = false;
    typewriterDiv.innerHTML = ""; // Clear any existing content in the div

    function typeNextCharacter() {
        const currentText = textToType.substring(0, i);

        if (isDeleting) {
            typewriterDiv.innerHTML = currentText.slice(0, -1);
            // typewriterDiv.innerHTML = currentText + "|";
        } else {
            typewriterDiv.innerHTML = currentText + "|";
        }

        if (isDeleting) {
            i--;
        } else {
            i++;
        }

        if (isDeleting && i === 0) {
            isDeleting = false;
            setTimeout(typeNextCharacter, typingSpeed);
        } else if (!isDeleting && i === textToType.length) {
            isDeleting = true;
            setTimeout(typeNextCharacter, deleteDelay);
        } else {
            setTimeout(typeNextCharacter, typingSpeed);
        }
    }

    typeNextCharacter();
}

// Start the typewriter effect when the page loads
typewriterEffect();
