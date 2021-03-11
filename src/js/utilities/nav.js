const mobileNav = document.querySelector(".mobile-navbar");
const navBtn = document.getElementById("nav-btn");
const navCloseBtn = document.querySelector(".nav-close-btn");
const closeLayer = document.querySelector(".close-layer");
const navLink = document.querySelectorAll(".nav-list li:not(.dropdown-menu) a");
const dropdownLink = document.querySelectorAll("#dropdown li a");
// show nav
navBtn.addEventListener("click", function () {
  mobileNav.classList.add("nav-active");
  closeLayer.classList.add("close-active");
});
// hide nav when click outside of navbar
closeLayer.addEventListener("click", function () {
  mobileNav.classList.remove("nav-active");
  closeLayer.classList.remove("close-active");
});
// hide nav when the nav close btn is clicked
// navCloseBtn.addEventListener("click", function () {
//   mobileNav.classList.remove("nav-active");
//   closeLayer.classList.remove("close-active");
// });
// close nav when each nav link is clicked
navLink.forEach((link) => {
  link.addEventListener("click", function () {
    mobileNav.classList.remove("nav-active");
    closeLayer.classList.remove("close-active");
  });
});
// dropdownLink.forEach((link) => {
//   link.addEventListener("click", function () {
//     mobileNav.classList.remove("nav-active");
//     closeLayer.classList.remove("close-active");
//   });
// });
// 2 search button, 1 on mobile, 1 on tablet++
const searchBtn = document.querySelectorAll("#search-button");
searchBtn.forEach((el) => {
  el.addEventListener("click", function () {
    alert("adhvbahkdbva");
  });
});
