let titulo = document.getElementById("h1Titulo");
let textoTitulo = titulo.innerText;
console.log(textoTitulo);
titulo.innerText = "Este es otro titulo desde java script";
titulo.classList.add("h1Titulo")
titulo.classList.remove("h1Titulo") 

let tarjeta = document.getElementById("tarjeta");
let imagen = document.createElement("img");
imagen.setAttribute("src","img/logo-casa-verde.png");
imagen.setAttribute("width", "500px")
tarjeta.appendChild(imagen);

let bitacora = document.getElementById("bitacora")
let boton = document.getElementById("inicio");
boton.addEventListener("click",function(){
   console.log("Se inicio el programa");
   bitacora.innerText = "inicio";
   setTimeout(function(){
        console.log("procesando");
        bitacora.innerText = "ya me levante";
    }, 1000);
    if(bañarse()){
       } 
}); 

function desayuno(){
    bitacora.innerText = "verificar si hay pan";
    setTimeout(function(){
        bitacora.innerText = "se verifico que haya pan"
    },3000)
}

function bañarse(){

try {
    setTimeout(function(){
        console.log("buscar la ropa")
        bitacora.innerText = "buscar la ropa";
    }, 5000);
    setTimeout(function(){
        console.log("yendo al baño")
        bitacora.innerText = "yendo al baño";
    }, 2000);
    setTimeout(function(){
        console.log("verificar la temperatura del agua")
        bitacora.innerText = "verificar la temperatura del agua";
    }, 3000);
    setTimeout(function(){
        console.log("nos bañamos")
        bitacora.innerText = "bañandose";
    }, 5000);
    return true;
    
} catch (error) {
    console.error(error);
    
}

    
}
let operaciones = document.getElementById("operaciones");
let resultados  = document.getElementById("resultados");

operaciones.addEventListener("click", function(){
    let a = 0;
    let b = 0

    if(a==b){
        resultados.innerText= "Verdadero";
    }
});