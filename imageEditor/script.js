const img = document.getElementById("image");
img.src && (img.style.display = "none");

function upimage() {
  const file = document.getElementById("upload").files[0];
  const fileURL = URL.createObjectURL(file);
  img.style.display = "block";
  img.src = fileURL;
  document.getElementById("labelID").style.display = "none";
}
