"use strict";
/*******************/
//Aggancio il bottone
var mybutton = document.querySelector(".ontop-btn");

// Allo scroll verso il basso mostra il bottone
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll to TOP function
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/******** Animazione counters *******/
$(".counter-count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 1500,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});

/****************** Cards a comparsa al click dei bottoni del portfolio**************/
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".close-modal");
// const btnsOpenModal = document.querySelectorAll(".mostra-modal");

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener("click", openModal);
// }

// function closeModal() {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// }
// function openModal() {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// }

// btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (event) {
//   console.log(event);
//   console.log(event.key);

//   //Se il bottone esc viene cliccato e se modal "NON CONTIENE" la classe 'hidden'
//   if (event.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });
