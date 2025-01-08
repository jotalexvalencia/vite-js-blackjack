/**
 * Crea una carta en el DOM
 * @param {String} carta - Carta obtenida
 * @param {Number} turno - Índice del jugador (0 = jugador, 1 = computadora)
 * @param {NodeListOf<HTMLElement>} divCartasJugadores - Elementos HTML donde se muestran las cartas
 */
export const crearCarta = (carta, turno, divCartasJugadores) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    // No limpiar el contenedor, solo agregar la nueva carta
    divCartasJugadores[turno].append(imgCarta);
};