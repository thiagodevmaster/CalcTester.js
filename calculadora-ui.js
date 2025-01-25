export function appendToDisplay(display, value) {
    display.value += value.trim();
}

export function clearDisplay(display) {
    display.value = '';
}

export function backspace(display) {
    display.value = display.value.slice(0, -1);
}

export function calculate(display, calcularExpressao) {
    try {
        const expressao = display.value;
        const resultado = calcularExpressao(expressao);
        display.value = resultado;
    } catch (error) {
        display.value = 'Erro';
    }
}