const img = document.getElementById("image");
img.src && (img.style.display = "none");

function upimage() {
  const file = document.getElementById("upload").files[0];
  const fileURL = URL.createObjectURL(file);
  img.style.display = "block";
  img.src = fileURL;
  document.getElementById("labelID").style.display = "none";
}

let b = 1,
  c = 1,
  g = 0,
  s = 0,
  i = 0;

function applyFilter() {
  document.getElementById("image").style.filter = ` brightness(${b}) 
                                                    contrast(${c}) 
                                                    grayscale(${g}%) 
                                                    sepia(${s}%)
                                                    invert(${i}%)`;
}

function changebrightness() {
  const value = document.getElementById("brightness").value;
  b = (value * 2) / 100;
  applyFilter();
}

function Contrast() {
  const value = document.getElementById("Contrast").value;

  b = (value * 2) / 100;
  applyFilter();
}

function Grayscale() {
  const value = document.getElementById("Grayscale").value;
  b = (value * 2) / 100;
  applyFilter();
}

function Sepia() {
  const value = document.getElementById("Sepia").value;
  b = (value * 2) / 100;
  applyFilter();
}

function Saturate() {
  const value = document.getElementById("Saturate").value;
  b = (value * 2) / 100;
  applyFilter();
}

function rotate() {
  const value = document.getElementById("rotate").value;
  b = (value * 2) / 100;
  applyFilter();
}
function Blur() {
  const value = document.getElementById("Blur").value;
  b = (value * 2) / 100;
  applyFilter();
}
function Invert() {
  const value = document.getElementById("Saturate").value;
  b = (value * 2) / 100;
  applyFilter();
}