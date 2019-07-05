const upgradeBtn = document.querySelector('#post-btn');
const id = document.querySelector('#id');
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const organizationName = document.querySelector('#orgName');
const organizationAddress = document.querySelector('#orgAdd');
const spanId = document.querySelector('#id-span');
const spanFirstname = document.querySelector('#firstname-span');
const spanLastname = document.querySelector('#lastname-span');
const spanOrgName = document.querySelector('#orgName-span');
const spanOrgAdd = document.querySelector('#orgAdd-span');

const currApiEndpoint = '';

upgradeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const formData = {};

  if (id.value) {
    formData.id = id.value;
  }
  if (firstName.value) {
    formData.first_name = firstName.value;
  }
  if (lastName.value) {
    formData.last_name = lastName.value;
  }
  if (organizationName.value) {
    formData.organization_name = organizationName.value;
  }
  if (organizationAddress.value) {
    formData.organization_address = organizationAddress.value;
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
    .then((resp) => {
      const { error, data } = resp;
      if (error) {
        if (error.id) {
          spanId.innerHTML = error.id;
          spanId.style.color = 'red';
        }
        if (error.first_name) {
          spanFirstname.innerHTML = error.first_name;
          spanFirstname.style.color = 'red';
        }
        if (error.last_name) {
          spanLastname.innerHTML = error.last_name;
          spanLastname.style.color = 'red';
        }
      }
      if (data) {
        const user = JSON.stringify(data);
        localStorage.setItem('user', user);
        window.location = './agentDashboard.html';
      }
      // if (data) {
      //   const { user, token } = data[0];
      //   localStorage.User = JSON.stringify(user);
      //   localStorage.admin = token;
      //   if (user.type === 'admin') {
      //     window.location = './admin-profile.html';
      //   } else if (user.type === 'admin') {
      //     window.location = './agentDashboard.html';
      //   } else {
      //     window.location = './userDashboard.html';
      //   }
      // }
    })
    .catch(err => console.log(err));
});
