function invertBackground(invert) {
  var header = document.getElementById("header");
  if (invert) {
    header.classList.add("inverted");
  } else {
    header.classList.remove("inverted");
  }
}