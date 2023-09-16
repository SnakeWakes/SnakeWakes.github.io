document.addEventListener('DOMContentLoaded', function() {
  animateText('heading', 'Hi, I\'m <span class="highlight">Corey Nicholas</span>');
  animateText('paragraph', 'I\'m a <span class="highlight">Freelance Programmer</span>');
});

function animateText(elementId, text) {
  const element = document.getElementById(elementId);
  const typingElement = (elementId === 'heading') ? element.querySelector('.highlight') : null;
  let index = 0;
  let errorIndices = [Math.floor(text.length / 4), Math.floor(text.length / 2), Math.floor((3 * text.length) / 4)]; // Define the indices for the spelling errors
  let isError = false; // Flag to indicate if there is a spelling error
  let typingSpeed = (elementId === 'heading') ? 60 : 80; // Adjust the typing speed based on the element

  function typeCharacter() {
    if (typingElement && errorIndices.includes(index) && !isError) {
      // Add the spelling error one character at a time
      typingElement.innerHTML += text[index];
      isError = true;
    } else if (typingElement && isError && errorIndices.includes(index - 1)) {
      // Erase the spelling error one character at a time
      setTimeout(function() {
        typingElement.innerHTML = typingElement.innerHTML.slice(0, -1);
      }, 200);
    }

    element.innerHTML = text.substr(0, index);

    index++;
    if (index <= text.length) {
      setTimeout(typeCharacter, typingSpeed);
    } else if (isError) {
      // Remove the spelling error and display the correct text
      setTimeout(function() {
        typingElement.innerHTML = text;
        if (elementId === 'heading') {
          element.innerHTML += '<span class="typing-cursor"></span>'; // Display the typing cursor only for 'Snake'
        }
      }, 200);
    } else if (elementId === 'heading') {
      element.innerHTML += '<span class="typing-cursor"></span>'; // Display the typing cursor only for 'Snake'
    }
  }

  typeCharacter();
}
function showContent(section) {
  const contentContainer = document.getElementById('content-container');

  if (section === 'contact') {
    contentContainer.innerHTML = `
      <h2>Contact Information</h2>
      <span class='contact-text'>
      &#128222;  +44 7543276786
      <br>
      &#x2709;   coreyn1999@gmail.com
      
      </span>
    `;
  } else if (section === 'portfolio') {
    contentContainer.innerHTML = `
      <h2>Portfolio</h2>
      <span class='portfolio-text'><button class='portfolio-button'>Chatbot [120MB Datasize]</button></span>
    `;
  } else if (section === 'experience') {
    contentContainer.innerHTML = `
      <h2>About Me</h2>
      <span class='about1-text'>Programmer open for freelance work</span>
      <br><br>
      <span class='about1-text'>Swansea University Undergraduate <br>Bsc. Computer Science<br><br>
      <span class='about-text'><strong>Experienced with:</strong> JavaScript, Python, Java, C#, Lua, Haskell, Prolog </span>
    `;
  }
}

