let jugar = document.getElementById("jugar");
let intentos = 0;
let puntajeTotal = 0;

$("#resetear").on("click", function(){
    location.reload();
});

jugar.addEventListener("click",function(){
    if(intentos < 3){
        
        $("#exampleModal").modal('show');
        let resultado = getRandomInt(1,6);
        console.log(resultado)
        setTimeout(()=>{
            intentos++;

            $("#dado" + intentos).attr('src',"./img/"+resultado+".jpeg");
            $("#intento" + intentos).text(intentos);
            $("#resultado" + intentos).text(resultado);
            
            let puntaje = document.getElementById("puntaje" + intentos);
            puntaje.innerText = resultado;
            puntajeTotal = puntajeTotal + resultado;

            $("#total").text(puntajeTotal);
  
            if(puntajeTotal <=  5){
                $("#total").parents("tr").css("background-color", "red")
            }else if(puntajeTotal <=  11){
                $("#total").parents("tr").css("background-color", "yellow")
            }else{
                $("#total").parents("tr").css("background-color", "green")
            }

            $("#exampleModal").modal('hide');
        }, 3000);
        
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Intentos Completos',
          })
    }
});


function getRandomInt(min,max){
    return Math.floor(Math.random()*(max-min)) + min;
}