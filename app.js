// Crea modulo de juego con fábrica de jugadores, un módulo de tablero y control de juego. 
const moduloDeJuego = (() => {
    let jugadorNuevo = {};
    const crearJugadores = (function (nombre, simbolo) {
        return jugadorNuevo = {nombre, simbolo}
    });

    const moduloGameBoard = (() => {
        const _Gameboard =[
            ["X", "O", "X"],
            ["O", "X", "O"],
            ["X", "O", "X"]
            ];
        
        // Variables de Tablero.
        const _caja0 = document.getElementById("0");
        const _caja1 = document.getElementById("1");
        const _caja2 = document.getElementById("2");
        const _caja3 = document.getElementById("3");
        const _caja4 = document.getElementById("4");
        const _caja5 = document.getElementById("5");
        const _caja6 = document.getElementById("6");
        const _caja7 = document.getElementById("7");
        const _caja8 = document.getElementById("8");
        
        const _getGameBoard = () => {
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    if(i == 0 && j == 0){
                        _caja0.textContent = _Gameboard[i][j];
                    }else if (i == 0 && j == 1){
                        _caja1.textContent = _Gameboard[i][j];
                    }else if (i == 0 && j == 2){
                        _caja2.textContent = _Gameboard[i][j];
                    }else if (i == 1 && j == 0){
                        _caja3.textContent = _Gameboard[i][j];
                    }else if (i == 1 && j == 1){
                        _caja4.textContent = _Gameboard[i][j];
                    }else if (i == 1 && j == 2){
                        _caja5.textContent = _Gameboard[i][j];
                    }else if (i == 2 && j == 0){
                        _caja6.textContent = _Gameboard[i][j];
                    }else if (i == 2 && j == 1){
                        _caja7.textContent = _Gameboard[i][j];
                    }else if (i == 2 && j == 2){
                        _caja8.textContent = _Gameboard[i][j];
                    }
                }
            }
        };

        const showBoard = () => { 
            _getGameBoard();
        };

        return {showBoard};
    })();
    
    const displayController = (function () {

    })(); 

    return {crearJugadores, moduloGameBoard};
})();

moduloDeJuego.moduloGameBoard.showBoard();