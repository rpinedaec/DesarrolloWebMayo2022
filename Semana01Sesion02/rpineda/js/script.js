//Semana 01 Sesion 02
var edad = 39;
console.log(edad);
edad = 45;
console.log(edad);

let nombre = "Roberto"
console.log(nombre);

nombre = "David"
console.log(nombre);

const pi = 3.1416

console.log(pi)

//pi = 3.4444
let nombreClienteNacional = "Roberto";
let nombreClienteExtrangero = "David";

console.log(nombreClienteNacional);
console.log(nombreClienteExtrangero);

nombreClienteNacional = true;
console.log(nombreClienteNacional);

let frutas = [22,33,555,777];
console.log(frutas[2]);
console.log(frutas[0]);

console.log(frutas);

frutas.push(99);

console.log(frutas);

let sabores = ["Salado", "Dulce"];

frutas.push(sabores);

console.log(frutas);

frutas.unshift(11);
console.log(frutas);
frutas.shift();
console.log(frutas);
frutas.pop();
console.log(frutas);

console.log(frutas.indexOf(555));
console.log(frutas.reverse());

let productos = "zapatos|correas|pantalones";
let arrProductos = productos.split("|")
console.log(arrProductos);
arrProductos.splice(0,2);
console.log(arrProductos);

let objCliente = {
    nombre: "Roberto",
    apellido: "Pineda",
    email: "rpineda@x-codec.net",
    dni: "001575290"
}

let arrClientes = [];

console.log(objCliente);
arrClientes.push(objCliente);

console.log(objCliente.nombre);
console.log(arrClientes);

objCliente.nombre = "David";
objCliente.apellido = "Lopez"
objCliente.dni = "001575293"
objCliente.email= "dlopez@x-codec.net"

arrClientes.push(objCliente)
//alert(arrClientes);
//alert(objCliente.nombre);
console.log(objCliente);

console.log(objCliente.nombre);

let arrAnimales=["Perro","gato","raton","pez dorado"];
console.log("hola "+ arrAnimales[0])
console.log("hola "+ arrAnimales[1])
console.log("hola "+ arrAnimales[2])
console.log("hola "+ arrAnimales[3]) 


for (let index = 0; index < arrAnimales.length; index++) {
    const element = arrAnimales[index];
    console.log("Hola " + element);
}
 arrAnimales.forEach(element => {
    console.log("Hola " + element);
 });


for (const iterator of arrAnimales) {
    console.log("Hola " + iterator);
}

let condition = true;
let i =0
while (condition) {
   if( arrAnimales[i] == "raton"){
       condition = false;
   }
   i++;
}







