// Define the checkAnswer function
function checkAnswer() {
  // Declare the correctAnswer variable and assign it the string value "4"
  const correctAnswer = "4";
  
  // Retrieve the user's answer
  const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
  
  // Compare the user's answer with the correct answer
  if (userAnswer === correctAnswer) {
      document.getElementById('feedback').textContent = "Correct! Well done.";
      console.log("User answered correctly."); // Log message for correct answer
  } else {
      document.getElementById('feedback').textContent = "That's incorrect. Try again!";
      console.log("User answered incorrectly."); // Log message for incorrect answer
  }
}

// Add an event listener to the Submit Answer button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);