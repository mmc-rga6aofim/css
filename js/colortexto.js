var elementos = document.getElementsByClassName('color-change');

for (var i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener('mouseover', function() {
    for (var j = 0; j < elementos.length; j++) {
      elementos[j].classList.add('hover-effect');
    }
  });

  elementos[i].addEventListener('mouseout', function() {
    for (var j = 0; j < elementos.length; j++) {
      elementos[j].classList.remove('hover-effect');
    }
  });
}
