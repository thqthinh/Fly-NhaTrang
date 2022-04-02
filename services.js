const modal = document.querySelector(".modal");
const videoBtn = document.querySelector(".video-btn");
const closeModal = document.querySelector(".modal-close");
const overlayModal = document.querySelector(".modal-overlay");

videoBtn.addEventListener("click", () => modal.classList.add("active"));
closeModal.addEventListener("click", () => modal.classList.remove("active"));
overlayModal.addEventListener("click", () => modal.classList.remove("active"));
