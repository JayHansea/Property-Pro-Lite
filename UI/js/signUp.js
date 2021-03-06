const signUpForm = document.querySelector('#signupForm');
const signUpFirstName = document.querySelector('#firstname');
const signUpLastName = document.querySelector('#lastname');
const signUpPhoneNumber = document.querySelector('#phonenumber');
const signUpEmail = document.querySelector('#email');
const signUpPassword = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const spanFirstName = document.querySelector('#firstname-span');
const spanLastName = document.querySelector('#lastname-span');
const spanPhone = document.querySelector('#phone-span');
const spanEmail = document.querySelector('#email-span');
const spanPass = document.querySelector('#password-span');
const spanConfirmPass = document.querySelector('#confirm-password-span');


const currApiEndpoint = 'http://localhost:3000/api/v1/user';

// eslint-disable-next-line consistent-return
signUpForm.addEventListener('click', (e) => {
  e.preventDefault();
  const formData = {};
  if (signUpFirstName.value) {
    formData.first_name = signUpFirstName.value;
  }
  if (signUpLastName.value) {
    formData.last_name = signUpLastName.value;
  }
  if (signUpPhoneNumber.value) {
    formData.phoneNumber = signUpPhoneNumber.value;
  }
  if (signUpEmail.value) {
    formData.email = signUpEmail.value;
  }
  if (signUpPassword.value) {
    formData.password = signUpPassword.value;
  }
  if (confirmPassword.value) {
    formData.confirmpassword = confirmPassword.value;
  }

  // checks if input contains only letters
  function hasNumber(myString) {
    return /\d/.test(myString);
  }

  // checks if password is valid
  function isValidPass(s) {
    const re = /[a-z]\d|\d[a-z]/i;
    return re.test(s) && s.length > 3;
  }

  if (hasNumber(signUpFirstName.value)) {
    spanFirstName.innerHTML = 'firstname can only contain letters';
    spanFirstName.style.color = 'red';
    return false;
  }
  if (hasNumber(signUpLastName.value)) {
    spanLastName.innerHTML = 'lastname can only contain letters';
    spanLastName.style.color = 'red';
    return false;
  }
  if (!isValidPass(signUpPassword.value)) {
    spanPass.innerHTML = 'password should contain letters and numbers';
    spanPass.style.color = 'red';
    return false;
  }
  if (confirmPassword.value !== signUpPassword.value) {
    spanConfirmPass.innerHTML = 'must match with password';
    spanConfirmPass.style.color = 'red';
    return false;
  }

  const fetchConfig = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  };
  fetch(currApiEndpoint, fetchConfig)
    .then(resp => resp.json())
    .then((data) => {
      if (data) {
        const user = JSON.stringify(data);
        localStorage.setItem('user', user);
        window.location = './userDashboard.html';
      }
    })
    .catch(err => console.log(err));
});
