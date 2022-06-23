$("#ejecutar").on("click", function () {
    console.log("click en ejecutar");
    axios({
        method: 'get',
        url: 'https://randomuser.me/api/?results=10'
      })
        .then(function (response) {
          console.log(response.status);
          if(response.status === 200){
            $("#respuesta").text(JSON.stringify(response.data.results))    
          }
          else{
            console.log("No se ejecuto")
          }
        });
});

$("#mostrar").on("click", function () {
    $("#respuesta").fadeIn(3000);
});

$("#ocultar").on("click", function () {
    $("#respuesta").fadeOut(2000);
});

$("#toggle").on("click", function () {
    $("#respuesta").slideToggle(2000);
});