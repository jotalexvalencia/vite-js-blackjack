import { valorCarta } from './valor-carta';

/**
 * Acumula los puntos de un jugador
 * @param {String} carta - Carta obtenida
 * @param {Number} turno - Índice del jugador (0 = jugador, 1 = computadora)
 * @param {Array<Number>} puntosJugadores - Array con los puntos de los jugadores
 * @param {NodeListOf<HTMLElement>} puntosHTML - Elementos HTML para mostrar los puntos
 * @returns {Number} - Puntos acumulados del jugador
 */
export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) => {
    puntosJugadores[turno] += valorCarta(carta); // Aquí se usa valorCarta
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
};