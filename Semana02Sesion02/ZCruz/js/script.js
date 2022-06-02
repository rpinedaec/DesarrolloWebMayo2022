let jugar = document.getElementById("jugar");
let intentos = 0;
let totalPuntaje = 0;
$("#resetear").on("click", function () {
    location.reload();
});

jugar.addEventListener("click", function () {
    console.log(intentos);

    if (intentos < 3) {
        $("#exampleModal").modal('show');
        let resultado = getRandomInt(1, 6);
        console.log(resultado);
        setTimeout(() => {

            intentos++;
            $("#dado" + intentos).attr('src', "img/" + resultado + ".png");
            $("#intento" + intentos).text(intentos);
            $("#valor" + intentos).text(resultado);
            let puntaje = document.getElementById("puntaje" + intentos);
            puntaje.innerText = resultado;
            totalPuntaje = totalPuntaje + resultado;
            let total = document.getElementById("total");
            total.innerText = totalPuntaje;
            if (totalPuntaje <= 5) {
                total.style.color = "white";
                total.style.backgroundColor = "red";
            } else if (totalPuntaje <= 11) {
                total.style.color = "black";
                total.style.backgroundColor = "yellow";
            } else if (totalPuntaje <= 18) {
                total.style.color = "white";
                total.style.backgroundColor = "green";
            }
            $("#exampleModal").modal('hide');
            $("#container").show();
        }, 1000);
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Intentos Completos'
        })
    }

});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}