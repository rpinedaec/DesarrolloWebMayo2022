/* tipo obajeto */
let ObjUsuario = {
    nombre: "juan",
    apellido: "venegas",
    email: "venegas@gmail.com",
    DNI: "7451823"
}
console.log(ObjUsuario)


/* tipo array */
let ArrCliente = [1, 2, 3, 4, 5, 6];
console.log(ArrCliente);

/* boocles */
let ArrAmimales = ["gato", "perro", "leon", "zorro", "pepito"];
console.log("hola insecto Tu eres " + ArrAmimales[3])

ArrAmimales.forEach(element => {
    console.log("hola insecto Tu eres " + element)
});

/* boocle con while */
// let condition = true
// let i = 0
// while (condition) {
//     if (ArrAmimales[i] == "pepito") {
//         condition = false;

//     }
//     i++;

// }