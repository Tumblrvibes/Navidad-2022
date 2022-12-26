function reproducir(){
    var audio = document.getElementById("audio");
    var boton = document.getElementById("boton");

    if(boton.value == "play"){
        audio.play();
        boton.value = "pause";
    }
    else{
        audio.pause();
         boton.value = "play";

}
}
