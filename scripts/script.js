"use strict!";

// select elements
let overlay = document.querySelector(".overlay");
let project = document.querySelectorAll(".project");
let modal = document.querySelectorAll(".modal");
let btnCloseModal = document.querySelectorAll(".close-modal");

// iterate through each modal
for (let i = 0; i < modal.length; i++) {
  // function for opening modals
  let openModal = function () {
    modal[i].classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  // function for closing modals
  let closeModal = function () {
    modal[i].classList.add("hidden");
    overlay.classList.add("hidden");
  };

  // when a project is clicked
  project[i].addEventListener("click", openModal);

  // when the close button in a modal is clicked
  btnCloseModal[i].addEventListener("click", closeModal);

  // when the area outside a modal is clicked
  overlay.addEventListener("click", closeModal);

  // when the escape key is pressed
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}
