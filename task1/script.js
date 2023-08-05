// Helper function to update the display
function updateDisplay(value) {
  document.getElementById("result").textContent = value;
}

// Global variable to store the current input
let currentInput = "0"; // Initialize with "0" instead of an empty string

// Function to append a value to the current input
function appendValue(value) {
  if (currentInput === "0" || currentInput === "Error") {
    // If the current input is "0" or "Error", replace it with the new value
    currentInput = value;
  } else {
    currentInput += value;
  }
  updateDisplay(currentInput);
}

// Function to clear the display and reset the current input
function clearDisplay() {
  currentInput = "0"; // Reset to "0" instead of an empty string
  updateDisplay(currentInput);
}

// Function to perform the calculation and update the display
function calculate() {
  try {
    const result = eval(currentInput);
    updateDisplay(result);
    currentInput = result.toString();
  } catch (error) {
    updateDisplay("Error");
    currentInput = "Error"; // Set current input to "Error" in case of an error
  }
}

// Event listener for button clicks using event delegation
document.getElementById("calculator").addEventListener("click", event => {
  if (event.target.tagName === "BUTTON") {
    const value = event.target.textContent;
    if (value === "=") {
      calculate();
    } else if (value === "C") {
      clearDisplay();
    } else {
      appendValue(value);
    }
  }
});

// Event listener to handle keyboard input
document.removeEventListener("keydown", keydownHandler); // Remove existing event listener
document.addEventListener("keydown", keydownHandler);

// Function to handle keyboard input
function keydownHandler(event) {
  const key = event.key;
  if (/^[0-9+\-*/.=]$/.test(key)) {
    event.preventDefault();
    const button = document.querySelector(`button[data-key="${key}"]`);
    if (button) {
      button.click();
    }
  } else if (key === "Enter") {
    event.preventDefault();
    calculate();
  }
}
