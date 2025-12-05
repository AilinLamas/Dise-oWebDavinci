alert("¡FELIZ CUMPLEAÑOS FACUNDO!")


function playPausa() {
    const audio = document.getElementById("audio");
    const btn = document.getElementById("btnPlay");

    if (audio.paused) {
        audio.play();
        btn.src="/recursos-audio-visuales/index/boton-de-play.png"; 
    } else {
        audio.pause();
        btn.src="/recursos-audio-visuales/index/boton-de-play.png";
       
    }
}