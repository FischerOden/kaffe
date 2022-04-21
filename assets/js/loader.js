var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  var element = document.getElementById("everything");
  element.classList.add("showBody");
  document.getElementById("everything").style.display = "block";
}
