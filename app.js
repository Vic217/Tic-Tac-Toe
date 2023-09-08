// Variables de Tablero.
const caja0 = document.getElementById("0");
const caja1 = document.getElementById("1");
const caja2 = document.getElementById("2");
const caja3 = document.getElementById("3");
const caja4 = document.getElementById("4");
const caja5 = document.getElementById("5");
const caja6 = document.getElementById("6");
const caja7 = document.getElementById("7");
const caja8 = document.getElementById("8");

// Eleccion de jugadores
const elecciones = document.getElementById("elecciones");
let primerJugador = document.getElementById("primer_jugador");
let segundoJugador = document.getElementById("segundo_jugador");
const jugarIA = document.getElementById("jugarIA");

// Crea modulo de juego con fábrica de jugadores, un módulo de tablero y control de juego. 
const moduloDeJuego = (() => {
    const crearJugadores = (nombre, simbolo) => {
        return { nombre, simbolo, }
    };

    const moduloGameBoard = (() => {
        const _Gameboard = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];

        const _getGameBoard = () => {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (i == 0 && j == 0) {
                        caja0.textContent = _Gameboard[i][j];
                    } else if (i == 0 && j == 1) {
                        caja1.textContent = _Gameboard[i][j];
                    } else if (i == 0 && j == 2) {
                        caja2.textContent = _Gameboard[i][j];
                    } else if (i == 1 && j == 0) {
                        caja3.textContent = _Gameboard[i][j];
                    } else if (i == 1 && j == 1) {
                        caja4.textContent = _Gameboard[i][j];
                    } else if (i == 1 && j == 2) {
                        caja5.textContent = _Gameboard[i][j];
                    } else if (i == 2 && j == 0) {
                        caja6.textContent = _Gameboard[i][j];
                    } else if (i == 2 && j == 1) {
                        caja7.textContent = _Gameboard[i][j];
                    } else if (i == 2 && j == 2) {
                        caja8.textContent = _Gameboard[i][j];
                    }
                }
            }
        };

        const showBoard = () => {
            _getGameBoard();
        };

        return { showBoard };
    })();

    const mostrarFormulario = () => {
        elecciones.showModal();

        // Formulario
        const _nombre_jugador = document.getElementById("crear-jugador");
        const _x = document.getElementById("x");
        const _o = document.getElementById("o");

        // Eleccion de simbolo por defecto para el primer jugador
        crearJugadores(_nombre_jugador.value, "X");

        _x.addEventListener("click", () => {
            crearJugadores[0] = {nombre: _nombre_jugador.value, simbolo: _x.value};
        });

        _o.addEventListener("click", () => {
            crearJugadores[0] = {nombre: _nombre_jugador.value, simbolo: _o.value};
        });

        const comenzarContraComputadora = (() => {
            jugarIA.addEventListener("click", (e) => {
                primerJugador.textContent = crearJugadores[0].nombre + "   " + crearJugadores[0].simbolo;
                const simboloIA = crearJugadores[0].simbolo === "O" ? "X": "O";
                segundoJugador.textContent = "IA" + "   " + simboloIA; 
                crearJugadores("IA", simboloIA);
                e.preventDefault();
                elecciones.close();
            });
        })();

        return {comenzarContraComputadora};
    };

    const displayController = (jugador1, jugador2) => {
    };

    return { crearJugadores, moduloGameBoard, mostrarFormulario, displayController };
})();


const nuevoTablero = moduloDeJuego.moduloGameBoard.showBoard();
const obtenerFormulario = moduloDeJuego.mostrarFormulario();