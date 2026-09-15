let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=25
const ALTURA_PERSONAJE=55
const ACNCHO_PERSONAJE=35

let personajeX=canvas.clientWidth/2 

function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight)
}
function actualizarPantalla(){
    limpiarCanvas();
    dibujarPersonaje();
    dibujarSuelo();
}
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
    ctx.fillRect(personajeX,canvas.clientHeight-(ALTURA_SUELO+ALTURA_PERSONAJE),ACNCHO_PERSONAJE,ALTURA_PERSONAJE)
}
function moverIzquierda(){
    personajeX=personajeX-20
    actualizarPantalla();
}
function moverDerecha(){
    personajeX=personajeX+20
    actualizarPantalla();
}