// INICIALIZA EL TOOLTIP DE BOOSTRAP
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

// FUNCIÓN QUE ME GENERA UN NÚMERO ALEATORIO ENTERO AMBOS INCLUSIVOS
function getNumRand(min, max) {       
    return Math.round(Math.random()*(max-min)+parseInt(min));
}


function fun(){  
    document.getElementById("myForm").reset();  
  }   