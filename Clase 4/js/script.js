let jugar = document.getElementById("jugar");
let intentos = 0;
let totalPuntaje = 0;

jugar.addEventListener("click",function(){
    console.log(intentos);
    
    if(intentos<3){
        $("#exampleModal").modal('show');
        let resultado = getRandomInt(1,6);
        console.log(resultado);

        setTimeout(() => {
            
            intentos ++;
            $("#dado"+intentos).attr('src', "img/"+resultado+".jpg");
            $("#intento" + intentos).text(intentos);
            $("#valor" + intentos).text(resultado);
            let puntaje = document.getElementById("puntaje"+intentos);
            puntaje.innerText= resultado;
            totalPuntaje = totalPuntaje + resultado;
            let total = document.getElementById("total");
            total.innerText = totalPuntaje;
            
            $("#exampleModal").modal('hide');
        }, 2000);
    }
    else{
        alert("intentos completos");
    }
});
