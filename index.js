// Get the input element
const input = document.querySelector('input._display');

// Function to handle button clicks
function handleButtonClick(event) {
  // Get the button's value
  const value = event.target.getAttribute('data-value') || event.target.textContent;

  // Handle special buttons
  if (value === 'AC') {
    // Clear the input
    input.value = '';
  } else if (value === '<') {
    // Remove the last character from the input
    input.value = input.value.slice(0, -1);
  } else if (value === '=') {
    // Evaluate the expression and display the result
    try {
      const result = eval(input.value);
      input.value = result.toString();
    } catch (error) {
      input.value = 'Error';
    }
  } else {
    // Append the value to the input
    input.value += value;
  }
}

// Get all the buttons
const buttons = document.querySelectorAll('button');

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});