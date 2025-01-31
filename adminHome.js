// Handle admin login form submission (Redirect to admin home page)
adminLoginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Admin login successful! Redirecting to admin home page...");
  window.location.href = 'admin-home.html';  // Redirect to the admin home page
});
