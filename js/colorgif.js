function invertBackground(invert) {
  var header = document.getElementById("header");
  var flotantes = document.querySelectorAll(".flotante1, .flotante2, .flotante3, .flotante4");

  if (invert) {
    header.classList.add("inverted");
    flotantes.forEach(function(element) {
      element.classList.add("inverted");
    });
  } else {
    header.classList.remove("inverted");
    flotantes.forEach(function(element) {
      element.classList.remove("inverted");
    });
  }
}

