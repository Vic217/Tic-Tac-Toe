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

            // Nombre y simbolo de primer jugador por defecto
            crearJugadores[0] = { nombre: "", simbolo: "X" };

            // Formulario
            const _nombre_jugador = document.getElementById("crear-jugador");
            const _x = document.getElementById("x");
            const _o = document.getElementById("o");

            _nombre_jugador.addEventListener("input", () => {
                crearJugadores[0] = { nombre: _nombre_jugador.value, simbolo: "X" };
            });

            _x.addEventListener("click", () => {
                crearJugadores[0] = { nombre: _nombre_jugador.value, simbolo: _x.value };
            });

            _o.addEventListener("click", () => {
                crearJugadores[0] = { nombre: _nombre_jugador.value, simbolo: _o.value };
            });

            const comenzarContraComputadora = (() => {

                let juegoTerminado = false;

                jugarIA.addEventListener("click", (e) => {
                    primerJugador.textContent = crearJugadores[0].nombre + "   " + crearJugadores[0].simbolo;
                    const simboloIA = crearJugadores[0].simbolo === "O" ? "X" : "O";
                    segundoJugador.textContent = "IA" + "   " + simboloIA;
                    crearJugadores[1] = { nombre: "IA", simbolo: simboloIA };
                    e.preventDefault();
                    elecciones.close();

                    if (crearJugadores[0].simbolo === "X") {
                        eligeHumano();
                    } else if (crearJugadores[1].simbolo === "X") {
                        eligeIA();
                    }

                    function obtenerGanador() {
                        const mostrarGanador = document.getElementById("mostrar_ganador");
                        
                        if (caja0.textContent === caja1.textContent && caja1.textContent === caja2.textContent && caja0.textContent !== "") {
                            juegoTerminado = true;
                            const ganador = () => {
                                mostrarGanador.showModal();
                                const gana = document.getElementById("ganador");
                                if (caja0.textContent === crearJugadores[0].simbolo) {
                                    gana.textContent = `Ganó ${crearJugadores[0].nombre}`;
                                } else {
                                    gana.textContent = `Ganó la ${crearJugadores[1].nombre}`;
                                }
                            }
                            return ganador();
                        } else if (caja0.textContent === caja3.textContent && caja3.textContent === caja6.textContent && caja0.textContent !== "") {
                            juegoTerminado = true;
                            const ganador = () => {
                                mostrarGanador.showModal();
                                const gana = document.getElementById("ganador");
                                if (caja0.textContent === crearJugadores[0].simbolo) {
                                    gana.textContent = `Ganó ${crearJugadores[0].nombre}`;
                                } else {
                                    gana.textContent = `Ganó la ${crearJugadores[1].nombre}`;
                                }
                            }
                            return ganador();
                        } else if (caja1.textContent === caja4.textContent && caja4.textContent === caja7.textContent && caja1.textContent !== "") {
                            juegoTerminado = true;
                            const ganador = () => {
                                mostrarGanador.showModal();
                                const gana = document.getElementById("ganador");
                                if (caja1.textContent === crearJugadores[0].simbolo) {
                                    gana.textContent = `Ganó ${crearJugadores[0].nombre}`;
                                } else {
                                    gana.textContent = `Ganó la ${crearJugadores[1].nombre}`;
                                }
                            }
                            return ganador();
                        } else if (caja2.textContent === caja5.textContent && caja5.textContent === caja8.textContent && caja2.textContent !== "") {
                            juegoTerminado = true;
                            const ganador = () => {
                                mostrarGanador.showModal();
                                const gana = document.getElementById("ganador");
                                if (caja2.textContent === crearJugadores[0].simbolo) {
                                    gana.textContent = `Ganó ${crearJugadores[0].nombre}`;
                                } else {
                                    gana.textContent = `Ganó la ${crearJugadores[1].nombre}`;
                                }
                            }
                            return ganador();
                        } else if (caja3.textContent === caja4.textContent && caja5.textContent === caja4.textContent && caja3.textContent !== "") {
                            juegoTerminado = true;
                            const ganador = () => {
                                mostrarGanador.showModal();
                                const gana = document.getElementById("ganador");
                                if (caja3.textContent === crearJugadores[0].simbolo) {
                                    gana.textContent = `Ganó ${crearJugadores[0].nombre}`;
                                } else {
                                    gana.textContent = `Ganó la ${crearJugadores[1].nombre}`;
                                }
                            }
                            return ganador();
                        } else if (caja6.textContent === caja7.textContent && caja6.textContent === caja8.textContent && caja6.textContent !== "") {
                            juegoTerminado = true;
                            const ganador = () => {
                                mostrarGanador.showModal();
                                const gana = document.getElementById("ganador");
                                if (caja6.textContent === crearJugadores[0].simbolo) {
                                    gana.textContent = `Ganó ${crearJugadores[0].nombre}`;
                                } else {
                                    gana.textContent = `Ganó la ${crearJugadores[1].nombre}`;
                                }
                            }
                            return ganador();
                        } else if (caja0.textContent === caja4.textContent && caja4.textContent === caja8.textContent && caja0.textContent !== "") {
                            juegoTerminado = true;
                            const ganador = () => {
                                mostrarGanador.showModal();
                                const gana = document.getElementById("ganador");
                                if (caja0.textContent === crearJugadores[0].simbolo) {
                                    gana.textContent = `Ganó ${crearJugadores[0].nombre}`;
                                } else {
                                    gana.textContent = `Ganó la ${crearJugadores[1].nombre}`;
                                }
                            }
                            return ganador();
                        } else if (caja2.textContent === caja4.textContent && caja4.textContent === caja6.textContent && caja2.textContent !== "") {
                            juegoTerminado = true;
                            const ganador = () => {
                                mostrarGanador.showModal();
                                const gana = document.getElementById("ganador");
                                if (caja2.textContent === crearJugadores[0].simbolo) {
                                    gana.textContent = `Ganó ${crearJugadores[0].nombre}`;
                                } else {
                                    gana.textContent = `Ganó la ${crearJugadores[1].nombre}`;
                                }
                            }
                            return ganador();
                        } else if ([caja0, caja1, caja2, caja3, caja4, caja5, caja6, caja7, caja8].every(caja => caja.textContent !== "")) {
                            const empate = () => {
                                mostrarGanador.showModal();
                                const gana = document.getElementById("ganador");
                                gana.textContent = "Ha sido un empate";
                            }
                            return empate();
                        } else {
                            return;
                        }
                    }

                    function eligeHumano() {

                        caja0.addEventListener("click", () => {
                            if (caja0.textContent === "") {
                                caja0.textContent = crearJugadores[0].simbolo;
                                caja0.style.color = "rgb(252, 166, 6)";
                                obtenerGanador();
                                eligeIA();
                            }
                        });

                        caja1.addEventListener("click", () => {
                            if (caja1.textContent === "") {
                                caja1.textContent = crearJugadores[0].simbolo;
                                caja1.style.color = "rgb(252, 166, 6)";
                                obtenerGanador();
                                eligeIA();
                            }
                        });

                        caja2.addEventListener("click", () => {
                            if (caja2.textContent === "") {
                                caja2.textContent = crearJugadores[0].simbolo;
                                caja2.style.color = "rgb(252, 166, 6)";
                                obtenerGanador();
                                eligeIA();
                            }
                        });

                        caja3.addEventListener("click", () => {
                            if (caja3.textContent === "") {
                                caja3.textContent = crearJugadores[0].simbolo;
                                caja3.style.color = "rgb(252, 166, 6)";
                                obtenerGanador();
                                eligeIA();
                            }
                        });

                        caja4.addEventListener("click", () => {
                            if (caja4.textContent === "") {
                                caja4.textContent = crearJugadores[0].simbolo;
                                caja4.style.color = "rgb(252, 166, 6)";
                                obtenerGanador();
                                eligeIA();
                            }
                        });

                        caja5.addEventListener("click", () => {
                            if (caja5.textContent === "") {
                                caja5.textContent = crearJugadores[0].simbolo;
                                caja5.style.color = "rgb(252, 166, 6)";
                                obtenerGanador();
                                eligeIA();
                            }
                        });

                        caja6.addEventListener("click", () => {
                            if (caja6.textContent === "") {
                                caja6.textContent = crearJugadores[0].simbolo;
                                caja6.style.color = "rgb(252, 166, 6)";
                                obtenerGanador();
                                eligeIA();
                            }
                        });

                        caja7.addEventListener("click", () => {
                            if (caja7.textContent === "") {
                                caja7.textContent = crearJugadores[0].simbolo;
                                caja7.style.color = "rgb(252, 166, 6)";
                                obtenerGanador();
                                eligeIA();
                            }
                        });

                        caja8.addEventListener("click", () => {
                            if (caja8.textContent === "") {
                                caja8.textContent = crearJugadores[0].simbolo;
                                caja8.style.color = "rgb(252, 166, 6)";
                                obtenerGanador();
                                eligeIA();
                            }
                        });

                        return moduloGameBoard.showBoard;
                    }

                    function eligeIA() {
                        const tablero = [
                            caja0.textContent, caja1.textContent, caja2.textContent,
                            caja3.textContent, caja4.textContent, caja5.textContent,
                            caja6.textContent, caja7.textContent, caja8.textContent
                        ];

                        // Función para verificar si alguien gana el juego
                        function alguienGana(marcaActual) {
                            if (
                                (tablero[0] === tablero[1] && tablero[1] === tablero[2] && tablero[0] === marcaActual) ||
                                (tablero[0] === tablero[3] && tablero[3] === tablero[6] && tablero[0] === marcaActual) ||
                                (tablero[1] === tablero[4] && tablero[4] === tablero[7] && tablero[1] === marcaActual) ||
                                (tablero[2] === tablero[5] && tablero[5] === tablero[8] && tablero[2] === marcaActual) ||
                                (tablero[3] === tablero[4] && tablero[4] === tablero[5] && tablero[3] === marcaActual) ||
                                (tablero[6] === tablero[7] && tablero[7] === tablero[8] && tablero[6] === marcaActual) ||
                                (tablero[0] === tablero[4] && tablero[4] === tablero[8] && tablero[0] === marcaActual) ||
                                (tablero[2] === tablero[4] && tablero[4] === tablero[6] && tablero[2] === marcaActual)
                            ) {
                                return true;
                            } else {
                                return false;
                            }
                        }
                    
                        // Función para verificar si una casilla está vacía
                        function casillaVacia(indice) {
                            return tablero[indice] === "";
                        }
                        
                        if(juegoTerminado){
                            return;
                        }
                    
                        // Buscar combinaciones ganadoras del humano y bloquearlas
                        for (let i = 0; i < 9; i++) {
                            if (casillaVacia(i)) {
                                tablero[i] = crearJugadores[0].simbolo;
                                if (alguienGana(crearJugadores[0].simbolo)) {
                                    // Si el humano gana en esta casilla, bloquearla
                                    const cajaElegida = document.getElementById(i.toString());
                                    cajaElegida.textContent = crearJugadores[1].simbolo;
                                    cajaElegida.style.color = "#FFF3EB";
                                    tablero[i] = crearJugadores[1].simbolo;
                                    obtenerGanador();
                                    return;
                                }
                                tablero[i] = ""; // Deshacer el movimiento
                            }
                        }
                    
                        // Si no se puede bloquear una combinación ganadora, elegir una casilla aleatoria
                        let casillasVacias = [];
                        for (let i = 0; i < 9; i++) {
                            if (casillaVacia(i)) {
                                casillasVacias.push(i);
                            }
                        }
                    
                        if (casillasVacias.length > 0) {
                            const indiceAleatorio = Math.floor(Math.random() * casillasVacias.length);
                            const cajaElegida = document.getElementById(casillasVacias[indiceAleatorio].toString());
                            cajaElegida.textContent = crearJugadores[1].simbolo;
                            cajaElegida.style.color = "#FFF3EB";
                            obtenerGanador();
                        }
                    }
                                       
                    eligeHumano();
                });

                return moduloGameBoard.showBoard;
            })();
            return { comenzarContraComputadora };
        };

        return { mostrarFormulario };
    })();

    return { crearJugadores, moduloGameBoard, displayController };
})();


const nuevoTablero = moduloDeJuego.moduloGameBoard.showBoard();
const jugar = moduloDeJuego.displayController.mostrarFormulario();