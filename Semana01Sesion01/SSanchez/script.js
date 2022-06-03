//alert("otro mensaje");

var edad = 39;
console.log(edad);
edad = 45;
console.log(edad);

let nombre = "Sebastian";
console.log(nombre);

const pi = 3.1416;
console.log(pi);

let nombreClienteNacional = "Sebastian";
let nombreClienteExtranjero = "Joseph";

console.log(nombreClienteNacional);
console.log(nombreClienteExtranjero);

nombreClienteNacional = true;
console.log(nombreClienteNacional);

let frutas = [22,33,555,777];
console.log(frutas[2]);
console.log(frutas[0]);

console.log(frutas);

frutas.push(99);

console.log(frutas);

let sabores = ["salado","dulce"];

frutas.push(sabores);

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
    nombre: "Sebastian",
    apellido: "Sanchez",
    email: "seb.josa7@gmail.com",
    dni: "72543041"
}

let arrClientes = [];

console.log(objCliente);
arrClientes.push(objCliente);

console.log(objCliente.nombre);
console.log(arrClientes);

objCliente.nombre = "David";
objCliente.apellido = "Lopez"
objCliente.dni = "45673019"
objCliente.email = "dlopez@x-codec.net"

arrClientes.push(objCliente)
//alert(arrClientes);
//alert(objCliente.nombre)

console.log(objCliente);

console.log(objCliente.nombre);

let arrAnimales = ["perro","gato","raton","pez dorado"];

console.log("hola" + arrAnimales[0]);
console.log("hola" + arrAnimales[1]);
console.log("hola" + arrAnimales[2]);
console.log("hola" + arrAnimales[3]);

for (let index = 0; index < arrAnimales.length; index++) {
    const element = arrAnimales[index];
    console.log("hola" + element);
}

arrAnimales.forEach(element => {
    console.log("hola" + element);
});

for (const iterator of arrAnimales) {
    console.log("hola" + iterator);
}

let condition = true;
let i = 0
while(condition) {
    if(arrAnimales[i] == "Perro"){
        condition = false;
    }
    i++;
}