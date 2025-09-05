const USERS_KEY = '18chatten-users';
const params = new URLSearchParams(window.location.search);
const email = params.get('email');

const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
const user = users.find(u => u.email === email);

if(!user){
  alert('Bruger ikke fundet!');
  window.location.href = 'profil-dashboard.html';
}

// Update DOM
document.getElementById('profileImage').src = user.image || '';
document.getElementById('profileName').textContent = user.name;
document.getElementById('profileAgeLocation').textContent = `${user.age} år, ${user.location}`;

const servicesList = document.getElementById('profileServices');
servicesList.innerHTML = '';
user.services.forEach((s, i) => {
  const li = document.createElement('li');
  li.textContent = `${s} - ${user.prices[i] || '-' } DKK`;
  servicesList.appendChild(li);
});
