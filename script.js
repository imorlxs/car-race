var l = document.getElementById("contador");
var movimientorojo = 200;
var movimientoazul = 200;
var bug = 0;
var pulsado = false;
var cambiarrojo = document.getElementById("cocherojo");
var cambiarazul = document.getElementById("cocheazul");
document.getElementById("boton").addEventListener("click", comenzar);
document.addEventListener("keyup", moverRojo);
document.addEventListener("keyup", moverAzul);

function comenzar() {
  if (player1.value != "" && player2.value != "") {
    document.getElementById("error").style = "display: none;";
    cambiarrojo.style = "left: 200px;";
    cambiarazul.style = "left: 200px;";
    movimientoazul = 200;
    movimientorojo = 200;
    pulsado = true;
    document.getElementById("boton").removeEventListener("click", comenzar);
    document.getElementById("victoria").innerHTML = "";
    segundos();
    l.innerHTML = 0 + " seg";
  } else {
    document.getElementById("error").style = "display: inline;";
    pulsado = false;
  }
}

function moverRojo(e) {
  var x = e.keyCode;
  if (
    movimientorojo < 900 &&
    x == 83 &&
    pulsado == true &&
    movimientoazul < 900
  ) {
    movimientorojo += 10;
    cambiarrojo.style = "left: " + movimientorojo + "px";
  }
}
function moverAzul(event) {
  var y = event.keyCode;
  if (
    movimientoazul < 900 &&
    movimientorojo < 900 &&
    y == 76 &&
    pulsado == true
  ) {
    movimientoazul += 10;
    cambiarazul.style = "left: " + movimientoazul + "px";
  }
}

function segundos() {
  n = 1;

  let intervalo = setInterval(function () {
    if (movimientoazul == 900) {
      document.getElementById("victoria").innerHTML =
        "El ganador es " + player2.value;
      pulsado = false;
      document.getElementById("boton").addEventListener("click", comenzar);
      clearInterval(intervalo);
      n--;
    }
    if (movimientorojo == 900) {
      document.getElementById("victoria").innerHTML =
        "El ganador es " + player1.value;
      pulsado = false;
      document.getElementById("boton").addEventListener("click", comenzar);
      clearInterval(intervalo);
      n--;
    }

    l.innerHTML = n + " seg";
    n++;
  }, 1000);
}