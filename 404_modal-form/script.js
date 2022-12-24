const formContainer = document.querySelector('.form-container');
const signupModal = document.querySelector('.signup-form-wrapper');
const loginModal = document.querySelector('.login-form-wrapper');

document.querySelector('.login-btn').addEventListener('click', () => {
  formContainer.classList.add('disable');
  loginModal.classList.add('display');
  signupModal.classList.remove('display');
});

document.querySelector('.signup-btn').addEventListener('click', () => {
  formContainer.classList.add('disable');
  signupModal.classList.add('display');
  loginModal.classList.remove('display');
});

document.querySelector('.signup-x').addEventListener('click', () => {
  formContainer.classList.remove('disable');
  signupModal.classList.remove('display');
});

document.querySelector('.login-x').addEventListener('click', () => {
  formContainer.classList.remove('disable');
  loginModal.classList.remove('display');
});
