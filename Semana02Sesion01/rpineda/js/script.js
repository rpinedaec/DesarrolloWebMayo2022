let titulo = document.getElementById("h1Titulo");
let textoTitulo = titulo.innerText;
console.log(textoTitulo);
titulo.innerText = "Este es otro titulo desde java script";
titulo.classList.add("h1Titulo");
titulo.classList.remove("h1Titulo");

let tarjeta = document.getElementById("tarjeta");
let imagen = document.createElement("img");
imagen.setAttribute("src","img/logo.png");
imagen.setAttribute("width", "500px")
tarjeta.appendChild(imagen);



let bitacora = document.getElementById("bitacora")
let boton = document.getElementById("inicio");
boton.addEventListener("click",function(){
    console.log("Se inicio el programa");
    bitacora.innerText = "Inicio";
    setTimeout(function(){
        console.log("Procesando");
        bitacora.innerText = "Ya me levante";
    }, 1000);  
   if( bañarse()){
    desayuno();
   }
    
    
});

function desayuno(){
    bitacora.innerText ="verificar si hay pan";
    setTimeout(function(){
        bitacora.innerText = "Se verifico que haya pan"
    },3000) 
}
function bañarse(){

    try {
        setTimeout(function(){
            console.log("buscar la ropa");
            bitacora.innerText = "buscando la ropa";
        }, 5000);
        setTimeout(function(){
            console.log("yendo al baño");
            bitacora.innerText ="yendo al baño";
        }, 2000);
        setTimeout(function(){
            console.log("verificar la temperatura del agua");
            bitacora.innerText("verificando la temperatura del agua");
        }, 3000);
        setTimeout(function(){
            console.log("nos bañamos");
            bitacora.innerText="Bañandose";
        }, 5000);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }

    
}
let operaciones = document.getElementById("operaciones");
let resultados  = document.getElementById("resultados")

operaciones.addEventListener("click", function(){
    let a = 10;
    let b = "10";

    if(a!==b){
        resultados.innerText= "Verdadero";
    }
    else{
        resultados.innerText= "Falso";
    }

});