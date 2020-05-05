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

// document.querySelectorAll('img')
