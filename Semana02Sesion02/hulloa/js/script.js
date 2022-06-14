let jugar = document.getElementById("jugar");
let intentos = 0;
let totalPuntaje = 0;
let total = document.getElementById("total");
$("#resetear").on("click", function () {
  location.reload();
});

jugar.addEventListener("click", function () {
  console.log(intentos);

  if (intentos < 3) {
    $("#exampleModal").modal("show");
    let resultado = getRandomInt(1, 6);
    console.log(resultado);
    setTimeout(() => {
      intentos++;
      $("#dado" + intentos).attr("src", "img/" + resultado + ".jpeg");
      $("#intento" + intentos).text(intentos);
      $("#valor" + intentos).text(resultado);
      let puntaje = document.getElementById("puntaje" + intentos);
      puntaje.innerText = resultado;
      totalPuntaje = totalPuntaje + resultado;

      total.innerText = totalPuntaje;
      changeColor(totalPuntaje);

      $("#exampleModal").modal("hide");
      $("#container").show();
    }, 5000);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Intentos Completos",
    });
  }
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function changeColor(n) {
  if (n <= 5) {
    total.classList.add("red");
  } else if (n <= 11) {
    total.classList.add("yellow");
  } else if (n <= 18) {
    total.classList.add("green");
  }
}













