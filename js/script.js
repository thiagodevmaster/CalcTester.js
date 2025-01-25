import {
    calcularExpressao
} from './modules/calculadora.js';
import { appendToDisplay, clearDisplay, backspace, calculate } from './modules/calculadora-ui.js';

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');

    // Mapeamento das teclas do teclado para as ações da calculadora
    const keyMap = {
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '+': '+',
        '-': '-',
        '*': '*',
        '/': '/',
        '.': '.',
        'Enter': '=',
        '=': '=',
        'Backspace': 'backspace',
        'Escape': 'clear',
        'c': 'clear',
        'C': 'clear'
    };

    // Captura de eventos do teclado
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        const action = keyMap[key];

        if (action) {
            event.preventDefault();
            if (action === '=') {
                calculate(display, calcularExpressao);
            } else if (action === 'clear') {
                clearDisplay(display);
            } else if (action === 'backspace') {
                backspace(display);
            } else {
                appendToDisplay(display, action);
            }
        }
    });

    // Event listeners para os botões da calculadora
    document.querySelectorAll('.buttons button').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            if (value === '=') {
                calculate(display, calcularExpressao);
            } else if (value === 'C') {
                clearDisplay(display);
            } else {
                appendToDisplay(display, value);
            }
        });
    });
});