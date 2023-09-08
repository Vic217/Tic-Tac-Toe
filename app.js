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

        // Eleccion por defecto para el primer jugador
        let elegir_letra = "X";

        _x.addEventListener("click", () => {
            elegir_letra = _x.value;
        });

        _o.addEventListener("click", () => {
            elegir_letra = _o.value;
        });
    };

    const displayController = (jugador1, jugador2) => {
    };

    return { crearJugadores, moduloGameBoard, mostrarFormulario, displayController };
})();

const obtenerFormulario = moduloDeJuego.mostrarFormulario();
const nuevoTablero = moduloDeJuego.moduloGameBoard.showBoard();