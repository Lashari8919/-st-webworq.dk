const opretBtn = document.getElementById('opretProfil');

opretBtn.addEventListener('click', () => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

  const newUser = {
    name: document.getElementById('name').value,
    age: parseInt(document.getElementById('age').value, 10),
    location: document.getElementById('location').value,
    description: document.getElementById('description').value,
    services: document.getElementById('services').value.split(',').map(s => s.trim()),
    contact: document.getElementById('contact').value,
    images: images
  };

  // Gem den nye bruger
  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

  // Find index for den nye bruger
  const userIndex = users.length - 1;

  alert('Profil oprettet!');

  // Send brugeren videre til profil-dashboard.html
  window.location.href = `profil-dashboard.html?user=${userIndex}`;
});
