
let usuarios;
var $table = $('#tblResultados');
let usuariosAgregados = [];

$("#buscar").on("click", function () {
    let url = "https://randomuser.me/api/?results=10";
    fetch(url)
        .then((response) => response.json())
        .then(
            (respuesta) => {
                console.log(respuesta)
                usuarios = respuesta.results;
                console.log(usuarios);
                $table.bootstrapTable({ data: usuarios })
                cargarSelect(usuarios);
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

function operateFormatter(value, row, index) {
    return [
        '<a class="like btn btn-primary" href="javascript:void(0)" title="Like">',
        'Agregar <i class="fa-solid fa-plus"></i>',
        '</a>  ',
        '<a class="remove btn btn-danger" href="javascript:void(0)" title="Remove">',
        '<i class="fa-solid fa-trash-can"></i>' ,
        '</a>'
    ].join('')
}
window.operateEvents = {
    'click .like': function (e, value, row, index) {
        usuariosAgregados.push(row);

    },
    'click .remove': function (e, value, row, index) {
        removeItemFromArr(usuariosAgregados, row);
    }
}
function removeItemFromArr(arr, item) {
    return arr.filter(function (e) {
        return e !== item;
    });
};

$("#verDatos").on("click", function () {
    console.log(usuariosAgregados)
    let html = '';
    usuariosAgregados.forEach(element => {
        html += 
        `
        <div class="col-xs-12 col-sm-6 col-md-4 mt-3"> 
            <div class=`
            element.gender == "male" ? html += '"classMale"' : html += '"classFemale"';
        html +=             `>
                <div class="card">
                    <div class="card-body">
                        <img class= `
                        element.gender == "male" ? html += '"classMale"' : html += '"classFemale "';
                        
        html +=         `src="${element.picture.large}" alt="Card image" style="width:100%">
                        <h4 class="card-title mt-3 d-flex justify-content-center">${element.name.title} ${element.name.first} ${element.name.last}</h4>
                        <p class="card-text mt-3 d-flex justify-content-center">${element.email}</p>
                        <div class="redesSociales">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div>
            
        </div> 
        `;
        $("#teams").html(html);
    });
});



$(document).ready(function () {
    $('.selectBootstrap').select2();
});