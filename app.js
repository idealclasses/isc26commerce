document.getElementById("login").addEventListener("click", async (e) => {
  e.preventDefault();
  const userID = document.getElementById("userID").value.trim();

  try {
    const doc = await db.collection("users").doc(userID).get();
    if (doc.exists && doc.data().valid) {
      localStorage.setItem("userID", userID);
      window.location.href = "index.html";
    } else {
      alert("Invalid ID");
    }
  } catch (error) {
    console.error("Login error:", error);
  }
});

