//your JS code here. If required.
    const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const existingBtn = document.getElementById("existing");

    // Check if credentials exist on load
    window.onload = function() {
      const savedUsername = localStorage.getItem("username");
      const savedPassword = localStorage.getItem("password");
      if (savedUsername && savedPassword) {
        existingBtn.style.display = "block";
      }
    };

    // Form submission
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();

      if (!username || !password) return;

      alert("Logged in as " + username);

      if (checkbox.checked) {
        // Save credentials
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
      } else {
        // Remove credentials if previously saved
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }

      // Update "Login as existing user" button visibility
      const savedUsername = localStorage.getItem("username");
      const savedPassword = localStorage.getItem("password");
      if (savedUsername && savedPassword) {
        existingBtn.style.display = "block";
      } else {
        existingBtn.style.display = "none";
      }
    });

    // Existing user login
    existingBtn.addEventListener("click", function() {
      const savedUsername = localStorage.getItem("username");
      if (savedUsername) {
        alert("Logged in as " + savedUsername);
      }
    });