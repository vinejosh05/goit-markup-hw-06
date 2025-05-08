// modal.js
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }

  // Close modal when clicking on backdrop
  refs.modal.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  });

  // Close modal on Escape key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !refs.modal.classList.contains("is-hidden")) {
      toggleModal();
    }
  });

  // Prevent form submission for demo purposes
  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (form.classList.contains("modal-form")) {
        toggleModal();
      }
      form.reset();
    });
  });
})();
