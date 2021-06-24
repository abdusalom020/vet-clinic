// var modal = document.getElementById("modals");
// var btn = document.getElementById("myBtn");
// var span = document.getElementsByClassName("modal-btn__close")[0];

// btn.onclick = function() {
//   modal.style.display = "block";
// }


// span.onclick = function() {
//   modal.style.display = "none";
// }


// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

var elsMyBtn = document.querySelectorAll(".mybtn");
var elModal = document.querySelector(".modal");
var elClose = elModal.querySelector(".modal-btn__close");

var openModal = function () {
  elModal.classList.add('modal__open');
};

var closeModal = function () {
  elModal.classList.remove('modal__open');
};

if (elsMyBtn.length > 0){
  elsMyBtn.forEach(function (link) {
    link.addEventListener('click', function (evt){
      evt.preventDefault();
      openModal();
    })
  })
}

if (elClose){
  elClose.addEventListener('click', function (){
    closeModal();
  })
}

// var elsModal = document.querySelectorAll('#modals');
// var elsBtn = document.querySelectorAll('#myBtn');
// var elsClose = document.querySelectorAll('.modal-btn__close');

// elsBtn.addEventListener('click', function () {
//   elsModal.classList.add('modal__open');
// });

// elsClose.addEventListener('click', function () {
//   elsModal.classList.remove('modal__open');
// });

var elsAnsverBtn = document.querySelectorAll('.ansver-top__btn');
var elsAnsversItem = document.querySelectorAll('.ansvers__item');


elsAnsverBtn.forEach(function (toggle) {
  toggle.addEventListener('click', function (){
    toggle.closest('.ansvers__item').classList.toggle('ansvers--open')
  })
})


