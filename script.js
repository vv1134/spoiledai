// DOM Elements
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const recoveryForm = document.getElementById('recovery-form');
const content = document.getElementById('content');
const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');
const forgotPasswordLink = document.getElementById('forgot-password-link');
const backToLogin = document.getElementById('back-to-login');

// Show login form
loginBtn.addEventListener('click', () => {
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
  recoveryForm.style.display = 'none';
  content.style.display = 'none';
});

// Show registration form
registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
  recoveryForm.style.display = 'none';
  content.style.display = 'none';
});

// Show recovery form
forgotPasswordLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  registerForm.style.display = 'none';
  recoveryForm.style.display = 'block';
  content.style.display = 'none';
});

// Back to login from recovery
backToLogin.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
  recoveryForm.style.display = 'none';
  content.style.display = 'none';
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulate login (no backend)
  if (username && password) {
    alert(`Welcome, ${username}!`);
    loginForm.style.display = 'none';
    content.style.display = 'block';
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'inline-block';
  } else {
    alert('Please enter a username and password.');
  }
});

// Handle registration form submission
document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('reg-username').value;
  const email = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-password').value;

  // Simulate registration (no backend)
  if (username && email && password) {
    alert(`Registration successful! Welcome, ${username}.`);
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
  } else {
    alert('Please fill out all fields.');
  }
});

// Handle recovery form submission
document.getElementById('recoveryForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('recovery-email').value;

  // Simulate password recovery (no backend)
  if (email) {
    alert(`Password recovery instructions sent to ${email}.`);
    recoveryForm.style.display = 'none';
    loginForm.style.display = 'block';
  } else {
    alert('Please enter your email.');
  }
});

// Handle logout
logoutBtn.addEventListener('click', () => {
  alert('You have been logged out.');
  loginBtn.style.display = 'inline-block';
  logoutBtn.style.display = 'none';
  content.style.display = 'block';
  loginForm.style.display = 'none';
  registerForm.style.display = 'none';
  recoveryForm.style.display = 'none';
});
