let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTO_SUELO=25;
const ALTO_PERSONAJE=60;
const ANCHO_PERSONAJE=35;
const ANCHO_LIMON=15;
const ALTO_LIMON=15;

let personajeX=canvas.clientWidth/2;
let personajeY=canvas.clientHeight-(ALTO_SUELO+ALTO_PERSONAJE);
let limonX=canvas.clientWidth/2;
let limonY=5;
let puntaje=0;
let vidas=3;
let velocidadLimon=200

function iniciar(){
    setInterval(bajarLimon,velocidadLimon);
    dibujarSuelo();
    dibujarPersonaje();
    aparecerLimon();
}

function reiniciar(){
    puntaje = 0;
    vidas = 3;
    personajeX = canvas.clientWidth/2;
    mostrarEnSpan("txtPuntaje", puntaje);
    mostrarEnSpan("txtVidas", vidas);
    aparecerLimon();
    actualizarPantalla();
}

function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight)
}

function actualizarPantalla(){
    limpiarCanvas();
    dibujarPersonaje();
    dibujarSuelo();
    dibujarLimon();
}

function dibujarSuelo(){
    ctx.fillStyle="darkgreen";
    ctx.fillRect(0,canvas.clientHeight-ALTO_SUELO,canvas.clientWidth,ALTO_SUELO);

    if(vidas==0){
        alert("GAME OVER");
    }
}

function dibujarPersonaje(){
    ctx.fillStyle="#265E6E";
    ctx.fillRect(personajeX,personajeY,ANCHO_PERSONAJE,ALTO_PERSONAJE)
}

function dibujarLimon(){
    ctx.fillStyle="#45b329";
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTO_LIMON);
}

function aparecerLimon(){
    limonX=generarRandom(0,canvas.clientWidth-ANCHO_LIMON);
    limonY=5;
    actualizarPantalla();
}

function bajarLimon(){
    limonY=limonY+10;
    actualizarPantalla();
    detectarColision();
    detectarSuelo();
}

function detectarColision(){
    if(limonX+ANCHO_LIMON>personajeX && limonX<personajeX+ANCHO_PERSONAJE && limonY+ALTO_LIMON>personajeY && limonY<personajeY+ALTO_PERSONAJE){
        aparecerLimon();
        puntaje=puntaje+1;
        mostrarEnSpan("txtPuntaje", puntaje);
    }
}

function detectarSuelo(){
    if(limonY+ALTO_LIMON>=canvas.clientHeight-ALTO_SUELO){
        aparecerLimon();
        vidas=vidas-1;
        mostrarEnSpan("txtVidas",vidas);
    }
}


function moverIzquierda(){
    personajeX=personajeX-10
    actualizarPantalla();
    detectarColision();
}

function moverDerecha(){
    personajeX=personajeX+10
    actualizarPantalla();
    detectarColision();
}
