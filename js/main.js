// pierdra - papel - tijera computadora

// arreglo de las opciones 
const opciones = ["piedra", "papel", "tijera"];

// variables generales
const jugadorPantalla = document.getElementById("jugadorPantalla");
const compuPantalla = document.getElementById("compuPantalla");
const resultadoPantalla = document.getElementById("resultadoPantalla");

function jugar(opcionJugador){
    // generar la opcion de la computadora random 
    const opcionCompu = opciones[Math.floor(Math.random() * 3)];

    let resultado = "";


    if (opcionJugador === opcionCompu) {
        resultado = 'EMPATE';
    }
    else if ((opcionJugador === 'piedra' && opcionCompu === 'tijera') || (opcionJugador === 'papel' && opcionCompu === 'piedra') || (opcionJugador === 'tijera' && opcionCompu === 'papel')) {
        resultado = 'GANASTE';
    } 
    else {
        resultado = 'PERDISTE';
    }


    jugadorPantalla.textContent = "JUGADOR:" + opcionJugador;
    compuPantalla.textContent = "COMPUTADORA:" + opcionCompu;
    resultadoPantalla.textContent = resultado;

    resultadoPantalla.classList.remove("textoVerde","textoRojo")

    switch (resultado){
        case "GANASTE":
            resultadoPantalla.classList.add("textoVerde");
            break;
        case "PERDISTE":
            resultadoPantalla.classList.add("textoRojo");
            break;
    }
}