const sideBar = document.querySelector(".sidebar__list");
const toogler = document.querySelectorAll(".item__icon");
const dateYear = document.querySelector(".copyright-date");

sideBar.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e);
});

// function togglerFunc(element, postion) {
//   el.classList.add("hide");
//   el.nextElementSibling.classList.remove("hide");
//   this.closest(".item__head").nextElementSibling.classList.add("hide");
// }

toogler.forEach((el) => {
  el.addEventListener("click", function () {
    if (el.classList.contains("minus")) {
      el.classList.add("hide");
      el.nextElementSibling.classList.remove("hide");
      this.closest(".item__head").nextElementSibling.classList.add("hide");
    }
    if (el.classList.contains("plus")) {
      el.classList.add("hide");
      el.previousElementSibling.classList.remove("hide");
      this.closest(".item__head").nextElementSibling.classList.remove("hide");
    }

    // this.closest(".item__head").nextElementSibling.classList.add("hide");
    // const header = this.parentElement;
    // this.remove("item-icon");
    // header.insertAdjacentHTML("beforeend", "");
  });
});

function setYear() {
  dateYear.innerHTML = new Date().getFullYear();
}

const init = () => {
  setYear();
};

window.onload = init();
