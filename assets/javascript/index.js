window.onscroll = function () {
  scrollDown();
};

let headerColor = document.getElementById("navBar");
let buttonColor = document.getElementById("getStarted");
let scroll = headerColor.offsetTop;

function scrollDown() {
  if (window.scrollY >= scroll + 350) {
    headerColor.style.backgroundColor = "white";
    buttonColor.style.backgroundColor = "#1a8917";
  } else {
    headerColor.style.backgroundColor = "#ffc017";
    buttonColor.style.backgroundColor = "black";
  }
}
