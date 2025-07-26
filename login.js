// Sample login.js

const validIDs = ["md123", "guest001", "admin007"]; // Replace with your real data

function loginUser() {
  const enteredID = document.getElementById("userID").value.trim();

  if (validIDs.includes(enteredID)) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userID", enteredID);
    window.location.href = "index.html"; // or your content page
  } else {
    alert("Invalid ID. Try again.");
  }
}
