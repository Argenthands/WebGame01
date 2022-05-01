document.getElementById("player").addEventListener("click",sumarPuntos)
puntos = 0;
function sumarPuntos(){
    puntos++
    document.getElementById("puntos").innerHTML = puntos
}