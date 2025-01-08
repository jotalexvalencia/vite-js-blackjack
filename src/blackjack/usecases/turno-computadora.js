import { pedirCarta } from './pedir-carta';
import { acumularPuntos } from './acumular-puntos';
import { crearCarta } from './crear-carta';
import { determinarGanador } from './determinar-ganador';

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos - Puntos mínimos que la computadora debe superar
 * @param {Array<String>} deck - Baraja de cartas
 * @param {Array<Number>} puntosJugadores - Puntos acumulados por los jugadores
 * @param {NodeListOf<HTMLElement>} divCartasJugadores - Elementos HTML donde se muestran las cartas
 * @param {NodeListOf<HTMLElement>} puntosHTML - Elementos HTML para mostrar los puntos
 */
export const turnoComputadora = (puntosMinimos, deck, puntosJugadores, divCartasJugadores, puntosHTML) => {
    let puntosComputadora = 0;

    // Limpiar el contenedor de cartas de la computadora antes de comenzar
    divCartasJugadores[1].innerHTML = ''; // Limpiar el contenedor de la computadora


    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML);
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores);
};