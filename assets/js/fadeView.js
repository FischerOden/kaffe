var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 250);
}

function showPage() {
  var element = document.getElementById("body");
  element.classList.add("showBody");
  document.getElementById("body").style.display = "block";
}
