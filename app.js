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


    const displayController = (() => {
        const mostrarFormulario = () => {
            elecciones.showModal();
    
            // Formulario
            const _nombre_jugador = document.getElementById("crear-jugador");
            const _x = document.getElementById("x");
            const _o = document.getElementById("o");
    
            // Eleccion de simbolo por defecto para el primer jugador
            crearJugadores[0] = {nombre: _nombre_jugador.value, simbolo: "X"};
    
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
                    crearJugadores[1] = {nombre: "IA", simbolo: simboloIA};
                    e.preventDefault();
                    elecciones.close();

                    let jugadorActual;
                    if (jugadorActual === undefined){
                        if(crearJugadores[0].simbolo === "O"){
                            jugadorActual = crearJugadores[1].simbolo;
                        }else{
                            jugadorActual = crearJugadores[0].simbolo;
                        }
                    }
                    
                    caja0.addEventListener("click", () => {
                        if(caja0.textContent === ""){
                            caja0.textContent = jugadorActual;
                            jugadorActual === "X" ? jugadorActual = "O" : jugadorActual = "X";
                        }
                    });
    
                    caja1.addEventListener("click", () => {
                        if(caja1.textContent === ""){
                            caja1.textContent = jugadorActual;
                            jugadorActual === "X" ? jugadorActual = "O" : jugadorActual = "X";
                        }
                    });

                    caja2.addEventListener("click", () => {
                        if(caja2.textContent === ""){
                            caja2.textContent = jugadorActual;
                            jugadorActual === "X" ? jugadorActual = "O" : jugadorActual = "X";
                        }
                    });
    
                    caja3.addEventListener("click", () => {
                        if(caja3.textContent === ""){
                            caja3.textContent = jugadorActual;
                            jugadorActual === "X" ? jugadorActual = "O" : jugadorActual = "X";
                        }
                    });

                    caja0.addEventListener("click", () => {
                        if(caja0.textContent === ""){
                            caja0.textContent = jugadorActual;
                            jugadorActual === "X" ? jugadorActual = "O" : jugadorActual = "X";
                        }
                    });
    
                    caja4.addEventListener("click", () => {
                        if(caja4.textContent === ""){
                            caja4.textContent = jugadorActual;
                            jugadorActual === "X" ? jugadorActual = "O" : jugadorActual = "X";
                        }
                    });

                    caja5.addEventListener("click", () => {
                        if(caja5.textContent === ""){
                            caja5.textContent = jugadorActual;
                            jugadorActual === "X" ? jugadorActual = "O" : jugadorActual = "X";
                        }
                    });
    
                    caja6.addEventListener("click", () => {
                        if(caja6.textContent === ""){
                            caja6.textContent = jugadorActual;
                            jugadorActual === "X" ? jugadorActual = "O" : jugadorActual = "X";
                        }
                    });

                    caja7.addEventListener("click", () => {
                        if(caja7.textContent === ""){
                            caja7.textContent = jugadorActual;
                            jugadorActual === "X" ? jugadorActual = "O" : jugadorActual = "X";
                        }
                    });
    
                    caja8.addEventListener("click", () => {
                        if(caja8.textContent === ""){
                            caja8.textContent = jugadorActual;
                            jugadorActual === "X" ? jugadorActual = "O" : jugadorActual = "X";
                        }
                    });
                });
                
                return moduloGameBoard.showBoard;
            })();
    
            return {comenzarContraComputadora};
        };
    
        return  {mostrarFormulario};
    })();

    return { crearJugadores, moduloGameBoard, displayController };
})();


const nuevoTablero = moduloDeJuego.moduloGameBoard.showBoard();
const jugar = moduloDeJuego.displayController.mostrarFormulario();