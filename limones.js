let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=25
const ALTURA_PERSONAJE=55
const ACNCHO_PERSONAJE=35

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
}
function dibujarSuelo(){
    ctx.fillStyle="darkgreen";
    ctx.fillRect(0,canvas.clientHeight-ALTURA_SUELO,canvas.clientWidth,ALTURA_SUELO);
}
function dibujarPersonaje(){
    ctx.fillStyle="#265E6E";
    ctx.fillRect(canvas.clientWidth/2,canvas.clientHeight-(ALTURA_SUELO+ALTURA_PERSONAJE),ACNCHO_PERSONAJE,ALTURA_PERSONAJE)
}