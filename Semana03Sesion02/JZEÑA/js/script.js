
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
            <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="image-flip">
                <div class="mainflip flip-0">
                    <div class="frontside">
                        <div class= `
            if (usuarios[i].gender == "male") {
                datos += '"male"'
            } else {
                datos += '"female"'
            }
            datos += `
                >
                <div class="card-body text-center">
                <p>
                    <img class=" img-fluid radius" src="${data[i].picture.large}" alt="card image">
                </p>
                <h4 class="card-title">${data[i].name.title} ${data[i].name.first} ${data[i].name.last}</h4>
                <p class="card-text">Email: ${data[i].email}<br> Pais: ${data[i].location.country}<br> Ciudad: ${data[i].location.city}</p>
                <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm">
                    <i class="fa fa-plus"></i>
                </a>
                </div>
                </div>
                </div>
                <div class="backside">
                <div class= `
            if (usuarios[i].gender == "male") {
                datos += '"male"'
            } else {
                datos += '"female"'
            }
            datos += `
                >
            <div class="card-body text-center mt-4">
            <h4 class="card-title">${data[i].gender}</h4>
            <p class="card-text">${data[i].cell}
                <br>"${data[i].nat} 
            </p>
            <ul class="list-inline">
                <li class="list-inline-item">
                    <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                        <i class="fa fa-facebook"></i>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                        <i class="fa fa-twitter"></i>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                        <i class="fa fa-skype"></i>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                        <i class="fa fa-google"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
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
