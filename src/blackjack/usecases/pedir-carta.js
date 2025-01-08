/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} deck - Arreglo de strings que representa las cartas.
 * @returns {string} - La carta seleccionada.
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck(baraja)';
    }

    return deck.pop();
}