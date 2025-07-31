// modal.js
document.addEventListener("DOMContentLoaded", () => {
  // Cargar modal HTML desde el archivo externo
  fetch("../modal/modal-login.html")
    .then(res => res.text())
    .then(html => {
      document.body.insertAdjacentHTML("beforeend", html);

      // Activar funcionalidad del modal
      const modal = document.getElementById("modal");
      const loginBtn = document.getElementById("loginBtn");
      const closeModal = document.getElementById("closeModal");

      if (loginBtn && modal && closeModal) {
        loginBtn.addEventListener("click", () => modal.classList.remove("hidden"));
        closeModal.addEventListener("click", () => modal.classList.add("hidden"));
      }
    })
    .catch(err => console.error("Error al cargar modal:", err));
});
