myID = document.getElementById("navHeader");

var myScrollFunc = function () {
  var y = window.scrollY;
  if (y <= 500) {
    myID.className = "headerNav show";
  } else {
    myID.className = "headerNav hide";
  }
};

window.addEventListener("scroll", myScrollFunc);
