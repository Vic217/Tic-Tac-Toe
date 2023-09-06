// Crea modulo de juego con fábrica de jugadores y un módulo de tablero
const moduloDeJuego = (() => {
    let jugadorNuevo = {};
    const crearJugadores = (function (nombre, simbolo) {
        return jugadorNuevo = {nombre, simbolo}
    });

    const moduloGameBoard = (() => {
        const Gameboard = {
            board : [
            ["X", "O", "X"],
            ["O", "X", "O"],
            ["X", "O", "X"]
            ]
        };
    })();
    
    const displayController = (function () {

    })(); 

    return {crearJugadores, gameBoard};
})();


