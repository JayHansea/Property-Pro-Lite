/* eslint-disable camelcase */
const signup_btn = document.querySelector('#signupBtn');

signup_btn.addEventListener('click', () => {
  const first_name = document.querySelector('#firstname').value;
  const last_name = document.querySelector('#lastname').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const confirm_password = document.querySelector('#confirm-password').value;

  const userInfo = {
    first_name,
    last_name,
    email,
    password,
    confirm_password,
  };

  const formData = new FormData();

  formData.append('fname', userInfo.first_name);
  formData.append('lname', userInfo.last_name);

  fetch('https://my-json-server.typicode.com/typicode', {
    method: 'post',
    data: formData,
  })
    .then((response) => {
      if (response.status === '200') {
        console.log(response);
      }
    });
});
