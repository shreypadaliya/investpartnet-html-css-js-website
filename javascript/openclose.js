
// Get elements
const applyButton = document.getElementById("applyButton");
const investmentDiv = document.getElementById("investmentDiv");
const closeBtn = document.getElementById("closeBtn");

// Show div when button is clicked
applyButton.addEventListener("click", function () {
  investmentDiv.style.display = "block"; // Show the investment div
});

// Hide div when close button is clicked
closeBtn.addEventListener("click", function () {
  investmentDiv.style.display = "none"; // Hide the investment div
});
