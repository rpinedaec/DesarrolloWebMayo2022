let jugar = document.getElementById("BtnJugar");
let = intentos = 0;
var puntajetotal = 0;
jugar.addEventListener("click", function() {
    // console.log(intentos)
    if (intentos < 3) {

        $("#Modal").modal('show');

        let resultado = SuerteAleatoria(1, 6);
        // console.log(resultado);
        setTimeout(() => {
            intentos++;
            $("#dado" + intentos).attr('src', "imgPng/" + resultado + ".png");
            // $("#intento" + intentos).text(intentos);
            $("#valor" + intentos).text(resultado);

            let puntaje = document.getElementById("Puntaje" + intentos);
            puntaje.innerText = resultado;
            puntajetotal = puntajetotal + resultado;
            let total = document.getElementById("Total")
            total.innerText = puntajetotal;

            $("#Modal").modal('hide');
            $("#container").show();
            Color();
        }, 5000);

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Intentos Completados!!!',
            imageUrl: 'imgPng/mm.png',
            imageWidth: 450,


        })

    }
});

function Color() {
    let elemento_total = document.getElementById("Total")
    let totalpuntos = document.getElementById("TotalPuntos")
    if (puntajetotal <= 5) {
        elemento_total.classList.remove("rojo", "amarillo");
        elemento_total.classList.add("rojo");
        totalpuntos.classList.add("rojo");
    }
    if (puntajetotal > 5 && puntajetotal <= 11) {
        elemento_total.classList.remove("amarillo", "verde");
        elemento_total.classList.add("amarillo");
        totalpuntos.classList.add("amarillo");
    }
    if (puntajetotal > 11 && puntajetotal <= 18) {
        elemento_total.classList.remove("verder", "verde");
        elemento_total.classList.add("verde");
        totalpuntos.classList.add("verde");
    }

}

function SuerteAleatoria(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
/* refrescar pantalla */
$("#BtnRefrescar").on("click", function() {
    location.reload();
});