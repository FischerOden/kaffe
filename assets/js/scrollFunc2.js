currentID = document.getElementById("toTopBack");

var currentScrollFunc = function () {
  var y = window.scrollY;
  if (y >= 500) {
    currentID.className = "backToTop show";
  } else {
    currentID.className = "backToTop hide";
  }
};

window.addEventListener("scroll", currentScrollFunc);
