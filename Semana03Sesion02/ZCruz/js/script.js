
let usuarios;
var $table = $('#tblResultados');
let usuariosAgregados = [];

$("#buscar").on("click", function () {
    let url = "https://randomuser.me/api/?results=10";
    fetch(url)
        .then((response) => response.json())
        .then((respuesta) => {
            console.log(respuesta)
            usuarios = respuesta.results;
            console.log(usuarios);
            $table.bootstrapTable({ data: usuarios });

        }
        )
        .catch(console.error())
});


function nameFormatter(value, row) {
    //console.log(value)
    //console.log(row)
    return value.first + " " + value.last;
}


function cargarSelect(data) {

    let arrUnicos = removeDuplicates(data, "nat");
    let arrNat = [];
    arrUnicos.forEach(element => {
        arrNat.push(element.nat);
    });
    $(".selectBootstrap").select2({
        data: arrNat
    })

}

function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    return newArray;
}

$('#opciones').on('change', function () {
    let filtro = this.value;
    let filteredValue = usuarios.filter(function (item) {
        return item.nat == filtro;
    });
    $table.bootstrapTable('removeAll')
    $table.bootstrapTable('load', filteredValue)

});


window.operateEvents = {
    'click .like': function (e, value, row, index) {
        usuariosAgregados.push(row);
    },
}
function removeItemFromArr(arr, item) {
    return arr.filter(function (e) {
        return e !== item;
    });
};



$("#verDatos").on("click", function () {
    const mostrardatos = (data) => {
        let datos = '';

        for (let i = 0; i < data.length; i++) {
            console.log(data[i].gender == "male");

            datos += `
            <div class= `
            if (usuarios[i].gender == "male") {
                datos += '"male" "card"'
            } else {
                datos += '"female" "card"'
            }
            datos += `
                >
                <div class="contentBx" id="teams">
                <div class="content">
                    <h2>${data[i].name.title} ${data[i].name.first} ${data[i].name.last}
                        <br>
                        <span>
                            <p>DNI: ${data[i].id.value} </p>
                        </span>
                    </h2>
                    <div class="imgBx">
                        <img src="${data[i].picture.large}" alt="">
                    </div>
                    <div class="info">
                        <span>City: ${data[i].location.city}<br> Pais: ${data[i].location.country} <br> Celular: ${data[i].phone} <br> Correo: ${data[i].email}</span>
                    </div>
                    <button>
                    <ul class="list-inline red"> 
                    <li class="list-inline-item"> <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02"> <i class="fa fa-facebook"></i> </a> </li> 
                    <li class="list-inline-item"> <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02"> <i class="fa fa-twitter"></i> </a> </li> 
                    <li class="list-inline-item"> <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02"> <i class="fa fa-skype"></i> </a> </li> 
                    <li class="list-inline-item"> <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02"> <i class="fa fa-google"></i> </a> </li>
                    </ul>
                    </button>
                </div>
            </div>
        </div>
                `
        }

        $("#teams").html(datos);
    }
    mostrardatos(usuarios);

});

$("#resetear").on("click", function () {
    $("#teams").html("");
    usuariosAgregados = [];

});

$(document).ready(function () {
    $('.selectBootstrap').select2();
});