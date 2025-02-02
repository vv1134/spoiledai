// Initialize Supabase
const supabaseUrl = 'https://allvnjludleroasyrwqh.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsbHZuamx1ZGxlcm9hc3lyd3FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1MDA1MjEsImV4cCI6MjA1NDA3NjUyMX0.Mhhyc465_SLH0d9NHtsrHgOM9iVaTVgJF0m85X0JR1s'; // Replace with your Supabase anon key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// DOM Elements
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
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  try {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) throw error;
    alert('Login successful!');
    loginForm.style.display = 'none';
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'inline-block';
  } catch (error) {
    alert(error.message);
  }
});

// Handle Registration Form Submission
document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-password').value;
  const username = document.getElementById('reg-username').value;

  try {
    // Sign up the user
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;

    // Insert user data into the `users` table
    const { data, error: dbError } = await supabase
      .from('users')
      .insert([{ email, username }]);
    if (dbError) throw dbError;

    alert('Registration successful! Please check your email to confirm.');
    registerForm.style.display = 'none';
    loginForm.style.display = 'flex';
  } catch (error) {
    alert(error.message);
  }
});

// Handle Recovery Form Submission
document.getElementById('recoveryForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('recovery-email').value;

  try {
    const { data, error } = await supabase.auth.api.resetPasswordForEmail(email);
    if (error) throw error;
    alert('Password recovery instructions sent to your email.');
    recoveryForm.style.display = 'none';
    loginForm.style.display = 'flex';
  } catch (error) {
    alert(error.message);
  }
});

// Handle Logout
logoutBtn.addEventListener('click', async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    alert('You have been logged out.');
    loginBtn.style.display = 'inline-block';
    logoutBtn.style.display = 'none';
  } catch (error) {
    alert(error.message);
  }
});

// Check if user is logged in
const session = supabase.auth.session();
if (session) {
  loginBtn.style.display = 'none';
  logoutBtn.style.display = 'inline-block';
}
