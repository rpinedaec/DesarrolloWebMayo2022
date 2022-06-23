$(document).ready(function(){

    $('#info-1').click(function(){
        $("#exampleModal1").modal('show');
    })
    $('#info-2').click(function(){
        $("#exampleModal2").modal('show');
    })
    $('#info-3').click(function(){
        $("#exampleModal3").modal('show');
    })

     //cancelando el evento submit.
    $("#form").on('submit', function(evt){
        evt.preventDefault();  
     });

    
    $('#suscribete').click(function(){
        //validacion de formulario..
        let email = $('#emailAddress').val();
        let name = $('#name').val();

        if(email === "" | name === ""){
            $("#exampleModal4").toast('show');
        }else{
            (this).innerHTML="<div class='d-flex justify-content-center'><div class='spinner-border' role='status'> </div></div>"
            setTimeout(()=>{
                (this).innerHTML="Se envio la informacion, Gracias"
            },2000);
        }
    })

    //scroll top
    var top = $('#btn-top');
    top.click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},50);
    })
    top.hide();

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            top.fadeIn();
        }else{
            top.hide();
        }
    });



    AOS.init();
})