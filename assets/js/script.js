// Scrolly Header Start

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var menuBar = document.querySelector(".menu-bar");
  header.classList.toggle("sticky", window.scrollY > 0);
  menuBar.classList.toggle("sticky", window.scrollY > 0);
});

//   Scrolly Header End

// Custom Cursor Start

var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

// Custom Cursor End

// Text Magnify Start

const h4 = document.querySelector("h4");
var arrayH4 = h4.innerHTML.split(" ");
var textEffect = "";

arrayH4.forEach((index) => {
  for (let i = 0; i < index.length; i++) {
    textEffect += `<h2>${index[i]}</h2>`;
  }
  textEffect = textEffect + `<h2>&nbsp;</h2>`;
});

h4.innerHTML = textEffect;
const letters = document.querySelectorAll("h2");
letters.forEach((letter) => letter.classList.add("effect"));

// Text Magnify End

// Tilt Start

$(".main-content").mousemove(function (e) {
  parallaxIt(e, ".text-content", -100);
  parallaxIt(e, "video", -100);
});

function parallaxIt(e, target, movement) {
  var $this = $(".main-content");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: ((relX - $this.width() / 2) / $this.width()) * movement,
    y: ((relY - $this.height() / 2) / $this.height()) * movement,
  });
}

// Tilt End

// Dropdown Start
let dropDown = document.querySelector(".dropdown-step");
dropDown.addEventListener("click", () => {
  dropDown.classList.toggle("active");
  if (dropDown.classList == "dropdown-step active") {
    dropDown.childNodes[0].setAttribute("data-replace", "Solution -");
    dropDown.childNodes[0].childNodes[0].innerHTML = "Solution -";
  }
  else{
    dropDown.childNodes[0].setAttribute("data-replace", "Solution +");
    dropDown.childNodes[0].childNodes[0].innerHTML = "Solution +";
  }
});
// Dropdown End

// Audio Start
window.addEventListener("load", (event) => {
    document.querySelector("audio").play();
  });
//  Audio End
