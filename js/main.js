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

    if(opcionJugador === opcionCompu){
        resultado = "¡EMPATE!";
    }
    else{
        switch(resultado){
            case "piedra":
                resultado = (opcionCompu === "piedra") ? "GANASTE" : "PERDISTE";
                break;

            case "piedra":
                resultado = (opcionCompu === "papel") ? "GANASTE" : "PERDISTE";
                break;

            case "piedra":
                resultado = (opcionCompu === "tijera") ? "GANASTE" : "PERDISTE";
                break;
        }
    }

    jugadorPantalla.textContent = "JUGADOR:" + opcionJugador;
    compuPantalla.textContent = "COMPUTADORA:" + opcionCompu;
    resultadoPantalla.textContent = resultado;

    switch (resultado){
        case "GANASTE":
            resultadoPantalla.classList.add("textoVerde");
            break;
        case "PERDISTE":
            resultadoPantalla.classList.add("textoRojo");
            break;
    }
}