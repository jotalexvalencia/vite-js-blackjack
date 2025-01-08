import _ from 'underscore';
import { crearDeck, pedirCarta, valorCarta, acumularPuntos, crearCarta, determinarGanador, turnoComputadora } from './usecases';

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

'use strict';
let deck = [];
const tipos = ['C', 'D', 'H', 'S'],
	especiales = ['A', 'J', 'Q', 'K'];

let puntosJugadores = [];

let contadorCartasJugador = 0, contadorCartasComputadora = 0;

let esPrimerTurnoJugador = true; // Variable para rastrear el primer turno del jugador

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir'),
	btnDetener = document.querySelector('#btnDetener'),
	btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugadores = document.querySelectorAll('.divCartas'),
	puntosHTML = document.querySelectorAll('small');

//? Esta función inicializa el juego
const inicializarJuego = (numJugadores = 2) => {
	mostrarCartasVolteadas(); // Mostrar cartas volteadas solo al iniciar
	deck = crearDeck(tipos, especiales);
	puntosJugadores = [];

	// Reiniciar la variable para el primer turno del jugador
	esPrimerTurnoJugador = true; // Reiniciar para el nuevo juego

	for (let i = 0; i < numJugadores; i++) {
		puntosJugadores.push(0);
	}

	contadorCartasJugador = 0;
	contadorCartasComputadora = 0;

	puntosHTML.forEach(small => small.innerText = 0);

	btnPedir.disabled = false;
	btnDetener.disabled = false;
};

const mostrarCartasVolteadas = () => {
	// Limpiar los contenedores de cartas solo al iniciar el juego
	divCartasJugadores.forEach(div => div.innerHTML = '');

	// Función para crear y agregar una carta volteada
	const agregarCartaVolteada = (div, src) => {
		const imgCarta = document.createElement('img');
		imgCarta.src = src;
		imgCarta.classList.add('carta');
		div.append(imgCarta);
	};

	// Agregar cartas volteadas para el jugador y la computadora
	agregarCartaVolteada(divCartasJugadores[0], "assets/cartas/grey_back.png");
	agregarCartaVolteada(divCartasJugadores[1], "assets/cartas/red_back.png");
};

// Eventos
btnPedir.addEventListener('click', () => {
	const carta = pedirCarta(deck);
	const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);

	if (esPrimerTurnoJugador) {
		// Reemplazar la carta volteada por la primera carta del jugador
		divCartasJugadores[0].innerHTML = ''; // Limpiar el contenedor del jugador
		crearCarta(carta, 0, divCartasJugadores); // Agregar la nueva carta
		esPrimerTurnoJugador = false; // Cambiar a false después de la primera carta
	} else {
		// Apilar la nueva carta
		crearCarta(carta, 0, divCartasJugadores);
	}

	if (puntosJugador > 21) {
		console.warn('Lo siento mucho, perdiste');
		btnPedir.disabled = true;
		btnDetener.disabled = true;

		turnoComputadora(puntosJugador, deck, puntosJugadores, divCartasJugadores, puntosHTML);
	} else if (puntosJugador === 21) {
		console.warn('21, genial!');
		btnPedir.disabled = true;
		btnDetener.disabled = true;
		turnoComputadora(puntosJugador, deck, puntosJugadores, divCartasJugadores, puntosHTML);
	}
});

btnDetener.addEventListener('click', () => {
	btnPedir.disabled = true;
	btnDetener.disabled = true;
	turnoComputadora(puntosJugadores[0], deck, puntosJugadores, divCartasJugadores, puntosHTML);
});

btnNuevo.addEventListener('click', () => {
	inicializarJuego();
});