function lanzardados() {
    let dado1 =  getNumRand(1, 6);
    let dado2 =  getNumRand(1, 6);
    let dado3 =  getNumRand(1, 6);
    let suma = dado1 + dado2 + dado3;

    
    $({ deg: 0 }).animate({ deg: 360 }, {
        duration: 600,
        step: function (now) {
            var scale = (1 * now / 360);
            $('#ImgDado1').css({
                transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
            });
            $('#ImgDado2').css({
                transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
            });
            $('#ImgDado3').css({
                transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
            });
        }
    }); 

    $("#resetear").on( "click", function() {
        location.reload();
      });  



    document.getElementById("ImgDado1").src="../img/dados/"+dado1+".png";
    document.getElementById("ImgDado2").src="../img/dados/"+dado2+".png";   
    document.getElementById("ImgDado3").src="../img/dados/"+dado3+".png";    

    document.getElementById("SumaDados").innerHTML = suma;

    //$('#ImgDado1').attr("src", "../img/dados/"+dado1+".png");
    //$('#SumaDados').html(suma);
    
}