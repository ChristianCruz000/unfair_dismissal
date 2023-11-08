// --------- GLOBAL VARIABLES --------- //
const textareaElement = document.querySelector(".form__textarea");
const counterElement = document.querySelector(".counter");
const formElement = document.querySelector(".form");

// --------- COUNTER COMPONENT --------- //
const inputHandler = () => {
  // Determine maximum number of characters:
  const maxNumberChars = 560;
  // Determine number of characters currently typed:
  const numberCharsTyped = textareaElement.value.length;
  // Calculate number of characters left:
  const charsLeft = maxNumberChars - numberCharsTyped;
  // Display number of characters left in the HTML
  counterElement.textContent = charsLeft;
};

textareaElement.addEventListener("input", inputHandler);

// --------- SUBMIT COMPONENT --------- //
const submitHandler = (event) => {
  // Prevent browsers default behavior (submitting form data and refreshing page)
  event.preventDefault();
  // Get text from textarea
  const text = textareaElement.value;
  // Validate text
  // if (text.)
};

formElement.addEventListener("submit", submitHandler);
