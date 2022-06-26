var modal = document.getElementById("myModal");
var modalProfessor = document.getElementById("myModal-professor");
var modalUsuario = document.getElementById("myModal-usuario");

var btn = document.getElementById("myBtn");
var btnProfessor = document.getElementById("myBtn-professor");
var btnUsuario = document.getElementById("myBtn-usuario");

var span = document.getElementsByClassName("close")[0];
var spanProfessor = document.getElementsByClassName("close-professor")[0];
var spanUsuario = document.getElementsByClassName("close-usuario")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
btnProfessor.onclick = function() {
  modalProfessor.style.display = "block";
}
spanProfessor.onclick = function() {
  modalProfessor.style.display = "none";
}
btnUsuario.onclick = function() {
  modalUsuario.style.display = "block";
}
spanUsuario.onclick = function() {
  modalUsuario.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal || event.target == modalProfessor) {
    modal.style.display = "none";
    modalProfessor.style.display = "none";
    modalUsuário.style.display = "none";
  }
}