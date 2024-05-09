const backdrop = document.querySelector(".backdrop");
const openModalButton = document.querySelector(".education__overlay-button");
const closeButton = document.querySelector(".certificate-modal__close");

const openModal = () => {
  backdrop.classList.remove("is-hidden");
};

const closeModal = () => {
  backdrop.classList.add("is-hidden");
};

openModalButton.addEventListener("click", openModal);

closeButton.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
  if (event.target === backdrop) {
    closeModal();
  }
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
