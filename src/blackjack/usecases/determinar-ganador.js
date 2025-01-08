/**
 * Determina el ganador del juego
 * @param {Array<Number>} puntosJugadores - Array con los puntos de los jugadores
 */
export const determinarGanador = (puntosJugadores) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        if (puntosMinimos > 21) {
            alert('Computadora gana 💻');
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana 😂');
        } else if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana 😒');
        } else if (puntosComputadora === 21) {
            alert('Computadora gana 💻');
        } else if (puntosMinimos === 21) {
            alert('Jugador Gana 😂');
        } else {
            const ganador = puntosComputadora > puntosMinimos ? 'Computadora gana 💻' : 'Jugador Gana 😂';
            alert(ganador);
        }
    }, 100);
};