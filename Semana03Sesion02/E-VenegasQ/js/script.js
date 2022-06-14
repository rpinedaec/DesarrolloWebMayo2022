let usuarios;
var $table = $('#tblResultados');
let usuariosAgregados = [];


$("#buscar").on("click", function() {
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

$('#opciones').on('change', function() {
    let filtro = this.value;
    let filteredValue = usuarios.filter(function(item) {
        return item.nat == filtro;
    });
    $table.bootstrapTable('removeAll')
    $table.bootstrapTable('load', filteredValue)

});

function operateFormatter(value, row, index) {
    return [
        '<a class="like" href="javascript:void(0)" title="Like">',
        'Agregar',
        '</a>  ',
        '<a class="Ver" href="javascript:void(0)" title="Ver">',
        'Ver',
        '</a>  '
    ].join('')
}
window.operateEvents = {
    'click .like': function(e, value, row, index) {
        usuariosAgregados.push(row);
    },
    'click .Ver': function(e, value, row, index) {
        console.log("ejecutando");
        Ver(row);
    }
}

function removeItemFromArr(arr, item) {
    return arr.filter(function(e) {
        return e !== item;
    });
};
$("#verDatos").on("click", function() {
    console.log(usuariosAgregados)

    usuariosAgregados.forEach(element => {

        let html = `
        <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="image-flip">
            <div class="mainflip flip-0">
                <div class="frontside">
                    <div class="card">
                        <div class="card-body text-center">
                            <p><img class=" img-fluid " src=" ${element.picture.large} " alt="card image"></p>
                            <h4 class="card-title"> ${element.name.title} ${element.name.first} ${element.name.last}</h4>
                            <p class="card-text">${element.email}</p> <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a> </div>
                    </div>
                </div>
                <div class="backside">
                    <div class="card">
                        <div class="card-body text-center mt-4">
                            <h4 class="card-title">${element.gender}</h4>
                            <p class="card-text">${element.cell}<br>"${element.nat}</p>
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02"> <i class="fa fa-facebook"></i> </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02"> <i class="fa fa-twitter"></i> </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02"> <i class="fa fa-skype"></i> </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02"> <i class="fa fa-google"></i> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
            
            `;
        $("#teams").append(html);

    });
});


$(document).ready(function() {
    $('.selectBootstrap').select2();
});



/* ======== Tarea*/
function Ver(usuarios) {

    console.log(usuarios);
    let border;
    if (usuarios.gender == "male") {
        border = "border__varon"
    }
    if (usuarios.gender == "female") {
        border = "border__mujer"
    }

    let html = `
    <div class="modal-content p-2 border border-secondary border-3  flex-column bg-dark text-light">
        <h3 class=" fw-bold text-center ">CONTACTO</h3>
        <hr class="fw-bold1">
        <div class="modal-body">
            <div class="text-center   ">
                <img class="rounded-circle ${border} " width="180px" src="${usuarios.picture.large}" alt="">
                <h4>${usuarios.gender}</h4>
            </div>
            <div class="p-2  align-items-center text-center flex-column">
                <h3 class="">Nombre: ${usuarios.name.first} ${usuarios.name.last}</h3>
                <h3 class="">Email:  ${usuarios.email} </h3>
            </div>
        </div>
        <div class="modal-footer text-center d-block fs-5 ">
            <h4>Redes Sociales</h4>
            <i class="border-2 border-success bx-border-circle bx bxl-facebook"></i>
            <i class="border-2 border-success bx-border-circle bx bxl-whatsapp"></i>
            <i class="border-2 border-success bx-border-circle bx bxl-twitter"></i>
            <i class="border-2 border-success bx-border-circle bx bxl-instagram"></i>
        </div>
    </div>
        `;
    $("#cuerpo").html(html);
    $("#modalContacto").modal();
}