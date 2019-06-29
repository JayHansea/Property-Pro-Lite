const logInForm = document.querySelector('#login-form');
const logInEmail = document.querySelector('#email');
const logInPassword = document.querySelector('#password');
const spanEmail = document.querySelector('#email-span');
const spanUser = document.querySelector('#span-user');

const currApiEndpoint = '';

logInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = {};

  if (logInEmail.value) {
    formData.email = logInEmail.value;
  }
  if (logInPassword.value) {
    formData.password = logInPassword.value;
  }

  const fetchConfig = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  };
  fetch(`${currApiEndpoint}/auth/login`, fetchConfig)
    .then(resp => resp.json())
    .then((resp) => {
      const { error, data } = resp;
      if (error) {
        if (error.email) {
          spanEmail.innerHTML = error.email;
          spanEmail.style.color = 'red';
        }
        if (error.message) {
          spanUser.innerHTML = error.message;
          spanUser.style.color = 'red';
        }
      }
      if (data) {
        const { user, token } = data[0];
        localStorage.User = JSON.stringify(user);
        localStorage.admin = token;
        if (user.type === 'admin') {
          window.location = './admin-profile.html';
        } else if (user.type === 'admin') {
          window.location = './agentDashboard.html';
        } else {
          window.location = './userDashboard.html';
        }
      }
    })
    .catch(err => console.log(err));
});
