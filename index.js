let btnEl = document.querySelectorAll(".rating_btn");
let submitBtnEl = document.querySelector(".submit_btn");
let feedbackContainerEl = document.querySelector(".feedback_container");
let thanksContainerEl = document.querySelector(".thanks_container");
let ratingResultEl = document.querySelector(".rating_result");

let rating = "";

btnEl.forEach((elem) => {
  elem.addEventListener("click", () => {
    rating = elem.innerHTML;
    elem.style.backgroundColor = "black";

    for (let i = 0; i < btnEl.length; i++) {
      if (btnEl[i].innerHTML != rating) {
        btnEl[i].style.backgroundColor = "hsla(213, 19%, 18%, 1)";
        btnEl[i].style.color = "hsla(217, 12%, 54%, 1)";
      } else {
        btnEl[i].style.backgroundColor = "hsla(217, 12%, 54%, 1)";
        btnEl[i].style.color = "hsla(0, 0%, 100%, 1)";
      }
    }
  });
});

submitBtnEl.addEventListener("click", () => {
  if (rating === "") {
    alert("You need to select rating!");
  } else {
    feedbackContainerEl.style.visibility = "hidden";
    thanksContainerEl.style.visibility = "visible";

    ratingResultEl.innerHTML = rating;
  }
});
