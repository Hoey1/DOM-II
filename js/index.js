// Your code goes here

//?     --------------------------
//?     -- mouseover & mouseout --
//?     --------------------------

const mouse = document.querySelector(".intro p");
mouse.addEventListener("mouseover", mouseFunc, false);
mouse.addEventListener("mouseout", mouseOutFunc, false);

function mouseFunc() {
  mouse.setAttribute("style", "color: orange;");
}
function mouseOutFunc() {
  mouse.setAttribute("style", "color: black;");
}

//?     --------------------------
//?     ------- keydown ----------
//?     --------------------------

const escape = document.querySelector(".content-section .img-content img");
escape.addEventListener("keydown", keyDownFunc, false);
// escape.addEventListener("keyup", keyUpFunc, false);

function keyDownFunc() {
  if (escape.key === "Escape") {
    escape.setAttribute("style", "transform: rotate(180deg);");
  }
}
document.addEventListener("keydown", keyDownFunc);

//?     ---------------------------
//?     ------- dblclick ----------
//?     ---------------------------

const changeImg = document.querySelector(".intro img");
changeImg.addEventListener("dblclick", () => {
  changeImg.src = "https://source.unsplash.com/fOFOBKwqdfA";
});

//?     ---------------------------
//?     ---------- keyup ----------
//?     ---------------------------

const body = document.querySelector(".content-section .text-content p");
body.addEventListener("keyup", () => {
  body.style.backgroundColor = "pink";
});

//?     ----------------------------
//?     ---------- scroll ----------
//?     ----------------------------

const paragraph = document.querySelector(".content-destination p");
window.addEventListener("scroll", () => {
  paragraph.style.color = "purple";
});

//?     ---------------------------------------------
//?     ---------- mouseleave & mouseenter ----------
//?     ---------------------------------------------

busImg.addEventListener("mouseleave", () => {
  busImg.style.transform = "scale(1)";
  busImg.style.transition = "transform 1s";
});

busImg.addEventListener("mouseenter", () => {
  busImg.style.transform = "scale(0.7)";
});

//?     --------------------------
//?     ---------- copy ----------
//?     --------------------------

const source = document.querySelector("body");
source.addEventListener("copy", (e) => {
  alert("Hey! Dont be a douche!");
});

//?     ------------------------------
//?     ---------- keypress ----------
//?     ------------------------------

const paragraph = document.querySelector("p");
paragraph.addEventListener("keypress", (event) => {
  paragraph.style.color = "orange";
});
