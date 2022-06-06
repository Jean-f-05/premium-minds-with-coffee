const sideBar = document.querySelector(".sidebar__list");
const toogler = document.querySelectorAll(".item__icon");
const dateYear = document.querySelector(".copyright-date");

sideBar.addEventListener("click", function (e) {
  // e.preventDefault();
  if (!e.target.classList.contains("sidebar__list-a")) {
    return;
  } else {
    this.querySelectorAll(".sidebar__list-a").forEach((el) => {
      el.classList.remove("active_el");
    });
    e.target.classList.add("active_el");
  }
});

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
  });
});

function setYear() {
  dateYear.innerHTML = new Date().getFullYear();
}

const init = () => {
  setYear();
};

init();
