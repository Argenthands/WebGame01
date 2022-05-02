document.getElementById("player1").addEventListener("mouseover",sumarPuntos)
let puntos = 0;
let tiempo = 5

function sumarPuntos(){
    puntos++
    document.getElementById("puntos").innerHTML ="<b>" + puntos + "</b>";
    randomNumberTop = (Math.floor(Math.random() * (70 - 1)) + 1);
    randomNumberLeft = (Math.floor(Math.random() * (90 - 1)) + 1);
    document.getElementById("player1").style.marginTop = randomNumberTop + "vh";
    document.getElementById("player1").style.marginLeft = randomNumberLeft + "vh";
}

function restarTiempo(){
    if(tiempo > 0){
        tiempo --
    }
    document.getElementById("tiempo").innerHTML ="<b>" + tiempo + "</b>";
    if (tiempo == 0){
        document.getElementById("player1").removeEventListener("mouseover",sumarPuntos);
        document.getElementById("player1").innerHTML = "<h1>GAME OVER</h1>";
        document.getElementById("player1").style.background = "none";
        document.getElementById("player1").style.border = "none";
    }
}

setInterval(restarTiempo,1000);
