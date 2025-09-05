document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("profilForm");
  const successMessage = document.getElementById("successMessage");
  const displayUsername = document.getElementById("displayUsername");

  const modal = document.getElementById("confirmModal");
  const btnYes = document.getElementById("confirmYes");
  const btnNo = document.getElementById("confirmNo");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Tjek at felter er udfyldt
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const description = document.getElementById("description").value.trim();

    if (!username || !email || !description) {
      alert("Udfyld venligst alle felter korrekt.");
      return;
    }

    // Vis modal
    modal.classList.remove("hidden");
  });

  // Brugeren annullerer
  btnNo.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Brugeren bekræfter
  btnYes.addEventListener("click", async () => {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const description = document.getElementById("description").value.trim();

    try {
      const response = await fetch('/opret-profil', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, description })
      });

      const data = await response.json();
      if (response.ok) {
        form.style.display = 'none';
        displayUsername.textContent = username;
        successMessage.classList.remove('hidden');
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert('Fejl ved oprettelse af profil.');
    } finally {
      modal.classList.add("hidden");
    }
  });
});
