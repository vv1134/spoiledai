// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Modal Logic
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const recoveryForm = document.getElementById('recovery-form');
const closeButtons = document.querySelectorAll('.close');

// Show Login Modal
loginBtn.addEventListener('click', () => {
  loginForm.style.display = 'flex';
});

// Show Registration Modal
document.getElementById('register-link').addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  registerForm.style.display = 'flex';
});

// Show Recovery Modal
document.getElementById('forgot-password-link').addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  recoveryForm.style.display = 'flex';
});

// Back to Login from Recovery
document.getElementById('back-to-login').addEventListener('click', (e) => {
  e.preventDefault();
  recoveryForm.style.display = 'none';
  loginForm.style.display = 'flex';
});

// Close Modals
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'none';
    recoveryForm.style.display = 'none';
  });
});

// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Login successful!');
  loginForm.style.display = 'none';
  loginBtn.style.display = 'none';
  logoutBtn.style.display = 'inline-block';
});

// Handle Registration Form Submission
document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Registration successful!');
  registerForm.style.display = 'none';
  loginForm.style.display = 'flex';
});

// Handle Recovery Form Submission
document.getElementById('recoveryForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Password recovery instructions sent!');
  recoveryForm.style.display = 'none';
  loginForm.style.display = 'flex';
});

// Handle Logout
logoutBtn.addEventListener('click', () => {
  alert('You have been logged out.');
  loginBtn.style.display = 'inline-block';
  logoutBtn.style.display = 'none';
});
