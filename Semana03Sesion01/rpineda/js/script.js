$("#ejecutar").on("click", function () {
    //alert("Se ejecuto");
    let url = "//api.github.com/users/rpinedaec";
    fetch(url)
        .then((response) => response.json())
        .then(
            (respuesta) => {
                console.log(respuesta.avatar_url)
                $("#resultados").append("<img id='theImg' src='" + respuesta.avatar_url + "'/>");
                $("#resultados").append("<h1>" + respuesta.name + "</h1>")
            }
        )


        .catch(console.error())
});

$("#clima").on("click", function () {
    //alert("Se ejecuto");
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
            'X-RapidAPI-Key': '1CIFo95k8NmshGrZw6jhJgFBVcxjp1km7hojsnFzYUhzUKSWPE'
        }
    };

    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Lima', options)
        .then(response => response.json())
        .then(
            (respuesta) => {
                console.log(respuesta)
                $(".temp-value").text(respuesta.current.temp_c);
                $(".location").text(respuesta.location.name + " , " + respuesta.location.country);
                $(".heading").text(respuesta.current.condition.text);


            }
        )
        .catch(err => console.error(err));
});

$("#climaAjax").on("click", function () {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://weatherapi-com.p.rapidapi.com/current.json?q=Lima",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
            "X-RapidAPI-Key": "1CIFo95k8NmshGrZw6jhJgFBVcxjp1km7hojsnFzYUhzUKSWPE"
        }
    };

    $.ajax(settings).done(function (respuesta) {
        console.log(respuesta);
        $(".temp-value").text(respuesta.current.temp_c);
        $(".location").text(respuesta.location.name + " , " + respuesta.location.country);
        $(".heading").text(respuesta.current.condition.text);
    });
});

$("#climaAxios").on("click", function () {


    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    xhr.open("GET", "https://weatherapi-com.p.rapidapi.com/current.json?q=Lima");
    xhr.setRequestHeader("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com");
    xhr.setRequestHeader("X-RapidAPI-Key", "1CIFo95k8NmshGrZw6jhJgFBVcxjp1km7hojsnFzYUhzUKSWPE");

    xhr.send(data);
});