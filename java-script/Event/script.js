function on() {
  document.getElementById("bulb").style.background = "yellow";
}

function off() {
  document.getElementById("bulb").style.background = "white";
}

function blue() {
  document.getElementById("bulb").style.background = "blue";
}
function balck() {
  document.getElementById("bulb").style.background = "black";

  const color = document.getElementById("color");

}

function smartBulb() {
  const btn = document.getElementById("smartbtn");
//   document.getElementById("smartBulb").classList.toggle("on");
  if (btn.innerText === "On") {
    document.getElementById("smartbtn").innerText = "Off";
  } else {
    document.getElementById("smartbtn").innerText = "On";
  }
}
